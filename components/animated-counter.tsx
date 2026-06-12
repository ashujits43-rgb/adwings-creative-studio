"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform
} from "framer-motion";
import { useEffect, useRef } from "react";

type AnimatedCounterProps = {
  value: number;
  suffix: string;
  label: string;
};

export function AnimatedCounter({
  value,
  suffix,
  label
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    if (!inView) {
      return;
    }

    const controls = animate(count, value, {
      duration: 1.8,
      ease: "easeOut"
    });

    return () => controls.stop();
  }, [count, inView, value]);

  return (
    <div
      ref={ref}
      className="glass-panel rounded-[2rem] p-6 shadow-glow"
    >
      <div className="font-display text-4xl font-semibold text-white md:text-5xl">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </div>
      <p className="mt-2 text-sm uppercase tracking-[0.28em] text-slate-300">
        {label}
      </p>
    </div>
  );
}
