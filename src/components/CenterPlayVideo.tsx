"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

export const CenterPlayVideo = ({ src, className }: { src: string, className?: string }) => {
  const ref = useRef<HTMLVideoElement>(null);
  
  // The video is considered "in view" only when it intersects the middle 20% of the screen.
  // -40% margin on top and bottom creates a tight trigger band directly in the center.
  // Relaxed from -40% to -15% to make it easier to trigger the story board
  const isInView = useInView(ref, { margin: "-15% 0px -15% 0px", once: false });
  const [canPlayAudio, setCanPlayAudio] = useState(false);

  // Modern browsers strictly block audio autoplay until a physical interaction occurs.
  useEffect(() => {
    const handleInteraction = () => setCanPlayAudio(true);
    document.addEventListener("click", handleInteraction, { once: true });
    document.addEventListener("keydown", handleInteraction, { once: true });
    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("keydown", handleInteraction);
    };
  }, []);

  useEffect(() => {
    if (!ref.current) return;

    if (isInView) {
      if (canPlayAudio) {
        ref.current.muted = false;
      } else {
        ref.current.muted = true;
      }

      // We explicitly play the video since autoPlay is disabled to ensure programmatic control
      const playPromise = ref.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If unmuted playback is rejected by browser policy, quietly fall back to muted cinematic playback
          if (ref.current) {
             ref.current.muted = true;
             ref.current.play().catch(() => {});
          }
        });
      }
    } else {
      // Intentionally pause and mute the video when it leaves the exact center cinematic frame
      ref.current.pause();
      ref.current.muted = true;
    }
  }, [isInView, canPlayAudio]);

  return (
    <motion.video
      ref={ref}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
      loop
      playsInline
      autoPlay
      muted // Default to muted for initial load bypassing
      controls
      className={className}
      src={src}
    />
  );
};
