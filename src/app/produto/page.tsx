import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Produto — Como Funciona o Certus Engine',
  description: 'Entenda o fluxo completo de governança de IA do Certus Engine: da requisição ao response, com PII-Zero e auditoria imutável em cada etapa.',
}

const FLOW_STEPS = [
  { icon: '📩', title: 'Pedido Recebido', desc: 'Você envia uma tarefa para a sua IA como de costume.' },
  { icon: '🛡️', title: 'Escudo de Privacidade', desc: 'O PII-Zero remove automaticamente nomes, senhas e CPFs para sua total segurança.' },
  { icon: '💰', title: 'Controle de Gastos', desc: 'O sistema verifica seu orçamento e impede gastos surpresa ou loops infinitos.' },
  { icon: '🧠', title: 'Foco Total', desc: 'O Certus organiza o contexto do projeto para que a IA não se perca ou misture arquivos.' },
  { icon: '🔌', title: 'Motor Inteligente', desc: 'Sua tarefa é processada pela melhor IA disponível (OpenAI, Claude ou Gemini).' },
  { icon: '✅', title: 'Entrega Certeira', desc: 'Você recebe o resultado pronto, validado e com economia real de tokens.' },
]

export default function ProdutoPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-black text-white mb-4">Como Funciona</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Sua IA agora tem um cérebro estratégico que garante segurança e economia em cada clique.</p>
        </div>

        {/* Architecture flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {FLOW_STEPS.map((s, i) => (
            <div key={s.title} className="glass rounded-2xl p-6 relative group">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 text-xs font-bold flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-2xl">{s.icon}</span>
              </div>
              <h3 className="font-bold text-white text-lg mb-2">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Simplified Diagram */}
        <div className="glass-bright rounded-3xl p-8 md:p-12 text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-8">Fluxo de Proteção Certus</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 overflow-x-auto">
            <div className="flex flex-col items-center gap-2 min-w-[120px]">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-xl">👤</div>
              <p className="text-xs text-slate-400">Usuário</p>
            </div>
            <div className="text-slate-600 hidden md:block">→</div>
            <div className="p-4 glass rounded-xl border-emerald-500/30">
              <p className="text-sm font-bold text-emerald-400">Escudo PII-Zero</p>
              <p className="text-[10px] text-slate-500">Dados Protegidos</p>
            </div>
            <div className="text-slate-600 hidden md:block">→</div>
            <div className="p-4 glass rounded-xl border-indigo-500/30 bg-indigo-500/5">
              <p className="text-sm font-bold text-indigo-400">Certus Engine</p>
              <p className="text-[10px] text-slate-500">Governança & Foco</p>
            </div>
            <div className="text-slate-600 hidden md:block">→</div>
            <div className="p-4 glass rounded-xl border-violet-500/30">
              <p className="text-sm font-bold text-violet-400">Modelos de IA</p>
              <p className="text-[10px] text-slate-500">Execução Global</p>
            </div>
            <div className="text-slate-600 hidden md:block">→</div>
            <div className="flex flex-col items-center gap-2 min-w-[120px]">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-xl">✅</div>
              <p className="text-xs text-emerald-400 font-bold">Resultado</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/como-usar" className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold transition-all shadow-lg inline-block">
            Ver Guia de Integração →
          </Link>
        </div>
      </div>
    </div>
  )
}
