import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  comment?: string;
  source?: string;
};

const resendApiKey = process.env.RESEND_API_KEY;
const sumeetEmail = process.env.SUMEET_EMAIL || "sumeet@chaoscha.in";
const contactFromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const comment = body.comment?.trim();
    const source = body.source?.trim();

    if (!name || !email || !comment) {
      return NextResponse.json({ error: "Please fill out all fields." }, { status: 400 });
    }

    if (!resendApiKey) {
      return NextResponse.json({ error: "Missing RESEND_API_KEY." }, { status: 500 });
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: contactFromEmail,
        to: [sumeetEmail],
        reply_to: email,
        subject: `ChaosChain contact form: ${name}`,
        text: [
          `Source: ${source || "Unknown"}`,
          `Name: ${name}`,
          `Email: ${email}`,
          "",
          "Comment:",
          comment,
        ].join("\n"),
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      return NextResponse.json(
        { error: `Resend request failed: ${errorText || resendResponse.statusText}` },
        { status: 502 },
      );
    }

    return NextResponse.json({ message: "Message sent successfully." });
  } catch {
    return NextResponse.json({ error: "Unable to send your message right now." }, { status: 500 });
  }
}
