/**
 * Home — MetalSol Contagem Landing Page
 * Design: Tropical Tech — Modernismo Solar Brasileiro
 */

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StepsSection from "@/components/StepsSection";
import WaveDivider from "@/components/WaveDivider";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      
      <main>
        {/* Hero — dark bg with image */}
        <HeroSection />
        
        {/* About — light bg (solar-cream) with stats */}
        <AboutSection />
        
        {/* Cream → Navy wave */}
        <WaveDivider from="#FAFAF2" to="#0A1628" />
        
        {/* Services — dark bg (solar-navy) */}
        <ServicesSection />
        
        {/* Navy → Cream wave */}
        <WaveDivider from="#0A1628" to="#FAFAF2" />
        
        {/* Steps — light bg (solar-cream) timeline */}
        <StepsSection />
        
        {/* Benefits — still on solar-cream */}
        <BenefitsSection />
        
        {/* Cream → Navy wave */}
        <WaveDivider from="#FAFAF2" to="#0A1628" />
        
        {/* Testimonials — dark bg (solar-navy) with carousel */}
        <TestimonialsSection />
        
        {/* FAQ — continues on dark bg (solar-navy) */}
        <FAQSection />
        
        {/* CTA — image bg with dark overlay */}
        <CTASection />
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
