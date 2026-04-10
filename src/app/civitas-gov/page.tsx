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
      {/* Background Decor */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-full h-[600px] bg-blue-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Admin Header */}
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
              Implementação de **Integridade Verificável** sem exposição de dados pessoais, permitindo auditorias matemáticas em tempo real.
            </p>
            <div className="flex flex-wrap gap-4">
               <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  <span className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">Auditabilidade 100% Síncrona</span>
               </div>
               <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <Binary className="w-4 h-4 text-blue-400" />
                  <span className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">Votanet Hash Chain</span>
               </div>
            </div>
          </div>

          <div className="w-full lg:w-96 glass-bright rounded-[2.5rem] p-8 border border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.1)] relative group overflow-hidden">
             <div className="absolute top-0 right-0 p-4">
                <LayoutGrid className="w-32 h-32 text-blue-500/10" />
             </div>
             <div className="relative z-10">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-6 italic">Status da Infraestrutura</p>
                <div className="space-y-6">
                   <div>
                      <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-2 uppercase">Integridade por Bloco</div>
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                         <div className="h-full bg-blue-500 w-[94%]" />
                      </div>
                   </div>
                   <div>
                      <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-2 uppercase">Conformidade Auditiva</div>
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                         <div className="h-full bg-blue-500 w-[100%]" />
                      </div>
                   </div>
                   <div className="pt-4 border-t border-white/5">
                      <p className="text-white font-black text-xl mb-1 italic">99.999%</p>
                      <p className="text-[9px] text-slate-500 uppercase font-mono">Uptime Soberano Garantido</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Technical Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          
          <div className="glass p-10 rounded-[3rem] border border-white/5 hover:border-blue-500/20 transition-all duration-700">
             <div className="w-16 h-16 rounded-3xl bg-blue-500/10 flex items-center justify-center mb-8">
                <Database className="w-8 h-8 text-blue-400" />
             </div>
             <h3 className="text-2xl font-black text-white mb-4">Encadeamento por Hash (v2.0)</h3>
             <p className="text-slate-400 leading-relaxed mb-8">
                Cada voto é tratado como uma unidade atômica criptografada, encadeada cronologicamente via SHA256. 
                Qualquer tentativa de alteração em um boletim histórico invalida instantaneamente toda a cadeia subsequente.
             </p>
             <div className="p-5 rounded-2xl bg-black/40 border border-white/5 flex flex-col gap-3 font-mono text-[10px]">
                <div className="flex justify-between"><span className="text-slate-600">PREV_HASH:</span> <span className="text-blue-400">0x6a1...f34</span></div>
                <div className="flex justify-between"><span className="text-slate-600">VOTE_PAYLOAD:</span> <span className="text-slate-500">ENCRYPTED_ZK_BLOB</span></div>
                <div className="flex justify-between font-bold text-white"><span className="text-slate-600">CURR_HASH:</span> <span>0xd98...e21</span></div>
             </div>
          </div>

          <div className="glass p-10 rounded-[3rem] border border-white/5 hover:border-blue-500/20 transition-all duration-700">
             <div className="w-16 h-16 rounded-3xl bg-blue-500/10 flex items-center justify-center mb-8">
                <Cpu className="w-8 h-8 text-blue-400" />
             </div>
             <h3 className="text-2xl font-black text-white mb-4">Boletins de Urna Imutáveis</h3>
             <p className="text-slate-400 leading-relaxed mb-8">
                Protocolo de transparência pública onde os resultados parciais são publicados digitalmente com assinaturas multisig governamentais. 
                Garantia de que o dado publicado é matematicamente idêntico ao dado processado.
             </p>
             <ul className="space-y-3">
                {['Multi-Signature Governance', 'Public/Private Key Isolation', 'Atomic Write Commitment'].map((item) => (
                   <li key={item} className="flex items-center gap-3 text-xs font-bold text-slate-300">
                      <span className="w-4 h-px bg-blue-500" /> {item}
                   </li>
                ))}
             </ul>
          </div>
        </div>

        {/* The Guard Section */}
        <section className="relative glass-bright rounded-[4rem] px-10 py-16 md:p-20 border border-white/5 mb-24 overflow-hidden text-center">
           <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
           <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">
                 Transparência <span className="gradient-text">Sem Exposição.</span>
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed mb-12">
                 O CivitasVote Governamental resolve o paradoxo da votação digital: a necessidade de segredo absoluto do voto 
                 combinada com a necessidade de transparência absoluta da contagem. Uma infraestrutura projetada para durar um século.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <Link href="/contato" className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black text-xl rounded-2xl transition-all shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                    Agendar Auditoria Pública
                 </Link>
                 <Link href="/whitepaper" className="px-10 py-5 glass border border-white/10 text-white font-bold text-xl rounded-2xl hover:bg-white/5 transition-all">
                    Relatório de Conformidade
                 </Link>
              </div>
           </div>
        </section>

        {/* Footer Technical Note */}
        <div className="text-center font-mono text-[10px] text-slate-600 uppercase tracking-[0.3em]">
           Proteção Contra Ataques Quânticos · Cripto-Soberania · Infraestrutura Soberana LATAM
        </div>

      </div>
    </div>
  )
}
