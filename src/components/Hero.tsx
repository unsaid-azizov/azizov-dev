import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

interface HeroProps {
    name: string; 
    backgroundImage: string; 
} 

const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "testimonials", label: "Testimonials" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
];

function scrollTo(id: string) {
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" });
}

export function Hero({ name, backgroundImage }: HeroProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <section className="relative h-screen w-full overflow-hidden snap-start"> 
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat sepia-[0.4] saturate-[0.6] brightness-[0.65]"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            /> 
            
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-black/20 to-transparent" />

            {/* Navigation — desktop */}
            <nav className="relative flex items-center justify-end px-8 py-6 mix-blend-difference">
                <div className="hidden md:flex gap-8 text-stone-400 font-sans text-sm uppercase tracking-[0.2em]"> 
                    {navItems.map(({ id, label }) => (
                        <button
                            key={id}
                            onClick={() => scrollTo(id)}
                            className="hover:text-stone-200 transition-colors duration-300 cursor-pointer"
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* Mobile burger */}
                <button
                    className="md:hidden text-stone-400 hover:text-stone-200 transition-colors cursor-pointer z-50"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                >
                    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            {/* Mobile menu overlay */}
            {menuOpen && (
                <div 
                    className="absolute inset-0 z-40 bg-black/80 backdrop-blur-sm flex items-center justify-center md:hidden"
                    onClick={() => setMenuOpen(false)}
                >
                    <div 
                        className="flex flex-col items-center gap-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {navItems.map(({ id, label }) => (
                            <button
                                key={id}
                                onClick={() => {
                                    setMenuOpen(false);
                                    setTimeout(() => scrollTo(id), 150);
                                }}
                                className="text-stone-300 hover:text-[#c9a87c] font-sans text-lg uppercase tracking-[0.2em] transition-colors duration-300 cursor-pointer"
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h1 className="font-serif font-bold text-white text-[11vw] uppercase tracking-wider text-center mix-blend-difference select-none leading-none px-8">
                    {name}
                </h1> 
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                <ChevronDown
                    className="w-8 h-8 text-stone-400 animate-bounce cursor-pointer mix-blend-difference"
                    onClick={() => scrollTo("about")}
                />
            </div>
        </section>
    );
}
