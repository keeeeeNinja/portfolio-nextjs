import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="flex flex-row items-start justify-between gap-5 -mx-[50px] px-5 pt-5 pb-[30px] border-b border-[#4f4f4f]/30 md:items-center md:px-12 md:pt-[30px] md:pb-[30px] lg:px-[50px]">
      {/* Name Section */}
      <div className="flex flex-col gap-2.5 md:flex-row md:items-end md:gap-8">
        <h1 className="font-serif text-2xl text-black tracking-[-1.08px] leading-[1.52] whitespace-nowrap md:order-2 md:text-[32px]">
          Ryo Kijima
        </h1>
        <div className="relative w-10 h-10 md:w-[120px] md:h-[120px] rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden md:order-1">
          <Image
            src="/header_icon_coromo.jpg"
            alt="Ryo Kijima portrait"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-col items-end gap-2.5 text-base tracking-[-0.72px] md:flex-row md:items-center">
        <a
          href="/"
          className="font-mono leading-[1.03] text-[#ab0782] hover:underline"
        >
          Home
        </a>
        <a
          href="/about"
          className="font-mono font-medium leading-[1.03] text-black underline hover:no-underline"
        >
          About
        </a>
      </div>
    </nav>
  );
}
