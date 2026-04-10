import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://educatech-ai.vercel.app'),
  title: {
    default: 'Educatech AI Soberana — Infraestrutura Digital para a América Latina',
    template: '%s | Educatech AI Soberana',
  },
  description:
    'Soberania Digital para Governos e Instituições da América Latina. Implementação de ZK-ID, Civitas Institucional e Governamental com conformidade PII-Zero e descentralização.',
  keywords: [
    'soberania digital', 'infraestrutura LATAM', 'ZK-ID', 'Civitas Institucional', 'votação digital auditável',
    'IA institucional', 'PII-Zero', 'Educatech AI', 'governo digital',
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://educatech-ai.vercel.app',
    siteName: 'Educatech AI Soberana',
    title: 'Educatech AI — Infraestrutura Digital Soberana para a América Latina',
    description: 'Liderando a fronteira da soberania digital regional. ZK-ID e Civitas: soluções determinísticas para a governança moderna.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Educatech AI Soberana' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Educatech AI Soberana — Soberania Digital Regional',
    description: 'ZK-ID, Civitas Institucional e Governamental. A base técnica para a autonomia institucional da América Latina.',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      <body className="bg-[#030712] text-slate-100 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
