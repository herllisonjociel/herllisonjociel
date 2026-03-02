/**
 * FAQSection — frequently asked questions with accordion
 * Design: Tropical Tech — dark bg, clean accordion
 */

import { useInView } from "@/hooks/useInView";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "Onde encontro energia solar contato em Contagem?",
    answer:
      "Você pode falar diretamente com nossos consultores pelo botão de WhatsApp desta página ou visitar nossa sede para conhecer nossos projetos de energia solar em Contagem. Estamos prontos para atender você com agilidade e personalização.",
  },
  {
    question:
      "A Metalsol faz instalação de energia solar fotovoltaica no bairro Arvoredo em Contagem?",
    answer:
      "Sim! Temos projetos específicos entregues e operando no bairro Arvoredo e em toda a região metropolitana. Atendemos também Eldorado, Riacho, Industrial e todos os demais bairros de Contagem.",
  },
  {
    question:
      "Qual a importância da manutenção de placa de energia solar em Contagem?",
    answer:
      "A poeira e detritos podem reduzir a geração em até 30%. Nossa manutenção de placa solar em Contagem devolve a eficiência máxima ao seu investimento. Realizamos limpeza técnica, revisão de inversores e verificação completa do sistema.",
  },
  {
    question: "Quanto tempo leva para instalar o sistema de energia solar?",
    answer:
      "O processo completo, desde a elaboração da proposta até a ativação na concessionária de energia, leva em média de 30 a 60 dias. A instalação física dos painéis é feita em poucos dias, dependendo do tamanho do projeto.",
  },
  {
    question: "Qual a garantia oferecida pela Metalsol?",
    answer:
      "Oferecemos garantia de até 5 anos na instalação, bem acima da média do mercado. Além disso, os painéis solares possuem garantia de desempenho de até 25 anos do fabricante. Também oferecemos seguro contra roubo, furto e mau funcionamento.",
  },
  {
    question: "A Metalsol trabalha com financiamento?",
    answer:
      "Sim, trabalhamos com diversas opções de financiamento para facilitar seu investimento em energia solar. Entre em contato conosco para conhecer as condições especiais disponíveis para projetos em Contagem.",
  },
];

export default function FAQSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="faq" className="relative bg-solar-navy py-20 lg:py-28">
      <div ref={ref} className="container">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span
              className={`inline-block text-solar-orange font-semibold text-sm uppercase tracking-wider mb-3 transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Dúvidas Frequentes
            </span>
            <h2
              className={`text-3xl sm:text-4xl font-extrabold text-white mb-4 transition-all duration-700 delay-100 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Perguntas <span className="gradient-text">Frequentes</span>
            </h2>
            <p
              className={`text-white/50 text-lg transition-all duration-700 delay-200 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Tire suas dúvidas sobre energia solar em Contagem.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {FAQS.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-white/5 border border-white/10 rounded-xl px-6 overflow-hidden data-[state=open]:border-solar-orange/30 data-[state=open]:bg-white/8 transition-colors"
                >
                  <AccordionTrigger className="text-white hover:text-solar-orange text-left font-semibold py-5 text-base [&[data-state=open]>svg]:text-solar-orange hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/60 leading-relaxed pb-5 text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
