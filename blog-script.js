const blogPosts = [
  { id: 1, title: "Demonstrating MCP Servers Across Enterprise Platforms", excerpt: "I have demonstrated the MCP servers like Figma MCP server, Jira MCP server, Playwright MCP server, GitHub MCP server, Dynatrace MCP server, and custom MCP server to the entire team. A comprehensive guide to implementing Model Context Protocol servers for seamless AI integration.", date: "2024-03-20", readTime: "12 min read", tags: ["AI/ML", "MCP Servers", "Enterprise"] },
  { id: 2, title: "Building Scalable E-commerce Platforms with Modern Tech Stack", excerpt: "A deep dive into architecting e-commerce solutions that handle millions of transactions using React, Node.js, and MongoDB.", date: "2024-03-15", readTime: "8 min read", tags: ["E-commerce", "React", "Node.js"] },
  { id: 3, title: "Integrating AI into Web Applications: A Practical Guide", excerpt: "Exploring how to leverage Azure AI Foundry and LangChain to build intelligent features in your web applications.", date: "2024-03-10", readTime: "12 min read", tags: ["AI/ML", "Azure", "LangChain"] },
  { id: 4, title: "From Monolith to Microservices: SAP Commerce Cloud Journey", excerpt: "Lessons learned while migrating legacy platforms to SAP Commerce Cloud with Composable Storefront architecture.", date: "2024-03-05", readTime: "10 min read", tags: ["Architecture", "SAP Commerce", "Composable"] },
  { id: 5, title: "TypeScript Best Practices for Enterprise Applications", excerpt: "Essential TypeScript patterns and practices learned from building large-scale enterprise applications.", date: "2024-02-28", readTime: "6 min read", tags: ["TypeScript", "Best Practices"] },
  { id: 6, title: "Analytics-Driven Development with Dynatrace", excerpt: "How to leverage Adobe Analytics, Google Analytics, and Dynatrace to drive product decisions and monitor application performance.", date: "2024-02-20", readTime: "7 min read", tags: ["Analytics", "Dynatrace", "Performance"] },
  { id: 7, title: "Building Agentic AI Systems with Autogen", excerpt: "A comprehensive guide to creating autonomous AI agents that can collaborate and solve complex problems.", date: "2024-02-15", readTime: "15 min read", tags: ["AI/ML", "Autogen", "Agentic AI"] },
  { id: 8, title: "Optimizing Web Performance with Modern Techniques", excerpt: "Strategies and tools for enhancing web application performance, including lazy loading, code splitting, and efficient asset management.", date: "2024-02-10", readTime: "9 min read", tags: ["Web Performance", "Optimization", "Techniques"] },
  { id: 9, title: "Introducing Microsoft Agent Framework: The Open-Source Engine for Agentic AI Applications", excerpt: "Exploring the capabilities of the Microsoft Agent Framework for building intelligent, autonomous applications using open-source tools and libraries.", date: "2025-10-05", readTime: "14 min read", tags: ["AI/ML", "Microsoft", "Agent Framework"] }
];

const blogGrid = document.getElementById('blog-grid');
blogPosts.forEach((post, index) => {
  const card = document.createElement('div');
  card.className = 'rounded-lg border border-border bg-card text-card-foreground shadow-sm group hover:border-primary transition-all duration-300 hover:glow-effect cursor-pointer hover:scale-105 animate-slide-up';
  card.style.animationDelay = `${index * 0.1}s`;
  const date = new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  card.innerHTML = `
    <div class="p-6">
      <div class="flex items-center gap-4 text-sm text-muted-foreground mb-3">
        <div class="flex items-center gap-1">
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
          <span>${date}</span>
        </div>
        <div class="flex items-center gap-1">
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <span>${post.readTime}</span>
        </div>
      </div>
      <h3 class="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">${post.title}</h3>
      <p class="text-muted-foreground mb-4 leading-relaxed">${post.excerpt}</p>
      <div class="flex flex-wrap gap-2 mb-4">
        ${post.tags.map(tag => `<span class="inline-flex items-center rounded-full border-transparent bg-secondary text-secondary-foreground px-2.5 py-0.5 text-xs font-semibold">${tag}</span>`).join('')}
      </div>
      <button class="p-0 font-semibold hover:text-primary transition-colors">
        Read More
        <svg class="inline ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      </button>
    </div>
  `;
  blogGrid.appendChild(card);
});
