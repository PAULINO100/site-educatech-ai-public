import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Vantagens — Por que Certus Engine?',
  description: 'Conheça as vantagens do Certus Engine para CTOs, Compliance Officers e Devs. Governança Tier A+, PII-Zero, ZK Proofs e auditoria imutável.',
}

const PERSONAS = [
  {
    icon: '👨‍💻',
    role: 'Desenvolvedor',
    benefits: [
      'Paz de espírito: Chega de lutar contra alucinações da IA',
      'Patches prontos: Receba códigos que funcionam de primeira',
      'Domínio de Escala: Gerencie projetos de milhares de linhas de código+ linhas sem se perder',
      'Foco total: A IA entende seu projeto como você entende',
    ],
  },
  {
    icon: '💼',
    role: 'Empresário',
    benefits: [
      'ROI Real: Veja cada centavo investido em execução de IA',
      'Disjuntor Financeiro: Defina limites e nunca estoure o orçamento',
      'PII-Zero: Seus segredos industriais nunca saem da sua rede',
      'Ativo Auditável: A IA deixa de ser uma caixa preta',
    ],
  },
  {
    icon: '🏛️',
    role: 'Instituições',
    benefits: [
      'Conformidade Total: Alinhado com LGPD e normas pedagógicas',
      'ZK-ID: Validação de identidade sem exposição de dados privados',
      'Integridade Acadêmica: Skills que seguem diretrizes rígidas',
      'Trilha forense: Histórico imutável de todas as ações',
    ],
  },
]

export default function VantagensPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-white mb-4">Vantagens por Perfil</h1>
          <p className="text-slate-400 text-lg">O Certus Engine resolve problemas reais para cada papel na sua organização.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {PERSONAS.map((p) => (
            <div key={p.role} className="glass-bright rounded-2xl p-6">
              <div className="text-4xl mb-3">{p.icon}</div>
              <h2 className="text-xl font-bold text-white mb-4">{p.role}</h2>
              <ul className="space-y-3">
                {p.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="text-indigo-400 mt-0.5 shrink-0">→</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className="glass rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Métricas Reais do Sistema</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { v: '0.106ms', l: 'Gateway Overhead P99' },
              { v: '1.17s', l: 'ZK Proof E2E P99' },
              { v: '100%', l: 'Tier A+ Compliance' },
              { v: 'ZERO', l: 'PII em 100+ Testes E2E' },
            ].map(({ v, l }) => (
              <div key={l}>
                <p className="text-3xl font-black gradient-text mb-1">{v}</p>
                <p className="text-xs text-slate-500">{l}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/app" className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold shadow-lg hover:shadow-indigo-500/30 transition-all inline-block">
            Começar Trial de 30 Dias →
          </Link>
        </div>
      </div>
    </div>
  )
}
