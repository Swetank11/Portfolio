"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";

export const FocusReveal = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"] 
  });

  // Map progress to blur: Center is 0.5
  const blurValue = useTransform(scrollYProgress, [0, 0.35, 0.5, 0.65, 1], [6, 0, 0, 0, 6]);
  const filter = useMotionTemplate`blur(${blurValue}px)`;
  
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.5, 0.65, 1], [0.3, 1, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.35, 0.5, 0.65, 1], [0.95, 1, 1, 1, 0.95]);

  return (
    <motion.div
      ref={ref}
      style={{ filter, opacity, scale }}
      className={`${className} transform-gpu will-change-transform`}
    >
      {children}
    </motion.div>
  );
}

export function FocusCarouselItem({ 
  children, 
  className = "", 
  carouselRef 
}: { 
  children: React.ReactNode, 
  className?: string, 
  carouselRef: React.RefObject<HTMLElement | null> 
}) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollXProgress } = useScroll({
    container: carouselRef,
    target: ref,
    axis: "x",
    offset: ["start end", "end start"]
  });

  const blurValue = useTransform(scrollXProgress, [0, 0.4, 0.5, 0.6, 1], [12, 0, 0, 0, 12]);
  const filter = useTransform(blurValue, (v) => `blur(${v}px)`);
  const opacity = useTransform(scrollXProgress, [0, 0.4, 0.5, 0.6, 1], [0.3, 1, 1, 1, 0.3]);
  const scale = useTransform(scrollXProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <motion.div
      ref={ref}
      style={{ filter, opacity, scale }}
      whileHover={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </motion.div>
  );
}
