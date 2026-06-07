"use client";
import { useState } from "react";
import ThemeToggle from "../../components/ThemeToggle"; // Importamos el botón

export default function Contacto() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xykakkgp", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset(); // Limpia los campos
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/70 dark:bg-[#050505]/70 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Benjamin Arancivia<span className="text-sky-500">.</span>
          </a>
          <div className="flex items-center gap-6 md:gap-10">
            <a href="/" className="hidden md:block text-xs md:text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white uppercase tracking-widest font-semibold transition-colors">Inicio</a>
            <a href="/#proyectos" className="hidden md:block text-xs md:text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white uppercase tracking-widest font-semibold transition-colors">Proyectos</a>
            <a href="/contacto" className="hidden md:block text-xs md:text-sm text-zinc-900 dark:text-white uppercase tracking-widest font-semibold transition-colors">Contacto</a>
            
            {/* BOTÓN DE TEMA */}
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* PÁGINA DE CONTACTO AISLADA */}
      <main className="min-h-screen px-6 md:px-12 pt-20 pb-16 flex flex-col justify-between transition-colors">
        <div className="max-w-7xl mx-auto w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Columna Izquierda: Información */}
            <div>
              <div className="mb-8">
                <h1 className="text-sm text-zinc-500 dark:text-zinc-400 uppercase tracking-widest font-semibold mb-2">Contacto</h1>
                <div className="w-12 h-1 bg-sky-500"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">Contactame y desplega tu idea en la web</h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed font-light">
                Currently estoy abierto a nuevas oportunidades, proyectos colaborativos y desafíos técnicos. Si tenés alguna idea en mente, una propuesta de trabajo, o simplemente querés charlar sobre tecnología y desarrollo, no dudes en escribirme.
              </p>

              {/* Enlaces de contacto (Iconos SVG) */}
              <div className="flex flex-col gap-6">
                <a href="mailto:tuemail@ejemplo.com" className="flex items-center gap-4 text-zinc-700 dark:text-zinc-300 hover:text-sky-500 transition-colors group w-fit">
                  <div className="bg-zinc-100 dark:bg-zinc-900 p-3 rounded border border-zinc-200 dark:border-zinc-800 group-hover:border-sky-500/50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <span className="font-medium">tuemail@ejemplo.com</span>
                </a>

                <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors group w-fit">
                  <div className="bg-zinc-100 dark:bg-zinc-900 p-3 rounded border border-zinc-200 dark:border-zinc-800 group-hover:border-zinc-400 dark:group-hover:border-zinc-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">github.com/tu-usuario</span>
                </a>
              </div>
            </div>

            {/* Columna Derecha: Formulario Técnico */}
            <div className="bg-white dark:bg-[#0a0a0a] p-8 rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-xl relative h-fit transition-colors">
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zinc-400 dark:border-zinc-500 m-2"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-zinc-400 dark:border-zinc-500 m-2"></div>
              
              {status === "success" ? (
                /* MENSAJE DE ÉXITO */
                <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                  <div className="bg-sky-500/10 p-4 rounded-full border border-sky-500/30 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-sky-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">¡Mensaje enviado!</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 mb-8">Gracias por contactarte. Te voy a responder lo más pronto posible.</p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-sm font-medium"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                /* FORMULARIO */
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="nombre" className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-semibold">Nombre</label>
                      <input type="text" id="nombre" name="nombre" required placeholder="Ingresá tu nombre" className="bg-zinc-50 dark:bg-[#111] border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 text-sm rounded p-3 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-700 disabled:opacity-50" disabled={status === "loading"} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-semibold">Email</label>
                      <input type="email" id="email" name="email" required placeholder="tu@email.com" className="bg-zinc-50 dark:bg-[#111] border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 text-sm rounded p-3 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-700 disabled:opacity-50" disabled={status === "loading"} />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="asunto" className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-semibold">Asunto</label>
                    <input type="text" id="asunto" name="asunto" required placeholder="¿Sobre qué querés hablar?" className="bg-zinc-50 dark:bg-[#111] border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 text-sm rounded p-3 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-700 disabled:opacity-50" disabled={status === "loading"} />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="mensaje" className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-semibold">Mensaje</label>
                    <textarea id="mensaje" name="mensaje" required rows={5} placeholder="Escribí tu mensaje acá..." className="bg-zinc-50 dark:bg-[#111] border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 text-sm rounded p-3 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all resize-none placeholder:text-zinc-400 dark:placeholder:text-zinc-700 disabled:opacity-50" disabled={status === "loading"}></textarea>
                  </div>

                  {status === "error" && (
                    <p className="text-red-500 dark:text-red-400 text-sm font-medium">Hubo un error al enviar el mensaje. Intentá nuevamente.</p>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === "loading"}
                    className="mt-4 w-full bg-zinc-900 dark:bg-zinc-100 hover:bg-sky-500 dark:hover:bg-sky-500 text-white dark:text-black hover:text-white font-bold py-3.5 rounded transition-all flex justify-center items-center gap-2 disabled:bg-zinc-200 dark:disabled:bg-zinc-800 disabled:text-zinc-400 dark:disabled:text-zinc-500 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
                    {status !== "loading" && (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* FOOTER */}
          <footer className="w-full text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-600 flex justify-between border-t border-zinc-200 dark:border-zinc-900 pt-8 mt-auto transition-colors">
            <p>© {new Date().getFullYear()} Sistema de Portfolio</p>
            <p>V. 1.0.0</p>
          </footer>
        </div>
      </main>
    </>
  );
}