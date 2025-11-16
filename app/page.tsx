import Image from "next/image";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white/40 to-white/0 px-[50px] max-w-[1280px] mx-auto">
      <Navigation />

      {/* Hero Section */}
      <section className="px-0 py-20 md:pr-20 md:pt-[100px] md:pb-20 lg:pr-[100px]">
        <p className="font-serif font-light text-[50px] leading-[1.2] tracking-[-2.25px] text-black">
        このポートフォリオサイトでは、私がこれまでに手がけてきたWebサイトや、Kindleで出版した書籍を紹介しています。
        </p>
      </section>

      {/* Project 1 */}
      <section className="border-t-[0.5px] border-[#0034ad] pt-[50px] pb-20 px-0 flex flex-col gap-[50px] md:flex-row">
        {/* Text */}
        <div className="flex flex-col gap-[19px] md:flex-1">
          <h2 className="font-mono font-medium text-[20px] leading-[1.03] tracking-[-0.72px] text-[#0034ad] underline">
            Website
          </h2>
          <p className="font-serif font-light text-[50px] leading-[1.2] tracking-[-2.25px] text-[#0034ad]">
          秋の人気スイーツ特集
          </p>
          <a href="/projects" className="border border-black px-2.5 py-1 w-fit font-mono text-base leading-[1.03] tracking-[-0.72px] hover:bg-black hover:text-white transition-colors">
            Explore
          </a>
        </div>

        {/* Image */}
        <div className="relative w-full aspect-square md:flex-1">
          <Image
            src="/SweetsSite_thumb.jpg"
            alt="Yoga studio rebrand"
            fill
            className="object-cover"
            style={{ objectPosition: 'calc(50% - 170px) center' }}
          />
        </div>
      </section>

      {/* Project 2 */}
      <section className="border-t-[0.5px] border-[#ab0782] pt-[50px] pb-20 px-0 flex flex-col gap-[50px] md:flex-row">
        {/* Text */}
        <div className="flex flex-col gap-[19px] md:flex-1">
          <h2 className="font-mono font-medium text-base leading-[1.03] tracking-[-0.72px] text-[#ab0782] underline">
            Artwork
          </h2>
          <p className="font-serif font-light text-[50px] leading-[1.2] tracking-[-2.25px] text-[#ab0782]">
            Abstract paintings
          </p>
          <button className="border border-[#ab0782] px-2.5 py-1 w-fit font-mono text-base leading-[1.03] tracking-[-0.72px] text-[#ab0782] hover:bg-[#ab0782] hover:text-white transition-colors">
            Explore
          </button>
        </div>

        {/* Image */}
        <div className="relative w-full aspect-square md:flex-1 rounded-[4px] overflow-hidden">
          <Image
            src="/project2.png"
            alt="Abstract paintings"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Project 3 */}
      <section className="border-t-[0.5px] border-[#6e660a] pt-[50px] pb-20 px-0 flex flex-col gap-[50px] md:flex-row">
        {/* Text */}
        <div className="flex flex-col gap-[19px] md:flex-1">
          <h2 className="font-mono font-medium text-base leading-[1.03] tracking-[-0.72px] text-[#6e660a] underline">
            Design
          </h2>
          <p className="font-serif font-light text-[50px] leading-[1.2] tracking-[-2.25px] text-[#6e660a]">
            Magazine study
          </p>
          <button className="border border-black px-2.5 py-1 w-fit font-mono text-base leading-[1.03] tracking-[-0.72px] hover:bg-black hover:text-white transition-colors">
            Explore
          </button>
        </div>

        {/* Image */}
        <div className="relative w-full aspect-square md:flex-1 rounded-[4px] overflow-hidden">
          <Image
            src="/project3.png"
            alt="Magazine study"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-[30px] pb-[120px] px-0 flex flex-col gap-[50px] md:pr-20 lg:pr-[120px]">
        <p className="font-serif font-light text-[50px] leading-[1.2] tracking-[-2.25px] text-black">
          I'm dedicated to crafting meaningful visual experiences through a multidisciplinary design approach.
        </p>
        <button className="border border-black px-2.5 py-1 w-fit font-mono text-base leading-[1.03] tracking-[-0.72px] hover:bg-black hover:text-white transition-colors">
          Discover my skills and passions
        </button>
      </section>

      <Footer />
    </div>
  );
}
