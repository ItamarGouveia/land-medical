import AboutSection from "@/components/About";
import ContactForm from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import ServicesSection from "@/components/Services";
import TeamSection from "@/components/Team";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
