import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Skills />
      <Experience />
      
      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CodePoet. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
