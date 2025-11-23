import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function LastDietProject() {
  return (
    <div id="top" className="min-h-screen bg-[#EDE3D5]">
      <div className="px-[50px] max-w-[1280px] mx-auto">
        <Navigation />

      {/* Page Header */}
      <header className="flex flex-col gap-[19px] pt-[72px] pb-20 pr-0 md:pt-[200px] md:pb-20 lg:pr-[100px]">
        <div className="flex flex-col gap-[19px] text-[#6e660a]">
          <h1 className="font-mono font-medium text-[20px] leading-[1.03] tracking-[-0.72px] underline">
            Books
          </h1>
          <p className="font-serif font-light text-[28px] leading-[1.35] tracking-[-0.84px] md:text-[36px] lg:text-[56px] lg:leading-[1.2] lg:tracking-[-2.25px]">
            ラストダイエット
          </p>
        </div>
        <p className="font-serif font-light text-[24px] leading-[1.35] tracking-[-0.84px] text-black md:text-[32px] lg:text-[40px] lg:leading-[1.2] lg:tracking-[-2.25px]">
          Kindleで出版したダイエット本です。
        </p>
      </header>

      {/* Project Gallery */}
      <main className="flex flex-col gap-20 pb-20 md:pb-[100px]">
        {/* Gallery Image 1 */}
        <section className="flex flex-col gap-6 px-0 pt-[30px] pb-20 md:px-[100px] lg:pl-[200px] lg:pr-[80px]">
          <div className="relative w-full aspect-[900/1256] rounded-[10px] overflow-hidden">
            <Image
              src="/last-diet-intro.jpg"
              alt="Last Diet 表紙"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-serif font-light text-base leading-[1.25] tracking-[-0.72px] text-[#313131]">
            はじめに
          </p>
        </section>

        {/* Gallery Image 2 */}
        <section className="flex flex-col gap-6 px-0 pt-[30px] pb-[50px] md:pb-20 md:pr-[200px] lg:pr-[270px]">
          <div className="relative w-full aspect-[900/1359] rounded-[10px] overflow-hidden">
            <Image
              src="/last-diet-chapter1.jpg"
              alt="Last Diet ページサンプル"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-serif font-light text-base leading-[1.25] tracking-[-0.72px] text-[#313131]">
            ページサンプル
          </p>
        </section>

        {/* Description */}
        <section className="pr-0 lg:pr-[120px]">
          <p className="font-serif font-light text-[28px] leading-[1.35] tracking-[-0.84px] text-black md:text-[36px] lg:text-[50px] lg:leading-[1.2] lg:tracking-[-2.25px]">
            ラストダイエットは、食生活を整える長期的なダイエットの紹介です。
          </p>
        </section>
      </main>

      {/* External Link Section */}
      <section className="flex flex-col gap-12 px-0 pt-[30px] pb-0">
        <p className="font-serif font-light text-[28px] leading-[1.35] tracking-[-0.84px] text-black md:text-[36px] lg:text-[50px] lg:leading-[1.2] lg:tracking-[-2.25px]">
          ラストダイエット
          <a
            href="https://www.amazon.co.jp/%E3%83%A9%E3%82%B9%E3%83%88%E3%83%80%E3%82%A4%E3%82%A8%E3%83%83%E3%83%88-%E4%BA%BA%E7%94%9F%E6%9C%80%E5%BE%8C%E3%81%AE%E3%83%80%E3%82%A4%E3%82%A8%E3%83%83%E3%83%88%E3%81%AB%E3%81%AA%E3%82%8B%E3%81%A7%E3%81%97%E3%82%87%E3%81%86%E3%80%82-%E5%96%9C%E5%B3%B6%E3%81%93%E3%82%8D%E3%82%82-ebook/dp/B0FW2PN2GR"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:underline"
            aria-label="AmazonでLast Dietを見る"
          >
            Amazonで見る
          </a>
        </p>

        {/* Related Projects Grid */}
        <div className="flex flex-col gap-12 pb-[160px] md:flex-row md:gap-12">
          {/* Current Project Card */}
          <article className="flex flex-col gap-12 pt-[50px] border-t-[0.5px] border-[#6e660a] md:flex-1">
            <div className="flex flex-col gap-[19px] flex-1">
              <h3 className="font-mono font-medium text-base leading-[1.03] tracking-[-0.72px] text-[#6e660a] underline">
                Books
              </h3>
              <p className="font-serif font-light text-[28px] leading-[1.35] tracking-[-0.84px] text-[#6e660a] md:text-[36px] lg:text-[50px] lg:leading-[1.2] lg:tracking-[-2.25px]">
                ラスト<br />ダイエット
              </p>
              <a
                href="#top"
                className="mt-auto w-fit px-[10px] pt-1 pb-[7px] font-mono font-normal text-base leading-[1.03] tracking-[-0.72px] border border-[#6e660a] transition-colors hover:bg-[#6e660a] hover:text-white"
                aria-label="ページトップに戻る"
              >
                Explore
              </a>
            </div>
            <div className="relative w-full aspect-square rounded-[4px] overflow-hidden">
              <Image
                src="/last-diet-thumb.png"
                alt="Last Diet サムネイル"
                fill
                className="object-cover"
              />
            </div>
          </article>

          {/* Project 02 - Sweets */}
          <article className="flex flex-col gap-12 pt-[50px] border-t-[0.5px] border-[#0034ad] md:flex-1">
            <div className="flex flex-col gap-[19px] flex-1">
              <h3 className="font-mono font-medium text-base leading-[1.03] tracking-[-0.72px] underline text-[#0034ad]">
                Website
              </h3>
              <p className="font-serif font-light text-[28px] leading-[1.35] tracking-[-0.84px] text-[#0034ad] md:text-[32px] lg:text-[40px] lg:leading-[1.2] lg:tracking-[-2.25px]">
                秋の人気<br />スイーツ特集
              </p>
              <a
                href="/projects/sweets"
                className="mt-auto w-fit px-[10px] pt-1 pb-[7px] font-mono font-normal text-base leading-[1.03] tracking-[-0.72px] border border-[#0034ad] transition-colors hover:bg-[#0034ad] hover:text-white"
                aria-label="秋の人気スイーツ特集サイトの詳細を見る"
              >
                Explore
              </a>
            </div>
            <div className="relative w-full aspect-square rounded-[4px] overflow-hidden">
              <Image
                src="/SweetsSite_thumb2.jpg"
                alt="秋の人気スイーツ特集サイトのサムネイル"
                fill
                className="object-cover"
              />
            </div>
          </article>

          {/* Project 03 - Portfolio */}
          <article className="flex flex-col gap-12 pt-[50px] border-t-[0.5px] border-[#ab0782] md:flex-1">
            <div className="flex flex-col gap-[19px] flex-1">
              <h3 className="font-mono font-medium text-base leading-[1.03] tracking-[-0.72px] underline text-[#ab0782]">
                Website
              </h3>
              <p className="font-serif font-light text-[28px] leading-[1.35] tracking-[-0.84px] text-[#ab0782] md:text-[36px] lg:text-[50px] lg:leading-[1.2] lg:tracking-[-2.25px]">
                ポートフォリオサイト
              </p>
              <a
                href="/projects/portfolio"
                className="mt-auto w-fit px-[10px] pt-1 pb-[7px] font-mono font-normal text-base leading-[1.03] tracking-[-0.72px] border border-[#ab0782] transition-colors hover:bg-[#ab0782] hover:text-white"
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
