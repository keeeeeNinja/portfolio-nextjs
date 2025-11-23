import Image from "next/image";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white/40 to-white/0 px-[50px] max-w-[1280px] mx-auto">
      <Navigation />

      {/* Hero Section */}
      <section className="px-0 py-20 md:pr-20 md:pt-[100px] md:pb-20 lg:pr-[100px]">
        <p className="font-serif font-light text-[28px] leading-[1.35] tracking-[-0.84px] text-black md:text-[36px] lg:text-[50px] lg:leading-[1.2] lg:tracking-[-2.25px]">
        このポートフォリオサイトでは、私がこれまでに手がけてきたWebサイトや、Kindleで出版した書籍を紹介しています。
        </p>
      </section>

      {/* Autumn Sweets Special Feature Site */}
      <section className="flex flex-col gap-[50px] px-0 pt-[50px] pb-20 border-t-[0.5px] border-[#0034ad] md:flex-row">
        {/* Text Content */}
        <div className="flex flex-col gap-[19px] md:flex-1">
          <h2 className="font-mono font-medium text-base leading-[1.03] tracking-[-0.72px] text-[#0034ad] underline">
            Website
          </h2>
          <p className="font-serif font-light text-[28px] leading-[1.35] tracking-[-0.84px] text-[#0034ad] md:text-[36px] lg:text-[50px] lg:leading-[1.2] lg:tracking-[-2.25px]">
            秋の人気スイーツ特集
          </p>
          <a
            href="/projects/sweets"
            className="w-fit px-2.5 py-1 font-mono text-base leading-[1.03] tracking-[-0.72px] border border-black transition-colors hover:bg-black hover:text-white"
            aria-label="秋の人気スイーツ特集サイトの詳細を見る"
          >
            Explore
          </a>
        </div>

        {/* Image */}
        <div className="relative w-full aspect-square rounded-[4px] overflow-hidden md:flex-1">
          <Image
            src="/SweetsSite_thumb2.jpg"
            alt="秋の人気スイーツ特集サイトのサムネイル画像"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Project 2 */}
      <section className="border-t-[0.5px] border-[#ab0782] pt-[50px] pb-20 px-0 flex flex-col gap-[50px] md:flex-row">
        {/* Text */}
        <div className="flex flex-col gap-[19px] md:flex-1">
          <h2 className="font-mono font-medium text-base leading-[1.03] tracking-[-0.72px] text-[#ab0782] underline">
            Website
          </h2>
          <p className="font-serif font-light text-[28px] leading-[1.35] tracking-[-0.84px] text-[#ab0782] md:text-[36px] lg:text-[50px] lg:leading-[1.2] lg:tracking-[-2.25px]">
            ポートフォリオ<br className="hidden md:block lg:hidden" />サイト
          </p>
          <a
            href="/projects/portfolio"
            className="border border-[#ab0782] px-2.5 py-1 w-fit font-mono text-base leading-[1.03] tracking-[-0.72px] text-[#ab0782] hover:bg-[#ab0782] hover:text-white transition-colors"
            aria-label="ポートフォリオサイトの詳細を見る"
          >
            Explore
          </a>
        </div>

        {/* Image */}
        <div className="relative w-full aspect-[667/484] md:flex-1 rounded-[4px] overflow-hidden">
          <Image
            src="/Home2.jpg"
            alt="Home"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Project 3 */}
      <section className="border-t-[0.5px] border-[#6e660a] pt-[50px] pb-[160px] px-0 flex flex-col gap-[50px] md:flex-row">
        {/* Text */}
        <div className="flex flex-col gap-[19px] md:flex-1">
          <h2 className="font-mono font-medium text-base leading-[1.03] tracking-[-0.72px] text-[#6e660a] underline">
            Books
          </h2>
          <p className="font-serif font-light text-[28px] leading-[1.35] tracking-[-0.84px] text-[#6e660a] md:text-[36px] lg:text-[50px] lg:leading-[1.2] lg:tracking-[-2.25px]">
            ラストダイエット
          </p>
          <a
            href="/projects/last-diet"
            className="border border-black px-2.5 py-1 w-fit font-mono text-base leading-[1.03] tracking-[-0.72px] hover:bg-black hover:text-white transition-colors"
            aria-label="Last Dietの詳細を見る"
          >
            Explore
          </a>
        </div>

        {/* Image */}
        <div className="relative w-full aspect-square rounded-[4px] overflow-hidden md:flex-1">
          <Image
            src="/last-diet-home.jpg"
            alt="Last Diet"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
