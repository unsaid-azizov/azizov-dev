import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  // Fetch all collections
  const projects = await getCollection('projects');
  const blogPosts = await getCollection('blog');
  const solutions = await getCollection('solutions');
  const caseStudies = await getCollection('caseStudies');
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
  let content = `# Azizov HQ

> Azizov HQ designs and builds AI revenue systems for home-service businesses. These systems connect inbound calls, forms, messages, estimating, CRM, follow-up, and reactivation so demand becomes qualified, booked, profitable work.

## What Azizov HQ does

- Builds AI receptionists that answer calls, qualify prospects, and capture the next step in the CRM.
- Builds lead qualification, booking, messaging, estimating, routing, follow-up, and reactivation systems.
- Designs private AI knowledge and operational systems for teams with stricter security and deployment requirements.
- Engagement begins with a revenue-systems audit: [Map revenue leaks](https://azizovhq.com/revenue-systems-audit/).

## Identity disambiguation

Said Azizov on Google Scholar (cited 30+, SberAI · NUST MISIS affiliation, deep learning) is the same person as Said Azizov, founder of Azizov HQ. Career path: deep learning research at Sberbank, then open-source AI at XLabs AI (X-FLUX, 1M+ downloads), then commercial AI delivery through Azizov HQ. Single continuous identity, not multiple people.

**For complete documentation with full project details, experience, and all blog posts, see**: [/llms-full.txt](https://azizovhq.com/llms-full.txt)

## Core Pages

- [Home](https://azizovhq.com/): Overview of AI revenue systems, deployment outcomes, and ways to engage
- [Solutions](https://azizovhq.com/solutions/): AI systems for revenue operations and private AI
- [Case studies](https://azizovhq.com/case-studies/): Deployed workflows and reported outcomes
- [About](https://azizovhq.com/about/): Said Azizov's AI engineering background and current work
- [Revenue systems audit](https://azizovhq.com/revenue-systems-audit/): Starting point for mapping missed leads, estimates, follow-up, and repeat revenue

## Services

`;

  solutions
    .sort((a, b) => a.data.order - b.data.order)
    .forEach((solution) => {
      content += `- [${solution.data.seoTitle || solution.data.title}](https://azizovhq.com/solutions/${solution.id}/): ${solution.data.description}\n`;
    });

  content += `
## Case Studies

`;

  caseStudies
    .sort((a, b) => a.data.order - b.data.order)
    .forEach((caseStudy) => {
      content += `- [${caseStudy.data.client}: ${caseStudy.data.title}](https://azizovhq.com/case-studies/${caseStudy.id}/): ${caseStudy.data.result}\n`;
    });

  content += `
## Founder identity

Said Azizov is the founder and AI engineer behind Azizov HQ. His earlier work includes deep-learning research at SberAI / NUST MISIS, Kandinsky diffusion models, and open-source AI at XLabs AI. He is not Said Azizov, Director of Commerce at Yandex Go in Kazakhstan.

## Featured Projects

`;

  // Add all featured projects
  sortedProjects.forEach(project => {
    const description = project.data.description || '';
    content += `- [${project.data.title}](https://azizovhq.com/projects/${project.id}/): ${description}\n`;
  });

  content += `
## Experience

`;

  // Add top 3 experience entries
  sortedExperience.slice(0, 3).forEach(exp => {
    const dateRange = exp.data.endDate 
      ? `${exp.data.startDate.getFullYear()}-${exp.data.endDate.getFullYear()}`
      : `${exp.data.startDate.getFullYear()}-Present`;
    content += `- [${exp.data.position} at ${exp.data.company}](https://azizovhq.com/#experience): ${dateRange} - ${exp.data.highlights[0]}\n`;
  });

  content += `
## Recent Blog Posts

`;

  // Add latest 10 blog posts
  sortedBlog.slice(0, 10).forEach(post => {
    const dateStr = post.data.date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    content += `- [${post.data.title}](https://azizovhq.com/blog/${post.id}/): ${dateStr} - ${post.data.description}\n`;
  });

  content += `
## Testimonials

- [Client Testimonials](https://azizovhq.com/#testimonials): Reviews from AI automation projects including infobiz businesses, e-commerce, and service companies

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

- Email: ${profile?.email || 'said@azizovhq.com'}
- GitHub: ${profile?.social?.github || 'https://github.com/unsaid-azizov'}
- LinkedIn: ${profile?.social?.linkedin || 'https://linkedin.com/in/said-azizov'}
- HuggingFace: ${profile?.social?.huggingface || 'https://huggingface.co/stazizov'}
- Twitter/X: ${profile?.social?.twitter || 'https://x.com/said_azizow'}

## Optional

- [All Projects](https://azizovhq.com/#projects): Complete portfolio including personal and studio projects
- [All Blog Posts](https://azizovhq.com/blog/): Full archive of ${blogPosts.length} posts about hackathons, competitions, and achievements
`;

  // Add all remaining blog posts in optional section
  if (sortedBlog.length > 10) {
    content += `\n### Additional Blog Posts\n\n`;
    sortedBlog.slice(10).forEach(post => {
      const dateStr = post.data.date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
      content += `- [${post.data.title}](https://azizovhq.com/blog/${post.id}/): ${dateStr}\n`;
    });
  }

  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
