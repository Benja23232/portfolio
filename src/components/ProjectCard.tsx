"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

export default function ProjectCard({ project }: { project: any }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Si es mobile, usamos aspect-[9/16] (vertical), sino aspect-video (horizontal)
  const containerClass = project.isMobile 
    ? "w-full relative bg-[#0a0a0a] aspect-[9/16] overflow-hidden shrink-0 border-b border-zinc-800"
    : "w-full relative bg-[#0a0a0a] aspect-video overflow-hidden shrink-0 border-b border-zinc-800";

  return (
    <div className="bg-[#0a0a0a] border border-zinc-800 rounded-lg overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:border-zinc-500 h-fit shadow-lg">
      
      <div className={containerClass}>
        <div className="overflow-hidden w-full h-full" ref={emblaRef}>
          <div className="flex w-full h-full">
            {project.images.map((img: string, i: number) => (
              <div className="flex-[0_0_100%] min-w-0 h-full relative flex items-center justify-center overflow-hidden" key={i}>
                
                <img 
                  src={img} 
                  alt={`Captura ${i + 1}`} 
                  className={`w-full h-full transition-transform duration-700 ease-out ${
                    project.isMobile ? "object-contain p-2" : "object-cover object-top"
                  }`}
                />

              </div>
            ))}
          </div>
        </div>

        {project.images.length > 1 && (
          <>
            <button 
              onClick={scrollPrev} 
              className="absolute bg-white/90 text-black hover:bg-sky-500 hover:text-white rounded z-[100] flex items-center justify-center transition-all duration-300 cursor-pointer opacity-0 group-hover:opacity-100 shadow-md"
              style={{ left: '16px', top: '50%', transform: 'translateY(-50%)', width: '28px', height: '28px', fontSize: '12px' }}
            >
              ❮
            </button>
            <button 
              onClick={scrollNext} 
              className="absolute bg-white/90 text-black hover:bg-sky-500 hover:text-white rounded z-[100] flex items-center justify-center transition-all duration-300 cursor-pointer opacity-0 group-hover:opacity-100 shadow-md"
              style={{ right: '16px', top: '50%', transform: 'translateY(-50%)', width: '28px', height: '28px', fontSize: '12px' }}
            >
              ❯
            </button>
          </>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-zinc-400 text-sm mb-6  flex-grow leading-relaxed font-light">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech: string, i: number) => (
            <span key={i} className="bg-zinc-900 text-zinc-300 text-[11px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded border border-zinc-800">
              {tech}
            </span>
          ))}
        </div>

        <a 
          href={project.githubLink} 
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center bg-zinc-100 hover:bg-white text-black font-semibold py-3 rounded transition-all text-sm"
        >
          Ver Código
        </a>
      </div>
    </div>
  );
}