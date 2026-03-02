/**
 * AboutSection — company authority & trust section
 * Design: Tropical Tech — stats counters + trust pillars
 * Light background with navy accents
 */

import { useInView } from "@/hooks/useInView";
import { useCounter } from "@/hooks/useCounter";
import { MapPin, Award, Zap, Users } from "lucide-react";

function StatCard({ icon: Icon, value, suffix, label, delay, isInView }: {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  delay: string;
  isInView: boolean;
}) {
  const count = useCounter(value, 2000, isInView);
  return (
    <div
      className={`text-center transition-all duration-700 ${delay} ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-solar-orange/10 text-solar-orange mb-3">
        <Icon className="w-7 h-7" />
      </div>
      <div className="text-3xl sm:text-4xl font-extrabold text-solar-navy">
        {count}
        <span className="text-solar-orange">{suffix}</span>
      </div>
      <p className="text-sm text-solar-navy/60 mt-1 font-medium">{label}</p>
    </div>
  );
}

export default function AboutSection() {
  const { ref: statsRef, isInView: statsVisible } = useInView();
  const { ref: contentRef, isInView: contentVisible } = useInView();

  return (
    <section id="sobre" className="relative bg-solar-cream pt-4 pb-20 lg:pb-28">
      {/* Stats Bar */}
      <div ref={statsRef} className="container mb-16 lg:mb-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 bg-white rounded-2xl p-8 lg:p-12 shadow-xl shadow-solar-navy/8 -mt-24 lg:-mt-32 relative z-10 border border-solar-navy/5">
          <StatCard icon={Users} value={50} suffix="+" label="Pessoas na equipe" delay="delay-0" isInView={statsVisible} />
          <StatCard icon={Award} value={7} suffix="+" label="Anos de atuação" delay="delay-100" isInView={statsVisible} />
          <StatCard icon={Zap} value={10} suffix="MW+" label="Painéis instalados" delay="delay-200" isInView={statsVisible} />
          <StatCard icon={MapPin} value={500} suffix="+" label="Projetos entregues" delay="delay-300" isInView={statsVisible} />
        </div>
      </div>

      {/* Authority Content */}
      <div ref={contentRef} className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2
            className={`text-3xl sm:text-4xl font-extrabold text-solar-navy mb-4 transition-all duration-700 ${
              contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Referência entre as Empresas de{" "}
            <span className="gradient-text">Energia Solar em Contagem</span>
          </h2>
          <p
            className={`text-lg text-solar-navy/60 leading-relaxed transition-all duration-700 delay-100 ${
              contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            A Metalsol não é apenas mais uma no mercado; somos a empresa de energia solar em Contagem que entende o telhado do mineiro.
          </p>
        </div>

        {/* Trust Pillars */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              icon: Award,
              title: "Expertise Local",
              description:
                "Domínio completo das normas da CEMIG para energia solar em Contagem MG. Conhecemos cada detalhe da regulamentação local.",
            },
            {
              icon: Zap,
              title: "Equipamentos de Elite",
              description:
                "Trabalhamos com o que há de melhor em equipamentos de energia solar. Tecnologia de ponta para máxima eficiência.",
            },
            {
              icon: MapPin,
              title: "Proximidade",
              description:
                "Atendemos com agilidade o Arvoredo, Eldorado, Riacho e demais bairros de Contagem e região metropolitana.",
            },
          ].map((pillar, i) => (
            <div
              key={pillar.title}
              className={`bg-white rounded-2xl p-8 border border-solar-navy/5 hover:border-solar-orange/20 transition-all duration-500 hover:shadow-lg hover:shadow-solar-orange/5 hover:-translate-y-1 group ${
                contentVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 2) * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-solar-orange/10 flex items-center justify-center mb-5 group-hover:bg-solar-orange/20 transition-colors">
                <pillar.icon className="w-6 h-6 text-solar-orange" />
              </div>
              <h3 className="text-xl font-bold text-solar-navy mb-3">
                {pillar.title}
              </h3>
              <p className="text-solar-navy/60 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
