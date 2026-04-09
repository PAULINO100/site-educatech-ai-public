import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Como Usar o Certus Engine',
  description: 'Guia de integração passo a passo: configure o Certus Engine em menos de 10 minutos com exemplos de código reais.',
}

const CODE_EXAMPLE_DESC = "A integração do Certus Engine ocorre de forma fluida através de nossa arquitetura de gateway. Uma vez ativo, o motor orquestra as requisições, injeta a governança Tier A+ e retorna resultados determinísticos com auditoria SHA256 embutida em cada operação."

const STEPS = [
  { n: '01', t: 'Clone & Configure', d: 'Clone o repositório e configure suas credenciais de provedores com suas chaves de API.' },
  { n: '02', t: 'Gere sua Licença', d: 'Use o protocolo de ativação para vincular a licença soberana ao seu dispositivo.' },
  { n: '03', t: 'Inicie a Orquestração', d: 'Ative a interface central de governança para gerenciar todas as requisições.' },
  { n: '04', t: 'Auditabilidade', d: 'Acesse métricas de custo e auditoria SHA256 em tempo real via logs protegidos.' },
]

export default function ComoUsarPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-white mb-4">Integre em Minutos</h1>
          <p className="text-slate-400 text-lg mb-8">4 passos para governança Tier A+ na sua stack de IA.</p>

          <div className="max-w-2xl mx-auto glass-bright p-6 rounded-2xl border border-indigo-500/30 mb-12">
            <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3 text-left">Quick Start (v1.6.0+)</p>
            <div className="flex items-center justify-between bg-slate-950/50 rounded-xl p-4 font-mono text-sm text-slate-300 border border-slate-800">
              <span>Inicialização Soberana Ativada</span>
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {STEPS.map((s) => (
            <div key={s.n} className="glass rounded-xl p-4 text-center">
              <div className="text-2xl font-black text-indigo-400 mb-2">{s.n}</div>
              <h3 className="font-bold text-white text-sm mb-1">{s.t}</h3>
              <p className="text-slate-500 text-xs">{s.d}</p>
            </div>
          ))}
        </div>

        {/* Code example */}
        <div className="glass-bright rounded-2xl overflow-hidden mb-12">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/50">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <span className="text-xs text-slate-500 mono">exemplo_integracao.py</span>
          </div>
          <div className="p-10 text-slate-300 leading-relaxed text-center italic">
            "{CODE_EXAMPLE_DESC}"
          </div>
        </div>

        <div className="text-center">
          <Link href="/app" className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold shadow-lg transition-all inline-block mr-4">
            Obter Acesso
          </Link>
          <Link href="/contato" className="px-6 py-4 rounded-xl border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 font-semibold transition-all inline-block">
            Falar com Engenheiro
          </Link>
        </div>
      </div>
    </div>
  )
}
