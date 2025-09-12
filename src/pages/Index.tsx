import Navigation from '@/components/ui/navigation';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ProjectsSection from '@/components/projects-section';
import CVSection from '@/components/cv-section';
import Footer from '@/components/footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CVSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
