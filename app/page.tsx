import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import ServicesSection from "./components/ServicesSection"
import CertificatesSection from "./components/CertificatesSection"
import ClientsSection from "./components/ClientsSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen pt-24"> {/* Reintroduzido pt-24 aqui */}
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CertificatesSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
