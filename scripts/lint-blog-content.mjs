import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "_posts");
const allowedCanonicalHosts = new Set(["chaoscha.in", "www.chaoscha.in"]);
const allowedImageHosts = new Set(["chaoscha.in", "www.chaoscha.in"]);
const allowedMediumHosts = new Set(["medium.com", "www.medium.com", "chaoschain.medium.com"]);
const allowedFrameHosts = new Set(["www.youtube.com", "player.vimeo.com", "www.loom.com"]);

const riskyPatterns = [
  { pattern: /<script\b/i, message: "script tags are not allowed" },
  { pattern: /\son[A-Z][A-Za-z]*\s*=/, message: "JSX event handlers are not allowed" },
  { pattern: /javascript\s*:/i, message: "javascript: URLs are not allowed" },
  { pattern: /dangerouslySetInnerHTML\s*=/, message: "dangerouslySetInnerHTML is not allowed" },
];

function fail(message) {
  throw new Error(message);
}

function validateHttpsUrl(value, field, fileName, allowedHosts) {
  if (value === undefined) {
    return;
  }

  if (typeof value !== "string" || value.trim() === "") {
    fail(`${fileName}: "${field}" must be a non-empty string`);
  }

  let url;

  try {
    url = new URL(value);
  } catch {
    fail(`${fileName}: "${field}" must be a valid absolute URL`);
  }

  if (url.protocol !== "https:" || !allowedHosts.has(url.hostname)) {
    fail(`${fileName}: "${field}" must use an approved HTTPS host`);
  }
}

function validateImageUrl(value, fileName) {
  if (value === undefined) {
    return;
  }

  if (typeof value !== "string" || value.trim() === "") {
    fail(`${fileName}: "image" must be a non-empty string`);
  }

  if (value.startsWith("/blog-images/")) {
    return;
  }

  let url;

  try {
    url = new URL(value);
  } catch {
    fail(`${fileName}: "image" must be /blog-images/... or a valid absolute URL`);
  }

  if (url.protocol !== "https:" || !allowedImageHosts.has(url.hostname)) {
    fail(`${fileName}: "image" must use /blog-images/... or an approved HTTPS host`);
  }
}

function validateIframes(content, fileName) {
  for (const match of content.matchAll(/<iframe\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi)) {
    let url;

    try {
      url = new URL(match[1]);
    } catch {
      fail(`${fileName}: iframe src must be a valid absolute URL`);
    }

    if (url.protocol !== "https:" || !allowedFrameHosts.has(url.hostname)) {
      fail(`${fileName}: iframe src must use an approved HTTPS host`);
    }
  }
}

function validateContent(content, fileName) {
  for (const { pattern, message } of riskyPatterns) {
    if (pattern.test(content)) {
      fail(`${fileName}: ${message}`);
    }
  }

  validateIframes(content, fileName);
}

function validatePost(fileName) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  validateHttpsUrl(data.canonicalUrl, "canonicalUrl", fileName, allowedCanonicalHosts);
  validateHttpsUrl(data.mediumUrl, "mediumUrl", fileName, allowedMediumHosts);
  validateImageUrl(data.image, fileName);
  validateContent(content, fileName);
}

if (!fs.existsSync(postsDirectory)) {
  process.exit(0);
}

const postFiles = fs
  .readdirSync(postsDirectory)
  .filter((fileName) => /\.(mdx|md)$/.test(fileName));

for (const fileName of postFiles) {
  validatePost(fileName);
}

console.log(`Blog content security lint passed for ${postFiles.length} post(s).`);
