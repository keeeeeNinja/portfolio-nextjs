import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white/40 to-white/0 px-[50px] max-w-[1280px] mx-auto">
      <Navigation />

      {/* About me */}
      <section className="flex flex-col gap-[19px] pt-[30px] pb-[100px] md:pt-[200px]">
        <div className="font-serif font-light text-[50px] leading-[1.2] tracking-[-2.25px] text-black">
          <p>During my time at Aetheria School of Visual Arts, I had the opportunity to intern at Lumina Creative Studio and The Terraform Interiors Collective. These experiences allowed me to see design in action, collaborating with talented professionals and contributing to real-world projects. I learned invaluable lessons about the creative process, from concept development to final execution.</p>
          <p>&nbsp;</p>
          <p>I thrive in collaborative environments, where ideas can bounce and evolve. I love the challenge of taking a concept and translating it into a compelling visual experience. Whether I'm sketching, photographing, or designing, I'm always searching for ways to connect with people on a deeper level through my work.</p>
        </div>
      </section>

      {/* Right now I am */}
      <section className="flex flex-col gap-[50px] pb-[100px] lg:flex-row">
        {/* Left column */}
        <div className="border-t border-[#4f4f4f]/30 py-10 lg:w-[565px]">
          <p className="font-mono font-normal text-base leading-[1.03] tracking-[-0.72px] text-black">
            Right now I am...
          </p>
        </div>

        {/* Right column */}
        <div className="flex flex-col flex-1">
          {/* Row 1 */}
          <div className="flex gap-[19px] border-t border-[#4f4f4f]/30 py-[30px] font-mono font-normal text-base leading-[1.03] tracking-[-0.72px] text-black">
            <p>asdf to:</p>
            <p>Relationships by Haim</p>
          </div>

          {/* Row 2 */}
          <div className="flex gap-[19px] border-t border-[#4f4f4f]/30 py-[30px] font-mono font-normal text-base leading-[1.03] tracking-[-0.72px] text-black">
            <p>Dreaming of:</p>
            <p>Gohar World's dinner parties</p>
          </div>

          {/* Row 3 */}
          <div className="flex gap-[19px] border-t border-[#4f4f4f]/30 py-[30px] font-mono font-normal text-base leading-[1.03] tracking-[-0.72px] text-black">
            <p>Eating at:</p>
            <p>Mcdonald's</p>
          </div>

          {/* Row 4 */}
          <div className="flex gap-[19px] border-t border-[#4f4f4f]/30 py-[30px] font-mono font-normal text-base leading-[1.03] tracking-[-0.72px] text-black">
            <p>Training for:</p>
            <p>The NYC Marathon</p>
          </div>

          {/* Image */}
          <div className="relative w-full aspect-square shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden">
            <Image
              src="/about-portrait.png"
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
