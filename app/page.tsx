import Image from "next/image";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white px-[50px] max-w-[1280px] mx-auto">
      <Navigation />

      {/* Hero Section */}
      <section className="px-0 pt-16 pb-16 md:pt-24 md:pb-20 lg:max-w-[900px]">
        <h1 className="font-serif font-normal text-[28px] leading-[1.4] tracking-[-0.5px] text-[#111] md:text-[36px] lg:text-[48px] lg:leading-[1.3]">
          このポートフォリオサイトでは、私がこれまでに手がけてきたWebサイトや、Kindleで出版した書籍を紹介しています。
        </h1>
      </section>

      {/* Works Section Label */}
      <div className="pb-8">
        <span className="font-mono font-medium text-[13px] leading-[1.2] tracking-[0.5px] text-[#666] uppercase">
          Featured Works
        </span>
      </div>

      {/* Project Card 1 - Sweets */}
      <section className="flex flex-col gap-8 px-0 pt-10 pb-12 border-t border-[#0034ad] md:flex-row md:gap-16 md:items-center">
        {/* Text Content */}
        <div className="flex flex-col gap-5 md:flex-1">
          <span className="font-mono font-medium text-[12px] leading-[1.2] tracking-[0.5px] text-[#0034ad] uppercase">
            Website
          </span>
          <h2 className="font-serif font-normal text-[28px] leading-[1.2] tracking-[-0.5px] text-[#0034ad] md:text-[32px] lg:text-[44px]">
            秋の人気スイーツ特集
          </h2>
          <p className="font-serif font-light text-[16px] leading-[1.7] text-[#666] max-w-[400px]">
            秋に人気のスイーツを特集したデモWebサイト。Figmaデザインをもとに制作。
          </p>
          <a
            href="/projects/sweets"
            className="mt-4 w-fit px-5 py-2.5 font-mono text-[13px] leading-[1.2] tracking-[0.5px] bg-[#0034ad] text-white rounded-lg transition-all hover:bg-[#002080] hover:shadow-lg"
            aria-label="秋の人気スイーツ特集サイトの詳細を見る"
          >
            Explore →
          </a>
        </div>

        {/* Image */}
        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden md:flex-1 md:max-w-[500px]">
          <Image
            src="/SweetsSite_thumb2.jpg"
            alt="秋の人気スイーツ特集サイトのサムネイル画像"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Project Card 2 - Portfolio */}
      <section className="flex flex-col gap-8 px-0 pt-10 pb-12 border-t border-[#ab0782] md:flex-row md:gap-16 md:items-center">
        {/* Text */}
        <div className="flex flex-col gap-5 md:flex-1">
          <span className="font-mono font-medium text-[12px] leading-[1.2] tracking-[0.5px] text-[#ab0782] uppercase">
            Website
          </span>
          <h2 className="font-serif font-normal text-[28px] leading-[1.2] tracking-[-0.5px] text-[#ab0782] md:text-[32px] lg:text-[44px]">
            ポートフォリオサイト
          </h2>
          <p className="font-serif font-light text-[16px] leading-[1.7] text-[#666] max-w-[400px]">
            シンプルで見やすいポートフォリオサイトのコーディング。HTML/CSSで制作。
          </p>
          <a
            href="/projects/portfolio"
            className="mt-4 w-fit px-5 py-2.5 font-mono text-[13px] leading-[1.2] tracking-[0.5px] bg-[#ab0782] text-white rounded-lg transition-all hover:bg-[#8a0668] hover:shadow-lg"
            aria-label="ポートフォリオサイトの詳細を見る"
          >
            Explore →
          </a>
        </div>

        {/* Image */}
        <div className="relative w-full aspect-[4/3] md:flex-1 md:max-w-[500px] rounded-lg overflow-hidden">
          <Image
            src="/Home2.jpg"
            alt="ポートフォリオサイトのホーム画面"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Project Card 3 - Last Diet */}
      <section className="flex flex-col gap-8 px-0 pt-10 pb-32 border-t border-[#6e660a] md:flex-row md:gap-16 md:items-center">
        {/* Text */}
        <div className="flex flex-col gap-5 md:flex-1">
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
        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden md:flex-1 md:max-w-[500px]">
          <Image
            src="/last-diet-home2.jpg"
            alt="ラストダイエット"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
