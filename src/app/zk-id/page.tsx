import type { Metadata } from 'next'
import Link from 'next/link'
import { ShieldAlert, Server, Fingerprint, Lock, Database, Code2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'ZK-ID Sovereign Identity | Educatech AI Soberana',
  description: 'Especificações técnicas da camada fundamental de identidade digital da Infraestrutura Soberana LATAM.',
}

export default function ZkIdPage() {
  return (
    <div className="pt-28 pb-24 min-h-screen relative bg-[#030712] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Admin Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 border-b border-white/5 pb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                <ShieldAlert className="w-3 h-3" />
                Acesso Restrito: Infraestrutura Soberana
              </div>
              <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-bold uppercase tracking-widest leading-none">
                ZK-LATAM v2.4.0
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 italic">
              ZK-ID: <span className="gradient-text">Identidade Regional</span>
            </h1>
            <p className="text-slate-400 max-w-2xl leading-relaxed font-medium">
              Documentação técnica para implementação de identidade digital verificável e soberana. 
              Garantindo conformidade PII-Zero e autonomia total do cidadão latino-americano.
            </p>
          </div>
          <div className="glass-bright p-6 rounded-2xl border border-white/10 shadow-2xl min-w-[280px]">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Protocolo Ativo</p>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Zero-Knowledge Gate</p>
                <p className="text-[10px] text-emerald-500 font-mono">Status: INVIOLÁVEL</p>
              </div>
            </div>
            <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
               <div className="h-full bg-emerald-500 w-[100%] animate-pulse" />
            </div>
          </div>
        </div>

        {/* Technical Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          
          {/* Card 1: Hardware Binding */}
          <div className="glass-bright rounded-[2rem] p-8 border border-white/5 hover:border-emerald-500/30 transition-all duration-500 group">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-emerald-500/10 transition-colors">
              <Fingerprint className="w-7 h-7 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Hardware Binding (L1)</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Ancoragem criptográfica da identidade às assinaturas únicas de hardware. Impede a clonagem de credenciais administrativas em estações não autorizadas.
            </p>
            <div className="p-4 rounded-xl bg-black/40 font-mono text-[10px] text-emerald-500/70">
              $ sovereign-id-bind --force <br />
              [OK] Hardware signature: 0x8F2...4A <br />
              [OK] Sealed commitment created.
            </div>
          </div>


          {/* Card 2: ZK-Snarks Core */}
          <div className="glass-bright rounded-[2rem] p-8 border border-white/5 hover:border-indigo-500/30 transition-all duration-500 group">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-indigo-500/10 transition-colors">
              <Code2 className="w-7 h-7 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">ZK-Snarks (Groth16)</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Implementação de provas de conhecimento zero via Groth16. Permite que o administrador prove sua autorização sem jamais enviar a chave privada ou credenciais reais pela rede.
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 rounded bg-slate-800 text-[10px] text-slate-400">Poseidon Hash</span>
              <span className="px-2 py-1 rounded bg-slate-800 text-[10px] text-slate-400">Circom 2.1</span>
            </div>
          </div>

          {/* Card 3: Nullifiers System */}
          <div className="glass-bright rounded-[2rem] p-8 border border-white/5 hover:border-violet-500/30 transition-all duration-500 group">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-violet-500/10 transition-colors">
              <Server className="w-7 h-7 text-violet-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Sistema de Nullifiers</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Mecanismo que garante o uso único de credenciais em processos críticos, impedindo ataques de replay, mesmo que o pacote de autenticação seja interceptado.
            </p>
            <div className="space-y-2">
               <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-violet-500 w-[65%]" />
               </div>
               <p className="text-[10px] text-slate-500 font-mono">Anti-Replay Protection: 99.99% Eff.</p>
            </div>
          </div>
        </div>

        {/* Architecture Diagram Simulation */}
        <div className="glass rounded-[3rem] p-10 md:p-16 border border-white/5 mb-20 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-5">
              <Database className="w-64 h-64 text-white" />
           </div>
           
           <div className="relative z-10 max-w-3xl">
              <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">Fluxo de Dados Administrativo</p>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight italic">
                A Camada Fundamental da <span className="gradient-text">Auditoria Pública.</span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-10">
                O ZK-ID funciona como a base de confiança para o CivitasVote. Sem identificar o operador, ele garante que 
                cada ação tomada no sistema governamental foi originada de um terminal autorizado com privilégios verificados.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-2xl">⚡</div>
                    <div>
                       <h4 className="text-white font-bold mb-1 text-sm">Alta Performance</h4>
                       <p className="text-slate-500 text-xs tracking-tight">Geração de prova em menos de 1.2s localmente.</p>
                    </div>
                 </div>
                 <div className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-2xl">📡</div>
                    <div>
                       <h4 className="text-white font-bold mb-1 text-sm">Privacidade Seletiva</h4>
                       <p className="text-slate-500 text-xs tracking-tight">Revele apenas o necessário para auditoria legal.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Footer Admin Action */}
        <div className="text-center">
            <Link 
              href="/acesso-institucional"
              className="px-10 py-5 rounded-2xl bg-white text-slate-950 font-black text-xl hover:bg-slate-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] inline-block"
            >
              Configurar Gate Administrativo →
            </Link>
            <p className="mt-6 text-slate-600 text-xs uppercase tracking-widest">Apenas para técnicos credenciados pelo Certus Engine</p>
        </div>
      </div>
    </div>
  )
}
