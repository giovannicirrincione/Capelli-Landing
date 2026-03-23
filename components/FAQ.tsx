"use client";

import { useState, useRef, useEffect } from "react";

const faqs = [
  {
    q: "¿Cómo puedo sacar un turno?",
    a: "Podés sacar tu turno de forma online desde nuestra página, llamándonos al 0261 157 261 890 o escribiéndonos por WhatsApp. Atendemos de lunes a viernes en horario de mañana y tarde.",
  },
  {
    q: "¿A partir de qué edad atienden?",
    a: "Atendemos desde recién nacidos hasta los 16 años. Si tu hijo ya está en la adolescencia, igual puede seguir con nosotros hasta esa edad con un seguimiento personalizado.",
  },
  {
    q: "¿Trabajan con obras sociales o prepagas?",
    a: "Sí, trabajamos con las principales obras sociales y prepagas. Te recomendamos que nos consultes directamente para verificar si tu cobertura está incluida. También atendemos de forma particular.",
  },
  {
    q: "¿Qué hago si mi hijo tiene una urgencia?",
    a: "Contamos con atención de urgencias pediátricas con prioridad. Si es fuera del horario habitual, tenemos un teléfono de guardia disponible las 24 horas para orientarte y ayudarte a tomar la mejor decisión.",
  },
  {
    q: "¿Cuánto tiempo tarda en conseguirse un turno?",
    a: "Para consultas de rutina solemos tener turnos disponibles en 24 a 48 horas. Si es algo urgente, hacemos todo lo posible para atenderte el mismo día. Los controles programados se pueden agendar con más anticipación.",
  },
  {
    q: "¿Hacen el seguimiento del calendario de vacunas?",
    a: "Sí, llevamos el control completo del calendario de vacunación de cada paciente. Te avisamos cuando le toca una nueva dosis y te asesoramos sobre las vacunas recomendadas según la edad y situación de tu hijo.",
  },
  {
    q: "¿Derivan a otros especialistas si hace falta?",
    a: "Por supuesto. Cuando la situación lo requiere, derivamos a especialistas de confianza (cardiología, neurología, nutrición, oftalmología, entre otros), acompañándote en todo el proceso para que no tengas que manejarlo solo.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
        isOpen
          ? "border-primary/40 bg-surface"
          : "border-primary/10 bg-white/50 hover:border-primary/20"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span
          className={`font-body font-semibold text-base transition-colors ${
            isOpen ? "text-primary" : "text-[#1A1A1A]"
          }`}
        >
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen ? "bg-primary text-white rotate-45" : "bg-primary/10 text-primary"
          }`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <p className="px-6 pb-5 font-body text-sm text-muted leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal").forEach((r, i) => {
            setTimeout(() => r.classList.add("visible"), i * 100);
          });
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="faq" ref={sectionRef} className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-12 text-center">
          <span className="inline-block mb-3 text-accent font-body font-semibold text-sm uppercase tracking-widest">
            Preguntas Frecuentes
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
            Resolvemos tus dudas
          </h2>
          <p className="mt-4 font-body text-muted">
            ¿Tenés alguna pregunta? Acá encontrás las respuestas más frecuentes.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="reveal space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Bottom note */}
        <div className="reveal mt-10 text-center">
          <p className="font-body text-sm text-muted">
            ¿No encontrás lo que buscás?{" "}
            <a
              href="#contacto"
              className="text-primary font-semibold underline underline-offset-2 hover:text-accent transition-colors"
            >
              Contactanos directamente
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
