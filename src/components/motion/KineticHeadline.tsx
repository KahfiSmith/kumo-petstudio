"use client";

import { useRef, useEffect } from "react";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";

interface KineticHeadlineProps {
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
  lines: Array<{
    text: string;
    highlight?: boolean;
    highlightClass?: string;
  }>;
  delay?: number;
  scrollTriggered?: boolean;
}

export function KineticHeadline({
  as: Component = "h2",
  className = "",
  lines,
  delay = 0,
  scrollTriggered = true,
}: KineticHeadlineProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const fullText = lines.map((l) => l.text).join(" ");

  useEffect(() => {
    if (!containerRef.current) return;
    if (prefersReducedMotion()) return;

    const { gsap } = getGsap();
    const el = containerRef.current;
    const words = el.querySelectorAll(".kinetic-word");

    if (words.length === 0) return;

    gsap.set(words, { yPercent: 110, opacity: 0 });

    const ctx = gsap.context(() => {
      if (scrollTriggered) {
        gsap.to(words, {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.04,
          ease: "power3.out",
          delay,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        });
      } else {
        gsap.to(words, {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.04,
          ease: "power3.out",
          delay,
        });
      }
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [lines, delay, scrollTriggered]);

  return (
    <Component
      ref={containerRef}
      className={className}
      aria-label={fullText}
    >
      {lines.map((line, lineIndex) => {
        const words = line.text.split(" ");
        return (
          <span key={lineIndex} className="block overflow-hidden py-1 leading-[0.98]">
            {words.map((word, wordIndex) => (
              <span
                key={wordIndex}
                className="inline-block overflow-hidden align-top mr-[0.25em] last:mr-0"
              >
                <span
                  className={`kinetic-word inline-block ${
                    line.highlight
                      ? line.highlightClass || "text-[#FF5C35]"
                      : ""
                  }`}
                  aria-hidden="true"
                >
                  {word}
                </span>
              </span>
            ))}
          </span>
        );
      })}
    </Component>
  );
}
