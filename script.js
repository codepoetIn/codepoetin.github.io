// Skills data
const skillCategories = [
  { title: "Frontend", icon: "code", skills: ["HTML 5", "Angular", "React", "TypeScript", "Ionic","Spartacus"] },
  { title: "Backend", icon: "database", skills: ["Node.js", "Express", "Python", "PHP"] },
  { title: "Design & Tools", icon: "palette", skills: ["Figma", "Photoshop", "CSS3 Animations"] },
  { title: "CMS & E-commerce", icon: "shopping", skills: ["WordPress", "Drupal", "Magento", "SAP Commerce Cloud", "Composable Storefront"] },
  { title: "AI & ML", icon: "brain", skills: ["Azure AI Foundry", "Ollama", "LangChain", "Autogen", "N8N", "MCP Servers"] },
  { title: "Databases", icon: "database", skills: ["MySQL", "MongoDB", "Cosmos DB","Chroma DB"] },
  { title: "Analytics & Monitoring", icon: "chart", skills: ["Adobe Analytics", "Google Analytics", "Dynatrace"] },
  { title: "Enterprise Platforms", icon: "server", skills: ["SAP CDC", "Dynatrace", "SAP Commerce", "SF LiveChat","ServiceNow","WalkMe"] },
];

const icons = {
  code: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>',
  database: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>',
  palette: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>',
  shopping: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>',
  brain: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>',
  chart: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>',
  server: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>'
};

const skillsGrid = document.getElementById('skills-grid');
skillCategories.forEach((category, index) => {
  const card = document.createElement('div');
  card.className = 'rounded-lg border border-border bg-card text-card-foreground shadow-sm group hover:border-primary transition-all duration-300 hover:glow-effect hover:scale-105 animate-slide-up';
  card.style.animationDelay = `${index * 0.1}s`;
  card.innerHTML = `
    <div class="p-6">
      <h3 class="text-lg font-semibold mb-4 flex items-center gap-3">
        <div class="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">${icons[category.icon]}</svg>
        </div>
        <span class="group-hover:text-primary transition-colors">${category.title}</span>
      </h3>
      <div class="flex flex-wrap gap-2">
        ${category.skills.map(skill => `<span class="inline-flex items-center rounded-full border-transparent bg-secondary text-secondary-foreground px-2.5 py-0.5 text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 cursor-default">${skill}</span>`).join('')}
      </div>
    </div>
  `;
  skillsGrid.appendChild(card);
});

document.getElementById('year').textContent = new Date().getFullYear();
