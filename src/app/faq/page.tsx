'use client'

import { useState } from 'react'

const FAQ_ITEMS = [
  {
    category: 'Soberania',
    q: '1. O que é a Educatech AI Soberana?',
    a: 'É a infraestrutura líder em governança digital para a América Latina. Proporcionamos uma camada de controle soberana que garante segurança PII-Zero, identidade descentralizada (ZK-ID) e processos democráticos auditáveis (Civitas).',
  },
  {
    category: 'Soberania',
    q: '2. Por que a soberania digital é importante?',
    a: 'Garantir que os dados institucionais e de cidadãos sejam processados em infraestruturas sob controle nacional é vital para a segurança e autonomia regional.',
  },
  {
    category: 'Identidade',
    q: '3. Como funciona o ZK-ID?',
    a: 'O Zero-Knowledge ID permite a autenticação de usuários sem a necessidade de expor dados pessoais (PII). A verificação é baseada em provas criptográficas matemáticas, garantindo privacidade absoluta.',
  },
  {
    category: 'Governança',
    q: '4. O que é o Civitas Governamental?',
    a: 'É o nosso pilar de transparência radical para órgãos públicos. Permite votações e consultas digitais com integridade verificável via encadeamento por hash e auditoria pública em tempo real.',
  },
  {
    category: 'Governança',
    q: '5. O que é o Civitas Institucional?',
    a: 'Uma plataforma dedicada a empresas e universidades que necessitam de inteligência social e governança interna com garantia de anonimato e imutabilidade de dados.',
  },
  {
    category: 'Segurança',
    q: '6. Como o sistema protege os dados sensíveis?',
    a: 'Utilizamos o protocolo PII-Zero, que isola e anonimiza qualquer metadado pessoal antes de qualquer processamento externo, mantendo o sigilo absoluto da operação.',
  },
  {
    category: 'Infraestrutura',
    q: '7. É possível realizar o deploy local (On-Premise)?',
    a: 'Sim. A infraestrutura Educatech AI pode ser implantada diretamente no datacenter da instituição ou governo, garantindo que nenhum dado sensível cruze as fronteiras da rede interna.',
  },
  {
    category: 'Auditoria',
    q: '8. Como as ações são auditadas?',
    a: 'Cada interação gera um log imutável assinado com hash SHA-256 e timestamp. Isso cria uma trilha de integridade que pode ser verificada por órgãos reguladores a qualquer momento.',
  },
  {
    category: 'Dossier',
    q: '9. Onde encontro o detalhamento técnico?',
    a: 'Toda a arquitetura está detalhada em nosso Dossiê Técnico de Infraestrutura Regional (Whitepaper), disponível na seção de documentos para acesso institucional.',
  },
  {
    category: 'Regional',
    q: '10. O sistema é compatível com legislações LATAM?',
    a: 'Sim, fomos projetados com foco total na conformidade com LGPD e regulações de governança digital específicas dos países latino-americanos.',
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
          <h1 className="text-5xl font-black text-white mb-4 italic">Perguntas Frequentes</h1>
          <p className="text-slate-400">Tudo o que você precisa saber sobre a Infraestrutura Educatech AI Soberana.</p>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">🔍</span>
          <input
            type="text"
            placeholder="Buscar perguntas..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 glass rounded-xl text-slate-200 placeholder:text-slate-600 border border-slate-700 focus:border-emerald-500 focus:outline-none transition-colors"
          />
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat as string)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                category === cat
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                  : 'glass text-slate-400 hover:text-white'
              }`}
            >
              {cat as string}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filtered.map((item, index) => (
            <div key={index} className="glass rounded-2xl overflow-hidden border border-white/5">
              <button
                onClick={() => toggle(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="text-slate-200 font-bold text-sm">{item.q}</span>
                <span className={`text-emerald-500 transition-transform duration-300 ${openItems.has(index) ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {openItems.has(index) && (
                <div className="px-6 pb-5 pt-0 text-slate-400 text-sm leading-relaxed animate-in fade-in slide-in-from-top-1">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center glass rounded-2xl p-8 border border-emerald-500/10 shadow-lg shadow-emerald-500/5">
          <p className="text-slate-400 mb-4 font-medium uppercase tracking-[0.2rem] text-[10px]">Canais Institucionais</p>
          <a href="mailto:institucional@educatech.ai" className="text-emerald-400 hover:text-emerald-300 font-black transition-colors italic text-xl">
            institucional@educatech.ai →
          </a>
        </div>
      </div>
    </div>
  )
}
