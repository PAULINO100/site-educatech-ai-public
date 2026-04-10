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
      {/* Background Decor */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[500px] bg-indigo-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Admin Header */}
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
            Gere dados estratégicos e estatisticamente verificáveis através de protocolos que garantem anonimato total e integridade absoluta.
          </p>
        </div>

        {/* Technical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          
          <div className="glass-bright rounded-[2.5rem] p-10 border border-white/5 hover:border-indigo-500/30 transition-all duration-500 group">
             <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <PieChart className="w-8 h-8 text-indigo-400" />
             </div>
             <h3 className="text-2xl font-black text-white mb-4 italic tracking-tight">Estatística Anonimizada</h3>
             <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Algoritmos de amostragem que garantem a relevância dos dados sem comprometer a identidade individual dos participantes. 
                Ideal para auditorias sociais em larga escala.
             </p>
             <div className="flex gap-2">
                <div className="h-1.5 flex-1 bg-slate-800 rounded-full overflow-hidden">
                   <div className="h-full bg-indigo-500 w-[70%]" />
                </div>
                <div className="h-1.5 flex-1 bg-slate-800 rounded-full overflow-hidden">
                   <div className="h-full bg-violet-500 w-[45%]" />
                </div>
             </div>
          </div>

          <div className="glass-bright rounded-[2.5rem] p-10 border border-white/5 hover:border-violet-500/30 transition-all duration-500 group">
             <div className="w-16 h-16 rounded-2xl bg-violet-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Workflow className="w-8 h-8 text-violet-400" />
             </div>
             <h3 className="text-2xl font-black text-white mb-4 italic tracking-tight">Fluxos de Governança</h3>
             <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Criação de questionários e protocolos decisórios com versionamento imutável. 
                Uma vez publicado, as regras do processo não podem ser alteradas sem transparência pública.
             </p>
             <div className="inline-block px-3 py-1 rounded bg-slate-800 border border-white/10 text-[10px] text-slate-500 font-mono">
                PROTOCOL_HASH: 0x98A...12C
             </div>
          </div>

          <div className="glass-bright rounded-[2.5rem] p-10 border border-white/5 hover:border-emerald-500/30 transition-all duration-500 group">
             <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Database className="w-8 h-8 text-emerald-400" />
             </div>
             <h3 className="text-2xl font-black text-white mb-4 italic tracking-tight">Data Sovereignty</h3>
             <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Propriedade absoluta dos dados gerados. Armazenamento em nuvens privadas ou infraestrutura local, garantindo conformidade com regulações setoriais específicas.
             </p>
             <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-500 uppercase tracking-widest leading-none">
                <Globe2 className="w-4 h-4" /> Global Compliance Active
             </div>
          </div>
        </div>

        {/* Strategic Dashboard Demo Section */}
        <section className="relative overflow-hidden mb-24">
           <div className="glass rounded-[4rem] p-10 md:p-20 border border-white/5 relative bg-gradient-to-br from-indigo-900/10 to-transparent">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div>
                    <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-6">Painel de Decisão Estratégica</p>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter italic">
                       Transforme Dado em <br />
                       <span className="gradient-text">Poder de Decisão.</span>
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed mb-10">
                       Visualize tendências e valide decisões institucionais com a confiança de uma infraestrutura auditável. 
                       O Civitas Institucional elimina o risco de manipulação de dados em conselhos e gestões universitárias.
                    </p>
                    <Link href="/acesso-institucional" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-lg rounded-2xl transition-all shadow-[0_0_40px_rgba(79,70,229,0.2)] inline-block">
                       Solicitar Demo Admin →
                    </Link>
                 </div>
                 <div className="relative group">
                    <div className="aspect-video glass-bright rounded-3xl overflow-hidden border border-white/10 p-6 flex items-center justify-center relative">
                       <BarChart3 className="w-32 h-32 text-indigo-500/20 group-hover:text-indigo-500/40 transition-all duration-700 group-hover:scale-125" />
                       <div className="absolute inset-x-8 bottom-8 h-32 flex items-end gap-2 px-10">
                          {[40, 70, 45, 90, 60, 85].map((h, i) => (
                             <div key={i} className="flex-1 bg-indigo-500/20 rounded-t-lg transition-all duration-1000 group-hover:bg-indigo-500" style={{ height: `${h}%` }} />
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Footer Technical Metadata */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12">
            <div className="flex items-center gap-6">
                <div>
                   <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Criptografia</p>
                   <p className="text-xs text-white font-mono">B-Symmetric Imutability</p>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                   <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Frequência</p>
                   <p className="text-xs text-white font-mono">Real-time Stats Engine</p>
                </div>
            </div>
            <p className="text-[10px] text-slate-600 uppercase tracking-widest font-bold">Sovereign Institutional Framework v2.2.0 · LATAM Admin Access</p>
        </div>
      </div>
    </div>
  )
}
