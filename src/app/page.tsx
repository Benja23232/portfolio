import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import TechStack from "../components/TechStack";
import ThemeToggle from "../components/ThemeToggle"; // Importamos el botón

export default function Home() {
  return (
    <>
      {/* NAVBAR STICKY */}
      <nav className="sticky top-0 z-50 bg-white/70 dark:bg-[#050505]/70 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
          <a href="#inicio" className="text-2xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Benjamin Arancivia<span className="text-sky-500">.</span>
          </a>
          
          <div className="flex items-center gap-6 md:gap-10">
            <a href="#inicio" className="hidden md:block text-xs md:text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white uppercase tracking-widest font-semibold transition-colors">Inicio</a>
            <a href="#proyectos" className="hidden md:block text-xs md:text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white uppercase tracking-widest font-semibold transition-colors">Proyectos</a>
            <a href="/contacto" className="hidden md:block text-xs md:text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white uppercase tracking-widest font-semibold transition-colors">Contacto</a>
            
            {/* BOTÓN DE TEMA */}
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <main className="min-h-screen px-6 md:px-12 pb-16 transition-colors">
        <div className="max-w-7xl mx-auto">
          
          {/* SECCIÓN INICIO */}
          <header id="inicio" className="pt-20 pb-24 border-b border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-end gap-8 transition-colors">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-500">
                Desarrollador Full-Stack.
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
                Estudiante de la Tecnicatura en Análisis de Sistemas. Desarrollador Full-Stack. Interesado en crear Sistemas Web eficientes y escalables para crear soluciones y digitalizar procesos.
              </p>
            </div>
            <a href="/contacto" className="px-8 py-3 border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 font-medium rounded hover:bg-zinc-900 hover:text-white hover:border-zinc-900 dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-all shrink-0">
              Contactar
            </a>
          </header>

          {/* SECCIÓN TECNOLOGÍAS */}
          <TechStack />

          {/* =========================================
              SECCIÓN 1: PROYECTOS WEB (Escritorio)
              ========================================= */}
          <section id="proyectos" className="pt-24 pb-10">
            <div className="mb-10">
              <h2 className="text-sm text-zinc-500 dark:text-zinc-400 uppercase tracking-widest font-semibold mb-2">Proyectos Web</h2>
              <div className="w-12 h-1 bg-sky-500"></div>
            </div>

            {/* Mostramos 2 por fila para que luzcan horizontales e imponentes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.filter((p) => !p.isMobile).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>

          {/* =========================================
              SECCIÓN 2: PROYECTOS MÓVILES
              ========================================= */}
          <section id="proyectos-moviles" className="pt-10 pb-20">
            <div className="mb-10">
              <h2 className="text-sm text-zinc-500 dark:text-zinc-400 uppercase tracking-widest font-semibold mb-2">Desarrollo Móvil / Web Apps</h2>
              <div className="w-12 h-1 bg-sky-500"></div>
            </div>

            {/* Mostramos 3 por fila para que las tarjetas verticales queden del tamaño ideal */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter((p) => p.isMobile).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>

          {/* SECCIÓN CONTACTO FINAL */}
          <section id="contacto-cta" className="pt-16 pb-16 border-t border-zinc-200 dark:border-zinc-800 mt-16 transition-colors">
            <div className="mb-8">
              <h2 className="text-sm text-zinc-500 dark:text-zinc-400 uppercase tracking-widest font-semibold mb-2">Contacto</h2>
              <div className="w-12 h-1 bg-sky-500"></div>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-xl">
              ¿Tenés alguna consulta, proyecto en mente o propuesta de trabajo? Hablemos.
            </p>
            <a href="/contacto" className="inline-block px-8 py-3 border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 font-medium rounded hover:bg-zinc-900 hover:text-white hover:border-zinc-900 dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-all">
              Ir al formulario de contacto
            </a>
          </section>

          {/* FOOTER */}
          <footer className="mt-16 text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-600 flex justify-between border-t border-zinc-200 dark:border-zinc-900 pt-8 transition-colors">
            <p>© {new Date().getFullYear()} Sistema de Portfolio</p>
            <p>V. 1.0.0</p>
          </footer>

        </div>
      </main>
    </>
  );
}