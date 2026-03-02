/**
 * Footer — SEO-geolocalized footer
 * Design: Tropical Tech — dark bg, organized links
 */

import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663031029526/mR7Xuxta9u9PJhH9aehSCL/logo_metalsol_770a3adc.webp";

export default function Footer() {
  return (
    <footer className="bg-[#060E1A] text-white/60 pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src={LOGO_URL}
              alt="MetalSol Energia Solar"
              className="h-10 w-auto object-contain brightness-0 invert mb-4"
            />
            <p className="text-sm leading-relaxed max-w-md mb-6">
              Líder em energia solar em Contagem MG, oferecemos soluções completas para quem busca energia solar residencial e manutenção especializada. Se você procura por empresas de energia solar em Contagem, a Metalsol é a escolha certa para garantir o futuro energético da sua casa ou empresa em Contagem, Minas Gerais.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "https://www.instagram.com/metalsol", label: "Instagram" },
                { icon: Facebook, href: "https://www.facebook.com/metalsol", label: "Facebook" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/metalsol", label: "LinkedIn" },
                { icon: Youtube, href: "https://www.youtube.com/metalsol", label: "YouTube" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-solar-orange/20 flex items-center justify-center transition-colors hover:text-solar-orange"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Links Rápidos</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Sobre Nós", href: "#sobre" },
                { label: "Serviços", href: "#servicos" },
                { label: "Benefícios", href: "#beneficios" },
                { label: "FAQ", href: "#faq" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-solar-orange transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-solar-orange shrink-0" />
                <span>
                  Casa Raja Shopping, Av. Raja Gabáglia, 3950, Sala 1E, Estoril, Belo Horizonte - MG
                </span>
              </li>
              <li>
                <a
                  href="tel:+553199441-8333"
                  className="flex items-center gap-3 text-sm hover:text-solar-orange transition-colors"
                >
                  <Phone className="w-4 h-4 text-solar-orange shrink-0" />
                  (31) 99441-8333
                </a>
              </li>
              <li>
                <a
                  href="tel:+553135649177"
                  className="flex items-center gap-3 text-sm hover:text-solar-orange transition-colors"
                >
                  <Phone className="w-4 h-4 text-solar-orange shrink-0" />
                  (31) 3564-9177
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@metalsol.com.br"
                  className="flex items-center gap-3 text-sm hover:text-solar-orange transition-colors"
                >
                  <Mail className="w-4 h-4 text-solar-orange shrink-0" />
                  contato@metalsol.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Metalsol Energia Solar. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/30">
            Energia Solar em Contagem MG — Sua Empresa de Confiança
          </p>
        </div>
      </div>
    </footer>
  );
}
