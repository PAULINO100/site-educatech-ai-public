'use client'

import Link from 'next/link'
import FreeKeyGenerator from '@/components/FreeKeyGenerator'

export default function AppPage() {
  return (
    <div className="pt-28 pb-24 min-h-screen relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 border border-indigo-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-xs text-indigo-300 font-medium tracking-widest uppercase">Acesso Soberano Ativado</span>
          </div>
          <h1 className="text-4xl font-black text-white mb-3">Seja Bem-Vindo ao Certus Engine</h1>
          <p className="text-slate-400 max-w-lg mx-auto">
            Você foi convidado para testar a infraestrutura de inteligência mais precisa do mundo. Gere sua credencial e inicie a revolução determinística.
          </p>
        </div>

        {/* Generator Component */}
        <div className="mb-12">
          <FreeKeyGenerator />
        </div>

        {/* Footer Info */}
        <div className="text-center">
          <p className="text-xs text-slate-600 mb-6">Confiado por arquitetos de sistemas e engenheiros de IA</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Tier A+', 'PII-Zero', 'Determinismo', 'Soberania'].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-slate-800/40 border border-slate-700 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
          
          <Link href="/" className="mt-12 inline-block text-slate-500 hover:text-indigo-400 text-xs transition-colors group">
            <span className="mr-1 group-hover:-translate-x-1 inline-block transition-transform">←</span> Voltar ao Manifesto
          </Link>
        </div>
      </div>
    </div>
  )
}
