import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Clínica Pediátrica | Cuidado Médico de Excelencia para Niños",
  description:
    "Clínica pediátrica especializada con más de 15 años de experiencia. Atendemos a más de 10,000 familias con servicios de pediatría general, vacunación, neurología pediátrica, nutrición y urgencias. Reserva tu cita hoy.",
  keywords: [
    "clinica pediatrica",
    "pediatra",
    "medico niños",
    "pediatria general",
    "vacunacion niños",
    "neurologia pediatrica",
    "urgencias pediatricas",
    "nutricion infantil",
    "salud infantil",
    "consulta pediatrica",
  ],
  authors: [{ name: "Clínica Pediátrica" }],
  openGraph: {
    title: "Clínica Pediátrica | Cuidado Médico de Excelencia para Niños",
    description:
      "Más de 15 años cuidando la salud de tus hijos. Pediatría general, vacunación, neurología, nutrición y urgencias pediátricas.",
    type: "website",
    locale: "es_ES",
    siteName: "Clínica Pediátrica",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínica Pediátrica | Cuidado Médico de Excelencia",
    description: "Más de 15 años cuidando la salud de tus hijos.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={poppins.variable}>
      <body className="font-body bg-white text-[#1A1A1A] antialiased">
        {children}
      </body>
    </html>
  );
}
