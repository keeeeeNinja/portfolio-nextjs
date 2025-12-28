"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { gsap, staggerFadeInUp, prefersReducedMotion, motion } from "../utils/animations";

export default function Navigation() {
  const pathname = usePathname();
  const navLinksRef = useRef<HTMLDivElement>(null);

  // アクティブ状態の判定
  const isHome = pathname === "/" || pathname.startsWith("/projects");
  const isAbout = pathname === "/about";
  const isContact = pathname === "/contact";

  // ナビリンクのstaggerフェードイン
  useEffect(() => {
    if (prefersReducedMotion() || !navLinksRef.current) return;

    const links = navLinksRef.current.querySelectorAll("a");
    gsap.fromTo(
      links,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: motion.duration.fast,
        stagger: motion.stagger.fast,
        ease: motion.ease.default,
        delay: 0.2,
      }
    );
  }, []);

  return (
    <nav className="flex flex-row items-center justify-between gap-5 -mx-[50px] px-5 py-4 border-b border-[#e5e5e5] md:px-12 md:py-5 lg:px-[50px]">
      {/* Brand Block - アバター + 名前 + 肩書き */}
      <a href="/" className="flex items-center gap-3 group">
        <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src="/header_icon_coromo.jpg"
            alt="Ryo Kijima portrait"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col">
          <span className="font-serif text-lg text-[#111] tracking-[-0.5px] leading-tight md:text-xl group-hover:text-[#ab0782] transition-colors">
            Ryo Kijima
          </span>
          <span className="font-mono text-[11px] text-[#666] tracking-[0.3px] leading-tight hidden md:block">
            Web Developer & Writer
          </span>
        </div>
      </a>

      {/* Navigation Links */}
      <div ref={navLinksRef} className="flex items-center gap-1 md:gap-2">
        <a
          href="/"
          className={`px-3 py-1.5 font-mono text-[14px] tracking-[0.3px] rounded-md transition-colors ${
            isHome
              ? "text-[#ab0782] bg-[#ab0782]/5"
              : "text-[#444] hover:text-[#111] hover:bg-[#f5f5f5]"
          }`}
        >
          Home
        </a>
        <a
          href="/about"
          className={`px-3 py-1.5 font-mono text-[14px] tracking-[0.3px] rounded-md transition-colors ${
            isAbout
              ? "text-[#ab0782] bg-[#ab0782]/5"
              : "text-[#444] hover:text-[#111] hover:bg-[#f5f5f5]"
          }`}
        >
          About
        </a>

        {/* CTA Button - Contact */}
        <a
          href="/contact"
          className={`ml-2 px-4 py-1.5 font-mono text-[13px] tracking-[0.3px] border border-[#ab0782] rounded-full transition-all ${
            isContact
              ? "bg-[#ab0782] text-white"
              : "text-[#ab0782] hover:bg-[#ab0782] hover:text-white hover:shadow-sm"
          }`}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
