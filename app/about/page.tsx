import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white/40 to-white/0 px-[50px] max-w-[1280px] mx-auto">
      <Navigation />

      {/* About me */}
      <section className="flex flex-col gap-[19px] pt-[30px] pb-[100px] md:pt-[200px]">
        <div className="font-serif font-light text-[28px] leading-[1.35] tracking-[-0.84px] text-black md:text-[36px] lg:text-[50px] lg:leading-[1.2] lg:tracking-[-2.25px]">
          <p>私はWebサイトのコーディングとWebライティングを行っています。HTML/CSS/JavaScriptを使用したレスポンシブデザインの実装と、読み手に伝わる文章の作成が得意です。</p>
          <p>&nbsp;</p>
          <p>AIツールを活用した効率的な制作プロセスを取り入れており、品質を保ちながらスピード感のある納品を心がけています。</p>
          <p>&nbsp;</p>
          <p>このポートフォリオに掲載している作品は、すべて実際に公開・出版したものです。</p>
        </div>
      </section>

      {/* Right now I am */}
      <section className="flex flex-col gap-[50px] pb-[100px] lg:flex-row">
        {/* Left column */}
        <div className="border-t border-[#4f4f4f]/30 py-10 lg:w-[565px]">
          <p className="font-mono font-normal text-base leading-[1.03] tracking-[-0.72px] text-black">
            私について
          </p>
        </div>

        {/* Right column */}
        <div className="flex flex-col flex-1">
          {/* Row 1 */}
          <div className="flex gap-[19px] border-t border-[#4f4f4f]/30 py-[30px] font-mono font-normal text-base leading-[1.03] tracking-[-0.72px] text-black">
            <p>趣味:</p>
            <p>釣り、キャンプ</p>
          </div>

          {/* Row 2 */}
          <div className="flex gap-[19px] border-t border-[#4f4f4f]/30 py-[30px] font-mono font-normal text-base leading-[1.03] tracking-[-0.72px] text-black">
            <p>好きな食べ物:</p>
            <p>蕎麦</p>
          </div>

          {/* Row 3 */}
          <div className="flex gap-[19px] border-t border-[#4f4f4f]/30 py-[30px] font-mono font-normal text-base leading-[1.03] tracking-[-0.72px] text-black">
            <p>言語:</p>
            <p>HTML / CSS / JavaScript / VBA</p>
          </div>

          {/* Row 4 */}
          <div className="flex gap-[19px] border-t border-[#4f4f4f]/30 py-[30px] font-mono font-normal text-base leading-[1.03] tracking-[-0.72px] text-black">
            <p>AI:</p>
            <p>ChatGPT、Claudeを使用。Cursor + Codex CLI + Claude Codeでコーディング。仕様駆動開発とマルチエージェントを勉強中。</p>
          </div>

          {/* Image */}
          <div className="relative w-full aspect-square shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden">
            <Image
              src="/ころも.jpg"
              alt="Portrait of woman"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Explore More */}
      <section className="flex flex-col gap-12 pt-[30px] pb-0 border-t border-[#4f4f4f]/30">
        <p className="font-serif font-light text-[50px] leading-[1.2] tracking-[-2.25px] text-black">
          Webサイトから書籍まで、私の制作物をご覧ください。
        </p>

        {/* Projects Grid */}
        <div className="flex flex-col gap-12 pb-[160px] md:flex-row md:gap-12">
          {/* Project 01 - Sweets */}
          <article className="flex flex-col gap-12 pt-[50px] border-t-[0.5px] border-[#0034ad] md:flex-1">
            <div className="flex flex-col gap-[19px] flex-1">
              <h3 className="font-mono font-medium text-base leading-[1.03] tracking-[-0.72px] underline text-[#0034ad]">
                Website
              </h3>
              <p className="font-serif font-light text-[28px] leading-[1.35] tracking-[-0.84px] text-[#0034ad] md:text-[36px] lg:text-[50px] lg:leading-[1.2] lg:tracking-[-2.25px]">
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

          {/* Project 02 - Last Diet */}
          <article className="flex flex-col gap-12 pt-[50px] border-t-[0.5px] border-[#6e660a] md:flex-1">
            <div className="flex flex-col gap-[19px] flex-1">
              <h3 className="font-mono font-medium text-base leading-[1.03] tracking-[-0.72px] underline text-[#6e660a]">
                Books
              </h3>
              <p className="font-serif font-light text-[28px] leading-[1.35] tracking-[-0.84px] text-[#6e660a] md:text-[36px] lg:text-[50px] lg:leading-[1.2] lg:tracking-[-2.25px]">
                ラスト<br />ダイエット
              </p>
              <a
                href="/projects/last-diet"
                className="mt-auto w-fit px-[10px] pt-1 pb-[7px] font-mono font-normal text-base leading-[1.03] tracking-[-0.72px] border border-[#6e660a] transition-colors hover:bg-[#6e660a] hover:text-white"
                aria-label="Last Dietの詳細を見る"
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

          {/* Project 03 - Portfolio */}
          <article className="flex flex-col gap-12 pt-[50px] border-t-[0.5px] border-[#ab0782] md:flex-1">
            <div className="flex flex-col gap-[19px] flex-1">
              <h3 className="font-mono font-medium text-base leading-[1.03] tracking-[-0.72px] underline text-[#ab0782]">
                Website
              </h3>
              <p className="font-serif font-light text-[28px] leading-[1.35] tracking-[-0.84px] text-[#ab0782] md:text-[36px] lg:text-[50px] lg:leading-[1.2] lg:tracking-[-2.25px]">
                ポートフォリオ<br />サイト
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
  );
}
