"use client";

import { useEffect, useRef } from "react";
import { Lifebuoy, Beaker, Puzzle, Sparkles, BellAlert, ChartActivity } from "@medusajs/icons";

const services = [
  {
    icon: Lifebuoy,
    title: "Pediatría General",
    desc: "Revisiones periódicas, diagnóstico y tratamiento de enfermedades comunes. Seguimiento integral del desarrollo infantil.",
    color: "bg-primary/5 border-primary/20",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Beaker,
    title: "Vacunación",
    desc: "Calendario vacunal completo y actualizado. Vacunas obligatorias y recomendadas según la edad y situación del niño.",
    color: "bg-accent/5 border-accent/20",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: Puzzle,
    title: "Neurología Pediátrica",
    desc: "Evaluación y tratamiento de trastornos del neurodesarrollo. TDAH, epilepsia, cefaleas y otros trastornos neurológicos.",
    color: "bg-surface border-primary/10",
    iconBg: "bg-surface",
    iconColor: "text-primary",
  },
  {
    icon: Sparkles,
    title: "Nutrición Infantil",
    desc: "Planes nutricionales personalizados. Obesidad infantil, alergias alimentarias, introducción de alimentos y hábitos saludables.",
    color: "bg-primary/5 border-primary/20",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: BellAlert,
    title: "Urgencias Pediátricas",
    desc: "Atención rápida en situaciones urgentes. Fiebre alta, traumatismos, dificultad respiratoria y otras emergencias.",
    color: "bg-accent/5 border-accent/20",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: ChartActivity,
    title: "Seguimiento del Desarrollo",
    desc: "Control del crecimiento físico, psicomotor y emocional. Detección temprana de retrasos y derivación especializada.",
    color: "bg-surface border-primary/10",
    iconBg: "bg-surface",
    iconColor: "text-primary",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal").forEach((r, i) => {
            setTimeout(() => r.classList.add("visible"), i * 80);
          });
          el.querySelector(".reveal-stagger")?.classList.add("visible");
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="servicios" ref={sectionRef} className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Asymmetric header */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-end">
          <div className="reveal">
            <span className="inline-block mb-3 text-accent font-body font-semibold text-sm uppercase tracking-widest">
              Nuestros Servicios
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
              Todo lo que tu hijo necesita, en un solo lugar
            </h2>
          </div>
          <div className="reveal">
            <p className="font-body text-muted text-base leading-relaxed">
              Ofrecemos una atención pediátrica integral, desde la primera
              infancia hasta la adolescencia. Cada servicio está diseñado para
              acompañar el crecimiento sano de tu hijo en cada etapa.
            </p>
          </div>
        </div>

        {/* Services grid — 3 col on desktop */}
        <div className="reveal-stagger grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group rounded-3xl border p-8 cursor-default hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ${service.color}`}
            >
              <div
                className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6`}
              >
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>
              <h3 className="font-display text-xl font-bold text-primary mb-3">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal mt-12 text-center">
          <a
            href="https://mrturno.com/p/@capelli"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-body font-bold text-base hover:bg-primary-dark hover:scale-105 hover:shadow-xl transition-all duration-200"
          >
            Consultar disponibilidad
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
