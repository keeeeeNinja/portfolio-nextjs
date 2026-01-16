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

export default function Projects() {
  const headerRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const responsiveRef = useRef<HTMLElement>(null);
  const externalLinkRef = useRef<HTMLElement>(null);
  const relatedRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    // Header animation
    if (headerRef.current) {
      const label = headerRef.current.querySelector("[data-label]");
      const title = headerRef.current.querySelector("h1");
      const description = headerRef.current.querySelector("p");

      // Label line animation
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

      // Title fade
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

      // Description fade
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

        // Alternate direction for visual interest
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

    // Responsive section animation
    if (responsiveRef.current) {
      const label = responsiveRef.current.querySelector("span");
      const title = responsiveRef.current.querySelector("h2");

      gsap.fromTo(
        label,
        { opacity: 0, x: -15 },
        {
          opacity: 1,
          x: 0,
          duration: motion.duration.normal,
          ease: motion.ease.default,
          scrollTrigger: {
            trigger: responsiveRef.current,
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
            trigger: responsiveRef.current,
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
        <div className="flex flex-col gap-3 text-[#ab0782]">
          <span
            data-label
            className="font-mono font-medium text-[12px] leading-[1.2] tracking-[0.5px] uppercase"
          >
            Website
          </span>
          <h1 className="font-serif font-normal text-[32px] leading-[1.2] tracking-[-0.5px] md:text-[44px] lg:text-[56px]">
            秋の人気スイーツ特集
          </h1>
        </div>
        <p className="font-serif font-light text-[18px] leading-[1.7] tracking-[-0.3px] text-[#444] md:text-[20px] lg:text-[24px] max-w-[640px]">
          秋に人気のスイーツを特集したデモWebサイトです。Figmaデザインをもとに、HTML/CSS/JavaScriptで制作しました。
        </p>
      </header>

      {/* Project Gallery */}
      <main ref={galleryRef} className="flex flex-col gap-20 pb-20 md:pb-32">
        {/* Gallery Image: Autumn Harvest Section */}
        <section
          data-gallery
          className="flex flex-col gap-3 px-0 md:px-16 lg:pl-32 lg:pr-8"
        >
          <div
            data-image
            className="relative w-full aspect-[900/565] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/autumn02.webp"
              alt="秋の実りを味わうスイーツセクション"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-mono text-[12px] tracking-[0.5px] text-[#999] uppercase mt-2">
            秋の実りを味わう
          </p>
        </section>

        {/* Gallery Image: Classic Sweetness Section */}
        <section
          data-gallery
          className="flex flex-col gap-3 px-0 md:pr-32 lg:pr-48"
        >
          <div
            data-image
            className="relative w-full aspect-[920/660] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/autumn03.webp"
              alt="誰もが愛する王道の甘さスイーツセクション"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-mono text-[12px] tracking-[0.5px] text-[#999] uppercase mt-2">
            誰もが愛する王道の甘さ
          </p>
        </section>

        {/* Gallery Image: Seasonal New Products Section */}
        <section
          data-gallery
          className="flex flex-col gap-3 px-0 md:pl-32 lg:pl-48"
        >
          <div
            data-image
            className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/autumn04.webp"
              alt="季節の新作スイーツセクション"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-mono text-[12px] tracking-[0.5px] text-[#999] uppercase mt-2">
            季節の新作
          </p>
        </section>

        {/* Responsive Design Description */}
        <section
          ref={responsiveRef}
          className="flex flex-col gap-6 pr-0 lg:pr-24"
        >
          <span className="font-mono font-medium text-[12px] leading-[1.2] tracking-[0.5px] text-[#666] uppercase">
            Responsive
          </span>
          <h2 className="font-serif font-normal text-[28px] leading-[1.3] tracking-[-0.5px] text-[#111] md:text-[32px] lg:text-[40px]">
            スマートフォン対応のレスポンシブデザイン。
          </h2>
        </section>

        {/* Gallery Image: Mobile Version */}
        <section data-gallery className="flex flex-col gap-3 lg:pr-24">
          <div
            data-image
            className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/autumn05.webp"
              alt="秋の人気スイーツ特集サイトのスマートフォン版画面"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-mono text-[12px] tracking-[0.5px] text-[#999] uppercase mt-2">
            スマートフォン版
          </p>
        </section>
      </main>

      {/* External Link Section */}
      <section
        ref={externalLinkRef}
        className="flex flex-col gap-6 px-0 pt-10 pb-16 border-t border-[#ccc]"
      >
        <span className="font-mono font-medium text-[12px] leading-[1.2] tracking-[0.5px] text-[#666] uppercase">
          Live Site
        </span>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
          <p className="font-serif font-normal text-[24px] leading-[1.3] tracking-[-0.5px] text-[#111] md:text-[28px] lg:text-[32px]">
            秋の人気スイーツ特集サイト
          </p>
          <a
            href="https://autumn-sweets.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit px-5 py-2.5 font-mono text-[13px] leading-[1.2] tracking-[0.5px] bg-[#ab0782] text-white rounded-lg transition-all hover:bg-[#8a0668] hover:shadow-lg"
            aria-label="秋の人気スイーツ特集サイトを別タブで開く"
          >
            サイトを見る →
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
        <div className="flex flex-col gap-6 pb-32 md:flex-row md:flex-wrap md:gap-4 lg:flex-nowrap">
          {/* Current Project Card - More subtle */}
          <article className="flex flex-col gap-3 pt-6 border-t border-[#ab0782]/30 md:w-[calc(50%-8px)] lg:flex-1">
            <div className="flex flex-col gap-2 flex-1">
              <span className="font-mono text-[11px] tracking-[0.5px] text-[#ab0782]/60 uppercase">
                Website
              </span>
              <h3 className="font-serif font-normal text-[14px] leading-[1.3] tracking-[-0.3px] text-[#ab0782]/60 md:text-[16px]">
                秋の人気スイーツ特集
              </h3>
              <span className="mt-auto font-mono text-[10px] tracking-[0.5px] text-[#999]">
                現在のページ
              </span>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden opacity-60">
              <Image
                src="/autumn06.webp"
                alt="秋の人気スイーツ特集デモサイトのサムネイル"
                fill
                className="object-cover"
              />
            </div>
          </article>

          {/* Project 02 - Work Redesign */}
          <article className="flex flex-col gap-3 pt-6 border-t border-[#0f766e] md:w-[calc(50%-8px)] lg:flex-1">
            <div className="flex flex-col gap-2 flex-1">
              <span className="font-mono text-[11px] tracking-[0.5px] text-[#0f766e] uppercase">
                SEO Writing & LP
              </span>
              <h3 className="font-serif font-normal text-[14px] leading-[1.3] tracking-[-0.3px] text-[#0f766e] md:text-[16px]">
                仕事のやり方再設計
              </h3>
              <a
                href="/projects/work-redesign"
                className="mt-auto w-fit px-2 py-1 font-mono text-[10px] leading-[1.2] tracking-[0.5px] border border-[#0f766e] text-[#0f766e] rounded-md transition-colors hover:bg-[#0f766e] hover:text-white"
                aria-label="仕事のやり方再設計の詳細を見る"
              >
                Explore →
              </a>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/Working_LP2.webp"
                alt="仕事のやり方再設計のサムネイル"
                fill
                className="object-cover"
              />
            </div>
          </article>

          {/* Project 03 - Web Writing */}
          <article className="flex flex-col gap-3 pt-6 border-t border-[#D97706] md:w-[calc(50%-8px)] lg:flex-1">
            <div className="flex flex-col gap-2 flex-1">
              <span className="font-mono text-[11px] tracking-[0.5px] text-[#D97706] uppercase">
                Writing
              </span>
              <h3 className="font-serif font-normal text-[14px] leading-[1.3] tracking-[-0.3px] text-[#D97706] md:text-[16px]">
                Webライティング
              </h3>
              <a
                href="/projects/web-writing"
                className="mt-auto w-fit px-2 py-1 font-mono text-[10px] leading-[1.2] tracking-[0.5px] border border-[#D97706] text-[#D97706] rounded-md transition-colors hover:bg-[#D97706] hover:text-white"
                aria-label="Webライティングの詳細を見る"
              >
                Explore →
              </a>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-[#D97706]/10 flex items-center justify-center">
              <span className="font-mono text-[12px] text-[#D97706]/60">
                Writing
              </span>
            </div>
          </article>

          {/* Project 04 - Portfolio Site */}
          <article className="flex flex-col gap-3 pt-6 border-t border-[#0034ad] md:w-[calc(50%-8px)] lg:flex-1">
            <div className="flex flex-col gap-2 flex-1">
              <span className="font-mono text-[11px] tracking-[0.5px] text-[#0034ad] uppercase">
                Website
              </span>
              <h3 className="font-serif font-normal text-[14px] leading-[1.3] tracking-[-0.3px] text-[#0034ad] md:text-[16px]">
                ポートフォリオサイト
              </h3>
              <a
                href="/projects/portfolio"
                className="mt-auto w-fit px-2 py-1 font-mono text-[10px] leading-[1.2] tracking-[0.5px] border border-[#0034ad] text-[#0034ad] rounded-md transition-colors hover:bg-[#0034ad] hover:text-white"
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

          {/* Project 05 - Last Diet */}
          <article className="flex flex-col gap-3 pt-6 border-t border-[#6e660a] md:w-[calc(50%-8px)] lg:flex-1">
            <div className="flex flex-col gap-2 flex-1">
              <span className="font-mono text-[11px] tracking-[0.5px] text-[#6e660a] uppercase">
                Books
              </span>
              <h3 className="font-serif font-normal text-[14px] leading-[1.3] tracking-[-0.3px] text-[#6e660a] md:text-[16px]">
                ラストダイエット
              </h3>
              <a
                href="/projects/last-diet"
                className="mt-auto w-fit px-2 py-1 font-mono text-[10px] leading-[1.2] tracking-[0.5px] border border-[#6e660a] text-[#6e660a] rounded-md transition-colors hover:bg-[#6e660a] hover:text-white"
                aria-label="Last Dietの詳細を見る"
              >
                Explore →
              </a>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/last-diet-thumb2.jpg"
                alt="Last Diet サムネイル"
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
