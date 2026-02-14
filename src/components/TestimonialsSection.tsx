import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Quote } from "lucide-react";

interface Testimonial {
  id: string;
  clientName: string;
  company?: string;
  role?: string;
  quote: string;
  rating: number;
  platform: "twitter" | "linkedin" | "other";
  handle?: string;
  sourceUrl?: string;
  avatar?: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <div className="w-full px-4 md:px-8">
      <h2 className="text-5xl font-serif mb-4 text-center text-stone-100">
        Testimonials
      </h2>
      <p className="text-center text-stone-500 font-sans mb-12">
        What clients and collaborators say
      </p>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[autoplayPlugin.current]}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {testimonials.map((t) => (
            <CarouselItem key={t.id} className="pl-4 basis-[85%] md:basis-1/2 lg:basis-1/3">
              <a
                href={t.sourceUrl || "#"}
                target={t.sourceUrl ? "_blank" : undefined}
                rel={t.sourceUrl ? "noopener noreferrer" : undefined}
                className="block h-full"
              >
                <Card className="h-full bg-[#1a1917] border-white/5 hover:border-[#c9a87c]/20 transition-all duration-300 cursor-pointer hover:shadow-[0_0_30px_rgba(201,168,124,0.06)]">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Header: quote icon + platform */}
                    <div className="flex items-center justify-between mb-4">
                      <Quote className="w-7 h-7 text-[#c9a87c]/40 shrink-0" />
                      {t.platform === "twitter" ? (
                        <svg className="w-4 h-4 text-stone-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      ) : t.platform === "linkedin" ? (
                        <svg className="w-4 h-4 text-stone-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      ) : null}
                    </div>

                    {/* Quote text */}
                    <blockquote className="text-stone-300 font-sans text-sm leading-relaxed mb-6 flex-1 line-clamp-6">
                      "{t.quote}"
                    </blockquote>

                    {/* Stars */}
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`w-3.5 h-3.5 ${i < t.rating ? "text-[#c9a87c]" : "text-stone-700"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                      {t.avatar ? (
                        <img
                          src={t.avatar}
                          alt={t.clientName}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-[#262420] flex items-center justify-center text-[#c9a87c] font-serif font-bold text-sm shrink-0">
                          {t.clientName.charAt(0)}
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="text-stone-200 font-sans text-sm font-medium truncate">
                          {t.clientName}
                        </p>
                        <p className="text-stone-500 font-sans text-xs truncate">
                          {t.role && t.company
                            ? `${t.role}, ${t.company}`
                            : t.role
                              ? t.role
                              : t.handle
                                ? `@${t.handle}`
                                : t.company || ""}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation arrows */}
        <div className="flex justify-center gap-2 mt-8">
          <CarouselPrevious className="static translate-y-0 bg-[#262420] border-white/5 text-stone-400 hover:text-stone-100 hover:bg-[#2a2724] hover:border-[#c9a87c]/30" />
          <CarouselNext className="static translate-y-0 bg-[#262420] border-white/5 text-stone-400 hover:text-stone-100 hover:bg-[#2a2724] hover:border-[#c9a87c]/30" />
        </div>
      </Carousel>
    </div>
  );
}
