import React from "react";

interface BentoCardProps {
  title: string;
  category?: string;
  className?: string;
  image?: string;
}

export function BentoCard({ title, category, className = "", image }: BentoCardProps) {
  return (
    <div className={`group relative overflow-hidden rounded-3xl bg-surface-high border border-outline-ghost/10 flex flex-col justify-end p-8 transition-all duration-500 hover:bg-surface-highest hover:shadow-ambient hover:-translate-y-1 ${className}`}>
      {/* Background Image / Placeholder */}
      <div 
        className="absolute inset-0 z-0 bg-surface-low bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-50"
        style={image ? { backgroundImage: `url(${image})` } : {}}
      />
      {/* Scrim Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-[120%] bg-gradient-to-t from-surface-lowest via-surface-lowest/70 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90" />
      
      {/* Content */}
      <div className="relative z-20 flex flex-col gap-3 max-w-2xl transform transition-transform duration-500 group-hover:translate-x-2">
        {category && (
          <span className="font-script text-xs font-bold uppercase tracking-loose-label text-text-dim/70 group-hover:text-accent-dim transition-colors">
            {category}
          </span>
        )}
        <h3 className="font-display text-5xl md:text-6xl text-text-base tracking-tight-display uppercase leading-[0.9] group-hover:text-accent transition-colors duration-500 drop-shadow-md">
          {title}
        </h3>
      </div>
    </div>
  );
}
