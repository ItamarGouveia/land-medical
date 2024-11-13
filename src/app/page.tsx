import AboutSection from "@/components/About";

import Footer from "@/components/Footer";

import Navbar from "@/components/Header2";
import HeroSection from "@/components/Hero";
import How from "@/components/How";

import ServicesSection from "@/components/Services";
import TeamSection from "@/components/Team";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <div>




      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <How />
      <Testimonials />


      <Footer />
    </div>
  );
}
