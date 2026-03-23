"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Header = () => {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    setActiveHash(window.location.hash);
    const handleHash = () => setActiveHash(window.location.hash);
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const navLinks = [
    { name: "About", href: "/" },
    { name: "Work", href: "#works" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#131313]/60 backdrop-blur-xl shadow-[0px_20px_50px_rgba(0,0,0,0.4)]">
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-[1440px] mx-auto">
        <Link href="/" className="text-2xl font-black tracking-tighter text-[#ff5634] font-headline uppercase">
          PROFESSIONAL_EDITOR
        </Link>
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => {
            let isActive = false;
            if (link.href.startsWith("#")) {
              isActive = pathname === "/" && activeHash === link.href;
            } else {
              // "About" defaults active if on the root path `/` AND the user hasn't explicitly scrolled to "#works"
              isActive = pathname === link.href && activeHash !== "#works";
            }
            return (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("#")) {
                     e.preventDefault();
                     const el = document.getElementById(link.href.substring(1));
                     if (el) {
                       el.scrollIntoView({ behavior: "smooth" });
                       // Suppress navigation while explicitly setting precise internal anchor bounds for the browser
                       window.history.pushState(null, "", link.href);
                       setActiveHash(link.href);
                     }
                  } else {
                     setActiveHash("");
                  }
                }}
                className={`font-label text-sm uppercase tracking-widest transition-colors ${
                  isActive 
                    ? "text-[#ff5634] font-bold border-b-2 border-[#ff5634] pb-1" 
                    : "text-white/70 hover:text-white pb-1 border-b-2 border-transparent"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-3 px-4 py-2 rounded-full bg-surface-bright/50 backdrop-blur-md border border-white/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ade80]"></span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.1em] text-white uppercase whitespace-nowrap">Available for work</span>
          </div>
          <motion.a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=swetanksinha19@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: "#ff4925" }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-container text-on-primary-container px-6 py-3 rounded-xl font-bold uppercase tracking-tighter text-sm hover:shadow-[0_0_20px_rgba(255,86,52,0.3)] transition-shadow duration-200 cursor-pointer text-center block"
          >
            Let's Talk
          </motion.a>
        </div>
      </div>
    </header>
  );
};
