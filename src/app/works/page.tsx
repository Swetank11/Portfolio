import { BentoCard } from "@/components/BentoCard";
import { StatusBadge } from "@/components/StatusBadge";

export default function WorksPage() {
  return (
    <main className="min-h-screen bg-surface px-6 md:px-12 py-16 lg:px-20 lg:py-24">
      {/* Header */}
      <header className="mb-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
        <div>
          <h1 className="font-display text-[5rem] md:text-[8rem] lg:text-[10rem] tracking-tight-display text-text-base uppercase leading-[0.8] mb-4">
            Selected
            <br />
            <span className="text-surface-lowest" style={{ WebkitTextStroke: '2px var(--color-outline-ghost)' }}>
              Work
            </span>
          </h1>
          <p className="font-script text-text-dim max-w-md mt-6 text-lg tracking-wide">
            A curated collection of cinematic brutalist sequences. The tension of the grid mapped against the negative space of the void.
          </p>
        </div>
        <div className="pb-4">
          <StatusBadge active={true} status="Available for project" />
        </div>
      </header>

      {/* Asymmetric Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[350px] md:auto-rows-[450px]">
        {/* Large Feature - Spans 2 cols & 2 rows */}
        <BentoCard 
          title="The Last Neon"
          category="Direction & Edit"
          className="md:col-span-2 md:row-span-2"
        />
        
        {/* Medium Vertical - Spans 1 col & 2 rows */}
        <BentoCard 
          title="Echoes"
          category="Sound Design"
          className="md:col-span-1 md:row-span-2"
        />

        {/* Small Feature - Spans 1 col & 1 row */}
        <BentoCard 
          title="Void"
          category="Color Grade"
          className="md:col-span-1 md:row-span-1"
        />

        {/* Small Feature - Spans 1 col & 1 row */}
        <BentoCard 
          title="Syntax"
          category="Motion Graphics"
          className="md:col-span-1 md:row-span-1"
        />

        {/* Standard Horizontal - Spans 3 cols */}
        <BentoCard 
          title="Cybernetic Formats"
          category="VFX Strategy"
          className="md:col-span-3 md:row-span-1"
        />

        {/* Final Block 1 Col */}
        <BentoCard 
          title="Fractions"
          category="Montage"
          className="md:col-span-1 md:row-span-1"
        />
      </div>
    </main>
  );
}
