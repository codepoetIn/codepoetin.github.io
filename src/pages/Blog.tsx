import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "Demonstrating MCP Servers Across Enterprise Platforms",
    excerpt: "I have demonstrated the MCP servers like Figma MCP server, Jira MCP server, Playwright MCP server, GitHub MCP server, Dynatrace MCP server, and custom MCP server to the entire team. A comprehensive guide to implementing Model Context Protocol servers for seamless AI integration.",
    date: "2024-03-20",
    readTime: "12 min read",
    tags: ["AI/ML", "MCP Servers", "Enterprise"],
  },
  {
    id: 2,
    title: "Building Scalable E-commerce Platforms with Modern Tech Stack",
    excerpt: "A deep dive into architecting e-commerce solutions that handle millions of transactions using React, Node.js, and MongoDB.",
    date: "2024-03-15",
    readTime: "8 min read",
    tags: ["E-commerce", "React", "Node.js"],
  },
  {
    id: 3,
    title: "Integrating AI into Web Applications: A Practical Guide",
    excerpt: "Exploring how to leverage Azure AI Foundry and LangChain to build intelligent features in your web applications.",
    date: "2024-03-10",
    readTime: "12 min read",
    tags: ["AI/ML", "Azure", "LangChain"],
  },
  {
    id: 4,
    title: "From Monolith to Microservices: SAP Commerce Cloud Journey",
    excerpt: "Lessons learned while migrating legacy platforms to SAP Commerce Cloud with Composable Storefront architecture.",
    date: "2024-03-05",
    readTime: "10 min read",
    tags: ["Architecture", "SAP Commerce", "Composable"],
  },
  {
    id: 5,
    title: "TypeScript Best Practices for Enterprise Applications",
    excerpt: "Essential TypeScript patterns and practices learned from building large-scale enterprise applications.",
    date: "2024-02-28",
    readTime: "6 min read",
    tags: ["TypeScript", "Best Practices"],
  },
  {
    id: 6,
    title: "Analytics-Driven Development with Dynatrace",
    excerpt: "How to leverage Adobe Analytics, Google Analytics, and Dynatrace to drive product decisions and monitor application performance.",
    date: "2024-02-20",
    readTime: "7 min read",
    tags: ["Analytics", "Dynatrace", "Performance"],
  },
  {
    id: 7,
    title: "Building Agentic AI Systems with Autogen",
    excerpt: "A comprehensive guide to creating autonomous AI agents that can collaborate and solve complex problems.",
    date: "2024-02-15",
    readTime: "15 min read",
    tags: ["AI/ML", "Autogen", "Agentic AI"],
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">
              Tech <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on full-stack development, 
              AI/ML, and building scalable web applications
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="group hover:border-primary transition-all duration-300 hover:glow-effect cursor-pointer hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="group/btn p-0 h-auto font-semibold">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Load More Articles
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
