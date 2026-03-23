"use client";
import React, { useEffect, useRef } from "react";

export function WaterShadow() {
  const displacementOffsetRef = useRef<SVGFEOffsetElement>(null);
  const visualOffsetRef = useRef<SVGFETurbulenceElement>(null); // Type overridden to any or SVGFEOffsetElement below

  useEffect(() => {
    let frameId: number;
    // We use a continually increasing value to push the waves across the screen
    let offset = 0;

    const animate = () => {
      offset -= 0.6; // Speed and direction of the traveling waves
      
      if (displacementOffsetRef.current) {
        displacementOffsetRef.current.setAttribute("dy", `${offset}`);
      }
      if (visualOffsetRef.current) {
        visualOffsetRef.current.setAttribute("dy", `${offset}`);
      }
      
      frameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <svg width="0" height="0" className="absolute">
        
        {/* TEXT DISPLACEMENT FILTER */}
        <filter id="water-displacement" x="-50%" y="-100%" width="200%" height="300%">
          {/* baseFrequency="0.002 0.04" creates long horizontal stretched waves (transverse) */}
          <feTurbulence type="fractalNoise" baseFrequency="0.002 0.05" numOctaves="1" result="noise" />
          <feOffset ref={displacementOffsetRef as any} dx="0" dy="0" result="movedNoise" />
          <feDisplacementMap in="SourceGraphic" in2="movedNoise" scale="35" xChannelSelector="R" yChannelSelector="G" />
        </filter>

        {/* VISUAL WATER POOL FILTER (Highlights) */}
        <filter id="water-visual" x="-50%" y="-100%" width="200%" height="300%">
          <feTurbulence type="fractalNoise" baseFrequency="0.002 0.05" numOctaves="1" result="noise" />
          <feOffset ref={visualOffsetRef as any} dx="0" dy="0" result="movedNoise" />
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 4 0" in="movedNoise" result="coloredNoise" />
          <feSpecularLighting in="coloredNoise" surfaceScale="4" specularConstant="1.2" specularExponent="20" lightingColor="#ff5634" result="light">
            <feDistantLight azimuth="90" elevation="25" />
          </feSpecularLighting>
        </filter>
        
      </svg>

      {/* VISUAL WATER PLANE */}
      <div 
        className="absolute top-20 left-6 md:left-24 w-[120%] h-[400px] mix-blend-screen opacity-30 blur-[1px]"
        style={{ 
          filter: 'url(#water-visual)',
          transform: 'rotateX(55deg) skewX(-25deg)',
          transformOrigin: 'top left'
        }}
      >
        <div className="w-full h-full bg-white"></div>
      </div>

      {/* SHADOW TEXT */}
      <h1 
        className="font-headline text-[clamp(4rem,12vw,10rem)] leading-[0.85] uppercase tracking-tighter text-white opacity-20 absolute top-20 left-12 md:left-32 select-none origin-top blur-[3px]"
        style={{ 
          filter: 'url(#water-displacement)',
          transform: 'rotateX(55deg) skewX(-25deg)',
        }}
      >
        SWETANK<br/>SINHA
      </h1>
    </div>
  );
}
