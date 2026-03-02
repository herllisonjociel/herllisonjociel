/**
 * Header — sticky navigation bar
 * Design: Tropical Tech — transparent on top, solid on scroll
 * Logo MetalSol + nav links + CTA
 */

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { WHATSAPP_URL } from "./WhatsAppButton";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663031029526/mR7Xuxta9u9PJhH9aehSCL/logo_metalsol_770a3adc.webp";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-solar-navy/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 shrink-0">
          <img
            src={LOGO_URL}
            alt="MetalSol Energia Solar"
            className="h-10 sm:h-12 w-auto object-contain brightness-0 invert"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-solar-orange font-medium text-sm px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+553199441-8333"
            className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors"
          >
            <Phone className="w-4 h-4" />
            (31) 99441-8333
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-solar-orange hover:bg-solar-orange-dark text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Solicitar Orçamento
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-solar-navy/98 backdrop-blur-md border-t border-white/10 animate-fade-in-up">
          <nav className="container py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white/80 hover:text-solar-orange font-medium text-base px-4 py-3 rounded-lg transition-colors hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href="tel:+553199441-8333"
                className="flex items-center gap-2 text-white/80 text-sm font-medium px-4 py-2"
              >
                <Phone className="w-4 h-4" />
                (31) 99441-8333
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-solar-orange text-white font-bold text-center px-5 py-3 rounded-lg mx-4"
              >
                Solicitar Orçamento
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
