/**
 * HeroSection — full-width hero with background image, overlay gradient, and CTA
 * Design: Tropical Tech — dark overlay with orange accent, split-screen feel
 */

import { Sun, ArrowRight, Shield, Star } from "lucide-react";
import { WHATSAPP_URL } from "./WhatsAppButton";
import { useInView } from "@/hooks/useInView";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310419663031029526/mR7Xuxta9u9PJhH9aehSCL/hero-metalsol-F6aWfReHH5qQdUCG98X47B.webp";

export default function HeroSection() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Casa com painéis solares em Contagem MG"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/80 to-[#0A1628]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 to-transparent" />
      </div>

      {/* Content */}
      <div ref={ref} className="relative container pt-28 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-solar-orange/15 border border-solar-orange/30 text-solar-orange rounded-full px-4 py-1.5 mb-6 text-sm font-medium transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Sun className="w-4 h-4" />
            Energia Solar em Contagem MG
          </div>

          {/* Heading */}
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 transition-all duration-700 delay-100 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Economia Real com a{" "}
            <span className="gradient-text">Metalsol</span>
          </h1>

          {/* Subheadline */}
          <p
            className={`text-lg sm:text-xl text-white/75 leading-relaxed mb-8 max-w-xl transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Encontre a melhor empresa de energia solar em Contagem para transformar sua conta de luz. Projetos de energia solar fotovoltaica com tecnologia de ponta e instalação garantida.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-10 transition-all duration-700 delay-300 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-solar-orange hover:bg-solar-orange-dark text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-solar-orange/25 hover:shadow-xl hover:shadow-solar-orange/30 hover:-translate-y-0.5 group"
            >
              Quero Energia Solar Agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+553199441-8333"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-lg px-8 py-4 rounded-xl border border-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              Ligar Agora
            </a>
          </div>

          {/* Trust Badges */}
          <div
            className={`flex flex-wrap gap-6 transition-all duration-700 delay-[400ms] ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Shield className="w-4 h-4 text-solar-green" />
              <span>Garantia de 5 anos</span>
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Star className="w-4 h-4 text-solar-gold" />
              <span>379 avaliações no Google</span>
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Sun className="w-4 h-4 text-solar-orange" />
              <span>Economia de até 95%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
