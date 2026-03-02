/**
 * CTASection — final call to action with dramatic background
 * Design: Tropical Tech — sunset solar background with overlay
 */

import { useInView } from "@/hooks/useInView";
import { ArrowRight, Phone } from "lucide-react";
import { WHATSAPP_URL } from "./WhatsAppButton";

const CTA_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663031029526/mR7Xuxta9u9PJhH9aehSCL/cta-background-koSPNCuUEAT8Yga6YDzoye.webp";

export default function CTASection() {
  const { ref, isInView } = useInView();

  return (
    <section id="contato" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={CTA_BG}
          alt="Campo de energia solar ao pôr do sol"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/85 to-[#0A1628]/70" />
      </div>

      {/* Content */}
      <div ref={ref} className="relative container">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Precisa de{" "}
            <span className="gradient-text">Energia Solar</span>{" "}
            em Contagem?
          </h2>
          <p
            className={`text-lg text-white/65 mb-10 leading-relaxed transition-all duration-700 delay-100 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Entraremos em contato o quanto antes para apresentar nossa proposta, buscando solucionar problemas, inovar e diminuir seus custos energéticos.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-solar-orange hover:bg-solar-orange-dark text-white font-bold text-lg px-10 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-solar-orange/25 hover:shadow-xl hover:shadow-solar-orange/30 hover:-translate-y-0.5 group"
            >
              Falar com um Especialista
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+553199441-8333"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-lg px-8 py-4 rounded-xl border border-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              <Phone className="w-5 h-5" />
              (31) 99441-8333
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
