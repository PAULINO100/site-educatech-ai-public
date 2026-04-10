'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/zk-id', label: 'ZK-ID' },
  { href: '/civitas-inst', label: 'Civitas Institucional' },
  { href: '/civitas-gov', label: 'Civitas Governamental' },
  { href: '/documentacao', label: 'Documentação' },
  { href: '/acesso-institucional', label: 'Acesso Institucional' },
  { href: '/faq', label: 'FAQ' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'ultra-glass border-b border-emerald-500/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:shadow-emerald-500/40 transition-shadow">
            E
          </div>
          <span className="font-bold text-lg tracking-tight">
            Educatech<span className="text-emerald-400">AI</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                pathname === link.href
                  ? 'text-emerald-400 bg-emerald-500/10'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contato"
            className="text-sm text-slate-400 hover:text-slate-100 transition-colors px-3 py-2"
          >
            Contato
          </Link>
          <Link
            href="/acesso-institucional"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-sm font-semibold transition-all duration-150 shadow-lg hover:shadow-emerald-500/30"
          >
            Obter Acesso
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Menu"
        >
          <div className="w-5 flex flex-col gap-1">
            <span className={`h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden ultra-glass border-t border-emerald-500/10 mt-1 px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-emerald-500/10 mt-2">
            <Link
              href="/acesso-institucional"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center px-4 py-3 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-semibold"
            >
              Obter Acesso
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
