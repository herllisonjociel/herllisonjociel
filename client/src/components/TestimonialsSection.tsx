/**
 * TestimonialsSection — client testimonials with photos, stars, and Google badge
 * Design: Tropical Tech — dark navy background, horizontal scroll carousel
 * Positioned between Steps and Benefits sections
 */

import { useState, useEffect, useCallback } from "react";
import { useInView } from "@/hooks/useInView";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Carlos Mendes",
    location: "Bairro Eldorado, Contagem",
    photo:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663031029526/mR7Xuxta9u9PJhH9aehSCL/client-1-carlos-Ft9qo3oNZcgo8h3ffEknps.webp",
    rating: 5,
    text: "Instalei o sistema solar com a Metalsol há 2 anos e minha conta de luz caiu de R$850 para menos de R$90. A equipe foi extremamente profissional, desde o projeto até a instalação. Recomendo de olhos fechados para quem mora em Contagem!",
    date: "Há 3 meses",
    project: "Sistema Residencial 8kWp",
  },
  {
    name: "Patrícia Oliveira",
    location: "Bairro Riacho, Contagem",
    photo:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663031029526/mR7Xuxta9u9PJhH9aehSCL/client-2-patricia-5gVURsAgR6Z8ftPyirUeu7.webp",
    rating: 5,
    text: "Pesquisei várias empresas de energia solar em Contagem e a Metalsol se destacou pelo atendimento e transparência. O processo de homologação na CEMIG foi todo acompanhado por eles. Hoje economizo mais de 90% na conta de luz!",
    date: "Há 2 meses",
    project: "Sistema Residencial 5kWp",
  },
  {
    name: "Roberto Almeida",
    location: "Distrito Industrial, Contagem",
    photo:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663031029526/mR7Xuxta9u9PJhH9aehSCL/client-3-roberto-W9wdmrud4kfct5AyggTo5m.webp",
    rating: 5,
    text: "A Metalsol instalou o sistema fotovoltaico na minha empresa e o retorno financeiro superou todas as expectativas. Reduzimos o custo operacional significativamente. A equipe técnica é muito competente e o pós-venda é excelente.",
    date: "Há 5 meses",
    project: "Sistema Comercial 30kWp",
  },
  {
    name: "Fernanda Costa",
    location: "Bairro Arvoredo, Contagem",
    photo:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663031029526/mR7Xuxta9u9PJhH9aehSCL/client-4-fernanda-RDrBQHzozXofQdGviktYsn.webp",
    rating: 5,
    text: "Fiz a manutenção das placas solares com a Metalsol e a diferença na geração foi impressionante. A limpeza técnica e a revisão do inversor devolveram a eficiência total do meu sistema. Atendimento rápido e preço justo!",
    date: "Há 1 mês",
    project: "Manutenção Preventiva",
  },
  {
    name: "Marcos Souza",
    location: "Bairro Nacional, Contagem",
    photo:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663031029526/mR7Xuxta9u9PJhH9aehSCL/client-5-marcos-fuJkzyUohg9tnvTjD6gF2W.webp",
    rating: 5,
    text: "Melhor investimento que fiz para minha casa. A Metalsol cuidou de tudo: projeto, instalação e homologação na CEMIG. Em menos de 45 dias já estava gerando minha própria energia. A conta de luz praticamente zerou!",
    date: "Há 4 meses",
    project: "Sistema Residencial 6kWp",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-white/20"
          }`}
        />
      ))}
    </div>
  );
}

function GoogleBadge() {
  return (
    <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>
      <div className="flex flex-col">
        <span className="text-white font-bold text-sm leading-tight">5.0</span>
        <span className="text-white/50 text-[10px] leading-tight">379 avaliações</span>
      </div>
      <div className="flex gap-0.5 ml-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const { ref, isInView } = useInView();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    setIsAutoPlaying(false);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(goNext, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, goNext]);

  // Get visible testimonials for desktop (show 3 at a time)
  const getVisibleIndices = () => {
    const indices = [];
    for (let i = 0; i < 3; i++) {
      indices.push((activeIndex + i) % TESTIMONIALS.length);
    }
    return indices;
  };

  const visibleIndices = getVisibleIndices();

  return (
    <section id="depoimentos" className="relative bg-solar-navy py-20 lg:py-28 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(232,114,12,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(232,114,12,0.2) 0%, transparent 50%)",
          }}
        />
      </div>

      <div ref={ref} className="relative container">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span
              className={`inline-block text-solar-orange font-semibold text-sm uppercase tracking-wider mb-3 transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Depoimentos
            </span>
            <h2
              className={`text-3xl sm:text-4xl font-extrabold text-white mb-4 transition-all duration-700 delay-100 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              O que nossos clientes{" "}
              <span className="gradient-text">dizem sobre nós</span>
            </h2>
            <p
              className={`text-white/50 text-lg transition-all duration-700 delay-200 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Mais de 500 projetos entregues em Contagem e região. Confira a experiência de quem já investiu em energia solar com a Metalsol.
            </p>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <GoogleBadge />
          </div>
        </div>

        {/* Desktop Carousel — 3 cards visible */}
        <div
          className={`hidden lg:grid lg:grid-cols-3 gap-6 mb-10 transition-all duration-700 delay-300 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {visibleIndices.map((idx) => {
            const t = TESTIMONIALS[idx];
            return (
              <div
                key={`${t.name}-${idx}`}
                className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-7 hover:border-solar-orange/20 transition-all duration-500 hover:bg-white/[0.06] group relative"
              >
                {/* Quote icon */}
                <Quote className="absolute top-6 right-6 w-8 h-8 text-solar-orange/10 group-hover:text-solar-orange/20 transition-colors" />

                {/* Rating & date */}
                <div className="flex items-center justify-between mb-4">
                  <StarRating rating={t.rating} />
                  <span className="text-white/30 text-xs">{t.date}</span>
                </div>

                {/* Testimonial text */}
                <p className="text-white/65 text-sm leading-relaxed mb-6 line-clamp-5">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-solar-orange/20"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-white font-semibold text-sm">{t.name}</h4>
                    <p className="text-white/40 text-xs">{t.location}</p>
                  </div>
                </div>

                {/* Project tag */}
                <div className="mt-3">
                  <span className="inline-block bg-solar-orange/10 text-solar-orange text-[11px] font-medium px-2.5 py-1 rounded-full">
                    {t.project}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Carousel — single card */}
        <div className="lg:hidden mb-8">
          <div
            className={`transition-all duration-700 delay-300 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {(() => {
              const t = TESTIMONIALS[activeIndex];
              return (
                <div className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 relative">
                  <Quote className="absolute top-5 right-5 w-7 h-7 text-solar-orange/10" />

                  <div className="flex items-center justify-between mb-4">
                    <StarRating rating={t.rating} />
                    <span className="text-white/30 text-xs">{t.date}</span>
                  </div>

                  <p className="text-white/65 text-sm leading-relaxed mb-5">
                    "{t.text}"
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="w-11 h-11 rounded-full object-cover ring-2 ring-solar-orange/20"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="text-white font-semibold text-sm">{t.name}</h4>
                      <p className="text-white/40 text-xs">{t.location}</p>
                    </div>
                  </div>

                  <div className="mt-3">
                    <span className="inline-block bg-solar-orange/10 text-solar-orange text-[11px] font-medium px-2.5 py-1 rounded-full">
                      {t.project}
                    </span>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

        {/* Navigation Controls */}
        <div
          className={`flex items-center justify-between transition-all duration-700 delay-[400ms] ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Dots */}
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Ir para depoimento ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-8 bg-solar-orange"
                    : "w-2 bg-white/20 hover:bg-white/30"
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-2">
            <button
              onClick={goPrev}
              aria-label="Depoimento anterior"
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => { goNext(); setIsAutoPlaying(false); }}
              aria-label="Próximo depoimento"
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
