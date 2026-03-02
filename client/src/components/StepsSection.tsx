/**
 * StepsSection — timeline of the solar installation process
 * Design: Tropical Tech — vertical timeline with numbered steps
 */

import { useInView } from "@/hooks/useInView";
import { FileText, Handshake, ClipboardCheck, Wrench, Zap } from "lucide-react";

const STEPS = [
  {
    icon: FileText,
    number: "01",
    title: "Elaboração da Proposta",
    description: "Análise personalizada do seu consumo e projeto sob medida para sua necessidade.",
  },
  {
    icon: Handshake,
    number: "02",
    title: "Negócio Fechado",
    description: "Condições especiais de pagamento e financiamento para facilitar seu investimento.",
  },
  {
    icon: ClipboardCheck,
    number: "03",
    title: "Homologação do Sistema",
    description: "Cuidamos de toda a burocracia junto à CEMIG para aprovação do seu sistema.",
  },
  {
    icon: Wrench,
    number: "04",
    title: "Instalação do Sistema",
    description: "Equipe técnica especializada realiza a instalação com segurança e qualidade.",
  },
  {
    icon: Zap,
    number: "05",
    title: "Ativação e Economia",
    description: "Efetivação na concessionária e início imediato da economia na sua conta de luz.",
  },
];

export default function StepsSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="relative bg-solar-cream py-20 lg:py-28">
      <div ref={ref} className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span
            className={`inline-block text-solar-orange font-semibold text-sm uppercase tracking-wider mb-3 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Como Funciona
          </span>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold text-solar-navy mb-4 transition-all duration-700 delay-100 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Etapas para adquirir seu{" "}
            <span className="gradient-text">Sistema Solar</span>
          </h2>
          <p
            className={`text-lg text-solar-navy/60 transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Da proposta à ativação, cuidamos de todo o processo para você.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-solar-orange/20 -translate-x-1/2 hidden sm:block" />

            {STEPS.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={step.number}
                  className={`relative flex items-start gap-6 mb-10 last:mb-0 transition-all duration-700 ${
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${(i + 2) * 150}ms` }}
                >
                  {/* Desktop: alternating layout */}
                  <div className={`hidden lg:grid lg:grid-cols-[1fr_auto_1fr] w-full items-center gap-8`}>
                    {/* Left content */}
                    <div className={`${isLeft ? "" : "order-3"}`}>
                      <div className={`bg-white rounded-2xl p-6 border border-solar-navy/5 shadow-sm hover:shadow-md hover:border-solar-orange/15 transition-all duration-300 ${isLeft ? "text-right" : "text-left"}`}>
                        <span className="text-solar-orange/40 font-extrabold text-3xl block mb-1">{step.number}</span>
                        <h3 className="text-lg font-bold text-solar-navy mb-1">{step.title}</h3>
                        <p className="text-sm text-solar-navy/55">{step.description}</p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="relative z-10 w-12 h-12 rounded-full bg-solar-orange flex items-center justify-center shadow-lg shadow-solar-orange/20 order-2">
                      <step.icon className="w-5 h-5 text-white" />
                    </div>

                    {/* Right spacer */}
                    <div className={`${isLeft ? "order-3" : ""}`} />
                  </div>

                  {/* Mobile: simple layout */}
                  <div className="lg:hidden flex items-start gap-4 w-full">
                    <div className="relative z-10 w-12 h-12 rounded-full bg-solar-orange flex items-center justify-center shadow-lg shadow-solar-orange/20 shrink-0">
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-white rounded-2xl p-5 border border-solar-navy/5 shadow-sm flex-1">
                      <span className="text-solar-orange/40 font-extrabold text-2xl block mb-1">{step.number}</span>
                      <h3 className="text-lg font-bold text-solar-navy mb-1">{step.title}</h3>
                      <p className="text-sm text-solar-navy/55">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
