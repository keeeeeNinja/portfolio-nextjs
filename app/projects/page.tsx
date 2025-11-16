import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#EDE3D5] px-[50px] max-w-[1280px] mx-auto">
      <Navigation />

      {/* Header */}
      <header className="flex flex-col gap-[19px] pt-[72px] pb-20 pr-0 md:pt-[200px] md:pb-20 lg:pr-[100px]">
        <div className="flex flex-col gap-[19px] text-[#5f00ad]">
          <h2 className="font-mono font-medium text-[20px] leading-[1.03] tracking-[-0.72px] underline">
            Website
          </h2>
          <p className="font-serif font-light text-[56px] leading-[1.2] tracking-[-2.25px]">
          秋の人気スイーツ特集
          </p>
        </div>
        <p className="font-serif font-light text-[40px] leading-[1.2] tracking-[-2.25px] text-black">
          秋に人気のスイーツを特集したデモWebサイトです。Figmaデザインをもとに、HTML/CSS/JavaScriptで制作しました。
        </p>
      </header>

      {/* Main - Images Gallery */}
      <main className="flex flex-col gap-20 pb-20 md:pb-[100px]">
        {/* Image 01 */}
        <section className="flex flex-col gap-6 pt-[30px] pb-20 px-0 md:px-[100px] lg:pl-[200px] lg:pr-[80px]">
          <div className="relative w-full aspect-[800/600] rounded-[10px] overflow-hidden">
            <Image
              src="/秋の実りを味わう.jpg"
              alt="秋の実りを味わう"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-serif font-light text-base leading-[1.25] tracking-[-0.72px] text-[#313131]">
            秋の実りを味わう
          </p>
        </section>

        {/* Image 02 */}
        <section className="flex flex-col gap-6 pt-[30px] pb-[50px] pl-0 pr-0 md:pb-20 md:pr-[200px] lg:pr-[270px]">
          <div className="relative w-full aspect-[920/660] rounded-[10px] overflow-hidden">
            <Image
              src="/誰もが愛する王道の甘さ2.jpg"
              alt="誰もが愛する王道の甘さ"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-serif font-light text-base leading-[1.25] tracking-[-0.72px] text-[#313131]">
            誰もが愛する王道の甘さ
          </p>
        </section>

        {/* Image 03 */}
        <section className="flex flex-col gap-6 pt-[30px] pb-[50px] pl-0 pr-0 md:pb-20 md:pl-[200px] lg:pl-[200px]">
          <div className="relative w-full aspect-[4/3] rounded-[10px] overflow-hidden">
            <Image
              src="/季節の新作.jpg"
              alt="季節の新作"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-serif font-light text-base leading-[1.25] tracking-[-0.72px] text-[#313131]">
            季節の新作
          </p>
        </section>

        {/* Text */}
        <section className="pr-0 lg:pr-[120px]">
          <p className="font-serif font-light text-[50px] leading-[1.2] tracking-[-2.25px] text-black">
            スマートフォン対応のレスポンシブデザイン。
          </p>
        </section>

        {/* Image 04 */}
        <section className="flex flex-col gap-5 lg:pr-[120px]">
          <div className="relative w-full aspect-[4/3] rounded-[10px] overflow-hidden">
            <Image
              src="/SP版2.jpg"
              alt="スマートフォン版"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-serif font-light text-[30px] leading-[1.2] tracking-[-1.35px] text-black">
            スマートフォン版
          </p>
        </section>
      </main>

      {/* Explore More */}
      <section className="flex flex-col gap-12 pt-[30px] pb-0 border-t border-[#4f4f4f]/30 lg:pr-[120px]">
        <p className="font-serif font-light text-[50px] leading-[1.2] tracking-[-2.25px] text-black">
          From graphic design to interior spaces, see the breadth of my creative explorations.
        </p>
        <h2 className="font-mono font-medium text-base leading-[1.03] tracking-[-0.72px] underline text-black">
          More projects
        </h2>

        {/* Projects Grid */}
        <div className="flex flex-col gap-12 md:flex-row md:gap-12">
          {/* Project 01 */}
          <article className="flex flex-col gap-12 pt-[50px] border-t-[0.5px] border-[#ab0782] md:flex-1">
            <div className="flex flex-col gap-[19px]">
              <h3 className="font-mono font-medium text-base leading-[1.03] tracking-[-0.72px] underline text-[#ab0782]">
                Artwork
              </h3>
              <p className="font-serif font-light text-[50px] leading-[1.2] tracking-[-2.25px] text-[#ab0782]">
                Illustration<br />sketches
              </p>
              <button className="border border-[#ab0782] px-[10px] pt-1 pb-[7px] w-fit">
                <span className="font-mono font-normal text-base leading-[1.03] tracking-[-0.72px] text-[#ab0782]">
                  Explore
                </span>
              </button>
            </div>
            <div className="relative w-full aspect-square rounded-[4px] overflow-hidden">
              <Image
                src="/explore1.png"
                alt="Abstract painting illustration"
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

          {/* Project 03 */}
          <article className="flex flex-col gap-12 pt-[50px] border-t-[0.5px] border-[#0034ad] md:flex-1">
            <div className="flex flex-col gap-[19px]">
              <h3 className="font-mono font-medium text-base leading-[1.03] tracking-[-0.72px] underline text-[#0034ad]">
                Design
              </h3>
              <p className="font-serif font-light text-[50px] leading-[1.2] tracking-[-2.25px] text-[#0034ad]">
                Castro Capital branding
              </p>
              <button className="border border-[#0034ad] px-[10px] pt-1 pb-[7px] w-fit">
                <span className="font-mono font-normal text-base leading-[1.03] tracking-[-0.72px] text-[#0034ad]">
                  Explore
                </span>
              </button>
            </div>
            <div className="relative w-full aspect-square rounded-[4px] overflow-hidden">
              <Image
                src="/explore3.png"
                alt="Castro Capital branding materials"
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
