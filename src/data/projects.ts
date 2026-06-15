// 1. Definimos el tipo de dato para que TypeScript sea feliz
export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  images: string[];
  isMobile:boolean;
  githubLink: string;
}

// 2. Exportamos el array con el tipo definido
export const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de Gestión de Eventos y Registros",
    description: "Plataforma robusta desarrollada para la administración integral de eventos, participantes e inscripciones en tiempo real. El sistema centraliza la información mediante bases de datos relacionales y ofrece un entorno seguro para la gestión de datos sensibles.",
    techStack: ["PHP", "Symfony 6.4", "MySQL / MariaDB", "Doctrine ORM", "Twig", "JavaScript", "CSS"],
    images: [
      "/images/eventos/panelinicio.png",
      "/images/eventos/login.png",
      "/images/eventos/eventoslista.png",
      "/images/eventos/inscripcion.png"
    ],
     isMobile:false,
    githubLink: "https://github.com/Benja23232/diospro"
  },
  {
    id: 2,
    title: "Sistema de Acreditación de Eventos",
    description: "Plataforma integral diseñada para la gestión operativa de eventos, control de accesos y acreditación en tiempo real. Desarrollada bajo una arquitectura MVC integrando un frontend reactivo con un backend robusto.",
    techStack: ["Vue.js", "Flask", "Python", "MySQL", "Peewee ORM", "JavaScript", "CSS"],
    images: [
      "/images/acreditacion/panelprincipal.png",
      "/images/acreditacion/login.png",
      "/images/acreditacion/recepcion.png",
      "/images/acreditacion/crearevento.png",
      "/images/acreditacion/reporte.png"
    ],
    isMobile:false,
    githubLink: "https://github.com/Benja23232/Sistema-acreditacion-eventos"
  },
  {
    id: 3,
    title: "Sistema Colaborativo de Gestión de Compras",
    description: "Aplicación web colaborativa diseñada para llevar un control transparente y exacto de los gastos compartidos. Permite registrar compras y calcula automáticamente los saldos y deudas entre todos los integrantes del grupo.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Supabase", "PostgreSQL"],
    images: [
      "/images/deudahermanos/panel.png",
      "/images/deudahermanos/login.png",
      "/images/deudahermanos/compra.png",
      "/images/deudahermanos/ticket.png"
    ],
    isMobile: true,
    githubLink: "https://github.com/Benja23232/gestionDeCompras"
  }
];