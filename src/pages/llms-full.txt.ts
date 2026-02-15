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

  // Build llms-full.txt content with complete information
  let content = `# Said Azizov - Complete Profile

> AI Developer specializing in AI Agents, voice agents, and business automation. Senior AI Developer at Skygen.ai and Founder of AI automation agency helping businesses transform through intelligent automation.

## About

${profile?.bio || ''}

**Email**: ${profile?.email || 'said@azizov.dev'}
**Available for**: AI consulting, agent development, business automation projects

**Current Title**: ${profile?.title || 'Senior AI Developer & Agency Founder'}
**Tagline**: ${profile?.tagline || 'Transforming businesses through AI Agents and automation'}

## Core Expertise

**Current Focus:**
- AI Agents: LangChain, MCP Protocol, multi-agent systems
- Voice AI: Voice agents, speech-to-text, text-to-speech pipelines
- Customer Support Automation: Chatbots, automated response systems
- Business Process Automation: Workflow optimization through AI
- AI Product Development: From MVPs to production systems
- Full-Stack Development: Building complete AI products end-to-end

**Previous Experience:**
- Diffusion Models: Stable Diffusion, FLUX, Kandinsky
- Computer Vision: Object detection, image segmentation
- Machine Learning: Deep learning, neural networks
- Open-Source Contributions: 4K+ GitHub stars, 1M+ downloads

## Featured Projects

`;

  // Add detailed project information
  sortedProjects.forEach(project => {
    const links = project.data.links || {};
    const metrics = project.data.metrics || {};
    
    content += `### ${project.data.title}\n\n`;
    content += `**URL**: https://azizov.dev/projects/${project.id}/\n`;
    content += `**Category**: ${project.data.category === 'personal' ? 'Personal' : 'Studio'}\n`;
    content += `**Description**: ${project.data.description}\n\n`;
    
    if (Object.keys(metrics).length > 0) {
      content += `**Metrics**:\n`;
      Object.entries(metrics).forEach(([key, value]) => {
        content += `- ${key}: ${value}\n`;
      });
      content += `\n`;
    }
    
    if (project.data.tags.length > 0) {
      content += `**Technologies**: ${project.data.tags.join(', ')}\n\n`;
    }
    
    if (Object.keys(links).length > 0) {
      content += `**Links**:\n`;
      Object.entries(links).forEach(([key, value]) => {
        if (value) content += `- ${key}: ${value}\n`;
      });
      content += `\n`;
    }
    
    content += `---\n\n`;
  });

  content += `## Professional Experience\n\n`;

  // Add detailed experience
  sortedExperience.forEach(exp => {
    const dateRange = exp.data.endDate 
      ? `${exp.data.startDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - ${exp.data.endDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`
      : `${exp.data.startDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - Present`;
    
    content += `### ${exp.data.position} at ${exp.data.company}\n\n`;
    content += `**Period**: ${dateRange}\n`;
    content += `**Location**: ${exp.data.location}\n`;
    content += `**Type**: ${exp.data.type}\n\n`;
    
    if (exp.data.highlights.length > 0) {
      content += `**Key Achievements**:\n`;
      exp.data.highlights.forEach(h => {
        content += `- ${h}\n`;
      });
      content += `\n`;
    }
    
    if (exp.data.skills.length > 0) {
      content += `**Skills**: ${exp.data.skills.join(', ')}\n\n`;
    }
    
    content += `---\n\n`;
  });

  content += `## Blog Posts & Achievements\n\n`;

  // Add all blog posts with full details
  sortedBlog.forEach(post => {
    const dateStr = post.data.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    
    content += `### ${post.data.title}\n\n`;
    content += `**Date**: ${dateStr}\n`;
    content += `**Category**: ${post.data.category}\n`;
    content += `**URL**: https://azizov.dev/blog/${post.id}/\n\n`;
    
    if (post.data.result) {
      content += `**Result**: ${post.data.result}\n\n`;
    }
    
    content += `**Description**: ${post.data.description}\n\n`;
    
    if (post.data.tags.length > 0) {
      content += `**Tags**: ${post.data.tags.join(', ')}\n\n`;
    }
    
    if (post.data.link) {
      content += `**Link**: ${post.data.link}\n\n`;
    }
    
    content += `---\n\n`;
  });

  content += `## Contact & Social Media\n\n`;
  content += `**Email**: ${profile?.email || 'said@azizov.dev'}\n\n`;
  content += `**Social Profiles**:\n`;
  
  if (profile?.social) {
    if (profile.social.github) content += `- GitHub: ${profile.social.github}\n`;
    if (profile.social.linkedin) content += `- LinkedIn: ${profile.social.linkedin}\n`;
    if (profile.social.huggingface) content += `- HuggingFace: ${profile.social.huggingface}\n`;
    if (profile.social.twitter) content += `- Twitter/X: ${profile.social.twitter}\n`;
    if (profile.social.telegram) content += `- Telegram: ${profile.social.telegram}\n`;
    if (profile.social.instagram) content += `- Instagram: ${profile.social.instagram}\n`;
    if (profile.social.youtube) content += `- YouTube: ${profile.social.youtube}\n`;
    if (profile.social.whatsapp) content += `- WhatsApp: ${profile.social.whatsapp}\n`;
  }

  content += `\n---\n\n`;
  content += `**Website**: https://azizov.dev\n`;
  content += `**Last Updated**: ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}\n`;

  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
