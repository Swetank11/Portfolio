"use client";
import React from "react";
import { motion } from "framer-motion";

export function ScrollReveal({ 
  children, 
  className = "", 
  as = "section" 
}: { 
  children: React.ReactNode, 
  className?: string,
  as?: React.ElementType | string
}) {
  const Component = motion[as as keyof typeof motion] || motion.section;

  return (
    <Component
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}
