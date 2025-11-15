import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white/40 to-white/0 px-[50px] max-w-[1280px] mx-auto">
      <Navigation />

      {/* Header */}
      <header className="flex flex-col gap-[19px] pt-[72px] pb-20 pr-0 md:pt-[200px] md:pb-20 lg:pr-[100px]">
        <div className="flex flex-col gap-[19px] text-[#5f00ad]">
          <h2 className="font-mono font-medium text-base leading-[1.03] tracking-[-0.72px] underline">
            Photography
          </h2>
          <p className="font-serif font-light text-[50px] leading-[1.2] tracking-[-2.25px]">
            Echos of Italy
          </p>
        </div>
        <p className="font-serif font-light text-[50px] leading-[1.2] tracking-[-2.25px] text-black">
          'Echoes of Italy' is my lens on the country's timeless charm — candid moments, architectural details, and sun-kissed scenes.
        </p>
      </header>

      {/* Main - Images Gallery */}
      <main className="flex flex-col gap-20 pb-20 md:pb-[100px]">
        {/* Image 01 */}
        <section className="flex flex-col gap-6 pt-[30px] pb-20 px-0 md:px-[100px] lg:px-[240px]">
          <div className="relative w-full aspect-[3/4]">
            <Image
              src="/italy1.png"
              alt="Wandering and wondering, lost in the rhythm of the city"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-serif font-light text-base leading-[1.25] tracking-[-0.72px] text-[#313131] text-center">
            Wandering and wondering, lost in the rhythm of the city.
          </p>
        </section>

        {/* Image 02 */}
        <section className="flex flex-col gap-6 pt-[30px] pb-[50px] pl-0 pr-0 md:pb-20 md:pr-[200px] lg:pr-[300px]">
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/italy2.png"
              alt="A symphony of motion and architecture, framed by history"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-serif font-light text-base leading-[1.25] tracking-[-0.72px] text-[#313131]">
            A symphony of motion and architecture, framed by history.
          </p>
        </section>

        {/* Image 03 */}
        <section className="flex flex-col gap-6 pt-[30px] pb-[50px] pl-0 pr-0 md:pb-20 md:pl-[200px] lg:pl-[200px]">
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/italy3.png"
              alt="A study in contrasts: light, shadow, and the rhythm of the game"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-serif font-light text-base leading-[1.25] tracking-[-0.72px] text-[#313131]">
            A study in contrasts: light, shadow, and the rhythm of the game.
          </p>
        </section>

        {/* Text */}
        <section className="pr-0 lg:pr-[120px]">
          <p className="font-serif font-light text-[50px] leading-[1.2] tracking-[-2.25px] text-black">
            From sun-drenched piazzas to intimate still-lives, I aimed to capture the soul of the country through light and composition.
          </p>
        </section>

        {/* Image 04 */}
        <section className="flex flex-col gap-5 lg:pr-[120px]">
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/italy4.png"
              alt="Dockside perspective, capturing the soul of the water"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-serif font-light text-[30px] leading-[1.2] tracking-[-1.35px] text-black">
            Dockside perspective, capturing the soul of the water.
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
