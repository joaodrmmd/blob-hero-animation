import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import ScrollVelocityBanner from "@/components/ScrollVelocityBanner";
import ExpertiseSection from "@/components/ExpertiseSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import GradualBlur from "@/components/effects/GradualBlur";

const Index = () => (
  <>
    <div className="noise-overlay" aria-hidden="true" />
    <GradualBlur position="top" strength={1.2} height="3rem" divCount={4} />
    <GradualBlur position="bottom" strength={1.5} height="4rem" divCount={5} />
    <Navbar />
    <HeroSection />
    <StatsBar />
    <ScrollVelocityBanner />
    <ExpertiseSection />
    <ProjectsSection />
    <AboutSection />
    <ContactSection />
    <Footer />
  </>
);

export default Index;
