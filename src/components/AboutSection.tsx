interface AboutSectionProps {
  title: string;
  tagline: string;
  bio: string;
  location: string;
}

export default function AboutSection({
  title,
  tagline,
  bio,
  location,
}: AboutSectionProps) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-serif mb-4 text-stone-100">About</h2>
        <p className="text-lg font-sans text-[#c9a87c] mb-2">{title}</p>
        <p className="text-sm font-sans text-stone-500 tracking-wider uppercase">
          {location}
        </p>
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <p className="text-stone-300 font-sans text-base leading-relaxed mb-6">
          {bio}
        </p>
        <p className="text-stone-500 font-sans text-sm italic">{tagline}</p>
      </div>
    </div>
  );
}
