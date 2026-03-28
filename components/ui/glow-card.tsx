"use client";
import React, { useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

const beforeAfterStyles = `
  [data-glow]::before,
  [data-glow]::after {
    pointer-events: none;
    content: "";
    position: absolute;
    inset: calc(var(--border-size) * -1);
    border: var(--border-size) solid transparent;
    border-radius: calc(var(--radius) * 1px);
    background-attachment: fixed;
    background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
    background-repeat: no-repeat;
    background-position: 50% 50%;
    mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
    mask-clip: padding-box, border-box;
    mask-composite: intersect;
  }

  [data-glow]::before {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
      calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
      hsl(var(--hue, 285) 100% 55% / 1),
      hsl(var(--hue-secondary, 260) 100% 45% / 0.6),
      transparent 100%
    );
    filter: brightness(2.5) saturate(1.8);
  }

  [data-glow]::after {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
      calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
      hsl(var(--hue, 285) 100% 65% / 0.5),
      transparent 100%
    );
  }

  [data-glow] [data-glow] {
    position: absolute;
    inset: 0;
    will-change: filter;
    opacity: var(--outer, 1);
    border-radius: calc(var(--radius) * 1px);
    border-width: calc(var(--border-size) * 20);
    filter: blur(calc(var(--border-size) * 10));
    background: none;
    pointer-events: none;
    border: none;
  }

  [data-glow] > [data-glow]::before {
    inset: -10px;
    border-width: 10px;
  }
`;

export function GlowCard({ children, className }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncPointer = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      if (cardRef.current) {
        const xp = e.clientX / window.innerWidth;
        const hue = 320 - xp * 105;
        const hueSecondary = hue - 25;
        cardRef.current.style.setProperty("--x", e.clientX.toFixed(2));
        cardRef.current.style.setProperty("--y", e.clientY.toFixed(2));
        cardRef.current.style.setProperty("--hue", hue.toFixed(1));
        cardRef.current.style.setProperty("--hue-secondary", hueSecondary.toFixed(1));
      }
    };
    document.addEventListener("pointermove", syncPointer);
    return () => document.removeEventListener("pointermove", syncPointer);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: beforeAfterStyles }} />
      <div
        ref={cardRef}
        data-glow
        className={cn("relative backdrop-blur-[5px]", className)}
        style={
          {
            "--radius": "16",
            borderRadius: "calc(var(--radius) * 1px)",
            "--border": "2",
            "--outer": "1",
            "--border-size": "calc(var(--border, 2) * 1px)",
            "--spotlight-size": "380px",
            backgroundImage: `radial-gradient(
              380px 380px at
              calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
              hsl(var(--hue, 285) 90% 50% / 0.12),
              hsl(var(--hue-secondary, 260) 100% 55% / 0.06),
              transparent
            )`,
            backgroundColor: "hsl(0 0% 60% / 0.08)",
            backgroundSize: "calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))",
            backgroundPosition: "50% 50%",
            backgroundAttachment: "fixed",
            border: "var(--border-size) solid hsl(270 50% 40% / 0.25)",
          } as React.CSSProperties
        }
      >
        <div data-glow />
        <div className="relative overflow-hidden rounded-[inherit]">
          {children}
        </div>
      </div>
    </>
  );
}
