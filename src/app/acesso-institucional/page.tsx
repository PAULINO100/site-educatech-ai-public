'use client'

import Link from 'next/link'

const FEATURES_INSTITUTIONAL = [
  'Infraestrutura Soberana LATAM v2.2.0',
  'Resiliência "Nunca Cego" (Nodos Regionais)',
  'Protocolo PII-Zero de Privacidade Total',
  'Identidade Descentralizada ZK-ID Integrada',
  'Interoperabilidade com Sistemas Públicos',
  'Logs de Auditoria SHA256 Imutáveis',
  'Acesso ao Dossiê Técnico v2.2.0',
  'Monitoramento de Integridade em Tempo Real',
]

const FEATURES_ENTERPRISE = [
  'Implantação On-Premise (Nacional/Privada)',
  'Isolamento Físico de Dados Sensíveis',
  'Uptime de Missão Crítica 99.999%',
  'Treinamento Técnico para Equipes de TI',
  'Suporte Institucional Especializado 24/7',
  'Customização de Protocolos Governamentais',
  'Auditoria Regulatória Assistida (LGPD)',
  'Consenso Técnico Regional entre Nodos',
]

export default function InstitutionalAccessPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 border border-emerald-500/30">
            <span className="text-emerald-400 text-sm">🛡️</span>
            <span className="text-xs text-emerald-300 font-semibold uppercase tracking-widest">Infraestrutura Soberana Regional</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 italic">Acesso Institucional</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Governança, Transparência e Autonomia Regional para organizações que exigem soberania digital absoluta.
          </p>
        </div>

        {/* Deployment Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {/* Hybrid Cloud / Standard Institutional */}
          <div className="glass-bright rounded-[2.5rem] p-10 relative overflow-hidden border-2 border-emerald-500/40 glow-emerald transition-all hover:scale-[1.02] duration-500">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500" />
            <h2 className="text-3xl font-black text-white mb-2 italic">Cluster Soberano</h2>
            <p className="text-slate-400 text-sm mb-6 font-medium">Implantação Híbrida em Nodos Regionais</p>

            <div className="mt-6 mb-8">
              <span className="text-4xl font-black text-white">Sob Consulta</span>
              <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest mt-2">
                🔒 Provisionamento Soberano Homologado
              </p>
            </div>

            <Link
              href="/contato"
              className="block w-full py-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xl text-center transition-all shadow-lg shadow-emerald-500/20 mb-10 active:scale-95"
            >
              Iniciar Homologação →
            </Link>

            <ul className="space-y-4">
              {FEATURES_INSTITUTIONAL.map((f) => (
                <li key={f} className="flex items-start gap-4 text-sm text-slate-300 font-medium">
                  <span className="text-emerald-400 mt-0.5 shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* On-Premise / Government */}
          <div className="glass rounded-[2.5rem] p-10 relative border border-white/5 hover:border-emerald-500/20 transition-all group duration-500 hover:scale-[1.02]">
            <h2 className="text-3xl font-black text-white mb-2 italic">Private Core</h2>
            <p className="text-slate-400 text-sm mb-6 font-medium">Isolamento total em infraestrutura física nacional</p>
            
            <div className="mt-6 mb-8">
              <span className="text-4xl font-black text-slate-300">Governamental</span>
              <p className="text-emerald-500/70 text-[10px] font-bold uppercase tracking-widest mt-2">
                🏛️ Alta Administração & Segurança Nacional
              </p>
            </div>

            <Link
              href="/contato"
              className="block w-full py-5 rounded-2xl border border-white/10 glass hover:border-emerald-500/40 text-white font-black text-xl text-center transition-all mb-10 hover:bg-white/5"
            >
              Agendar Protocolo de Deploy →
            </Link>

            <ul className="space-y-4">
              {FEATURES_ENTERPRISE.map((f) => (
                <li key={f} className="flex items-start gap-4 text-sm text-slate-400 font-medium">
                  <span className="text-emerald-500/50 mt-0.5 shrink-0">◆</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Core Advisory */}
        <div className="glass-bright rounded-[3rem] p-10 md:p-16 border border-emerald-500/10 max-w-4xl mx-auto flex flex-col items-center text-center">
          <p className="text-emerald-400 font-black text-2xl mb-6 italic tracking-tighter">O Manifesto da Soberania Digital</p>
          <p className="text-slate-300 text-lg leading-relaxed mb-8 font-medium">
            "A verdadeira independência de uma nação ou instituição é refletida em seu controle tecnológico. 
            A Educatech AI Soberana v2.2.0 garante que a infraestrutura técnica regional permaneça resiliente, 
            privada e inquebrável perante dependências externas."
          </p>
          <Link href="/whitepaper" className="text-emerald-400 hover:text-emerald-300 font-black uppercase tracking-widest text-xs transition-colors border-b border-emerald-500/20 pb-1">
            Revisar Dossiê de Soberania LATAM →
          </Link>
        </div>
      </div>
    </div>
  )
}
