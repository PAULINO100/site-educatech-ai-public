import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Documentação Técnica — Educatech AI Soberana',
  description: 'Especificações técnicas profundas da Infraestrutura Soberana: Latência P99, Invariantes SHA256, ZK-Snark circuits e autonomia LATAM.',
}

const TECH_SPECS = [
  { label: 'Gateway Overhead P99', value: '0.106ms', detail: 'Scan PII + Data Sovereignty' },
  { label: 'ZK-ID Proof E2E', value: '1.17s', detail: 'Circom + SnarkJS validation' },
  { label: 'Audit Hash', value: 'SHA-256', detail: 'Immutable forensics' },
  { label: 'Latency Node', value: 'LATAM-Edge', detail: 'Tested across regional nodes' },
]

export default function DocumentacaoPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <Link href="/" className="text-emerald-400 hover:text-emerald-300 text-sm mb-4 inline-block">← Voltar para Portal Soberano</Link>
          <h1 className="text-4xl font-black text-white mb-2 uppercase tracking-tighter italic">Documentação Técnica <span className="text-emerald-500">v2.2.0</span></h1>
          <p className="text-slate-500 font-mono text-sm">RESTRICTED ACCESS // SOVEREIGN SPECIFICATIONS</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-12">
            {/* Architecture Section */}
            <section>
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                Arquitetura de Soberania
              </h2>
              <div className="glass-bright rounded-2xl p-6 font-mono text-[11px] text-slate-300 leading-relaxed overflow-x-auto">
                <pre>{`
 [ LAYER 0: App Interface ]
            ↓ (REST/SDK)
 [ LAYER 1: PII-Zero Gateway ]  ---→ MASKS: Names, Emails, CPFs, API_KEYS
            ↓ (Clean Payload)
 [ LAYER 2: ZK-ID Logic ]       ---→ PROOF: Zero-Knowledge Verification
            ↓ (Verified Identity)
 [ LAYER 3: Civitas Core ]      ---→ SERVICES: Institutional | Gov Voting
            ↓ (Audit Log)
 [ LAYER 4: Forensic Hash ]     ---→ HASH: SHA-256 (Immutable Ledger)
                `}</pre>
              </div>
            </section>

            {/* Deterministic Execution */}
            <section>
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                Execução Determinística e Auditável
              </h2>
              <p className="text-slate-400 text-sm mb-6">
                A Educatech AI garante que cada processo técnico gere um **Hash de Auditoria** estruturado. O motor de validação interno assegura a integridade do dado processado antes da publicação.
              </p>
              <div className="glass rounded-2xl p-6 border-emerald-500/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-emerald-400">status: integrity_verified</span>
                  <span className="text-[10px] text-slate-500">checksum: 9a8b7c6d5e4f</span>
                </div>
                <pre className="text-[10px] font-mono text-slate-400 leading-tight">
{`--- audit.log
+++ audit.log
@@ -12,4 +12,6 @@
 [ZK-PROOF] Success: 0x55a...ee
 [PII-CLEAN] Masking complete
 [HASH-CHAIN] New block: 0x92f...1a
+ Integrity confirmed by Regional Node 07`}
                </pre>
              </div>
            </section>
          </div>

          {/* Sidebar Stats */}
          <div className="space-y-6">
            <div className="glass-bright rounded-2xl p-6 border-emerald-500/20">
              <h3 className="text-sm font-bold text-emerald-300 mb-6 uppercase tracking-widest text-center">Métricas de Soberania</h3>
              <div className="space-y-6">
                {TECH_SPECS.map(s => (
                  <div key={s.label}>
                    <p className="text-xs text-slate-500 mb-1">{s.label}</p>
                    <p className="text-xl font-black text-white">{s.value}</p>
                    <p className="text-[10px] text-emerald-400/60 font-mono">{s.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6 border border-emerald-500/10">
              <h3 className="text-sm font-bold text-white mb-4">Stack Tecnológica</h3>
              <ul className="text-xs space-y-2 text-slate-400 font-mono">
                <li>• Next.js 14.x</li>
                <li>• TypeScript 5.x</li>
                <li>• Tailwind CSS (Glassmorphism)</li>
                <li>• ZK: Circom + SnarkJS</li>
                <li>• Nodes: LATAM Dedicated</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-emerald-600/10 border border-emerald-500/20 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2 italic">Acesso Institucional Restrito</h2>
          <p className="text-slate-400 text-sm mb-6">A documentação completa de infraestrutura governamental é restrita. Solicite acesso para auditoria completa e implantação On-Premise.</p>
          <Link href="/contato" className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-black hover:bg-emerald-500 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] inline-block">Solicitar Auditoria Institucional</Link>
        </div>
      </div>
    </div>
  )
}
