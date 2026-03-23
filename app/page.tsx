import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MediaSection from "@/components/MediaSection";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import ContactForm from "@/components/ContactForm";
import LocationMap from "@/components/LocationMap";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <MediaSection />
      <Services />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <LocationMap />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
