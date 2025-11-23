import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function Projects() {
  return (
    <div id="top" className="min-h-screen bg-[#f8f6f3]">
      <div className="px-[50px] max-w-[1280px] mx-auto">
        <Navigation />

      {/* Page Header */}
      <header className="flex flex-col gap-6 pt-16 pb-20 pr-0 md:pt-32 md:pb-24 lg:max-w-[900px]">
        <div className="flex flex-col gap-3 text-[#0034ad]">
          <span className="font-mono font-medium text-[12px] leading-[1.2] tracking-[0.5px] uppercase">
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
      <main className="flex flex-col gap-20 pb-20 md:pb-32">
        {/* Gallery Image: Autumn Harvest Section */}
        <section className="flex flex-col gap-3 px-0 md:px-16 lg:pl-32 lg:pr-8">
          <div className="relative w-full aspect-[900/565] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/秋の実りを味わう2.jpg"
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
        <section className="flex flex-col gap-3 px-0 md:pr-32 lg:pr-48">
          <div className="relative w-full aspect-[920/660] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/誰もが愛する王道の甘さ3.jpg"
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
        <section className="flex flex-col gap-3 px-0 md:pl-32 lg:pl-48">
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/季節の新作2.jpg"
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
        <section className="flex flex-col gap-6 pr-0 lg:pr-24 lg:max-w-[800px]">
          <span className="font-mono font-medium text-[12px] leading-[1.2] tracking-[0.5px] text-[#666] uppercase">
            Responsive
          </span>
          <h2 className="font-serif font-normal text-[28px] leading-[1.3] tracking-[-0.5px] text-[#111] md:text-[32px] lg:text-[40px]">
            スマートフォン対応のレスポンシブデザイン。
          </h2>
        </section>

        {/* Gallery Image: Mobile Version */}
        <section className="flex flex-col gap-3 lg:pr-24">
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/SP版3.jpg"
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
      <section className="flex flex-col gap-6 px-0 pt-10 pb-16 border-t border-[#ccc]">
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
            className="w-fit px-5 py-2.5 font-mono text-[13px] leading-[1.2] tracking-[0.5px] bg-[#0034ad] text-white rounded-lg transition-all hover:bg-[#002080] hover:shadow-lg"
            aria-label="秋の人気スイーツ特集サイトを別タブで開く"
          >
            サイトを見る →
          </a>
        </div>
      </section>

      {/* Related Projects */}
      <section className="flex flex-col gap-8 pt-10 pb-0 border-t border-[#ccc]">
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
          <article className="flex flex-col gap-4 pt-6 border-t border-[#0034ad]/30 md:flex-1">
            <div className="flex flex-col gap-2 flex-1">
              <span className="font-mono text-[11px] tracking-[0.5px] text-[#0034ad]/60 uppercase">
                Website
              </span>
              <h3 className="font-serif font-normal text-[16px] leading-[1.3] tracking-[-0.3px] text-[#0034ad]/60 md:text-[18px]">
                秋の人気スイーツ特集
              </h3>
              <span className="mt-auto font-mono text-[11px] tracking-[0.5px] text-[#999]">
                現在のページ
              </span>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden opacity-60">
              <Image
                src="/Sweets_thumb.jpg"
                alt="秋の人気スイーツ特集デモサイトのサムネイル"
                fill
                className="object-cover"
              />
            </div>
          </article>

          {/* Project 02 - Last Diet */}
          <article className="flex flex-col gap-4 pt-6 border-t border-[#6e660a] md:flex-1">
            <div className="flex flex-col gap-2 flex-1">
              <span className="font-mono text-[11px] tracking-[0.5px] text-[#6e660a] uppercase">
                Books
              </span>
              <h3 className="font-serif font-normal text-[16px] leading-[1.3] tracking-[-0.3px] text-[#6e660a] md:text-[18px]">
                ラストダイエット
              </h3>
              <a
                href="/projects/last-diet"
                className="mt-auto w-fit px-3 py-1.5 font-mono text-[11px] leading-[1.2] tracking-[0.5px] border border-[#6e660a] text-[#6e660a] rounded-md transition-colors hover:bg-[#6e660a] hover:text-white"
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

          {/* Project 03 - Portfolio Site */}
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
