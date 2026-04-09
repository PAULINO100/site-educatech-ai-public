'use client'

import { useState } from 'react'

const FAQ_ITEMS = [
  {
    category: 'Soberania',
    q: '1. O que é o Certus Engine?',
    a: 'O Certus Engine v2.1.1 é a infraestrutura de governança e execução líder para a era da IA soberana. Ele atua como uma camada de controle entre o usuário e as LLMs, garantindo determinismo técnico, conformidade PII-Zero e resiliência absoluta em projetos de missão crítica.',
  },
  {
    category: 'Soberania',
    q: '2. Qual é a Regra de Ouro v2.1.1?',
    a: 'Nossa regra de ouro estabelece o Qwen 3.5 (OpenRouter) como o comandante mandatório de fábrica. Esta decisão técnica garante que toda operação inicie com o mais alto padrão de precisão e Cross-LLM Consensus do mercado.',
  },
  {
    category: 'Soberania',
    q: '3. Posso escolher minha própria LLM principal?',
    a: 'Sim. A Autonomia Soberana é um direito do usuário. Você pode redefinir o comandante para qualquer modelo de sua preferência (como os do plano pago). O Certus apenas emitirá um "Advisory de Segurança" sugerindo manter o OpenRouter como sentinela redundante para evitar pontos cegos.',
  },
  {
    category: 'Resiliência',
    q: '4. Como funciona a Resiliência "Nunca Cego"?',
    a: 'O protocolo "Nunca Cego" monitora ativamente as APIs de IA. Caso ocorra um erro 429 (Limite de Taxa) ou 402 (Sem Créditos), o sistema realiza um salto instantâneo para nossas Sentinelas Alpha, garantindo que a execução nunca pare por falhas de infraestrutura externa.',
  },
  {
    category: 'Resiliência',
    q: '5. Quem são as "Sentinelas" no ecossistema Certus?',
    a: 'Sentinelas são CPUs de backup (geralmente modelos Alpha gratuitos ou de alta disponibilidade) que permanecem em prontidão total. Elas assumem o controle caso o comandante principal fique indisponível, protegendo a sessão contra interrupções.',
  },
  {
    category: 'Segurança',
    q: '6. O que é a Inviolabilidade PII-Zero?',
    a: 'É a garantia de que nenhuma Informação Pessoal Identificável (PII) — como CPFs, senhas ou chaves — seja enviada para nuvens de treinamento externas. O Certus mascara esses dados antes da transmissão, protegendo o sigilo institucional.',
  },
  {
    category: 'Governança',
    q: '7. O Certus Engine é apenas para especialistas?',
    a: 'Não. Ele é desenhado para desenvolvedores de todos os níveis. Iniciantes usam o Certus para aprender padrões Tier A+, enquanto especialistas e governos utilizam suas ferramentas de auditoria SHA256 e controle financeiro (Circuit Breaker).',
  },
  {
    category: 'Governança',
    q: '8. Como o Certus lida com projetos gigantes de milhares de linhas?',
    a: 'Através do Cognitive Indexing v2.1. O sistema organiza o contexto de forma que a IA nunca se "perca" ou misture arquivos de pastas diferentes, mantendo o foco absoluto mesmo em arquiteturas complexas.',
  },
  {
    category: 'Institucional',
    q: '9. É possível realizar o deploy On-Premise (Local)?',
    a: 'Sim. Para instituições governamentais e corporativas que exigem isolamento físico, o Certus Engine v2.1.1 permite o deploy em infraestrutura privada, garantindo que nenhum dado sensível cruze a fronteira da rede interna.',
  },
  {
    category: 'Institucional',
    q: '10. Como é feita a auditoria das ações da IA?',
    a: 'Cada comando e resposta é registrado em um log imutável com timestamp e hash. Isso permite auditorias regulatórias (como LGPD) transparentes, onde cada detalhe da "caixa preta" da IA é revelado documentalmente.',
  },
  {
    category: 'Execução',
    q: '11. O que são as "Configurações de Fábrica" (Factory Defaults)?',
    a: 'São as definições de prioridade pré-configuradas no Certus Engine para garantir performance máxima imediata. Atualmente, incluem o Qwen 3.5 como alpha e o Gemini como fallback de último recurso.',
  },
  {
    category: 'Execução',
    q: '12. Como o sistema economiza até 80% em tokens?',
    a: 'Utilizando Compressão Semântica e Gestão Dinâmica de Contexto. O Certus filtra o ruído e envia apenas o que é estritamente necessário para que a IA execute a tarefa, eliminando o desperdício financeiro de requisições redundantes.',
  },
  {
    category: 'Execução',
    q: '13. Ele funciona direto no VS Code ou Cursor?',
    a: 'Sim. O Certus pode ser injetado como uma camada de governança em IDEs, transformando as sugestões automáticas do Copilot/Cursor em códigos muito mais precisos e financeiramente controlados. Ressaltamos que, até o momento, possuímos uma conexão perfeita com o aparato Antigravity.',
  },
]

const CATEGORIES = ['Todos', ...Array.from(new Set(FAQ_ITEMS.map((f) => f.category)))]

export default function FaqPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Todos')
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const toggle = (i: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  }

  const filtered = FAQ_ITEMS.filter((f) => {
    const matchCat = category === 'Todos' || f.category === category
    const matchSearch = search === '' || f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-white mb-4">Perguntas Frequentes</h1>
          <p className="text-slate-400">Tudo o que você precisa saber sobre o Certus Engine.</p>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">🔍</span>
          <input
            type="text"
            placeholder="Buscar perguntas..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 glass rounded-xl text-slate-200 placeholder:text-slate-600 border border-slate-700 focus:border-indigo-500 focus:outline-none transition-colors"
          />
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                category === cat
                  ? 'bg-indigo-600 text-white'
                  : 'glass text-slate-400 hover:text-white border border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {filtered.length === 0 && (
            <p className="text-center text-slate-500 py-8">Nenhuma pergunta encontrada para &ldquo;{search}&rdquo;</p>
          )}
          {filtered.map((item, i) => (
            <div key={i} className="glass rounded-xl overflow-hidden">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left group"
              >
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full mt-0.5 shrink-0">
                    {item.category}
                  </span>
                  <span className="font-semibold text-white text-sm group-hover:text-indigo-300 transition-colors">
                    {item.q}
                  </span>
                </div>
                <span className={`text-slate-500 transition-transform shrink-0 ml-3 ${openItems.has(i) ? 'rotate-45' : ''}`}>+</span>
              </button>
              {openItems.has(i) && (
                <div className="px-5 pb-5 pt-0">
                  <p className="text-slate-400 text-sm leading-relaxed border-t border-slate-700/50 pt-4">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center glass rounded-2xl p-6">
          <p className="text-slate-400 mb-4">Não encontrou sua pergunta?</p>
          <a href="mailto:founder@certusengine.ai" className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors">
            founder@certusengine.ai →
          </a>
        </div>
      </div>
    </div>
  )
}
