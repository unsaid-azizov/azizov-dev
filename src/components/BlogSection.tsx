import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: "hackathon" | "award" | "talk" | "publication";
  description: string;
  coverImage?: string;
  result?: string;
  emoji?: string;
  tags: string[];
  link?: string;
}

interface BlogSectionProps {
  posts: BlogPost[];
  showViewAll?: boolean;
}

const categoryLabels: Record<BlogPost["category"], string> = {
  hackathon: "Hackathon",
  award: "Award",
  talk: "Talk",
  publication: "Publication",
};

const categoryColors: Record<BlogPost["category"], string> = {
  hackathon: "bg-[#c9a87c]/20 text-[#c9a87c] border-[#c9a87c]/30",
  award: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  talk: "bg-sky-500/20 text-sky-400 border-sky-500/30",
  publication: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
};

export default function BlogSection({ posts, showViewAll = true }: BlogSectionProps) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
      <h2 className="text-5xl font-serif mb-4 text-center text-stone-100">
        Blog
      </h2>
      <p className="text-center text-stone-500 font-sans mb-12">
        Hackathons, awards & talks
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post) => {
          const formattedDate = new Date(post.date).toLocaleDateString(
            "en-US",
            { month: "short", year: "numeric" }
          );

          return (
            <a key={post.id} href={`/blog/${post.id}`} className="block group">
              <Card className="h-full bg-[#1a1917] border-white/5 hover:border-[#c9a87c]/20 transition-all duration-300 cursor-pointer hover:shadow-[0_0_30px_rgba(201,168,124,0.06)]">
                <CardContent className="p-5 md:p-6 flex flex-col h-full">
                  {/* Header: category + date */}
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <Badge
                      className={`text-[10px] uppercase tracking-wider border ${categoryColors[post.category]}`}
                    >
                      {categoryLabels[post.category]}
                    </Badge>
                    <span className="text-xs text-stone-600 font-sans ml-auto">
                      {formattedDate}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-stone-100 font-serif font-semibold text-lg mb-2 leading-snug group-hover:text-[#c9a87c] transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* Result */}
                  {post.result && (
                    <p className="text-sm text-[#c9a87c] font-sans font-medium mb-2">
                      {post.result}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-stone-400 font-sans text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                    {post.description}
                  </p>

                  {/* Tags */}
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] font-sans uppercase tracking-wider text-stone-500 border border-white/5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </a>
          );
        })}
      </div>

      {/* View all */}
      {showViewAll && (
        <div className="flex justify-center mt-12">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-sans uppercase tracking-wider text-stone-400 border border-white/10 rounded-full hover:border-[#c9a87c]/40 hover:text-[#c9a87c] transition-all duration-300"
          >
            View all posts
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}
