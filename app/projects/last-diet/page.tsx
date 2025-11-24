"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import {
  gsap,
  ScrollTrigger,
  prefersReducedMotion,
  motion,
} from "../../utils/animations";

export default function LastDietProject() {
  const headerRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const externalLinkRef = useRef<HTMLElement>(null);
  const relatedRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    // Header animation
    if (headerRef.current) {
      const label = headerRef.current.querySelector("[data-label]");
      const title = headerRef.current.querySelector("h1");
      const description = headerRef.current.querySelector("p");

      gsap.fromTo(
        label,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: motion.duration.normal,
          ease: motion.ease.default,
        }
      );

      gsap.fromTo(
        title,
        { opacity: 0, y: motion.distance.small },
        {
          opacity: 1,
          y: 0,
          duration: motion.duration.slow,
          delay: 0.15,
          ease: motion.ease.default,
        }
      );

      gsap.fromTo(
        description,
        { opacity: 0, y: motion.distance.small },
        {
          opacity: 1,
          y: 0,
          duration: motion.duration.normal,
          delay: 0.3,
          ease: motion.ease.default,
        }
      );
    }

    // Gallery images scroll animation
    if (galleryRef.current) {
      const sections = galleryRef.current.querySelectorAll("[data-gallery]");

      sections.forEach((section, index) => {
        const image = section.querySelector("[data-image]");
        const caption = section.querySelector("p");

        const direction = index % 2 === 0 ? 1 : -1;

        gsap.fromTo(
          image,
          { opacity: 0, y: 40, x: direction * 20 },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: motion.duration.slow,
            ease: motion.ease.default,
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );

        gsap.fromTo(
          caption,
          { opacity: 0 },
          {
            opacity: 1,
            duration: motion.duration.fast,
            delay: 0.2,
            ease: motion.ease.default,
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }

    // About section animation
    if (aboutRef.current) {
      const label = aboutRef.current.querySelector("span");
      const title = aboutRef.current.querySelector("h2");

      gsap.fromTo(
        label,
        { opacity: 0, x: -15 },
        {
          opacity: 1,
          x: 0,
          duration: motion.duration.normal,
          ease: motion.ease.default,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        title,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: motion.duration.normal,
          delay: 0.1,
          ease: motion.ease.default,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // External link section animation
    if (externalLinkRef.current) {
      gsap.fromTo(
        externalLinkRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: motion.duration.normal,
          ease: motion.ease.default,
          scrollTrigger: {
            trigger: externalLinkRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Related projects animation
    if (relatedRef.current) {
      const cards = relatedRef.current.querySelectorAll("article");

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: motion.duration.normal,
            delay: index * motion.stagger.slow,
            ease: motion.ease.default,
            scrollTrigger: {
              trigger: relatedRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="top" className="min-h-screen bg-[#f8f6f3]">
      <div className="px-[50px] max-w-[1280px] mx-auto">
        <Navigation />

      {/* Page Header */}
      <header
        ref={headerRef}
        className="flex flex-col gap-6 pt-16 pb-20 pr-0 md:pt-32 md:pb-24 lg:max-w-[900px]"
      >
        <div className="flex flex-col gap-3 text-[#6e660a]">
          <span
            data-label
            className="font-mono font-medium text-[12px] leading-[1.2] tracking-[0.5px] uppercase"
          >
            Books
          </span>
          <h1 className="font-serif font-normal text-[32px] leading-[1.2] tracking-[-0.5px] md:text-[44px] lg:text-[56px]">
            ラストダイエット
          </h1>
        </div>
        <p className="font-serif font-light text-[18px] leading-[1.7] tracking-[-0.3px] text-[#444] md:text-[20px] lg:text-[24px] max-w-[640px]">
          Kindleで出版したダイエット本。食生活を整える長期的なダイエット法を紹介しています。
        </p>
      </header>

      {/* Project Gallery */}
      <main ref={galleryRef} className="flex flex-col gap-20 pb-20 md:pb-32">
        {/* Gallery Image 1 */}
        <section
          data-gallery
          className="flex flex-col gap-3 px-0 md:px-16 lg:pl-32 lg:pr-8"
        >
          <div
            data-image
            className="relative w-full aspect-[900/1256] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/last-diet-intro.jpg"
              alt="Last Diet 表紙"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-mono text-[12px] tracking-[0.5px] text-[#999] uppercase mt-2">
            はじめに
          </p>
        </section>

        {/* Gallery Image 2 */}
        <section
          data-gallery
          className="flex flex-col gap-3 px-0 md:pr-32 lg:pr-48"
        >
          <div
            data-image
            className="relative w-full aspect-[900/1359] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/last-diet-chapter1.jpg"
              alt="Last Diet ページサンプル"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-mono text-[12px] tracking-[0.5px] text-[#999] uppercase mt-2">
            ページサンプル
          </p>
        </section>

        {/* Description */}
        <section
          ref={aboutRef}
          className="flex flex-col gap-6 pr-0 lg:pr-24 lg:max-w-[800px]"
        >
          <span className="font-mono font-medium text-[12px] leading-[1.2] tracking-[0.5px] text-[#666] uppercase">
            About
          </span>
          <h2 className="font-serif font-normal text-[28px] leading-[1.3] tracking-[-0.5px] text-[#111] md:text-[32px] lg:text-[40px]">
            ラストダイエットは、食生活を整える長期的なダイエットの紹介です。
          </h2>
        </section>
      </main>

      {/* External Link Section */}
      <section
        ref={externalLinkRef}
        className="flex flex-col gap-6 px-0 pt-10 pb-16 border-t border-[#ccc]"
      >
        <span className="font-mono font-medium text-[12px] leading-[1.2] tracking-[0.5px] text-[#666] uppercase">
          Purchase
        </span>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
          <p className="font-serif font-normal text-[24px] leading-[1.3] tracking-[-0.5px] text-[#111] md:text-[28px] lg:text-[32px]">
            ラストダイエット
          </p>
          <a
            href="https://www.amazon.co.jp/%E3%83%A9%E3%82%B9%E3%83%88%E3%83%80%E3%82%A4%E3%82%A8%E3%83%83%E3%83%88-%E4%BA%BA%E7%94%9F%E6%9C%80%E5%BE%8C%E3%81%AE%E3%83%80%E3%82%A4%E3%82%A8%E3%83%83%E3%83%88%E3%81%AB%E3%81%AA%E3%82%8B%E3%81%A7%E3%81%97%E3%82%87%E3%81%86%E3%80%82-%E5%96%9C%E5%B3%B6%E3%81%93%E3%82%8D%E3%82%82-ebook/dp/B0FW2PN2GR"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit px-5 py-2.5 font-mono text-[13px] leading-[1.2] tracking-[0.5px] bg-[#6e660a] text-white rounded-lg transition-all hover:bg-[#565108] hover:shadow-lg"
            aria-label="AmazonでLast Dietを見る"
          >
            Amazonで見る →
          </a>
        </div>
      </section>

      {/* Related Projects */}
      <section
        ref={relatedRef}
        className="flex flex-col gap-8 pt-10 pb-0 border-t border-[#ccc]"
      >
        <div className="flex flex-col gap-2">
          <span className="font-mono font-medium text-[12px] leading-[1.2] tracking-[0.5px] text-[#666] uppercase">
            More Works
          </span>
          <h2 className="font-serif font-normal text-[24px] leading-[1.3] tracking-[-0.5px] text-[#111] md:text-[28px]">
            他の制作物
          </h2>
        </div>

        {/* Related Projects Grid */}
        <div className="flex flex-col gap-6 pb-32 md:flex-row md:gap-6">
          {/* Current Project Card - More subtle */}
          <article className="flex flex-col gap-4 pt-6 border-t border-[#6e660a]/30 md:flex-1">
            <div className="flex flex-col gap-2 flex-1">
              <span className="font-mono text-[11px] tracking-[0.5px] text-[#6e660a]/60 uppercase">
                Books
              </span>
              <h3 className="font-serif font-normal text-[16px] leading-[1.3] tracking-[-0.3px] text-[#6e660a]/60 md:text-[18px]">
                ラストダイエット
              </h3>
              <span className="mt-auto font-mono text-[11px] tracking-[0.5px] text-[#999]">
                現在のページ
              </span>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden opacity-60">
              <Image
                src="/last-diet-thumb2.jpg"
                alt="Last Diet サムネイル"
                fill
                className="object-cover"
              />
            </div>
          </article>

          {/* Project 02 - Sweets */}
          <article className="flex flex-col gap-4 pt-6 border-t border-[#0034ad] md:flex-1">
            <div className="flex flex-col gap-2 flex-1">
              <span className="font-mono text-[11px] tracking-[0.5px] text-[#0034ad] uppercase">
                Website
              </span>
              <h3 className="font-serif font-normal text-[16px] leading-[1.3] tracking-[-0.3px] text-[#0034ad] md:text-[18px]">
                秋の人気スイーツ特集
              </h3>
              <a
                href="/projects/sweets"
                className="mt-auto w-fit px-3 py-1.5 font-mono text-[11px] leading-[1.2] tracking-[0.5px] border border-[#0034ad] text-[#0034ad] rounded-md transition-colors hover:bg-[#0034ad] hover:text-white"
                aria-label="秋の人気スイーツ特集サイトの詳細を見る"
              >
                Explore →
              </a>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/SweetsSite_thumb2.jpg"
                alt="秋の人気スイーツ特集サイトのサムネイル"
                fill
                className="object-cover"
              />
            </div>
          </article>

          {/* Project 03 - Portfolio */}
          <article className="flex flex-col gap-4 pt-6 border-t border-[#ab0782] md:flex-1">
            <div className="flex flex-col gap-2 flex-1">
              <span className="font-mono text-[11px] tracking-[0.5px] text-[#ab0782] uppercase">
                Website
              </span>
              <h3 className="font-serif font-normal text-[16px] leading-[1.3] tracking-[-0.3px] text-[#ab0782] md:text-[18px]">
                ポートフォリオサイト
              </h3>
              <a
                href="/projects/portfolio"
                className="mt-auto w-fit px-3 py-1.5 font-mono text-[11px] leading-[1.2] tracking-[0.5px] border border-[#ab0782] text-[#ab0782] rounded-md transition-colors hover:bg-[#ab0782] hover:text-white"
                aria-label="ポートフォリオサイトの詳細を見る"
              >
                Explore →
              </a>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/Portfolio_thumb.jpg"
                alt="ポートフォリオサイトのサムネイル"
                fill
                className="object-cover"
              />
            </div>
          </article>
        </div>
      </section>

        <Footer />
      </div>
    </div>
  );
}
