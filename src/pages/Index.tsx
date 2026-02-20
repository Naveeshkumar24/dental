import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import BlogsPreview from "@/components/BlogsPreview";
import QueryForm from "@/components/QueryForm";
import Contact from "@/components/Contact";

/**
 * DENTAL CLINIC WEBSITE - MAIN PAGE
 *
 * Sections:
 * - Hero
 * - About
 * - Certifications
 * - Achievements
 * - Blogs
 * - Queries (replaces Contact / Why Choose Us)
 */

const Index = () => {
  return (
    <div id="home" className="min-h-screen bg-background">
      <Navbar />

      <main>
        <HeroSection />
        <About />
        <Certifications />
        <Achievements />
        <BlogsPreview />
        <QueryForm />
      </main>
      <Contact />
    </div>
  );
};

export default Index;
