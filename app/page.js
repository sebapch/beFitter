import { CTASection } from "./(components)/CTASection";
import { FAQ } from "./(components)/FAQ";
import { Features } from "./(components)/Features";
import { Footer } from "./(components)/Footer";
import { HeroSection } from "./(components)/HeroSection";
import { HowItWorks } from "./(components)/HowItWorks";
import { Navbar } from "./(components)/Navbar";
import { Pricing } from "./(components)/Pricing";
import { ProblemSolution } from "./(components)/ProblemSolution";
import { Testimonials } from "./(components)/Testimonials";
import { WhyChoose } from "./(components)/WhyChoose";

export default function Home() {
  return (
    <main className="font-oswald bg-white text-gray-900">
      <Navbar />
      <HeroSection />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <WhyChoose />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
