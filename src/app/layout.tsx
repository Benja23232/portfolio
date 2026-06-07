import type { Metadata } from 'next'
import { Providers } from '../components/Providers'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Mi Portafolio',
  description: 'Proyectos de desarrollo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      {/* ACÁ ESTÁ LA CLAVE: bg-zinc-50 para claro, dark:bg-[#050505] para oscuro */}
      <body className="bg-zinc-50 text-zinc-900 dark:bg-[#050505] dark:text-zinc-200 antialiased selection:bg-indigo-500/40 min-h-screen bg-grid-pattern transition-colors duration-300">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}