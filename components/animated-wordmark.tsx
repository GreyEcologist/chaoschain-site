"use client";

import { useEffect, useRef, useState } from "react";

const WORD = "CHAOSCHAIN";
const LETTERS = WORD.split("");
const SIGNALS = [0, 1, 2];

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function AnimatedWordmark() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const activeResetRef = useRef<number | null>(null);

  useEffect(() => {
    let isCancelled = false;
    let loopTimer: number | undefined;

    const schedulePulse = () => {
      if (isCancelled) return;
      const nextLetter = randomInt(0, LETTERS.length - 1);
      setActiveIndex(nextLetter);

      if (activeResetRef.current) window.clearTimeout(activeResetRef.current);
      activeResetRef.current = window.setTimeout(() => setActiveIndex(null), isHovered ? 520 : 420);

      const nextDelay = isHovered ? randomInt(1200, 2100) : randomInt(1700, 3000);
      loopTimer = window.setTimeout(schedulePulse, nextDelay);
    };

    loopTimer = window.setTimeout(schedulePulse, randomInt(1200, 2100));

    return () => {
      isCancelled = true;
      if (loopTimer) window.clearTimeout(loopTimer);
      if (activeResetRef.current) window.clearTimeout(activeResetRef.current);
    };
  }, [isHovered]);

  return (
    <div
      className="brand-wordmark-wrap"
      aria-label={WORD}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="brand-signal-layer" aria-hidden="true">
        {SIGNALS.map((signal) => (
          <span
            key={`signal-${signal}`}
            className="brand-signal-pulse"
            style={{ animationDelay: `${signal * 1.6}s` }}
          />
        ))}
      </span>

      <span className="brand-wordmark brand-wordmark-base" aria-hidden="true">
        {LETTERS.map((letter, index) => (
          <span
            key={`${letter}-${index}`}
            className={`brand-letter ${activeIndex === index ? "brand-letter-active" : ""}`}
          >
            {letter}
          </span>
        ))}
      </span>

      <span className="brand-wordmark brand-wordmark-shimmer" aria-hidden="true">
        {LETTERS.map((letter, index) => (
          <span key={`shimmer-${letter}-${index}`} className="brand-letter">
            {letter}
          </span>
        ))}
      </span>
    </div>
  );
}
