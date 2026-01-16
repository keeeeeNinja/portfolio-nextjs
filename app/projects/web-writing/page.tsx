"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import {
  gsap,
  ScrollTrigger,
  prefersReducedMotion,
  motion,
} from "../../utils/animations";

export default function WebWritingProject() {
  const headerRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const articleRef = useRef<HTMLElement>(null);
  const improvementRef = useRef<HTMLElement>(null);
  const messageRef = useRef<HTMLElement>(null);
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

    // Process cards animation
    if (processRef.current) {
      const cards = processRef.current.querySelectorAll("[data-card]");

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: motion.duration.normal,
            delay: index * 0.1,
            ease: motion.ease.default,
            scrollTrigger: {
              trigger: processRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }

    // Article section animation
    if (articleRef.current) {
      const sections = articleRef.current.querySelectorAll("[data-gallery]");

      sections.forEach((section, index) => {
        const content = section.querySelector("[data-content]");

        gsap.fromTo(
          content,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: motion.duration.slow,
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

    // Improvement section animation
    if (improvementRef.current) {
      gsap.fromTo(
        improvementRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: motion.duration.normal,
          ease: motion.ease.default,
          scrollTrigger: {
            trigger: improvementRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Message section animation
    if (messageRef.current) {
      gsap.fromTo(
        messageRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: motion.duration.normal,
          ease: motion.ease.default,
          scrollTrigger: {
            trigger: messageRef.current,
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
          <div className="flex flex-col gap-3 text-[#D97706]">
            <span
              data-label
              className="font-mono font-medium text-[12px] leading-[1.2] tracking-[0.5px] uppercase"
            >
              Writing
            </span>
            <h1 className="font-serif font-normal text-[32px] leading-[1.2] tracking-[-0.5px] md:text-[44px] lg:text-[56px]">
              Webライティング
            </h1>
          </div>
          <p className="font-serif font-light text-[18px] leading-[1.7] tracking-[-0.3px] text-[#444] md:text-[20px] lg:text-[24px] max-w-[800px]">
            SEOを意識した構成設計で、読みやすく行動につながる記事を制作。初心者向けから実務記事まで、要件に合わせて丁寧に整えます。
          </p>
        </header>

        {/* Overview Comment */}
        <section className="mb-16 p-6 bg-[#FFFBEB] rounded-lg border-l-4 border-[#D97706]">
          <p className="font-serif font-light text-[16px] leading-[1.8] text-[#444] md:text-[18px]">
            想定案件：家事時短（洗濯）記事／約1,000字。検索意図を「平日夜に負担を減らしたい層」と定義し、結論→理由→具体策3点で構成しました。数値は目安＋条件を添えて断定を避け、読者が今日から実行できるルーティンとして提案しています。
          </p>
        </section>

        {/* Production Process */}
        <section ref={processRef} className="mb-20">
          <div className="flex flex-col gap-3 mb-8">
            <span className="font-mono font-medium text-[12px] leading-[1.2] tracking-[0.5px] text-[#666] uppercase">
              Production Process
            </span>
            <h2 className="font-serif font-normal text-[28px] leading-[1.3] tracking-[-0.5px] text-[#111] md:text-[32px]">
              制作プロセス
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: 案件想定 */}
            <div
              data-card
              className="flex flex-col gap-4 p-6 bg-white rounded-lg border-t-4 border-[#D97706] shadow-sm"
            >
              <h3 className="font-mono font-medium text-[13px] tracking-[0.5px] text-[#D97706] uppercase">
                案件想定
              </h3>
              <ul className="flex flex-col gap-2 font-serif font-light text-[14px] leading-[1.7] text-[#444]">
                <li>文字数：約1,000字</li>
                <li>想定読者：平日夜に家事負担を減らしたい層</li>
                <li>目的：今日から実行できる手順を提示</li>
              </ul>
            </div>

            {/* Card 2: 設計（狙い） */}
            <div
              data-card
              className="flex flex-col gap-4 p-6 bg-white rounded-lg border-t-4 border-[#D97706] shadow-sm"
            >
              <h3 className="font-mono font-medium text-[13px] tracking-[0.5px] text-[#D97706] uppercase">
                設計（狙い）
              </h3>
              <ul className="flex flex-col gap-2 font-serif font-light text-[14px] leading-[1.7] text-[#444]">
                <li>検索意図：帰宅後に洗濯が負担で、具体策をすぐ知りたい層</li>
                <li>結論ファースト</li>
                <li>導入→本質→打ち手3点→まとめ</li>
              </ul>
            </div>

            {/* Card 3: 品質基準 */}
            <div
              data-card
              className="flex flex-col gap-4 p-6 bg-white rounded-lg border-t-4 border-[#D97706] shadow-sm"
            >
              <h3 className="font-mono font-medium text-[13px] tracking-[0.5px] text-[#D97706] uppercase">
                品質基準
              </h3>
              <ul className="flex flex-col gap-2 font-serif font-light text-[14px] leading-[1.7] text-[#444]">
                <li>断定回避（目安＋条件を併記）</li>
                <li>数字の根拠を明示</li>
                <li>冗長表現の削除</li>
                <li>1文の長さを適切に</li>
              </ul>
            </div>

            {/* Card 4: 改善プロセス */}
            <div
              data-card
              className="flex flex-col gap-4 p-6 bg-white rounded-lg border-t-4 border-[#D97706] shadow-sm"
            >
              <h3 className="font-mono font-medium text-[13px] tracking-[0.5px] text-[#D97706] uppercase">
                改善プロセス
              </h3>
              <ul className="flex flex-col gap-2 font-serif font-light text-[14px] leading-[1.7] text-[#444]">
                <li>初稿→指摘→修正</li>
                <li>文字数を要件に合わせて圧縮</li>
                <li>表現を安全側へ調整</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Article Section */}
        <main ref={articleRef} className="flex flex-col gap-20 pb-20 md:pb-32">
          {/* Article: 洗濯の時短 */}
          <section
            data-gallery
            className="flex flex-col gap-6 px-0 md:px-16 lg:pl-32 lg:pr-8"
          >
            <span className="font-mono font-medium text-[12px] leading-[1.2] tracking-[0.5px] text-[#666] uppercase">
              Sample Article
            </span>
            <div data-content className="prose prose-lg max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h2 className="font-serif font-normal text-[28px] leading-[1.3] tracking-[-0.5px] text-[#111] md:text-[32px] lg:text-[36px] mt-8 mb-4">
                      {children}
                    </h2>
                  ),
                  h2: ({ children }) => (
                    <h3 className="font-serif font-normal text-[22px] leading-[1.4] tracking-[-0.3px] text-[#333] md:text-[24px] lg:text-[28px] mt-6 mb-3">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="font-serif font-light text-[16px] leading-[1.8] text-[#444] mb-4 md:text-[18px]">
                      {children}
                    </p>
                  ),
                }}
              >
                {`# 洗濯の時短は「干す・畳む」削減が鉄則【平日10分短縮のコツ】

「洗濯が終わらない…」帰宅後に山積みの洗濯物を見て、ため息をついたことはありませんか？洗濯機を回す、干す、取り込む、畳む、片付ける…一連の流れで30分以上かかることも珍しくありません。この記事では、今日から実践できる3つの時短テクニックをご紹介します。

## 洗濯時短の本質は「手作業時間」の削減

洗濯で本当に時間を食うのは何でしょうか？洗濯機がまわる40分間ではありません。実は「干す」「畳む」の手作業です。多くの家庭で「この2つが面倒」という声が聞かれます。洗濯機の稼働時間は変えられませんが、手作業なら削減可能。この2つを攻略すれば、平日10分前後の短縮は十分現実的です。

## 時短テクニック1：すすぎ1回で時短

最も簡単な時短は、すすぎを2回から1回に減らすこと。「すすぎ1回OK」洗剤なら、1回あたり10分前後の短縮が見込めます（機種により異なります）。すすぎ1回対応洗剤は泡切れが良く、洗剤残りの心配が少なくなります。洗剤を変えるだけなので、誰でも今日から実践できます。ただし敏感肌の方や赤ちゃんの衣類には、すすぎ2回がおすすめです。

## 時短テクニック2：部屋干しで干す時間を削減

部屋干しは意外と有効です。生乾き臭の原因は、濡れた状態が長時間続くこと。できるだけ早く乾かせば、清潔さを保ちやすくなります。除湿機とサーキュレーターを併用すれば、バスタオルも3〜5時間程度で乾くことが多いです（室温・湿度・風量による）。天候を気にせず洗濯でき、帰宅後すぐ取り込めるのも利点です。アーチ干し（外側に長いもの、内側に短いもの）で空気の流れを作ると、さらに乾燥が早まります。

## 時短テクニック3：畳まない収納で畳む時間を大幅に削減

「洗濯物は畳むもの」という固定観念を捨てると、時短が一気に進みます。ハンガー収納なら干したままクローゼットへ直行。家族全員が取り出しやすく、洗濯分担のハードルも下がります。引き出し投げ込みは下着や靴下に向いています。畳むアイテムを厳選すれば作業時間を大幅に削減できます。ただし来客用やフォーマル衣類には不向きなので、使い分けが必要です。

洗濯時短の鉄則は「干す・畳む」の手作業削減。すすぎ1回、早めの部屋干し、畳まない収納の3つを組み合わせれば、平日10分前後の時短が見込めます。ぜひ今日から試してみてください。`}
              </ReactMarkdown>
            </div>
          </section>
        </main>

        {/* Improvement Process */}
        <section
          ref={improvementRef}
          className="mb-16 py-10 border-t border-[#ccc]"
        >
          <div className="flex flex-col gap-3 mb-8">
            <span className="font-mono font-medium text-[12px] leading-[1.2] tracking-[0.5px] text-[#666] uppercase">
              Improvement
            </span>
            <h2 className="font-serif font-normal text-[28px] leading-[1.3] tracking-[-0.5px] text-[#111] md:text-[32px]">
              改善プロセス
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#D97706]">
                  <th className="py-3 px-4 text-left font-mono font-medium text-[13px] tracking-[0.5px] text-[#D97706] uppercase">
                    改善点
                  </th>
                  <th className="py-3 px-4 text-left font-mono font-medium text-[13px] tracking-[0.5px] text-[#666] uppercase">
                    Before
                  </th>
                  <th className="py-3 px-4 text-left font-mono font-medium text-[13px] tracking-[0.5px] text-[#666] uppercase">
                    After
                  </th>
                </tr>
              </thead>
              <tbody className="font-serif font-light text-[14px] leading-[1.7] text-[#444]">
                <tr className="border-b border-[#eee]">
                  <td className="py-3 px-4 font-medium text-[#333]">文字数</td>
                  <td className="py-3 px-4">1,200字</td>
                  <td className="py-3 px-4">約1,000字に圧縮</td>
                </tr>
                <tr className="border-b border-[#eee]">
                  <td className="py-3 px-4 font-medium text-[#333]">表現</td>
                  <td className="py-3 px-4">断定・一般化</td>
                  <td className="py-3 px-4">「目安＋条件」に修正</td>
                </tr>
                <tr className="border-b border-[#eee]">
                  <td className="py-3 px-4 font-medium text-[#333]">整合性</td>
                  <td className="py-3 px-4">順番が曖昧</td>
                  <td className="py-3 px-4">実行順を明確化</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Message Section */}
        <section
          ref={messageRef}
          className="mb-16 py-10 border-t border-[#ccc]"
        >
          <blockquote className="pl-6 border-l-4 border-[#D97706]">
            <p className="font-serif font-normal text-[24px] leading-[1.5] tracking-[-0.3px] text-[#333] md:text-[28px]">
              「要件（文字数・構成・トンマナ）を優先し、修正で合わせ切るのが得意です。」
            </p>
          </blockquote>
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
            <article className="flex flex-col gap-3 pt-6 border-t border-[#D97706]/30 md:w-[calc(50%-8px)] lg:flex-1">
              <div className="flex flex-col gap-2 flex-1">
                <span className="font-mono text-[11px] tracking-[0.5px] text-[#D97706]/60 uppercase">
                  Writing
                </span>
                <h3 className="font-serif font-normal text-[14px] leading-[1.3] tracking-[-0.3px] text-[#D97706]/60 md:text-[16px]">
                  Webライティング
                </h3>
                <span className="mt-auto font-mono text-[10px] tracking-[0.5px] text-[#999]">
                  現在のページ
                </span>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden opacity-60 bg-[#D97706]/10 flex items-center justify-center">
                <span className="font-mono text-[12px] text-[#D97706]/60">
                  Writing
                </span>
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

            {/* Project 03 - Sweets */}
            <article className="flex flex-col gap-3 pt-6 border-t border-[#ab0782] md:w-[calc(50%-8px)] lg:flex-1">
              <div className="flex flex-col gap-2 flex-1">
                <span className="font-mono text-[11px] tracking-[0.5px] text-[#ab0782] uppercase">
                  Website
                </span>
                <h3 className="font-serif font-normal text-[14px] leading-[1.3] tracking-[-0.3px] text-[#ab0782] md:text-[16px]">
                  秋の人気スイーツ特集
                </h3>
                <a
                  href="/projects/sweets"
                  className="mt-auto w-fit px-2 py-1 font-mono text-[10px] leading-[1.2] tracking-[0.5px] border border-[#ab0782] text-[#ab0782] rounded-md transition-colors hover:bg-[#ab0782] hover:text-white"
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

            {/* Project 04 - Portfolio */}
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
