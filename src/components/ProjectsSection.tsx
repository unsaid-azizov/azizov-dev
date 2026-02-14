import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    category: "personal" | "studio";
    metrics?: Record<string, string>;
    links?: Record<string, string | null>;
    coverImage: string;
}

interface ProjectsSectionProps {
    projects: Project[];
}

function ProjectCard({ project }: { project: Project }) {
    const [imgOk, setImgOk] = useState(true);
    const showImage = project.coverImage && imgOk;

    return (
        <a href={`/projects/${project.id}`} className="block group">
            <Card className="h-full bg-[#1a1917] border-white/5 hover:border-[#c9a87c]/20 transition-all duration-300 cursor-pointer hover:shadow-[0_0_30px_rgba(201,168,124,0.06)] overflow-hidden">
                {/* Cover image */}
                {showImage && (
                    <div className="relative overflow-hidden">
                        <img
                            src={project.coverImage}
                            alt={project.title}
                            className="aspect-video w-full object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={() => setImgOk(false)}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1917] via-transparent to-transparent" />
                    </div>
                )}

                <CardContent className={`p-5 md:p-6 flex flex-col ${showImage ? '' : 'h-full'}`}>
                    {/* Category badge */}
                    <div className="flex items-center gap-2 mb-3">
                        <Badge className={`text-[10px] uppercase tracking-wider border ${
                            project.category === 'personal'
                                ? 'bg-[#c9a87c]/20 text-[#c9a87c] border-[#c9a87c]/30'
                                : 'bg-sky-500/20 text-sky-400 border-sky-500/30'
                        }`}>
                            {project.category === 'personal' ? 'Personal' : 'Studio'}
                        </Badge>
                    </div>

                    {/* Title */}
                    <h3 className="text-stone-100 font-serif font-semibold text-lg mb-2 leading-snug group-hover:text-[#c9a87c] transition-colors duration-300">
                        {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-stone-400 font-sans text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                        {project.description}
                    </p>

                    {/* Metrics */}
                    {project.metrics && Object.keys(project.metrics).length > 0 && (
                        <div className="flex gap-4 mb-4">
                            {Object.entries(project.metrics).slice(0, 3).map(([key, value]) => (
                                <div key={key} className="text-center">
                                    <p className="text-[#c9a87c] font-serif font-bold text-sm">{value}</p>
                                    <p className="text-stone-600 font-sans text-[10px] uppercase tracking-wider">{key}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                        {project.tags.slice(0, 5).map(tag => (
                            <span
                                key={tag}
                                className="px-2 py-0.5 text-[10px] font-sans uppercase tracking-wider text-stone-500 border border-white/5 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </a>
    );
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
            <h2 className="text-5xl font-serif mb-4 text-center text-stone-100">Projects</h2>
            <p className="text-center text-stone-500 font-sans mb-12">
                Open-source & client work
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}
