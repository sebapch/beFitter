// Home.jsx - Consumer Version
'use client';

import { CTASection } from "./(components)/CTASection";
import { FAQ } from "./(components)/FAQ";
import { Features } from "./(components)/Features";
import { Footer } from "./(components)/Footer";
import { HeroSection } from "./(components)/HeroSection";
import { HowItWorks } from "./(components)/HowItWorks";
import { Navbar } from "./(components)/Navbar";
import { Pricing } from "./(components)/Pricing";
import { Benefits } from "./(components)/Benefits";
import { Testimonials } from "./(components)/Testimonials";
import { AppShowcase } from "./(components)/AppShowcase";

export default function Home() {
  return (
    <main className="font-oswald bg-white text-gray-900">
      <Navbar />
      <HeroSection />
      {/* <Benefits /> */}
      <AppShowcase />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}