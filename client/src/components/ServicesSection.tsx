/**
 * ServicesSection — specialized services with image cards
 * Design: Tropical Tech — dark background, image cards with overlays
 */

import { useInView } from "@/hooks/useInView";
import { Home, Wrench, Building2, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "./WhatsAppButton";

const SERVICES = [
  {
    icon: Home,
    title: "Energia Solar Residencial",
    subtitle: "Contagem MG",
    description:
      "Especialistas em energia solar em casas em Contagem MG. Criamos o sistema perfeito para sua família parar de se preocupar com a conta de luz, valorizando seu imóvel no Arvoredo, Eldorado ou Riacho.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663031029526/mR7Xuxta9u9PJhH9aehSCL/service-residential-PvLshZK9px5XKvNYDazSLk.webp",
    cta: "Quero para minha casa",
  },
  {
    icon: Wrench,
    title: "Manutenção de Placa Solar",
    subtitle: "Contagem",
    description:
      "Seu sistema parou de render? Somos especialistas em manutenção de painel solar, manutenção de placa de energia solar e limpeza técnica com revisão de inversores em Contagem.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663031029526/mR7Xuxta9u9PJhH9aehSCL/service-maintenance-5ddjmMF8muhvSQ2SJg7miP.webp",
    cta: "Agendar manutenção",
  },
  {
    icon: Building2,
    title: "Projetos Fotovoltaicos",
    subtitle: "Comercial & Industrial",
    description:
      "Do pequeno comércio à grande indústria, entregamos a solução completa em energia solar em Contagem, Minas Gerais, cuidando de todo o processo, da engenharia à homologação.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663031029526/mR7Xuxta9u9PJhH9aehSCL/service-commercial-49hX8RzLoyQkPubfAzgcb7.webp",
    cta: "Solicitar projeto",
  },
];

export default function ServicesSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="servicos" className="relative bg-solar-navy py-20 lg:py-28">
      <div ref={ref} className="container">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span
            className={`inline-block text-solar-orange font-semibold text-sm uppercase tracking-wider mb-3 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Nossos Serviços
          </span>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold text-white mb-4 transition-all duration-700 delay-100 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Serviços Especializados em{" "}
            <span className="gradient-text">Energia Solar</span>
          </h2>
          <p
            className={`text-white/50 text-lg transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Soluções completas para residências, comércios e indústrias em Contagem e região metropolitana.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className={`group relative bg-solar-navy-light rounded-2xl overflow-hidden border border-white/5 hover:border-solar-orange/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-solar-orange/10 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(i + 2) * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-solar-navy-light via-transparent to-transparent" />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-solar-orange/90 flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-4">
                <span className="text-solar-orange/70 text-xs font-semibold uppercase tracking-wider">
                  {service.subtitle}
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-3">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-solar-orange font-semibold text-sm hover:text-solar-gold transition-colors group/link"
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
