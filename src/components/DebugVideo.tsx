"use client";
import React from "react";

export const DebugVideo = ({ src, className }: { src: string, className?: string }) => {
  return (
    <div className={`relative ${className} border-2 border-red-500`}>
      <video
        src={src}
        controls
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-contain"
        onLoadStart={() => console.log(`Video loading started: ${src}`)}
        onLoadedMetadata={() => console.log(`Video metadata loaded: ${src}`)}
        onError={(e) => console.error(`Video load error: ${src}`, e)}
      >
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-2 left-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded">
        DEBUG: {src}
      </div>
    </div>
  );
};
