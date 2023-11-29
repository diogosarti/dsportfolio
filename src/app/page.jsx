import Navbar from "@/components/Navbar";
import AboutSection from "@/sections/about/About";
import HeroSection from "@/sections/hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection id="hero" className="" />
      <div
        style={{
          height: "8px",
          background: "linear-gradient(270deg, #41D2F2, red, yellow)",
          backgroundSize: "200% 200%",
          animation: "gradient 3s ease infinite",
        }}
      />
      {/* <div className="h-8 bg-gradient-to-b from-[#050A26] w-full" /> */}
      <AboutSection id="about" />
    </main>
  );
}
