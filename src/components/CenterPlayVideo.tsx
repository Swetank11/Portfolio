"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

/**
 * CenterPlayVideo - A cinematic video component optimized for high-performance hosting.
 * Supports local paths, Git LFS, or External URLs (Cloudinary/Vercel Blob).
 */
export const CenterPlayVideo = ({ src, className, poster }: { src: string, className?: string, poster?: string }) => {
  const ref = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { margin: "-15% 0px -15% 0px", once: false });
  const [canPlayAudio, setCanPlayAudio] = useState(false);

  useEffect(() => {
    const handleInteraction = () => setCanPlayAudio(true);
    document.addEventListener("click", handleInteraction, { once: true });
    return () => document.removeEventListener("click", handleInteraction);
  }, []);

  useEffect(() => {
    if (!ref.current) return;

    if (isInView) {
      ref.current.muted = !canPlayAudio;
      const playPromise = ref.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          if (ref.current) {
            ref.current.muted = true;
            ref.current.play().catch(() => {});
          }
        });
      }
    } else {
      ref.current.pause();
      ref.current.muted = true;
    }
  }, [isInView, canPlayAudio]);

  return (
    <motion.video
      ref={ref}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
      loop
      playsInline
      autoPlay
      muted
      controls
      poster={poster}
      className={`${className} bg-black/20`}
      src={src}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </motion.video>
  );
};
