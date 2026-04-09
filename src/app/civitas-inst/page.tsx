import type { Metadata } from 'next'
import Link from 'next/link'
import { PieChart, ShieldAlert, BarChart3, Database, Workflow, Globe2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'CivitasVote Institucional | Governança e Inteligência Social',
  description: 'Especificações técnicas da plataforma de governança B2B para instituições, universidades e empresas.',
}

export default function CivitasInstPage() {
  return (
    <div className="pt-28 pb-24 min-h-screen relative bg-[#030712] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[500px] bg-indigo-600/5 blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6 px-4">
            <ShieldAlert className="w-4 h-4" />
            Acesso Administrativo Institucional (B2B)
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8 italic">
            Inteligência <br />
            <span className="gradient-text">Social Imutável.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            A infraestrutura definitiva para a coleta de dados soberanos. 
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          <div className="glass-bright rounded-[2.5rem] p-10 border border-white/5 hover:border-indigo-500/30 transition-all duration-500 group">
             <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <PieChart className="w-8 h-8 text-indigo-400" />
             </div>
             <h3 className="text-2xl font-black text-white mb-4 italic tracking-tight">Estatística Anonimizada</h3>
             <p className="text-slate-400 text-sm leading-relaxed">
                Algoritmos de amostragem PII-Zero garantindo anonimato total.
             </p>
          </div>
        </div>
        <Link href="/" className="text-indigo-400 font-bold uppercase tracking-widest text-xs">← Voltar ao Início</Link>
      </div>
    </div>
  )
}
