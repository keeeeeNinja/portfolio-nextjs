import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function Projects() {
  return (
    <div id="top" className="min-h-screen bg-[#EDE3D5]">
      <div className="px-[50px] max-w-[1280px] mx-auto">
        <Navigation />

      {/* Page Header */}
      <header className="flex flex-col gap-[19px] pt-[72px] pb-20 pr-0 md:pt-[200px] md:pb-20 lg:pr-[100px]">
        <div className="flex flex-col gap-[19px] text-[#5f00ad]">
          <h1 className="font-mono font-medium text-[20px] leading-[1.03] tracking-[-0.72px] underline">
            Website
          </h1>
          <p className="font-serif font-light text-[56px] leading-[1.2] tracking-[-2.25px]">
            秋の人気スイーツ特集
          </p>
        </div>
        <p className="font-serif font-light text-[40px] leading-[1.2] tracking-[-2.25px] text-black">
          秋に人気のスイーツを特集したデモWebサイトです。Figmaデザインをもとに、HTML/CSS/JavaScriptで制作しました。
        </p>
      </header>

      {/* Project Gallery */}
      <main className="flex flex-col gap-20 pb-20 md:pb-[100px]">
        {/* Gallery Image: Autumn Harvest Section */}
        <section className="flex flex-col gap-6 px-0 pt-[30px] pb-20 md:px-[100px] lg:pl-[200px] lg:pr-[80px]">
          <div className="relative w-full aspect-[900/565] rounded-[10px] overflow-hidden">
            <Image
              src="/秋の実りを味わう2.jpg"
              alt="秋の実りを味わうスイーツセクション"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-serif font-light text-base leading-[1.25] tracking-[-0.72px] text-[#313131]">
            秋の実りを味わう
          </p>
        </section>

        {/* Gallery Image: Classic Sweetness Section */}
        <section className="flex flex-col gap-6 px-0 pt-[30px] pb-[50px] md:pb-20 md:pr-[200px] lg:pr-[270px]">
          <div className="relative w-full aspect-[920/660] rounded-[10px] overflow-hidden">
            <Image
              src="/誰もが愛する王道の甘さ3.jpg"
              alt="誰もが愛する王道の甘さスイーツセクション"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-serif font-light text-base leading-[1.25] tracking-[-0.72px] text-[#313131]">
            誰もが愛する王道の甘さ
          </p>
        </section>

        {/* Gallery Image: Seasonal New Products Section */}
        <section className="flex flex-col gap-6 px-0 pt-[30px] pb-[50px] md:pb-20 md:pl-[200px] lg:pl-[200px]">
          <div className="relative w-full aspect-[4/3] rounded-[10px] overflow-hidden">
            <Image
              src="/季節の新作2.jpg"
              alt="季節の新作スイーツセクション"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-serif font-light text-base leading-[1.25] tracking-[-0.72px] text-[#313131]">
            季節の新作
          </p>
        </section>

        {/* Responsive Design Description */}
        <section className="pr-0 lg:pr-[120px]">
          <p className="font-serif font-light text-[50px] leading-[1.2] tracking-[-2.25px] text-black">
            スマートフォン対応のレスポンシブデザイン。
          </p>
        </section>

        {/* Gallery Image: Mobile Version */}
        <section className="flex flex-col gap-5 lg:pr-[120px]">
          <div className="relative w-full aspect-[4/3] rounded-[10px] overflow-hidden">
            <Image
              src="/SP版3.jpg"
              alt="秋の人気スイーツ特集サイトのスマートフォン版画面"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-serif font-light text-[30px] leading-[1.2] tracking-[-1.35px] text-black">
            スマートフォン版
          </p>
        </section>
      </main>

      {/* External Link Section */}
      <section className="flex flex-col gap-12 px-0 pt-[30px] pb-0 border-t border-[#4f4f4f]/30 lg:pr-[120px]">
        <p className="font-serif font-light text-[50px] leading-[1.2] tracking-[-2.25px] text-black">
          秋の人気スイーツ特集サイト<br />
          <a
            href="https://autumn-sweets.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:underline"
            aria-label="秋の人気スイーツ特集サイトを別タブで開く"
          >
            https://autumn-sweets.vercel.app/
          </a>
        </p>

        {/* Related Projects Grid */}
        <div className="flex flex-col gap-12 md:flex-row md:gap-12">
          {/* Current Project Card */}
          <article className="flex flex-col gap-12 pt-[50px] border-t-[0.5px] border-[#ab0782] md:flex-1">
            <div className="flex flex-col gap-[19px]">
              <h3 className="font-mono font-medium text-base leading-[1.03] tracking-[-0.72px] text-[#ab0782] underline">
                Website
              </h3>
              <p className="font-serif font-light text-[50px] leading-[1.2] tracking-[-2.25px] text-[#ab0782]">
                Autumn Sweets<br />Demo Site
              </p>
              <a
                href="#top"
                className="w-fit px-[10px] pt-1 pb-[7px] font-mono font-normal text-base leading-[1.03] tracking-[-0.72px] border border-[#ab0782] transition-colors hover:bg-[#ab0782] hover:text-white"
                aria-label="ページトップに戻る"
              >
                Explore
              </a>
            </div>
            <div className="relative w-full aspect-square rounded-[4px] overflow-hidden">
              <Image
                src="/Sweets_thumb.jpg"
                alt="秋の人気スイーツ特集デモサイトのサムネイル"
                fill
                className="object-cover"
              />
            </div>
          </article>

          {/* Project 02 */}
          <article className="flex flex-col gap-12 pt-[50px] border-t-[0.5px] border-[#6e660a] md:flex-1">
            <div className="flex flex-col gap-[19px]">
              <h3 className="font-mono font-medium text-base leading-[1.03] tracking-[-0.72px] underline text-[#6e660a]">
                Editorial
              </h3>
              <p className="font-serif font-light text-[50px] leading-[1.2] tracking-[-2.25px] text-[#6e660a]">
                Magazine<br />study
              </p>
              <button className="border border-[#6e660a] px-[10px] pt-1 pb-[7px] w-fit">
                <span className="font-mono font-normal text-base leading-[1.03] tracking-[-0.72px] text-[#6e660a]">
                  Explore
                </span>
              </button>
            </div>
            <div className="relative w-full aspect-square rounded-[4px] overflow-hidden">
              <Image
                src="/explore2.png"
                alt="Magazine spread"
                fill
                className="object-cover"
              />
            </div>
          </article>

          {/* Project 03 - Portfolio Site */}
          <article className="flex flex-col gap-12 pt-[50px] border-t-[0.5px] border-[#ab0782] md:flex-1">
            <div className="flex flex-col gap-[19px]">
              <h3 className="font-mono font-medium text-base leading-[1.03] tracking-[-0.72px] underline text-[#ab0782]">
                Website
              </h3>
              <p className="font-serif font-light text-[50px] leading-[1.2] tracking-[-2.25px] text-[#ab0782]">
                Portfolio<br />Site
              </p>
              <a
                href="/projects/portfolio"
                className="w-fit px-[10px] pt-1 pb-[7px] font-mono font-normal text-base leading-[1.03] tracking-[-0.72px] border border-[#ab0782] transition-colors hover:bg-[#ab0782] hover:text-white"
                aria-label="ポートフォリオサイトの詳細を見る"
              >
                Explore
              </a>
            </div>
            <div className="relative w-full aspect-square rounded-[4px] overflow-hidden">
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
