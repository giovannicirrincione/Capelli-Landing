"use client";

import { useEffect, useRef } from "react";
import { CheckMini } from "@medusajs/icons";

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal").forEach((r, i) => {
            setTimeout(() => r.classList.add("visible"), i * 120);
          });
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5a2e42] via-[#8b4a65] to-[#3d6a28]" />

      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5" />
      <div className="absolute -bottom-32 -left-16 w-96 h-96 rounded-full bg-accent/10" />
      <div className="absolute top-1/2 left-1/4 w-2 h-2 rounded-full bg-accent opacity-60" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-white/20" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="reveal">
          <span className="inline-block mb-4 px-5 py-2 rounded-full bg-white/10 text-white/80 text-sm font-body font-medium">
            ¿Listo para empezar?
          </span>
        </div>

        <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Tu hijo merece la{" "}
          <span className="text-accent italic font-light">mejor atención</span>
        </h2>

        <p className="reveal font-body text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          No esperes más para poner la salud de tus hijos en manos de
          especialistas comprometidos. Primera consulta con evaluación completa
          incluida.
        </p>

        {/* Guarantees */}
        <div className="reveal flex flex-wrap justify-center gap-6 mb-12">
          {[
            "Cita en menos de 48h",
            "Sin listas de espera",
            "Atención personalizada",
            "Seguimiento continuo",
          ].map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 font-body text-sm text-white/90 font-medium"
            >
              <CheckMini className="w-4 h-4 text-accent flex-shrink-0" />
              {item}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="reveal flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://mrturno.com/p/@capelli"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full bg-accent text-white font-body font-bold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-accent/40 transition-all duration-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Reservar Cita Ahora
          </a>
          <a
            href="tel:0261157261890"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full bg-white/10 backdrop-blur text-white border border-white/30 font-body font-bold text-lg hover:bg-white/20 transition-all duration-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            0261 157 261 890
          </a>
        </div>
      </div>
    </section>
  );
}
