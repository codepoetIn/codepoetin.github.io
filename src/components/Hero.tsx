import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block animate-slide-up">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase animate-pulse">
              Think. Craft. Code
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Building Digital
            <span className="text-primary block animate-slide-in-right" style={{ animationDelay: '0.4s' }}>Experiences</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.6s' }}>
            15+ years of expertise in crafting scalable web applications, e-commerce solutions, 
            and cutting-edge AI/ML implementations. Specialized in full-stack development with 
            a passion for innovation and beautiful UI design.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <Button size="lg" className="group hover:scale-110 transition-all duration-300">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
            </Button>
            <Button size="lg" variant="secondary" className="hover:scale-110 transition-all duration-300">
              Contact Me
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-8 animate-slide-up" style={{ animationDelay: '1s' }}>
            <Button size="icon" variant="ghost" className="hover:text-primary hover:scale-125 hover:rotate-12 transition-all duration-300">
              <Github className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" className="hover:text-primary hover:scale-125 hover:rotate-12 transition-all duration-300">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" className="hover:text-primary hover:scale-125 hover:rotate-12 transition-all duration-300">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Gradient Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
