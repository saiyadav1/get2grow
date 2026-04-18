import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import LogoMarquee from "@/components/home/LogoMarquee";
import WheelSection from "@/components/home/WheelSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import LetterSection from "@/components/home/LetterSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/layout/Footer";
import StatsChips from "@/components/home/StatsChips";
import Intro from "@/components/home/Intro";
import PortfolioSection from "@/components/home/PortfolioSection";
export default function Home() {
  return (
    <main className="min-h-screen ">
      <Navbar />
      <Hero />
      <StatsChips />
      <LogoMarquee />
      <Intro />
      <PortfolioSection />
      <WheelSection />
      {/* <ServicesSection /> */}
      <AboutSection />
      {/* <LetterSection /> */}
      <TestimonialsSection />
      {/* <ContactSection /> */}
      <FAQSection />
      <Footer />
    </main>
  );
}
