"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { StarSolid } from "@medusajs/icons";

const stats = [
  { value: "10", label: "Años de experiencia" },
  { value: "1000+", label: "Familias atendidas" },
  { value: "5.0", label: "Satisfacción media", star: true },
  { value: "2", label: "Especialistas" },
];

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative h-screen bg-cream overflow-hidden pt-20 md:pt-24">
      {/* Background decorative elements */}
      <div className="absolute top-[7.5rem] md:top-[8.5rem] bottom-0 right-0 w-[54vw] bg-rose-100 rounded-l-3xl hidden md:block" />

      {/* Text content — stays dentro del contenedor centrado */}
      <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="w-full md:w-1/2 space-y-3">
          {/* Eyebrow */}
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-primary/20 text-primary text-sm font-body font-semibold">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Consultorio Médico Pediátrico
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-[1.05]">
            <span className="block animate-fade-in-up">Cuidado</span>
            <span className="block animate-fade-in-up animate-delay-120 italic font-light text-accent">
              Pediátrico
            </span>
            <span className="block animate-fade-in-up animate-delay-240">
              de Excelencia
            </span>
            <span className="block animate-fade-in-up animate-delay-360 text-2xl md:text-3xl lg:text-4xl text-[#1A1A1A]">
              para tus Hijos
            </span>
          </h1>

          {/* Subtext */}
          <p className="animate-fade-in-up animate-delay-480 font-body text-sm md:text-base text-muted leading-relaxed max-w-md">
            Profesionales de mas de 10 años de experiencia acompañando el crecimiento sano de niños y niñas.
            Un equipo comprometido con la salud y el
            bienestar de tus niños.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up animate-delay-600 flex flex-wrap gap-3">
            <a
              href="https://mrturno.com/p/@capelli"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-accent text-white font-body font-bold text-sm hover:scale-105 hover:shadow-xl hover:shadow-accent/30 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Reservar Cita
            </a>
            <a
              href="tel:0261157261890"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-primary text-primary font-body font-bold text-sm hover:bg-primary hover:text-white transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Llamar Ahora
            </a>
          </div>

          {/* Stats */}
          <div
            ref={statsRef}
            className="reveal-stagger visible pt-3 grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-0.5">
                <p className="font-display text-xl font-bold text-primary flex items-center gap-1">
                  {stat.value}
                  {"star" in stat && <StarSolid className="w-4 h-4 text-accent" />}
                </p>
                <p className="font-body text-xs text-muted leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image — posicionada absolutamente, desde ~50% hasta el borde derecho */}
      <div className="absolute top-0 right-0 bottom-0 w-[52vw] hidden md:block pt-24 pb-6 pl-10">
        <div className="relative h-full rounded-l-3xl overflow-hidden">
          <Image
            src="/heroFoto.png"
            alt="Médico pediatra con niño"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/30 to-transparent" />
        </div>

        {/* Floating badge */}
        <div className="absolute left-2 bottom-16 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
            <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="font-body font-bold text-sm text-[#1A1A1A]">Atención garantizada</p>
            <p className="font-body text-xs text-muted">en 24 horas</p>
          </div>
        </div>
      </div>

    </section>
  );
}
