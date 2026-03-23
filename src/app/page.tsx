"use client";
import React from "react";
import { motion } from "framer-motion";
import { WaterShadow } from "@/components/WaterShadow";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FocusReveal } from "@/components/FocusReveal";
import { CenterPlayVideo } from "@/components/CenterPlayVideo";

const heroContainer: any = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const heroItem: any = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Home() {
  return (
    <>
      <main className="pt-32 px-8 max-w-[1440px] mx-auto min-h-screen overflow-x-hidden">
        <motion.section variants={heroContainer} initial="hidden" animate="show" className="mb-20">
          <div className="relative mb-12 translate-y-8">
            <WaterShadow />
            <motion.h1 variants={heroItem} className="font-headline text-[clamp(4rem,12vw,10rem)] leading-[0.85] uppercase tracking-tighter text-white relative z-10">SWETANK<br/><span className="text-[#ff5634]">SINHA</span></motion.h1>
          </div>
          <motion.div variants={heroItem} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <p className="text-white/60 text-xl md:text-2xl max-w-xl leading-relaxed">
              Crafting cinematic narratives through brutalist precision. I am a Video Editor focused on high-impact motion, editing, and visual architecture and story telling.
            </p>
            <div className="flex flex-wrap gap-4 md:justify-end">
              <span className="px-4 py-2 bg-surface-container-high rounded-full text-xs font-bold uppercase tracking-widest text-on-surface-variant">Motion Design</span>
              <span className="px-4 py-2 bg-surface-container-high rounded-full text-xs font-bold uppercase tracking-widest text-on-surface-variant">Editorial</span>
              <span className="px-4 py-2 bg-surface-container-high rounded-full text-xs font-bold uppercase tracking-widest text-on-surface-variant">Color Grading</span>
            </div>
          </motion.div>
        </motion.section>

        <ScrollReveal as="section" className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-6">
          <FocusReveal className="md:col-span-8 group relative overflow-hidden bg-surface-container-high rounded-xl aspect-video md:aspect-auto md:h-[600px]">
            <img alt="Cinematic neon lighting in a dark urban setting" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="/img1.jpeg"/>
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
          </FocusReveal>

          <FocusReveal className="md:col-span-4 group relative overflow-hidden bg-surface-container-high rounded-xl h-[400px] md:h-auto">
            <img alt="Abstract architectural photography with sharp shadows" className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" src="/img2.jpeg"/>
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent"></div>
          </FocusReveal>

          <FocusReveal className="md:col-span-5 group relative overflow-hidden bg-surface-container-high rounded-xl h-[400px]">
            <img alt="Vintage film camera lens close up" className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" src="/img3.jpeg"/>
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent"></div>
          </FocusReveal>

          <FocusReveal className="md:col-span-7 group relative overflow-hidden bg-surface-container-high rounded-xl h-[400px]">
            <img alt="Modern geometric shapes with red lighting" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" src="/img4.jpeg"/>
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent"></div>
          </FocusReveal>
        </ScrollReveal>

        <ScrollReveal as="section" className="mb-20">
          <div className="border-t border-white/10 pt-12">
            <h2 className="font-headline text-5xl md:text-7xl uppercase tracking-tighter text-white mb-12">CHALLENGES <span className="text-[#ff5634]">&amp;</span> SOLUTIONS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
              <div className="space-y-10">
                <FocusReveal className="group">
                  <span className="block text-primary-container font-bold text-xs uppercase tracking-widest mb-4">Challenge 01</span>
                  <h4 className="text-white text-2xl font-bold uppercase tracking-tight mb-4 leading-none">Rhythmic Complexity</h4>
                  <p className="text-white/60 text-lg leading-relaxed">
                    Maintaining absolute rhythmic integrity in high-tempo, multi-layered cuts often leads to visual fatigue or loss of narrative clarity during intense action sequences.
                  </p>
                </FocusReveal>
                <FocusReveal className="group">
                  <span className="block text-primary-container font-bold text-xs uppercase tracking-widest mb-4">Challenge 02</span>
                  <h4 className="text-white text-2xl font-bold uppercase tracking-tight mb-4 leading-none">Disparate Sources</h4>
                  <p className="text-white/60 text-lg leading-relaxed">
                    Unifying visual language when working with mixed media formats, varying lighting conditions, and inconsistent color profiles from multiple camera systems.
                  </p>
                </FocusReveal>
              </div>
              <div className="space-y-10">
                <FocusReveal className="group">
                  <span className="block text-white/40 font-bold text-xs uppercase tracking-widest mb-4">Solution 01</span>
                  <h4 className="text-white text-2xl font-bold uppercase tracking-tight mb-4 leading-none">Sound-Sync Precision</h4>
                  <p className="text-white/60 text-lg leading-relaxed font-medium">
                    Developing precise audio-visual anchor points. Utilizing sub-frame editing techniques to ensure every cut aligns with specific transient peaks for visceral impact.
                  </p>
                </FocusReveal>
                <FocusReveal className="group">
                  <span className="block text-white/40 font-bold text-xs uppercase tracking-widest mb-4">Solution 02</span>
                  <h4 className="text-white text-2xl font-bold uppercase tracking-tight mb-4 leading-none">Custom LUT Architecture</h4>
                  <p className="text-white/60 text-lg leading-relaxed font-medium">
                    Architecting bespoke color grading pipelines and custom LUT development that normalize disparate sources into a cohesive, high-contrast cinematic aesthetic.
                  </p>
                </FocusReveal>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal as="section" className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          <FocusReveal className="p-8 bg-surface-container-low rounded-xl border border-white/5 flex flex-col justify-between aspect-square md:aspect-auto">
            <span className="text-white/20 font-bold uppercase tracking-widest text-xs">Experience</span>
            <span className="font-headline text-6xl text-white">1</span>
            <p className="text-white/40 text-sm uppercase tracking-wider">Year of Editing</p>
          </FocusReveal>
          <FocusReveal className="p-8 bg-primary-container rounded-xl flex flex-col justify-between aspect-square md:aspect-auto">
            <span className="text-on-primary-container/60 font-bold uppercase tracking-widest text-xs">Projects</span>
            <span className="font-headline text-6xl text-on-primary-container">15</span>
            <p className="text-on-primary-container/60 text-sm uppercase tracking-wider">Projects Done</p>
          </FocusReveal>
          <FocusReveal className="md:col-span-2 p-10 bg-surface-container-low rounded-xl border border-white/5 flex items-center justify-center text-center">
            <h2 className="font-headline text-4xl uppercase tracking-tighter text-white">
              "The frame is the <span className="italic text-primary-container">canvas</span>, the cut is the <span className="italic">brushstroke</span>."
            </h2>
          </FocusReveal>
        </ScrollReveal>

        <section id="works" className="mb-32">
          <ScrollReveal>
            <div className="flex justify-between items-start mb-16 relative">
              <div className="flex flex-col">
                <h2 className="font-headline text-[clamp(4rem,10vw,8rem)] leading-none uppercase tracking-tighter text-white opacity-10 absolute -top-12 -left-2 select-none">MORE WORKS</h2>
                <h2 className="font-headline text-[clamp(4rem,10vw,8rem)] leading-none uppercase tracking-tighter text-white relative z-10">MORE <span className="text-[#ff5634]">WORKS</span></h2>
              </div>
              <div className="pt-6">
                <a className="flex items-center gap-4 px-8 py-3 rounded-full border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-300 group" href="#">
                  SEE ALL
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">arrow_outward</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-24 md:gap-32 mt-20 max-w-6xl mx-auto">
            
            {/* Video 1: Video Left, Text Right (Wider Video Container) */}
            <ScrollReveal as="div" className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
              <FocusReveal className="order-2 md:order-1 md:col-span-8 relative overflow-hidden rounded-xl bg-black/40 border border-white/5 aspect-video md:aspect-[16/9] flex items-center justify-center cursor-pointer shadow-2xl">
                <CenterPlayVideo className="w-full h-full object-contain block transform-gpu" src="/videos/project1.mov?v=1" />
              </FocusReveal>
              <FocusReveal className="order-1 md:order-2 md:col-span-4 flex flex-col justify-center px-4">
                <span className="text-[#ff5634] font-bold text-sm uppercase tracking-widest mb-4 block">Documentary</span>
                <h3 className="font-headline text-5xl md:text-6xl lg:text-7xl uppercase text-white tracking-tighter mb-6">Narrative Architecture</h3>
                <p className="text-white/60 text-lg leading-relaxed mb-8">
                  Distilling hundreds of hours of raw footage into focused, emotionally resonant narratives. Expertise in pacing, dialogue isolation, and structuring compelling character arcs that honor authentic storytelling.
                </p>
              </FocusReveal>
            </ScrollReveal>

            {/* Video 2: Text Left, Video Right */}
            <ScrollReveal as="div" className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
              <FocusReveal className="order-1 md:col-span-4 flex flex-col justify-center px-4 md:text-right md:items-end">
                <span className="text-[#ff5634] font-bold text-sm uppercase tracking-widest mb-4 block">Motion Graphics</span>
                <h3 className="font-headline text-5xl md:text-6xl lg:text-7xl uppercase text-white tracking-tighter mb-6">Visual Dynamics</h3>
                <p className="text-white/60 text-lg leading-relaxed mb-8 text-left md:text-right">
                  Seamlessly integrating complex motion graphics and typography into live-action edits. Utilizing robust keyframing and object tracking to engineer high-impact visual hooks that elevate core brand messaging.
                </p>
              </FocusReveal>
              <FocusReveal className="order-2 md:col-span-8 relative overflow-hidden rounded-xl bg-black/40 border border-white/5 h-[400px] md:h-[520px] lg:h-[640px] w-full flex items-center justify-center cursor-pointer shadow-2xl">
                <CenterPlayVideo className="w-full h-full object-cover md:object-contain block transform-gpu" src="/videos/project2.mp4?v=1" />
              </FocusReveal>
            </ScrollReveal>

            {/* Video 3: Video Left, Text Right */}
            <ScrollReveal as="div" className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
              <FocusReveal className="order-2 md:order-1 md:col-span-8 relative overflow-hidden rounded-xl bg-black/40 border border-white/5 h-[400px] md:h-[520px] lg:h-[640px] w-full flex items-center justify-center cursor-pointer shadow-2xl">
                <CenterPlayVideo className="w-full h-full object-cover md:object-contain block transform-gpu" src="/videos/project3.mp4?v=1" />
              </FocusReveal>
              <FocusReveal className="order-1 md:order-2 md:col-span-4 flex flex-col justify-center px-4">
                <span className="text-[#ff5634] font-bold text-sm uppercase tracking-widest mb-4 block">Interview & Corporate</span>
                <h3 className="font-headline text-5xl md:text-6xl lg:text-7xl uppercase text-white tracking-tighter mb-6">Subject Focus</h3>
                <p className="text-white/60 text-lg leading-relaxed mb-8">
                  Transforming static interview setups into highly engaging, dynamic sequences. Executing surgical audio repair, strategic b-roll integration, and deliberate pacing to command listener attention and establish authority.
                </p>
              </FocusReveal>
            </ScrollReveal>

            {/* Video 4: Text Left, Video Right */}
            <ScrollReveal as="div" className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
              <FocusReveal className="order-1 md:col-span-4 flex flex-col justify-center px-4 md:text-right md:items-end">
                <span className="text-[#ff5634] font-bold text-sm uppercase tracking-widest mb-4 block">Multicam & Social</span>
                <h3 className="font-headline text-5xl md:text-6xl lg:text-7xl uppercase text-white tracking-tighter mb-6">Algorithmic Pacing</h3>
                <p className="text-white/60 text-lg leading-relaxed mb-8 text-left md:text-right">
                  Optimizing dialogue-heavy content for the modern attention economy. Specializing in rapid-fire multi-cam switching, pattern interrupts, and highly aggressive retention editing designed for maximum viewer engagement.
                </p>
              </FocusReveal>
              <FocusReveal className="order-2 md:col-span-8 relative overflow-hidden rounded-xl bg-black/40 border border-white/5 h-[400px] md:h-[520px] lg:h-[640px] w-full flex items-center justify-center cursor-pointer shadow-2xl">
                <CenterPlayVideo className="w-full h-full object-cover md:object-contain block transform-gpu" src="/videos/project4.mp4?v=1" />
              </FocusReveal>
            </ScrollReveal>

          </div>
        </section>

        <ScrollReveal as="section" className="mb-20 relative min-h-[500px] flex items-center overflow-hidden rounded-xl bg-surface-container-low border border-white/5">
          <div className="absolute inset-0 z-0">
            <img alt="Let's work together background" className="w-full h-full object-cover opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASw8RzPEGQdUffyprpVz0H2HXIPxORD26DF4_jw040mGo1sBE1mvLWFNUDLnYOPMAORa294efQhvpm9TDIwbhGHA2HtqcEzv1PbaoOgTInRFQTDi7QzHNl1xdoYGZWb1aVwYMPyi7kjbAsCWqxvI9X6QxxmrkNB3OCfgftsCU1cFPIfszT7OmH8Ek01f2IyhLWX-G8_9Wuq12lK21PIicrdrcMX0mCBbn6iZC-GToow9HKNacnN41OmDW89KtxgtG3oll1Dqq7Wkc"/>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
          </div>
          <div className="relative z-10 w-full px-12 py-20 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="font-headline text-[clamp(3.5rem,8vw,6rem)] leading-[0.9] uppercase tracking-tighter text-white">LET'S WORK<br/><span className="text-[#ff5634]">TOGETHER</span></h2>
            </div>
            <div className="md:w-1/3 space-y-8 flex flex-col items-start md:items-end text-left md:text-right">
              <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-sm">
                Have a project in mind? I'd love to hear about it. Let's create something great together!
              </p>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=swetanksinha19@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative px-10 py-4 rounded-full border-2 border-[#ff5634] text-[#ff5634] font-bold uppercase tracking-widest text-sm hover:bg-[#ff5634] hover:text-white transition-all duration-300"
              >
                GET IN TOUCH
              </a>
              <span className="text-white/40 text-sm font-bold tracking-widest">
                swetanksinha19@gmail.com
              </span>
            </div>
          </div>
        </ScrollReveal>
      </main>
    </>
  );
}
