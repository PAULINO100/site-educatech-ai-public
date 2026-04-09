'use client'

import Link from 'next/link'

const FEATURES_INSTITUTIONAL = [
  'Governança Tier A+ Determinística v2.1.1',
  'Resiliência "Nunca Cego" (Automatic CPU Fallback)',
  'PII-Zero scan bidirecional soberano',
  'Regra de Ouro v2.1.1 (Qwen 3.5 mandated start)',
  'Universal LLM Adapter (OpenAI, Anthropic, Gemini, local)',
  'Circuit Breakers Financeiros com billing real-time',
  'Auditoria SHA256 imutável e auditável',
  'ZK-Midnight license proof para soberania técnica',
]

const FEATURES_ENTERPRISE = [
  'Deploy On-Premise ou Hybrid Cloud',
  'Hardware-bound Node-lock licensing',
  'SLA de missão crítica 99.9% uptime',
  'Onboarding técnico assistido e treinamento de equipe',
  'Suporte prioritário Certus Prime 24/7',
  'Custom adapters e integração com legado governamental',
  'Auditoria regulatória assistida (LGPD/Standards Técnicos)',
  'Consenso Triplo entre frotas de CPUs Alpha',
]

export default function InstitutionalAccessPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 border border-indigo-500/30">
            <span className="text-indigo-400 text-sm">🛡️</span>
            <span className="text-xs text-indigo-300 font-semibold">Infraestrutura Soberana de Missão Crítica</span>
          </div>
          <h1 className="text-5xl font-black text-white mb-4">Acesso Institucional</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Governança, Determinismo e Resiliência para organizações que exigem soberania técnica absoluta.
          </p>
        </div>

        {/* Deployment Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {/* Hybrid Cloud / Standard Institutional */}
          <div className="glass-bright rounded-3xl p-8 relative overflow-hidden border-2 border-indigo-500/40 glow-indigo">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500" />
            <h2 className="text-2xl font-bold text-white mb-2">Sovereign Cluster</h2>
            <p className="text-slate-400 text-sm mb-6">Implantação Híbrida em Cloud Certus</p>

            <div className="mt-6 mb-8">
              <span className="text-4xl font-black text-white">Sob Consulta</span>
              <p className="text-emerald-400 text-sm font-semibold mt-2">
                🔒 Provisionamento Mandatário Tier A+
              </p>
            </div>

            <Link
              href="/app"
              className="block w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-center transition-all shadow-lg hover:shadow-indigo-500/30 mb-8"
            >
              Solicitar Credenciais →
            </Link>

            <ul className="space-y-3">
              {FEATURES_INSTITUTIONAL.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="text-emerald-400 mt-0.5 shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* On-Premise / Government */}
          <div className="glass rounded-3xl p-8 relative border border-slate-700 hover:border-violet-500/30 transition-all">
            <h2 className="text-2xl font-bold text-white mb-2">On-Premise / Private</h2>
            <p className="text-slate-400 text-sm mb-6">Isolamento total em infraestrutura física do cliente</p>
            
            <div className="mt-6 mb-8">
              <span className="text-4xl font-black text-slate-300">Enterprise</span>
              <p className="text-violet-400 text-sm font-semibold mt-2">
                🏛️ Projetos Governamentais & Bancários
              </p>
            </div>

            <Link
              href="/contato"
              className="block w-full py-4 rounded-xl border border-slate-600 hover:border-indigo-500 text-slate-300 hover:text-white font-semibold text-center transition-all mb-8"
            >
              Agendar Protocolo de Deploy →
            </Link>

            <ul className="space-y-3">
              {FEATURES_ENTERPRISE.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="text-violet-400 mt-0.5 shrink-0">◆</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Core Advisory */}
        <div className="glass-bright rounded-2xl p-10 border border-indigo-500/20 max-w-4xl mx-auto flex flex-col items-center text-center">
          <p className="text-indigo-300 font-bold text-xl mb-4">🛡️ O Manifesto do Determinismo</p>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            "Não permitimos que o seu sistema fique no escuro. O Certus Engine v2.1.1 garante que, 
            mesmo sob falha de provedores terceiros, sua governança permaneça inabalável através 
            do nosso protocolo de resiliência ativa."
          </p>
          <Link href="/documentacao" className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors">
            Ler Whitepaper Técnico v2.1.1 →
          </Link>
        </div>
      </div>
    </div>
  )
}
