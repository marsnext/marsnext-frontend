import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { WhatWeBuild } from "@/components/landing/what-we-build";
import { Products } from "@/components/landing/products";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080c1a]">
      <Navbar />
      <Hero />
      <WhatWeBuild />
      <Products />
      <Footer />
    </div>
  );
}
