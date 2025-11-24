"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {
  gsap,
  ScrollTrigger,
  prefersReducedMotion,
  motion,
} from "../utils/animations";

export default function About() {
  const heroRef = useRef<HTMLElement>(null);
  const profileRef = useRef<HTMLElement>(null);
  const worksRef = useRef<HTMLElement>(null);
  const catImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    // Hero section animation
    if (heroRef.current) {
      const h1 = heroRef.current.querySelector("h1");
      const bodyText = heroRef.current.querySelectorAll("p");

      // H1 fade in
      gsap.fromTo(
        h1,
        { opacity: 0, y: motion.distance.small },
        {
          opacity: 1,
          y: 0,
          duration: motion.duration.slow,
          ease: motion.ease.default,
        }
      );

      // Body text stagger
      gsap.fromTo(
        bodyText,
        { opacity: 0, y: motion.distance.small },
        {
          opacity: 1,
          y: 0,
          duration: motion.duration.normal,
          stagger: motion.stagger.slow,
          delay: 0.3,
          ease: motion.ease.default,
        }
      );
    }

    // Profile card animation
    if (profileRef.current) {
      const card = profileRef.current.querySelector("[data-card]");
      const rows = profileRef.current.querySelectorAll("[data-row]");

      gsap.fromTo(
        card,
        { opacity: 0, y: motion.distance.medium, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: motion.duration.normal,
          ease: motion.ease.default,
          scrollTrigger: {
            trigger: profileRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Profile rows stagger
      gsap.fromTo(
        rows,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: motion.duration.fast,
          stagger: motion.stagger.fast,
          delay: 0.2,
          ease: motion.ease.default,
          scrollTrigger: {
            trigger: profileRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Works section animation
    if (worksRef.current) {
      const cards = worksRef.current.querySelectorAll("[data-work-card]");

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: motion.duration.normal,
            delay: index * motion.stagger.slow,
            ease: motion.ease.default,
            scrollTrigger: {
              trigger: worksRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }

    // Cat image hover effect
    if (catImageRef.current) {
      const image = catImageRef.current.querySelector("img");
      const caption = catImageRef.current.querySelector("p");

      catImageRef.current.addEventListener("mouseenter", () => {
        gsap.to(catImageRef.current, {
          y: -4,
          duration: motion.duration.fast,
          ease: motion.ease.default,
        });
        if (image) {
          gsap.to(image, {
            scale: 1.02,
            duration: motion.duration.fast,
            ease: motion.ease.default,
          });
        }
        if (caption) {
          gsap.to(caption, {
            opacity: 1,
            duration: motion.duration.fast,
          });
        }
      });

      catImageRef.current.addEventListener("mouseleave", () => {
        gsap.to(catImageRef.current, {
          y: 0,
          duration: motion.duration.fast,
          ease: motion.ease.default,
        });
        if (image) {
          gsap.to(image, {
            scale: 1,
            duration: motion.duration.fast,
            ease: motion.ease.default,
          });
        }
        if (caption) {
          gsap.to(caption, {
            opacity: 0.7,
            duration: motion.duration.fast,
          });
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

      {/* Hero Section - Catchcopy style */}
      <section
        ref={heroRef}
        className="flex flex-col gap-8 pt-16 pb-24 md:pt-32 lg:max-w-[900px]"
      >
        {/* Catchcopy - First line emphasized */}
        <h1 className="font-serif font-normal text-[28px] leading-[1.3] tracking-[-0.5px] text-[#111] md:text-[36px] lg:text-[48px]">
          Webサイトのコーディングと
          <br className="hidden md:block" />
          Webライティングを行っています。
        </h1>

        {/* Body text - Normal size */}
        <div className="font-serif font-light text-[18px] leading-[1.8] tracking-[-0.3px] text-[#444] md:text-[20px] lg:text-[24px] lg:leading-[1.7] max-w-[720px]">
          <p>
            <span className="text-[#111] font-normal">
              HTML/CSS/JavaScript
            </span>
            を使用したレスポンシブデザインの実装と、読み手に伝わる文章の作成が得意です。
          </p>
          <p className="mt-6">
            AIツールを活用した効率的な制作プロセスを取り入れており、品質を保ちながらスピード感のある納品を心がけています。
          </p>
          <p className="mt-6">
            このポートフォリオに掲載している作品は、すべて実際に公開・出版したものです。
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section
        ref={profileRef}
        className="flex flex-col gap-8 pb-24 lg:flex-row lg:gap-16"
      >
        {/* Left column */}
        <div className="lg:w-[240px] lg:flex-shrink-0">
          <h2 className="font-mono font-medium text-[13px] leading-[1.2] tracking-[0.5px] text-[#666] uppercase">
            私について
          </h2>
          <p className="mt-2 font-serif text-[14px] leading-[1.6] text-[#999]">
            自己紹介と制作スタイル
          </p>
        </div>

        {/* Right column - Card style */}
        <div
          data-card
          className="flex flex-col flex-1 bg-[#f8f7f5] rounded-lg p-8 lg:p-10"
        >
          {/* Row 1 */}
          <div data-row className="flex flex-col gap-1 py-5">
            <p className="font-mono text-[12px] tracking-[0.5px] text-[#999] uppercase">
              趣味
            </p>
            <p className="font-mono text-[15px] text-[#111]">釣り、キャンプ</p>
          </div>

          {/* Row 2 */}
          <div data-row className="flex flex-col gap-1 py-5">
            <p className="font-mono text-[12px] tracking-[0.5px] text-[#999] uppercase">
              好きな食べ物
            </p>
            <p className="font-mono text-[15px] text-[#111]">蕎麦</p>
          </div>

          {/* Row 3 */}
          <div data-row className="flex flex-col gap-1 py-5">
            <p className="font-mono text-[12px] tracking-[0.5px] text-[#999] uppercase">
              言語
            </p>
            <p className="font-mono text-[15px] text-[#111]">
              HTML / CSS / JavaScript / VBA
            </p>
          </div>

          {/* Row 4 */}
          <div data-row className="flex flex-col gap-1 py-5">
            <p className="font-mono text-[12px] tracking-[0.5px] text-[#999] uppercase">
              AI
            </p>
            <p className="font-mono text-[15px] text-[#111] leading-[1.6]">
              ChatGPT、Claudeを使用。Cursor + Codex CLI + Claude
              Codeでコーディング。仕様駆動開発とマルチエージェントを勉強中。
            </p>
          </div>

          {/* Image with caption */}
          <div ref={catImageRef} className="mt-6 cursor-pointer">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <Image
                src="/ころも.jpg"
                alt="Portrait"
                fill
                className="object-cover transition-transform duration-300"
              />
            </div>
            <p className="mt-3 font-mono text-[12px] tracking-[0.5px] text-[#999] text-center opacity-70 transition-opacity">
              Working Buddy
            </p>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section
        ref={worksRef}
        className="flex flex-col gap-8 pt-8 pb-0 border-t border-[#e0e0e0]"
      >
        <div className="flex flex-col gap-2">
          <span className="font-mono font-medium text-[13px] leading-[1.2] tracking-[0.5px] text-[#666] uppercase">
            Works
          </span>
          <h2 className="font-serif font-normal text-[24px] leading-[1.4] tracking-[-0.5px] text-[#111] md:text-[28px] lg:text-[36px]">
            Webサイトから書籍まで、私の制作物をご覧ください。
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-col gap-8 pb-32 md:flex-row md:gap-6">
          {/* Project 01 - Sweets */}
          <article
            data-work-card
            className="flex flex-col gap-6 pt-6 border-t border-[#0034ad] md:flex-1"
          >
            <div className="flex flex-col gap-3 flex-1">
              <span className="font-mono font-medium text-[12px] leading-[1.2] tracking-[0.5px] text-[#0034ad] uppercase">
                Website
              </span>
              <h3 className="font-serif font-normal text-[18px] leading-[1.3] tracking-[-0.3px] text-[#0034ad] md:text-[20px] lg:text-[24px]">
                秋の人気
                <br />
                スイーツ特集
              </h3>
              <a
                href="/projects/sweets"
                className="mt-auto w-fit px-3 py-1.5 font-mono text-[12px] leading-[1.2] tracking-[0.5px] border border-[#0034ad] text-[#0034ad] rounded-md transition-colors hover:bg-[#0034ad] hover:text-white"
                aria-label="秋の人気スイーツ特集サイトの詳細を見る"
              >
                Explore →
              </a>
            </div>
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <Image
                src="/SweetsSite_thumb2.jpg"
                alt="秋の人気スイーツ特集サイトのサムネイル"
                fill
                className="object-cover transition-transform duration-300 hover:scale-[1.03]"
              />
            </div>
          </article>

          {/* Project 02 - Last Diet */}
          <article
            data-work-card
            className="flex flex-col gap-6 pt-6 border-t border-[#6e660a] md:flex-1"
          >
            <div className="flex flex-col gap-3 flex-1">
              <span className="font-mono font-medium text-[12px] leading-[1.2] tracking-[0.5px] text-[#6e660a] uppercase">
                Books
              </span>
              <h3 className="font-serif font-normal text-[18px] leading-[1.3] tracking-[-0.3px] text-[#6e660a] md:text-[20px] lg:text-[24px]">
                ラスト
                <br />
                ダイエット
              </h3>
              <a
                href="/projects/last-diet"
                className="mt-auto w-fit px-3 py-1.5 font-mono text-[12px] leading-[1.2] tracking-[0.5px] border border-[#6e660a] text-[#6e660a] rounded-md transition-colors hover:bg-[#6e660a] hover:text-white"
                aria-label="Last Dietの詳細を見る"
              >
                Explore →
              </a>
            </div>
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <Image
                src="/last-diet-thumb2.jpg"
                alt="Last Diet サムネイル"
                fill
                className="object-cover transition-transform duration-300 hover:scale-[1.03]"
              />
            </div>
          </article>

          {/* Project 03 - Portfolio */}
          <article
            data-work-card
            className="flex flex-col gap-6 pt-6 border-t border-[#ab0782] md:flex-1"
          >
            <div className="flex flex-col gap-3 flex-1">
              <span className="font-mono font-medium text-[12px] leading-[1.2] tracking-[0.5px] text-[#ab0782] uppercase">
                Website
              </span>
              <h3 className="font-serif font-normal text-[18px] leading-[1.3] tracking-[-0.3px] text-[#ab0782] md:text-[20px] lg:text-[24px]">
                ポートフォリオ
                <br />
                サイト
              </h3>
              <a
                href="/projects/portfolio"
                className="mt-auto w-fit px-3 py-1.5 font-mono text-[12px] leading-[1.2] tracking-[0.5px] border border-[#ab0782] text-[#ab0782] rounded-md transition-colors hover:bg-[#ab0782] hover:text-white"
                aria-label="ポートフォリオサイトの詳細を見る"
              >
                Explore →
              </a>
            </div>
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <Image
                src="/Portfolio_thumb.jpg"
                alt="ポートフォリオサイトのサムネイル"
                fill
                className="object-cover transition-transform duration-300 hover:scale-[1.03]"
              />
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
}
