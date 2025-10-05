import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Brain, 
  ShoppingCart, 
  BarChart3,
  Palette,
  Server
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["Angular", "React", "TypeScript", "Ionic"],
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Node.js", "Express", "Python", "PHP"],
  },
  {
    title: "Design & Tools",
    icon: Palette,
    skills: ["Figma", "Photoshop", "CSS3 Animations"],
  },
  {
    title: "CMS & E-commerce",
    icon: ShoppingCart,
    skills: ["WordPress", "Drupal", "Magento", "SAP Commerce Cloud", "Composable Storefront"],
  },
  {
    title: "AI & ML",
    icon: Brain,
    skills: ["Azure AI Foundry", "Ollama", "LangChain", "Autogen", "N8N", "MCP Servers"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Analytics & Monitoring",
    icon: BarChart3,
    skills: ["Adobe Analytics", "Google Analytics", "Dynatrace"],
  },
  {
    title: "Enterprise Platforms",
    icon: Server,
    skills: ["SAP CDC", "Dynatrace", "SAP Commerce"],
  },
];

const Skills = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit honed over 15 years of building world-class applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="group hover:border-primary transition-all duration-300 hover:glow-effect hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                    <category.icon className="h-5 w-5" />
                  </div>
                  <span className="group-hover:text-primary transition-colors">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
