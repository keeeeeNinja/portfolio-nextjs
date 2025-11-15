export default function Footer() {
  return (
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
  );
}
