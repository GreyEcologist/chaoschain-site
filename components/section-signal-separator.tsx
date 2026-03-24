"use client";

import { motion, useReducedMotion } from "framer-motion";

type SectionSignalSeparatorProps = {
  className?: string;
};

export default function SectionSignalSeparator({ className }: SectionSignalSeparatorProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`relative mx-auto w-full px-6 py-10 md:px-10 md:py-12 xl:px-14 ${className ?? ""}`}>
      <div className="relative mx-auto h-4 w-3/4">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-[linear-gradient(90deg,rgba(24,24,27,0.18),rgba(63,63,70,0.5),rgba(24,24,27,0.18))]" />
        <div className="absolute inset-x-0 top-[calc(50%+4px)] h-px bg-[linear-gradient(90deg,rgba(24,24,27,0.04),rgba(39,39,42,0.1),rgba(24,24,27,0.04))]" />

        <motion.div
          className="absolute inset-y-0 left-0 w-[16%]"
          animate={
            reduceMotion
              ? { x: "42%", opacity: 0.7 }
              : {
                  x: ["-18%", "118%"],
                  opacity: [0, 0.95, 0],
                }
          }
          transition={{
            duration: reduceMotion ? 0 : 4.8,
            repeat: reduceMotion ? 0 : Number.POSITIVE_INFINITY,
            ease: "linear",
            repeatDelay: reduceMotion ? 0 : 0.45,
          }}
        >
          <div className="relative h-full w-full">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-[linear-gradient(90deg,rgba(34,211,238,0),rgba(103,232,249,0.88),rgba(45,212,191,0.92),rgba(34,211,238,0))]" />
            <div className="absolute inset-x-[8%] top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,rgba(34,211,238,0),rgba(103,232,249,0.42),rgba(45,212,191,0.5),rgba(34,211,238,0))] blur-[3px]" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
