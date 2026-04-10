import Link from 'next/link'

const FOOTER_LINKS = {
  Produto: [
    { href: '/zk-id', label: 'ZK-ID' },
    { href: '/civitas-inst', label: 'Civitas Institucional' },
    { href: '/civitas-gov', label: 'Civitas Governamental' },
    { href: '/documentacao', label: 'Documentação' },
  ],
  Empresa: [
    { href: '/faq', label: 'FAQ' },
    { href: '/acesso-institucional', label: 'Acesso Institucional' },
    { href: '/contato', label: 'Contato' },
  ],
  Legal: [
    { href: '/documentacao', label: 'Documentação' },
    { href: '/whitepaper', label: 'Sovereign Whitepaper' },
    { href: '/lgpd', label: 'LGPD & Privacidade' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-emerald-900/20 mt-24">
      {/* CTA Banner */}
      <div className="ultra-glass border-y border-emerald-500/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xl font-black text-white italic">Pronto para estabelecer sua soberania técnica?</p>
            <p className="text-slate-400 mt-1 text-sm">Provisionamento institucional sob demanda para a América Latina.</p>
          </div>
          <Link
            href="/acesso-institucional"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black transition-all shadow-lg shadow-emerald-500/20 whitespace-nowrap"
          >
            Obter Acesso Institucional →
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-sm">E</div>
              <span className="font-bold text-lg text-white">Educatech<span className="text-emerald-400">AI</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-56">
              Infraestrutura Digital Soberana para a América Latina. Governança, Identidade e Democracia Digital.
            </p>
            <div className="mt-4 flex gap-3 text-slate-500">
              <a href="mailto:institucional@educatech.ai" className="hover:text-emerald-400 text-xs transition-colors font-mono">institucional@educatech.ai</a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 italic">{category}</p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors font-medium">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-slate-600 font-medium">© 2026 Educatech AI · Infraestrutura Soberana Regional</p>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-slate-600 font-mono border border-slate-700/50 rounded px-2 py-0.5">SOVEREIGN-EDITION v2.2.1</span>
            <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest ml-4">PII-Zero Compliance</span>
            <span className="text-[10px] text-emerald-600/60 font-black uppercase tracking-[0.2em] ml-6 border-l border-emerald-900/40 pl-6">Builder: Certus Engine</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
