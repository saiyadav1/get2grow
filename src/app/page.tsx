import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import LogoMarquee from "@/components/home/LogoMarquee";
import AboutSection from "@/components/home/AboutSection";
import OurProcess from "@/components/home/OurProcess";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import Footer from "@/components/layout/Footer";
import StatsChips from "@/components/home/StatsChips";
import Intro from "@/components/home/Intro";
import PortfolioSection from "@/components/home/PortfolioSection";
import Services from "@/components/services/Services";
import UserSs from "@/components/home/UserSs";
import OurPackages from "@/components/home/Ourpackages";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Navbar />
      <Hero />
      <StatsChips />
      <LogoMarquee />
      <Intro />
      <PortfolioSection />
      <Services />
      <AboutSection />
      <OurProcess />
      <OurPackages />
      <TestimonialsSection />
      <UserSs />
      <FAQSection />
      <Footer />




      {/* <WheelSection /> */}
      {/* <ServicesSection /> */}
      {/* <LetterSection /> */}
      {/* <ContactSection /> */}


    </main>
  );
}
