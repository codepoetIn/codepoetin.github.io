import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Trophy } from "lucide-react";

const Experience = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Building innovative solutions across industries
          </p>
        </div>

        <div className="space-y-8">
          <Card className="border-l-4 border-l-primary hover:border-l-8 transition-all duration-300 hover:glow-effect animate-slide-in-left">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary animate-float">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold">Full Stack Developer</h3>
                      <p className="text-muted-foreground">Various Companies</p>
                    </div>
                    <Badge variant="outline">15 Years</Badge>
                  </div>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    Comprehensive experience in building scalable web applications, 
                    mobile solutions, and enterprise systems. Proficient in both frontend 
                    and backend technologies with a focus on delivering high-quality, 
                    maintainable code.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge>Angular</Badge>
                    <Badge>React</Badge>
                    <Badge>Node.js</Badge>
                    <Badge>TypeScript</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent hover:border-l-8 transition-all duration-300 hover:glow-effect animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent animate-float" style={{ animationDelay: '0.5s' }}>
                  <Trophy className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold">E-commerce Specialist</h3>
                      <p className="text-muted-foreground">E-commerce Solutions</p>
                    </div>
                    <Badge variant="outline">10 Years</Badge>
                  </div>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    Specialized in developing robust e-commerce platforms using WordPress, 
                    Drupal, Magento, and SAP Commerce Cloud. Expertise in Composable Storefront, 
                    payment gateway integration, inventory management, and creating seamless shopping experiences.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge>WordPress</Badge>
                    <Badge>Magento</Badge>
                    <Badge>Drupal</Badge>
                    <Badge>SAP Commerce</Badge>
                    <Badge>Composable Storefront</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary hover:border-l-8 transition-all duration-300 hover:glow-effect animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary animate-float" style={{ animationDelay: '1s' }}>
                  <Briefcase className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold">AI/ML Engineer</h3>
                      <p className="text-muted-foreground">Emerging Technologies</p>
                    </div>
                    <Badge variant="outline">Current</Badge>
                  </div>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    Working with cutting-edge AI and machine learning technologies. 
                    Implementing solutions using Azure AI Foundry, LangChain, MCP Servers, and various 
                    agentic frameworks to solve complex business problems. Experienced in demonstrating 
                    AI integrations across enterprise platforms.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge>Azure AI</Badge>
                    <Badge>LangChain</Badge>
                    <Badge>Autogen</Badge>
                    <Badge>N8N</Badge>
                    <Badge>MCP Servers</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
