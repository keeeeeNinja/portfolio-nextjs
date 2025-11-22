import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function PortfolioProject() {
  return (
    <div id="top" className="min-h-screen bg-[#EDE3D5]">
      <div className="px-[50px] max-w-[1280px] mx-auto">
        <Navigation />

      {/* Page Header */}
      <header className="flex flex-col gap-[19px] pt-[72px] pb-20 pr-0 md:pt-[200px] md:pb-20 lg:pr-[100px]">
        <div className="flex flex-col gap-[19px] text-[#ab0782]">
          <h1 className="font-mono font-medium text-[20px] leading-[1.03] tracking-[-0.72px] underline">
            Website
          </h1>
          <p className="font-serif font-light text-[56px] leading-[1.2] tracking-[-2.25px]">
            ポートフォリオサイト
          </p>
        </div>
        <p className="font-serif font-light text-[40px] leading-[1.2] tracking-[-2.25px] text-black">
          ポートフォリオサイトのコーディングをいたしました。HTML/CSSで制作しました。
        </p>
      </header>

      {/* Project Gallery */}
      <main className="flex flex-col gap-20 pb-20 md:pb-[100px]">
        {/* Gallery Image 1 */}
        <section className="flex flex-col gap-6 px-0 pt-[30px] pb-20 md:px-[100px] lg:pl-[200px] lg:pr-[80px]">
          <div className="relative w-full aspect-[667/484] rounded-[10px] overflow-hidden">
            <Image
              src="/Home2.jpg"
              alt="ポートフォリオサイトのホーム画面"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-serif font-light text-base leading-[1.25] tracking-[-0.72px] text-[#313131]">
            ホーム画面
          </p>
        </section>

        {/* Gallery Image 2 */}
        <section className="flex flex-col gap-6 px-0 pt-[30px] pb-[50px] md:pb-20 md:pr-[200px] lg:pr-[270px]">
          <div className="relative w-full aspect-[910/553] rounded-[10px] overflow-hidden">
            <Image
              src="/Section_About3.jpg"
              alt="ポートフォリオサイトのAboutセクション"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-serif font-light text-base leading-[1.25] tracking-[-0.72px] text-[#313131]">
            私について
          </p>
        </section>

        {/* Gallery Image 3 */}
        <section className="flex flex-col gap-6 px-0 pt-[30px] pb-[50px] md:pb-20 md:pl-[200px] lg:pl-[200px]">
          <div className="relative w-full aspect-[980/758] rounded-[10px] overflow-hidden">
            <Image
              src="/Work.jpg"
              alt="ポートフォリオサイトの詳細ページ"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-serif font-light text-base leading-[1.25] tracking-[-0.72px] text-[#313131]">
            Work
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
          <div className="relative w-full aspect-[1060/640] rounded-[10px] overflow-hidden">
            <Image
              src="/Portofolio_SP版5.jpg"
              alt="ポートフォリオサイトのスマートフォン版画面"
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
          ポートフォリオサイト<br />
          <a
            href="https://portfolio-site-xi-tan.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:underline"
            aria-label="ポートフォリオサイトを別タブで開く"
          >
            https://portfolio-site-xi-tan.vercel.app/
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
                Portfolio<br />Site
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
                src="/Portfolio_thumb.jpg"
                alt="ポートフォリオサイトのサムネイル"
                fill
                className="object-cover"
              />
            </div>
          </article>

          {/* Project 02 */}
          <article className="flex flex-col gap-12 pt-[50px] border-t-[0.5px] border-[#0034ad] md:flex-1">
            <div className="flex flex-col gap-[19px]">
              <h3 className="font-mono font-medium text-base leading-[1.03] tracking-[-0.72px] underline text-[#0034ad]">
                Website
              </h3>
              <p className="font-serif font-light text-[50px] leading-[1.2] tracking-[-2.25px] text-[#0034ad]">
                秋の人気<br />スイーツ特集
              </p>
              <a
                href="/projects/sweets"
                className="w-fit px-[10px] pt-1 pb-[7px] font-mono font-normal text-base leading-[1.03] tracking-[-0.72px] border border-[#0034ad] transition-colors hover:bg-[#0034ad] hover:text-white"
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

          {/* Project 03 */}
          <article className="flex flex-col gap-12 pt-[50px] border-t-[0.5px] border-[#6e660a] md:flex-1">
            <div className="flex flex-col gap-[19px]">
              <h3 className="font-mono font-medium text-base leading-[1.03] tracking-[-0.72px] underline text-[#6e660a]">
                Design
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
                src="/project3.png"
                alt="Magazine study"
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
