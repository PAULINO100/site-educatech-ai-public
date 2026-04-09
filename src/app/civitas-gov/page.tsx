import type { Metadata } from 'next'
import Link from 'next/link'
import { ShieldCheck, Database, LayoutGrid, Cpu, Activity, Binary } from 'lucide-react'

export const metadata: Metadata = {
  title: 'CivitasVote Governamental | Infraestrutura de Votação Auditável',
  description: 'Especificações técnicas da infraestrutura de votação digital para governos e alta administração.',
}

export default function CivitasGovPage() {
  return (
    <div className="pt-28 pb-24 min-h-screen relative bg-[#030712] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-full h-[600px] bg-blue-500/5 blur-[150px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              <ShieldCheck className="w-3 h-3" />
              Acesso Governamental Restrito
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight mb-8">
              Civitas<span className="text-blue-500">Vote</span> <br />
              Governamental.
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-10">
              Infraestrutura técnica para processos decisórios de alta soberania. 
              Implementação de **Integridade Verificável** sem exposição de dados pessoais.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="glass p-10 rounded-[3rem] border border-white/5 hover:border-blue-500/20 transition-all duration-700">
             <div className="w-16 h-16 rounded-3xl bg-blue-500/10 flex items-center justify-center mb-8">
                <Database className="w-8 h-8 text-blue-400" />
             </div>
             <h3 className="text-2xl font-black text-white mb-4">Encadeamento por Hash (v2.0)</h3>
             <p className="text-slate-400 leading-relaxed mb-8 font-mono text-sm">
                SHA-256 Linkage: PREV_HASH {'->'} DATA {'->'} CURR_HASH
             </p>
          </div>
        </div>
        <Link href="/" className="text-indigo-400 font-bold uppercase tracking-widest text-xs">← Voltar ao Início</Link>
      </div>
    </div>
  )
}
