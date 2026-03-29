import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import ExpertiseSection from "@/components/ExpertiseSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <div className="noise-overlay" aria-hidden="true" />
    <Navbar />
    <HeroSection />
    <StatsBar />
    <ExpertiseSection />
    <ProjectsSection />
    <AboutSection />
    <ContactSection />
    <Footer />
  </>
);

export default Index;
