import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  // Fetch all collections
  const projects = await getCollection('projects');
  const blogPosts = await getCollection('blog');
  const profileEntries = await getCollection('profile');
  const experienceEntries = await getCollection('experience');
  
  const profile = profileEntries[0]?.data;
  
  // Sort data
  const sortedProjects = projects
    .filter(p => p.data.featured)
    .sort((a, b) => a.data.order - b.data.order);
  
  const sortedBlog = blogPosts
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  
  const sortedExperience = experienceEntries
    .sort((a, b) => new Date(b.data.startDate).getTime() - new Date(a.data.startDate).getTime());

  // Build llms.txt content
  let content = `# Said Azizov

> AI Developer specializing in AI Agents, voice agents, and business automation. Senior AI Developer at Skygen.ai and Founder of AI automation agency helping businesses transform through intelligent automation.

## Core Pages

- [Home](https://azizov.dev/): Portfolio and overview of AI development work, featuring AI agents, voice automation, and business transformation projects
- [About](https://azizov.dev/#about): Background in AI development, expertise in AI Agents, voice AI, and customer support automation
- [Contact](https://azizov.dev/#contact): Get in touch for AI consulting, agent development, or business automation projects

## Featured Projects

`;

  // Add all featured projects
  sortedProjects.forEach(project => {
    const description = project.data.description || '';
    content += `- [${project.data.title}](https://azizov.dev/projects/${project.id}/): ${description}\n`;
  });

  content += `
## Experience

`;

  // Add top 3 experience entries
  sortedExperience.slice(0, 3).forEach(exp => {
    const dateRange = exp.data.endDate 
      ? `${exp.data.startDate.getFullYear()}-${exp.data.endDate.getFullYear()}`
      : `${exp.data.startDate.getFullYear()}-Present`;
    content += `- [${exp.data.position} at ${exp.data.company}](https://azizov.dev/#experience): ${dateRange} - ${exp.data.highlights[0]}\n`;
  });

  content += `
## Recent Blog Posts

`;

  // Add latest 10 blog posts
  sortedBlog.slice(0, 10).forEach(post => {
    const dateStr = post.data.date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    content += `- [${post.data.title}](https://azizov.dev/blog/${post.id}/): ${dateStr} - ${post.data.description}\n`;
  });

  content += `
## Testimonials

- [Client Testimonials](https://azizov.dev/#testimonials): Reviews from AI automation projects including infobiz businesses, e-commerce, and service companies

## Expertise

**Current Focus:**
- AI Agents (LangChain, MCP Protocol, multi-agent systems)
- Voice AI (voice agents, speech-to-text, text-to-speech pipelines)
- Customer support automation and chatbots
- Business process automation through AI
- AI product development (MVPs to production)
- Full-stack development for AI products

**Previous Work:**
- Diffusion Models (Stable Diffusion, FLUX, Kandinsky)
- Computer Vision and ML systems
- Open-source AI contributions

## Contact & Social

- Email: ${profile?.email || 'said@azizov.dev'}
- GitHub: ${profile?.social?.github || 'https://github.com/unsaid-azizov'}
- LinkedIn: ${profile?.social?.linkedin || 'https://linkedin.com/in/said-azizov'}
- HuggingFace: ${profile?.social?.huggingface || 'https://huggingface.co/stazizov'}
- Twitter/X: ${profile?.social?.twitter || 'https://x.com/said_azizow'}

## Optional

- [All Projects](https://azizov.dev/#projects): Complete portfolio including personal and studio projects
- [All Blog Posts](https://azizov.dev/blog/): Full archive of ${blogPosts.length} posts about hackathons, competitions, and achievements
`;

  // Add all remaining blog posts in optional section
  if (sortedBlog.length > 10) {
    content += `\n### Additional Blog Posts\n\n`;
    sortedBlog.slice(10).forEach(post => {
      const dateStr = post.data.date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
      content += `- [${post.data.title}](https://azizov.dev/blog/${post.id}/): ${dateStr}\n`;
    });
  }

  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
