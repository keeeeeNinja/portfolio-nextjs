"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import {
  gsap,
  ScrollTrigger,
  fadeInUp,
  prefersReducedMotion,
  motion,
} from "./utils/animations";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    // Hero section animation
    if (heroRef.current) {
      fadeInUp(heroRef.current.querySelector("h1"), {
        duration: motion.duration.slow,
        distance: motion.distance.small,
      });
    }

    // Featured Works label animation
    if (labelRef.current) {
      gsap.fromTo(
        labelRef.current,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: motion.duration.normal,
          delay: 0.3,
          ease: motion.ease.default,
        }
      );
    }

    // Project cards scroll animation
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll("[data-card]");

      cards.forEach((card) => {
        const textContent = card.querySelector("[data-text]");
        const imageContainer = card.querySelector("[data-image]");

        // Timeline for each card
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });

        // Text first, then image
        if (textContent) {
          tl.fromTo(
            textContent,
            { opacity: 0, x: -30 },
            {
              opacity: 1,
              x: 0,
              duration: motion.duration.normal,
              ease: motion.ease.default,
            }
          );
        }

        if (imageContainer) {
          tl.fromTo(
            imageContainer,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: motion.duration.normal,
              ease: motion.ease.default,
            },
            "-=0.3" // Overlap with text animation
          );
        }
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white px-[50px] max-w-[1280px] mx-auto">
      <Navigation />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="px-0 pt-16 pb-16 md:pt-24 md:pb-20 lg:max-w-[900px]"
      >
        <h1 className="font-serif font-normal text-[28px] leading-[1.4] tracking-[-0.5px] text-[#111] md:text-[36px] lg:text-[48px] lg:leading-[1.3]">
          このポートフォリオサイトでは、私がこれまでに手がけてきたWebサイトや、Kindleで出版した書籍を紹介しています。
        </h1>
      </section>

      {/* Works Section Label */}
      <div ref={labelRef} className="pb-8">
        <span className="font-mono font-medium text-[13px] leading-[1.2] tracking-[0.5px] text-[#666] uppercase">
          Featured Works
        </span>
      </div>

      {/* Project Cards Container */}
      <div ref={cardsRef}>
        {/* Project Card 0 - New LP (Placeholder) */}
        <section
          data-card
          className="flex flex-col gap-8 px-0 pt-10 pb-12 border-t border-[#0f766e] md:flex-row md:gap-16 md:items-center"
        >
          {/* Text Content */}
          <div data-text className="flex flex-col gap-5 md:flex-1">
            <span className="font-mono font-medium text-[12px] leading-[1.2] tracking-[0.5px] text-[#0f766e] uppercase">
              SEO Writing & LP
            </span>
            <h2 className="font-serif font-normal text-[40px] leading-[1.2] tracking-[-0.5px] text-[#0f766e]">
              頑張っているのに成果が出ない人のための"仕事のやり方再設計"
            </h2>
            <p className="font-serif font-light text-[16px] leading-[1.7] text-[#666] max-w-[400px]">
              SEO記事で"仕事の再設計"の考え方を整理し、LPで「自分の場合の直しどころ」を見える化して次の一手へつなぐ一連の導線を制作。記事執筆（SEOライティング）／LP構成・文章設計／フロント実装まで担当しました。
            </p>
            <a
              href="/projects/work-redesign"
              className="mt-4 w-fit px-5 py-2.5 font-mono text-[13px] leading-[1.2] tracking-[0.5px] bg-[#0f766e] text-white rounded-lg transition-all hover:bg-[#0d5f58] hover:shadow-lg"
              aria-label="頑張っているのに成果が出ない人のための仕事のやり方再設計の詳細を見る"
            >
              Explore →
            </a>
          </div>

          {/* Image */}
          <div
            data-image
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden md:flex-1 md:max-w-[500px]"
          >
            <Image
              src="/Working_LP2.webp"
              alt="頑張っているのに成果が出ない人のための仕事のやり方再設計のLP画像"
              fill
              className="object-cover rounded-2xl transition-transform duration-300 hover:scale-[1.03]"
            />
          </div>
        </section>

        {/* Project Card 1 - Sweets */}
        <section
          data-card
          className="flex flex-col gap-8 px-0 pt-10 pb-12 border-t border-[#ab0782] md:flex-row md:gap-16 md:items-center"
        >
          {/* Text Content */}
          <div data-text className="flex flex-col gap-5 md:flex-1">
            <span className="font-mono font-medium text-[12px] leading-[1.2] tracking-[0.5px] text-[#ab0782] uppercase">
              Website
            </span>
            <h2 className="font-serif font-normal text-[28px] leading-[1.2] tracking-[-0.5px] text-[#ab0782] md:text-[32px] lg:text-[44px]">
              秋の人気スイーツ特集
            </h2>
            <p className="font-serif font-light text-[16px] leading-[1.7] text-[#666] max-w-[400px]">
              秋に人気のスイーツを特集したデモWebサイト。Figmaデザインをもとに制作。
            </p>
            <a
              href="/projects/sweets"
              className="mt-4 w-fit px-5 py-2.5 font-mono text-[13px] leading-[1.2] tracking-[0.5px] bg-[#ab0782] text-white rounded-lg transition-all hover:bg-[#8a0668] hover:shadow-lg"
              aria-label="秋の人気スイーツ特集サイトの詳細を見る"
            >
              Explore →
            </a>
          </div>

          {/* Image */}
          <div
            data-image
            className="relative w-full aspect-[4/3] rounded-lg overflow-hidden md:flex-1 md:max-w-[500px]"
          >
            <Image
              src="/autumn01.webp"
              alt="秋の人気スイーツ特集サイトのサムネイル画像"
              fill
              className="object-cover transition-transform duration-300 hover:scale-[1.03]"
            />
          </div>
        </section>

        {/* Project Card 2 - Portfolio */}
        <section
          data-card
          className="flex flex-col gap-8 px-0 pt-10 pb-12 border-t border-[#0034ad] md:flex-row md:gap-16 md:items-center"
        >
          {/* Text */}
          <div data-text className="flex flex-col gap-5 md:flex-1">
            <span className="font-mono font-medium text-[12px] leading-[1.2] tracking-[0.5px] text-[#0034ad] uppercase">
              Website
            </span>
            <h2 className="font-serif font-normal text-[28px] leading-[1.2] tracking-[-0.5px] text-[#0034ad] md:text-[32px] lg:text-[44px]">
              ポートフォリオサイト
            </h2>
            <p className="font-serif font-light text-[16px] leading-[1.7] text-[#666] max-w-[400px]">
              シンプルで見やすいポートフォリオサイトのコーディング。HTML/CSSで制作。
            </p>
            <a
              href="/projects/portfolio"
              className="mt-4 w-fit px-5 py-2.5 font-mono text-[13px] leading-[1.2] tracking-[0.5px] bg-[#0034ad] text-white rounded-lg transition-all hover:bg-[#002080] hover:shadow-lg"
              aria-label="ポートフォリオサイトの詳細を見る"
            >
              Explore →
            </a>
          </div>

          {/* Image */}
          <div
            data-image
            className="relative w-full aspect-[4/3] md:flex-1 md:max-w-[500px] rounded-lg overflow-hidden"
          >
            <Image
              src="/Home2.jpg"
              alt="ポートフォリオサイトのホーム画面"
              fill
              className="object-cover transition-transform duration-300 hover:scale-[1.03]"
            />
          </div>
        </section>

        {/* Project Card 3 - Last Diet */}
        <section
          data-card
          className="flex flex-col gap-8 px-0 pt-10 pb-12 border-t border-[#6e660a] md:flex-row md:gap-16 md:items-center"
        >
          {/* Text */}
          <div data-text className="flex flex-col gap-5 md:flex-1">
            <span className="font-mono font-medium text-[12px] leading-[1.2] tracking-[0.5px] text-[#6e660a] uppercase">
              Books
            </span>
            <h2 className="font-serif font-normal text-[28px] leading-[1.2] tracking-[-0.5px] text-[#6e660a] md:text-[32px] lg:text-[44px]">
              ラストダイエット
            </h2>
            <p className="font-serif font-light text-[16px] leading-[1.7] text-[#666] max-w-[400px]">
              Kindleで出版したダイエット本。食生活を整える長期的なダイエット法を紹介。
            </p>
            <a
              href="/projects/last-diet"
              className="mt-4 w-fit px-5 py-2.5 font-mono text-[13px] leading-[1.2] tracking-[0.5px] bg-[#6e660a] text-white rounded-lg transition-all hover:bg-[#565108] hover:shadow-lg"
              aria-label="Last Dietの詳細を見る"
            >
              Explore →
            </a>
          </div>

          {/* Image */}
          <div
            data-image
            className="relative w-full aspect-[4/3] rounded-lg overflow-hidden md:flex-1 md:max-w-[500px]"
          >
            <Image
              src="/last-diet-home2.jpg"
              alt="ラストダイエット"
              fill
              className="object-cover transition-transform duration-300 hover:scale-[1.03]"
            />
          </div>
        </section>

        {/* Project Card 4 - New Writing Section (Placeholder) */}
        <section
          data-card
          className="flex flex-col gap-8 px-0 pt-10 pb-32 border-t border-[#D97706] md:flex-row md:gap-16 md:items-center"
        >
          {/* Text */}
          <div data-text className="flex flex-col gap-5 md:flex-1">
            <span className="font-mono font-medium text-[12px] leading-[1.2] tracking-[0.5px] text-[#D97706] uppercase">
              Writing
            </span>
            <h2 className="font-serif font-normal text-[28px] leading-[1.2] tracking-[-0.5px] text-[#D97706] md:text-[32px] lg:text-[44px]">
              Webライティング
            </h2>
            <p className="font-serif font-light text-[16px] leading-[1.7] text-[#666] max-w-[400px]">
              SEOを意識した構成設計で、読みやすく行動につながる記事を制作。初心者向けから実務記事まで、要件に合わせて丁寧に整えます。
            </p>
            <a
              href="/projects/web-writing"
              className="mt-4 w-fit px-5 py-2.5 font-mono text-[13px] leading-[1.2] tracking-[0.5px] bg-[#D97706] text-white rounded-lg transition-all hover:bg-[#B45309] hover:shadow-lg"
              aria-label="Webライティングの詳細を見る"
            >
              Explore →
            </a>
          </div>

          {/* Image */}
          <div
            data-image
            className="relative w-full aspect-[4/3] rounded-lg overflow-hidden md:flex-1 md:max-w-[500px] bg-[#D97706]/10 flex items-center justify-center"
          >
            <span className="font-mono text-[24px] text-[#D97706]/40">
              Writing
            </span>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
