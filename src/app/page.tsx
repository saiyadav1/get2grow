import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import LogoMarquee from "@/components/home/LogoMarquee";
import PortfolioSection from "@/components/home/PortfolioSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import LetterSection from "@/components/home/LetterSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Navbar />
      <Hero />
      <LogoMarquee />
      <PortfolioSection />
      <ServicesSection />
      <AboutSection />
      {/* <LetterSection /> */}
      <TestimonialsSection />
      {/* <ContactSection /> */}
       <FAQSection />
      <Footer />
    </main>
  );
}
