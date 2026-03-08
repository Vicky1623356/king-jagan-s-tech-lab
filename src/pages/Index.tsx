import Navbar from "@/components/Navbar";
import MatrixRain from "@/components/MatrixRain";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <MatrixRain />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
