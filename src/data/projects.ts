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
  },
  {
    id: 4,
    title: "GymControl - Plataforma SaaS de Gestión Deportiva",
    description: "Sistema full-stack orientado a la administración de gimnasios y clubes. Automatiza el control financiero de cuotas y membresías, y cuenta con un motor dinámico para el diseño de planes de entrenamiento divididos, integrando el envío automático de las rutinas por correo electrónico. Diseñado bajo principios de interfaz brutalista para máxima eficiencia operativa.",
    techStack: ["Next.js (App Router)", "Prisma ORM", "PostgreSQL (Supabase)", "Tailwind CSS", "Nodemailer", "Server Actions"],
    images: [
      "/images/gimnasio/panel.png",
      "/images/gimnasio/alumnos.png",
      "/images/gimnasio/alumno.png", 
      "/images/gimnasio/rutina.png",
      "/images/gimnasio/crear-rutina.png" ,
      "/images/gimnasio/detalle-rutina.png" 
    ],
    isMobile: false,
    githubLink: "https://github.com/Benja23232/gym-control" 
  },
  {
    id: 5,
    title: "Supercompra - E-commerce Omnicanal & Logística",
    description: "Plataforma integral de comercio electrónico que automatiza el ciclo completo de ventas. Integra un bot de WhatsApp (Meta API) para atención al cliente y toma de pedidos, validación de comprobantes de pago mediante Inteligencia Artificial (OCR) y facturación automática. Cuenta con un panel de administración con roles de usuario para gestionar catálogo, control de stock por lotes, armado de pedidos (picking) y un módulo de reparto con seguimiento GPS en tiempo real.",
    techStack: ["Next.js", "Node.js", "Supabase (PostgreSQL / Realtime)", "Meta WhatsApp API", "Tesseract.js (IA/OCR)", "Tailwind CSS", "PDFKit"],
    images: [
      "/images/supermercado/whatsapp/f2.png",
      "/images/supermercado/whatsapp/f1.png",
      "/images/supermercado/whatsapp/f3.png",
      "/images/supermercado/whatsapp/f4.png",
       "/images/supermercado/whatsapp/f6.png",
      "/images/supermercado/login.png",
      "/images/supermercado/panel.png",
      "/images/supermercado/pedidos.png",
      "/images/supermercado/armado.png",
      "/images/supermercado/productos.png",
      "/images/supermercado/re.png",
      "/images/supermercado/auditorias.png"

    ],
    isMobile: false,
    githubLink: "https://github.com/Benja23232/supercompra"
  }
];