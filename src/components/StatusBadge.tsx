import React from "react";

export function StatusBadge({ status = "Available for project", active = true }: { status?: string, active?: boolean }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-surface-bright/50 backdrop-blur-2xl px-5 py-2.5 text-sm text-text-base border-outline-ghost/20 shadow-ambient">
      {active && (
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
        </span>
      )}
      <span className="font-script tracking-loose-label uppercase text-xs font-medium text-text-dim">
        {status}
      </span>
    </div>
  );
}
