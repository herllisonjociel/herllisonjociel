/**
 * BenefitsSection — why invest in solar energy
 * Design: Tropical Tech — light bg, icon badges, comparison table
 */

import { useInView } from "@/hooks/useInView";
import { TrendingDown, Leaf, HeartHandshake, CheckCircle2 } from "lucide-react";

const BENEFITS = [
  {
    icon: TrendingDown,
    title: "Redução de Custos",
    description: "Economize até 95% na conta de luz desde o primeiro mês. Retorno do investimento garantido.",
    highlight: "95%",
    highlightLabel: "de economia",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description: "Utilize energia solar fotovoltaica para reduzir sua pegada de carbono e contribuir para um futuro mais limpo.",
    highlight: "100%",
    highlightLabel: "energia limpa",
  },
  {
    icon: HeartHandshake,
    title: "Suporte Local",
    description: "Ter o suporte de uma empresa de energia solar local garante manutenção rápida e eficiente em Contagem.",
    highlight: "24h",
    highlightLabel: "atendimento",
  },
];

const TABLE_DATA = [
  {
    service: "Energia Solar Residencial",
    focus: "Contagem MG",
    differential: "Projetos personalizados por bairro",
  },
  {
    service: "Energia Solar Industrial",
    focus: "Distrito Industrial",
    differential: "Alta potência e homologação rápida",
  },
  {
    service: "Manutenção Técnica",
    focus: "Toda a cidade",
    differential: "Equipe própria e peças originais",
  },
];

export default function BenefitsSection() {
  const { ref: benefitsRef, isInView: benefitsVisible } = useInView();
  const { ref: tableRef, isInView: tableVisible } = useInView();

  return (
    <section id="beneficios" className="relative bg-solar-cream py-20 lg:py-28">
      <div className="container">
        {/* Section Header */}
        <div ref={benefitsRef} className="max-w-3xl mx-auto text-center mb-14">
          <span
            className={`inline-block text-solar-orange font-semibold text-sm uppercase tracking-wider mb-3 transition-all duration-700 ${
              benefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Vantagens
          </span>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold text-solar-navy mb-4 transition-all duration-700 delay-100 ${
              benefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Por que investir em{" "}
            <span className="gradient-text">Energia Solar em Contagem?</span>
          </h2>
          <p
            className={`text-lg text-solar-navy/60 transition-all duration-700 delay-200 ${
              benefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Os benefícios de escolher a Metalsol em Contagem MG são claros para o seu bolso e para o planeta.
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {BENEFITS.map((benefit, i) => (
            <div
              key={benefit.title}
              className={`relative bg-white rounded-2xl p-8 border border-solar-navy/5 hover:border-solar-orange/20 transition-all duration-500 hover:shadow-xl hover:shadow-solar-orange/5 hover:-translate-y-1 group overflow-hidden ${
                benefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 2) * 150}ms` }}
            >
              {/* Background highlight number */}
              <div className="absolute -top-4 -right-4 text-8xl font-extrabold text-solar-orange/5 select-none pointer-events-none group-hover:text-solar-orange/10 transition-colors">
                {benefit.highlight}
              </div>

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-solar-orange/15 to-solar-gold/10 flex items-center justify-center mb-5">
                  <benefit.icon className="w-7 h-7 text-solar-orange" />
                </div>
                <h3 className="text-xl font-bold text-solar-navy mb-2">
                  {benefit.title}
                </h3>
                <p className="text-solar-navy/55 leading-relaxed mb-4">
                  {benefit.description}
                </p>
                <div className="flex items-center gap-2 text-solar-orange font-bold text-2xl">
                  {benefit.highlight}
                  <span className="text-sm font-medium text-solar-navy/40">
                    {benefit.highlightLabel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div ref={tableRef} className="max-w-4xl mx-auto">
          <h3
            className={`text-2xl font-bold text-solar-navy text-center mb-8 transition-all duration-700 ${
              tableVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Tabela Comparativa de Benefícios
          </h3>
          <div
            className={`bg-white rounded-2xl overflow-hidden shadow-lg shadow-solar-navy/5 border border-solar-navy/5 transition-all duration-700 delay-200 ${
              tableVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-solar-navy text-white font-semibold text-sm">
              <div className="px-6 py-4">Serviço</div>
              <div className="px-6 py-4">Foco Local</div>
              <div className="px-6 py-4">Diferencial Metalsol</div>
            </div>
            {/* Table Rows */}
            {TABLE_DATA.map((row, i) => (
              <div
                key={row.service}
                className={`grid grid-cols-3 text-sm ${
                  i < TABLE_DATA.length - 1 ? "border-b border-solar-navy/5" : ""
                } hover:bg-solar-orange/3 transition-colors`}
              >
                <div className="px-6 py-4 font-semibold text-solar-navy flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-solar-green shrink-0" />
                  {row.service}
                </div>
                <div className="px-6 py-4 text-solar-navy/60">{row.focus}</div>
                <div className="px-6 py-4 text-solar-navy/70 font-medium">
                  {row.differential}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
