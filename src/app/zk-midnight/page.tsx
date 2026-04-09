import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ZK-Midnight — Prove Tudo, Revele Nada',
  description: 'Como o Certus Engine usa Zero-Knowledge Proofs e a Cardano Midnight Network para proteger sua privacidade sem comprometer a auditabilidade.',
}

const ZK_STEPS = [
  {
    step: '01',
    title: 'Inputs Privados (RAM apenas)',
    desc: 'HMAC da licença, fingerprint de hardware e nonce de sessão são carregados em memória. Nunca tocam o disco.',
    color: 'from-indigo-600 to-violet-600',
    icon: '🔐',
  },
  {
    step: '02',
    title: 'Geração da Prova ZK (Groth16)',
    desc: 'O circuito Poseidon processa os inputs e gera um commitment criptográfico — sem revelar os dados originais.',
    color: 'from-violet-600 to-cyan-600',
    icon: '⚡',
  },
  {
    step: '03',
    title: 'Verificação Local',
    desc: 'A verification_key pública (nunca a prover key) valida que a prova é matematicamente correta.',
    color: 'from-cyan-600 to-emerald-600',
    icon: '✅',
  },
  {
    step: '04',
    title: 'Ancoragem Midnight (Cardano)',
    desc: 'O hash da prova é ancorado na Midnight Network. Modo ANCHOR_PENDING garante 7 dias offline.',
    color: 'from-emerald-600 to-indigo-600',
    icon: '⛓️',
  },
]

const CIRCUITS = [
  {
    name: 'license_validity',
    desc: 'Prova que a licença é válida e não expirou',
    private: ['HMAC preimage', 'Expiry nonce', 'Timestamp hash'],
    public: ['license_commitment'],
  },
  {
    name: 'hardware_integrity',
    desc: 'Prova que a máquina está autorizada',
    private: ['Hardware fingerprint', 'Binding secret', 'Session nonce'],
    public: ['machine_commitment'],
  },
]

export default function ZkMidnightPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="badge-zk inline-block mb-4 hover:scale-110 transition-transform cursor-default">ZK-Midnight · Groth16 · Poseidon</div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter italic text-balance">
            Prove Tudo.<br />
            <span className="gradient-text">Revele Nada.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed text-balance">
            Camada de privacidade de ultra-segurança para especialistas. 
            Verifique licenças e hardware sem jamais expor dados sensíveis do usuário final.
          </p>
        </div>

        {/* Flow steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {ZK_STEPS.map((s) => (
            <div key={s.step} className="glass rounded-2xl p-6 relative group hover:glow-sm transition-all">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white font-black text-sm mb-4 shadow-lg`}>
                {s.step}
              </div>
              <div className="text-2xl mb-3">{s.icon}</div>
              <h3 className="font-bold text-white mb-2 text-sm">{s.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Circuits detail */}
        <div className="mb-20">
          <h2 className="text-3xl font-black text-white text-center mb-12">
            Circuitos <span className="gradient-text">Implementados</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CIRCUITS.map((c) => (
              <div key={c.name} className="glass-bright rounded-2xl p-6">
                <div className="font-mono text-indigo-300 text-sm mb-2">{c.name}.circom</div>
                <p className="text-slate-300 font-semibold mb-4">{c.desc}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-semibold">🔒 Inputs Privados</p>
                    <ul className="space-y-1.5">
                      {c.private.map((p) => (
                        <li key={p} className="text-xs text-slate-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500/70 shrink-0" />{p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-semibold">📡 Outputs Públicos</p>
                    <ul className="space-y-1.5">
                      {c.public.map((p) => (
                        <li key={p} className="text-xs text-slate-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70 shrink-0" />{p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selective Disclosure */}
        <div className="glass-bright rounded-3xl p-10 mb-12 border border-violet-500/20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <p className="badge-zk inline-block mb-4">Auditor Mode</p>
              <h2 className="text-2xl font-black text-white mb-3">Selective Disclosure</h2>
              <p className="text-slate-400 leading-relaxed">
                Auditores recebem apenas os <strong className="text-white">sinais públicos</strong> das provas ZK —
                suficiente para confirmar conformidade, impossível de usar para identificar o usuário.
              </p>
              <Link href="/pricing" className="mt-6 inline-block px-5 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors">
                Ver Planos com ZK →
              </Link>
            </div>
            <div className="flex-1 glass rounded-xl p-4 font-mono text-xs text-slate-300 leading-relaxed">
              <pre>{`{
  "audit_report": {
    "session_id_hash": "a1b2c3...",  // ✅ Hashed
    "overall_verified": true,
    "verifications": [{
      "circuit": "license_validity",
      "public_signals": ["156789012345"],
      "verified": true
      // ❌ customer_id: NEVER here
      // ❌ hardware_id: NEVER here
    }]
  }
}`}</pre>
            </div>
          </div>
        </div>

        {/* Anti-Fraud Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-black text-white text-center mb-12 italic uppercase tracking-tighter">
            Sistema <span className="text-red-500">Anti-Fraude</span> Imutável
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass rounded-2xl p-8 border-red-500/10">
              <p className="text-4xl mb-4">🖥️</p>
              <h3 className="text-lg font-bold text-white mb-3">Hardware Binding</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Diferente de sistemas que validam apenas e-mail, o Certus usa o <strong className="text-white">Hardware Fingerprint</strong> como input privado. 10 e-mails na mesma máquina geram a mesma assinatura ZK.
              </p>
            </div>
            <div className="glass rounded-2xl p-8 border-red-500/10">
              <p className="text-4xl mb-4">🛡️</p>
              <h3 className="text-lg font-bold text-white mb-3">Nullifiers</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Cada ação gera um <strong className="text-white">Anulador (Recibo de uso único)</strong> determinístico. Tentar duplicar uma ação gera o mesmo hash anulador, bloqueado instantaneamente pela rede.
              </p>
            </div>
            <div className="glass rounded-2xl p-8 border-red-500/10">
              <p className="text-4xl mb-4">🌍</p>
              <h3 className="text-lg font-bold text-white mb-3">Independência de IP</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                A prova ZK é gerada <strong className="text-white">localmente</strong>. VPNs mascaram seu IP, mas a prova matemática atesta a unicidade física da estação, ignorando proxies ou geolocalização.
              </p>
            </div>
          </div>

          <div className="mt-12 glass-bright rounded-2xl p-6 overflow-x-auto border-red-500/20">
            <table className="w-full text-left font-mono text-xs text-slate-400">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-3 px-4">Método de Burlar</th>
                  <th className="pb-3 px-4">Por que falha no Certus Engine?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="py-3 px-4 text-white">Múltiplos e-mails</td>
                  <td className="py-3 px-4">O hash ZK está amarrado ao segredo do hardware, não ao texto do e-mail.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-white">VPN / Proxy</td>
                  <td className="py-3 px-4">Segurança baseada na integridade local da máquina, ignorando a camada de rede.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-white">Troca de Identidade</td>
                  <td className="py-3 px-4">Nullifier garante unicidade por assinatura de hardware imutável.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Performance */}
        <div className="text-center glass rounded-2xl py-10 px-6">
          <p className="text-slate-400 text-sm mb-2">Benchmark validado · E2E</p>
          <p className="text-5xl font-black gradient-text mb-2">1.17s</p>
          <p className="text-white font-semibold">ZK Prove + Verify P99 (target: &lt;3s)</p>
        </div>
      </div>
    </div>
  )
}
