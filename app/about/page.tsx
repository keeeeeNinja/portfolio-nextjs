import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white/40 to-white/0 px-[50px]">
      <Navigation />

      {/* Main content will be added here based on structure.md */}
      <main className="py-20">
        <h1 className="font-serif font-light text-[50px] leading-[1.2] tracking-[-2.25px] text-black">
          About
        </h1>
      </main>

      <Footer />
    </div>
  );
}
