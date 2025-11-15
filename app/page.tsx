import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white/40 to-white/0 px-[50px]">
      <nav className="flex flex-col items-start justify-between gap-5 -mx-[50px] px-5 pt-5 pb-[60px] border-b border-[#4f4f4f]/30 md:flex-row md:items-center md:px-12 md:pt-[30px] md:pb-[100px] lg:px-[50px]">
        {/* Name Section */}
        <div className="flex items-center gap-5">
          <div className="relative w-10 h-10 md:w-[50px] md:h-[50px] rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden">
            <Image
              src="/portrait.png"
              alt="Sarah Chen portrait"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="font-serif text-2xl text-black tracking-[-1.08px] leading-[1.52] whitespace-nowrap">
            Sarah Chen
          </h1>
        </div>

        {/* Links */}
        <div className="flex flex-col items-end gap-[30px] text-base tracking-[-0.72px] md:flex-row md:gap-2.5 md:items-center">
          <a
            href="#"
            className="font-mono leading-[1.03] text-[#ab0782] hover:underline"
          >
            Home
          </a>
          <a
            href="#"
            className="font-mono font-medium leading-[1.03] text-black underline hover:no-underline"
          >
            About
          </a>
          <a
            href="#"
            className="font-mono leading-[1.03] text-[#5f00ad] hover:underline"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-0 py-20 md:pr-20 md:pt-[200px] md:pb-20 lg:pr-[100px]">
        <p className="font-serif font-light text-[50px] leading-[1.2] tracking-[-2.25px] text-black">
          I'm Sarah Chen, design student and explorer of visual languages. I'm passionate about understanding how different design disciplines intersect and create meaningful connections.
        </p>
      </section>

      {/* Project 1 */}
      <section className="border-t-[0.5px] border-[#0034ad] pt-[50px] pb-20 px-0 flex flex-col gap-[50px] md:flex-row">
        {/* Text */}
        <div className="flex flex-col gap-[19px] md:flex-1">
          <h2 className="font-mono font-medium text-base leading-[1.03] tracking-[-0.72px] text-[#0034ad] underline">
            Design
          </h2>
          <p className="font-serif font-light text-[50px] leading-[1.2] tracking-[-2.25px] text-[#0034ad]">
            Yoga studio rebrand
          </p>
          <button className="border border-black px-2.5 py-1 w-fit font-mono text-base leading-[1.03] tracking-[-0.72px] hover:bg-black hover:text-white transition-colors">
            Explore
          </button>
        </div>

        {/* Image */}
        <div className="relative w-full aspect-square md:flex-1">
          <Image
            src="/project1.png"
            alt="Yoga studio rebrand"
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

      {/* Footer */}
      <footer className="flex flex-col items-center pb-20 pt-0 px-0 font-serif font-light text-[50px] leading-[1.2] tracking-[-2.25px]">
        <div className="w-full border-t border-[#4f4f4f] pt-[30px] pb-[150px] flex flex-col gap-10 md:flex-row md:justify-between md:gap-0 underline whitespace-nowrap">
          <a href="#" className="text-[#ab0782] hover:no-underline">
            Email
          </a>
          <a href="#" className="text-[#5f00ad] hover:no-underline">
            Behance
          </a>
          <a href="#" className="text-[#0034ad] hover:no-underline">
            LinkedIn
          </a>
        </div>
        <p className="w-full text-black">
          © Sarah Chen 2025 All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
