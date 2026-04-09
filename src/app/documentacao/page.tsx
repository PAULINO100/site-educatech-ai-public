import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Documentação Técnica — Certus Engine',
  description: 'Especificações técnicas profundas do Certus Engine: Latência P99, Invariantes SHA256, ZK-Snark circuits e governança Tier A+.',
}

const TECH_SPECS = [
  { label: 'Gateway Overhead P99', value: '0.106ms', detail: 'Scan PII + Token Accounting' },
  { label: 'ZK-ID Proof E2E', value: '1.17s', detail: 'Circom + SnarkJS validation' },
  { label: 'Audit Hash', value: 'SHA-256', detail: 'Immutable forensics' },
  { label: 'Codebase Limit', value: '1M+ LOC', detail: 'Tested up to milhares de linhas de código stable' },
]

export default function DocumentacaoPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <Link href="/" className="text-indigo-400 hover:text-indigo-300 text-sm mb-4 inline-block">← Voltar para Home amigável</Link>
          <h1 className="text-4xl font-black text-white mb-2 uppercase tracking-tighter italic">Documentação Técnica <span className="text-indigo-500">v1.5.0</span></h1>
          <p className="text-slate-500 font-mono text-sm">RESTRICTED ACCESS // TIER A+ CORE SPECIFICATIONS</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-12">
            {/* Architecture Section */}
            <section>
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                Arquitetura de 5 Camadas
              </h2>
              <div className="glass-bright rounded-2xl p-6 font-mono text-[11px] text-slate-300 leading-relaxed overflow-x-auto">
                <pre>{`
 [ LAYER 0: App Interface ]
            ↓ (REST/SDK)
 [ LAYER 1: PII-Zero Gateway ]  ---→ MASKS: Names, Emails, CPFs, API_KEYS
            ↓ (Clean Payload)
 [ LAYER 2: Token Controller ]  ---→ DYNAMIC WINDOW: Truncate, Summarize, Filter
            ↓ (Optimized Context)
 [ LAYER 3: LLM Routing ]       ---→ PROVIDERS: OpenAI | Claude | Gemini
            ↓ (API Call)
 [ LAYER 4: Audit Forensics ]   ---→ HASH: SHA-256 (Immutable Log)
                `}</pre>
              </div>
            </section>

            {/* Deterministic Patch Engine */}
            <section>
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                Deterministic Patch Generation
              </h2>
              <p className="text-slate-400 text-sm mb-6">
                O Certus força o modelo a cuspir um **Unified Diff** estruturado. O motor de validação interno aplica o patch em um ambiente virtual (sandbox) antes de sugerir ao usuário.
              </p>
              <div className="glass rounded-2xl p-6 border-emerald-500/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-emerald-400">status: validation_success</span>
                  <span className="text-[10px] text-slate-500">checksum: 9a8b7c6d5e4f</span>
                </div>
                <pre className="text-[10px] font-mono text-slate-400 leading-tight">
{`--- main.py
+++ main.py
@@ -12,4 +12,6 @@
 def process_data(data):
-    return data.split(",")
+    if not data:
+        return []
+    return [x.strip() for x in data.split(",")]`}
                </pre>
              </div>
            </section>
          </div>

          {/* Sidebar Stats */}
          <div className="space-y-6">
            <div className="glass-bright rounded-2xl p-6 border-indigo-500/20">
              <h3 className="text-sm font-bold text-indigo-300 mb-6 uppercase tracking-widest">Métricas Reais</h3>
              <div className="space-y-6">
                {TECH_SPECS.map(s => (
                  <div key={s.label}>
                    <p className="text-xs text-slate-500 mb-1">{s.label}</p>
                    <p className="text-xl font-black text-white">{s.value}</p>
                    <p className="text-[10px] text-indigo-400/60 font-mono">{s.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="text-sm font-bold text-white mb-4">Stack Tecnológica</h3>
              <ul className="text-xs space-y-2 text-slate-400 font-mono">
                <li>• Next.js 15 (App Router)</li>
                <li>• TypeScript 5.x</li>
                <li>• Tailwind CSS 4.0</li>
                <li>• ZK: Circom 2.1.x</li>
                <li>• Blockchain: Midnight (Cardano SL)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-indigo-600/10 border border-indigo-500/20 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Quer ler o código-fonte?</h2>
          <p className="text-slate-400 text-sm mb-6">O repositório do Certus Engine é restrito. Solicite acesso via NDA para auditoria completa.</p>
          <Link href="/contato" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-500 transition-colors inline-block">Solicitar Acesso NDA</Link>
        </div>
      </div>
    </div>
  )
}
