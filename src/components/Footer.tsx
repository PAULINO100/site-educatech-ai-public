import Link from 'next/link'

const FOOTER_LINKS = {
  Produto: [
    { href: '/produto', label: 'Visão Geral' },
    { href: '/capacidades', label: 'Minhas Capacidades' },
    { href: '/vantagens', label: 'Vantagens' },
    { href: '/zk-midnight', label: 'ZK-Midnight' },
    { href: '/documentacao', label: 'Documentação' },
    { href: '/como-usar', label: 'Como Usar' },
  ],
  Empresa: [
    { href: '/faq', label: 'FAQ' },
    { href: '/acesso-institucional', label: 'Acesso Institucional' },
    { href: '/contato', label: 'Contato' },
    { href: '/app', label: 'Acessar Plataforma' },
  ],
  Legal: [
    { href: '/termos', label: 'Termos de Uso' },
    { href: '/privacidade', label: 'Política de Privacidade' },
    { href: '/lgpd', label: 'LGPD' },
    { href: '/eula', label: 'EULA' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-24">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-indigo-950/80 via-violet-950/80 to-indigo-950/80 border-b border-indigo-800/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xl font-bold text-white">Pronto para estabelecer sua soberania técnica?</p>
            <p className="text-slate-400 mt-1 text-sm">Provisionamento institucional sob demanda.</p>
          </div>
          <Link
            href="/acesso-institucional"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold transition-all shadow-lg hover:shadow-indigo-500/30 whitespace-nowrap"
          >
            Obter Acesso →
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm">C</div>
              <span className="font-bold text-lg text-white">Certus<span className="text-indigo-400">Engine</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-56">
              Governança Tier A+, PII-Zero e auditoria imutável para a nova era da IA.
            </p>
            <div className="mt-4 flex gap-3 text-slate-500">
              <a href="mailto:founder@certusengine.ai" className="hover:text-indigo-400 text-xs transition-colors font-mono">founder@</a>
              <a href="mailto:security@certusengine.ai" className="hover:text-indigo-400 text-xs transition-colors font-mono">security@</a>
              <a href="mailto:dpo@certusengine.ai" className="hover:text-indigo-400 text-xs transition-colors font-mono">dpo@</a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">{category}</p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-slate-600">© 2026 Certus Engine · Educatech AI · CNPJ: em registro</p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-600 font-mono border border-slate-700 rounded px-2 py-0.5">v2.1.1</span>
            <span className="badge-zk">ZK-Midnight</span>
            <span className="text-xs text-slate-600">Analytics: Plausible · PII-Zero</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
