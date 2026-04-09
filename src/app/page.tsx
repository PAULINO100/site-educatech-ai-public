'use client'

import Link from 'next/link'
import { useState } from 'react'

// ─── DATA ────────────────────────────────────────────────────────────────────

const PAIN_POINTS = [
  {
    icon: '🌪️',
    title: 'IA "se perde" em projetos grandes',
    desc: 'Ela mistura arquivos de pastas diferentes e perde o raciocínio em projetos complexos. Em milhares de linhas de código, isso gera bugs impossíveis de achar.',
  },
  {
    icon: '💸',
    title: 'Custos de API fora de controle',
    desc: 'Loops infinitos de tokens, requisições redundantes e nenhuma visibilidade de custo real. A fatura do mês é uma surpresa dolorosa.',
  },
  {
    icon: '🔓',
    title: 'Dados sensíveis em risco',
    desc: 'Seus segredos comerciais, CPFs e chaves de API podem estar vazando para os modelos de treinamento de nuvens externas sem você saber.',
  },
  {
    icon: '❓',
    title: 'Zero auditabilidade',
    desc: 'Quando a IA erra, você não sabe o porquê. Sem rastreio, sem logs, sem explicação. O Certus abre essa "caixa preta" e mostra cada detalhe da execução.',
  },
]

const SOLUTIONS = [
  {
    persona: '👨‍💻',
    role: 'Para o Desenvolvedor',
    headline: 'Fim do "debug de prompt"',
    desc: 'O Certus entrega sugestões que já vêm testadas e prontas. A IA não apenas "chuta" um código — ela entrega correções exatas que funcionam de primeira. Gerencie projetos gigantes sem dor de cabeça.',
    tags: ['Correções Precisas', 'Organização Automática', 'Foco no Código'],
  },
  {
    persona: '💼',
    role: 'Para o Empresário',
    headline: 'ROI real e custos previsíveis',
    desc: 'Defina um teto de gastos por tarefa. O Circuit Breaker Financeiro corta o processo antes do estouro. Logs de execução mostram cada centavo investido e cada ação tomada. A IA vira um ativo, não uma roleta russa.',
    tags: ['Circuit Breaker Financeiro', 'PII-Zero', 'Auditoria Imutável'],
  },
  {
    persona: '🏛️',
    role: 'Para Instituições',
    headline: 'Conformidade e identidade verificável',
    desc: 'Validação de identidade (ZK-ID) sem exposição de dados privados. Skills especializadas que seguem diretrizes pedagógicas ou regulatórias. Trilha de auditoria que prova conformidade com LGPD, auditorias e regulações.',
    tags: ['ZK-ID Zero-Knowledge', 'Compliance LGPD', 'Skills Institucionais'],
  },
]

const PROOF_STATS = [
  { value: '100h+', label: 'Trabalho contínuo sem uma única falha' },
  { value: 'milhares de linhas de código+', label: 'Linhas de código gerenciadas com precisão' },
  { value: '5', label: 'Grandes projetos simultâneos sem confusão de contexto' },
  { value: '80%', label: 'Redução no consumo de tokens vs. IAs sem governança' },
]

const INFRA_ARCHITECTURE = [
  {
    icon: '🔐',
    title: 'ZK-ID',
    subtitle: 'Identidade Digital Soberana',
    desc: 'Camada fundamental de identidade verificável sem exposição de dados pessoais. Provas criptográficas (Zero-Knowledge) com controle total do usuário.',
    goal: 'Garantir quem pode participar de qualquer processo.',
    link: '/zk-id'
  },
  {
    icon: '🗳️',
    title: 'CivitasVote Governamental',
    subtitle: 'Infraestrutura de Votação Auditável',
    desc: 'Votação digital com integridade verificável, boletins auditáveis e encadeamento por hash. Transparência sem violar privacidade.',
    goal: 'Garantir decisões legítimas e auditáveis.',
    link: '/civitas-gov'
  },
  {
    icon: '📊',
    title: 'CivitasVote Institucional',
    subtitle: 'Governança e Inteligência Social',
    desc: 'Plataforma para universidades, empresas e governos. Dados anonimizados e estatisticamente verificáveis em questionários imutáveis.',
    goal: 'Gerar dados confiáveis para decisões estratégicas.',
    link: '/civitas-inst'
  },
  {
    icon: '⚖️',
    title: 'Portal de Transparência Soberana',
    subtitle: 'Auditoria Internacional: Venezuela 2026',
    desc: 'Acesso em tempo real aos dados auditáveis da simulação eleitoral. Verificação de integridade via ZK-Proofs e Cross-Check institucional.',
    goal: 'Validar a legitimidade de processos democráticos sob estresse.',
    link: '/civitas-inst'
  }
]

const COMPARISON = [
  { feature: 'Patches determinísticos (sem alucinação)', certus: true, generic: false },
  { feature: 'Controle financeiro por tarefa (Circuit Breaker)', certus: true, generic: false },
  { feature: 'PII-Zero — dados sensíveis nunca vazam', certus: true, generic: false },
  { feature: 'Auditoria imutável com SHA256', certus: true, generic: false },
  { feature: 'Foco multiprojeto com Cognitive Indexer', certus: true, generic: false },
  { feature: 'Compatível com OpenAI, Gemini, Anthropic', certus: true, generic: 'parcial' },
  { feature: 'Validação de identidade ZK-ID', certus: true, generic: false },
  { feature: 'Boletim de Urna Digital Auditável', certus: true, generic: false },
  { feature: 'Governança Social Anonimizada', certus: true, generic: false },
]

const FAQ = [
  {
    q: 'O que é o Certus Engine?',
    a: 'O Certus Engine v2.1.1 é um Motor de Governança e Execução institucional. Ele não é apenas um chat, mas uma camada de infraestrutura soberana que garante que IAs executem tarefas complexas com precisão matemática, custo controlado e segurança PII-Zero.',
  },
  {
    q: 'O que é a Regra de Ouro v2.1.1?',
    a: 'É o nosso padrão de fábrica: toda sessão inicia obrigatoriamente com o Qwen 3.5 via OpenRouter. Isso garante que tanto governos quanto desenvolvedores tenham um "Comandante de Campo" de elite desde o primeiro comando, eliminando inconsistências técnicas.',
  },
  {
    q: 'Como funciona a Resiliência "Nunca Cego"?',
    a: 'O Certus monitora as APIs de IA em tempo real. Se houver falha ou lentidão, o sistema ativa automaticamente nossas "Sentinelas" (CPFs de backup). Você nunca fica no escuro; a continuidade da sua operação é garantida por redundância inteligente.',
  },
  {
    q: 'Eu posso trocar a LLM principal por outra de minha escolha?',
    a: 'Sim. A Autonomia Soberana é um direito do Mestre Humano. Você pode redefinir o comandante para qualquer modelo (GPT-4, Claude, Llama). O Certus apenas fornecerá o Advisory de segurança para manter o OpenRouter como sentinela redundante.',
  },
  {
    q: 'O Certus Engine protege dados sensíveis?',
    a: 'Sim, através do protocolo PII-Zero. Mascaramos chaves de API, senhas e dados pessoais antes de qualquer envio para nuvens externas. É a escolha definitiva para setores governamentais e empresariais que exigem sigilo absoluto.',
  },
  {
    q: 'Ele serve para desenvolvedores iniciantes ou apenas especialistas?',
    a: 'Para ambos. Desenvolvedores iniciantes ganham uma camada que impede erros sintáticos e alucinações. Especialistas ganham uma ferramenta de orquestração de frota e controle financeiro (Circuit Breaker) para projetos de milhares de linhas.',
  },
  {
    q: 'Como o Certus ajuda instituições e governos?',
    a: 'Através da Auditabilidade Imutável e Soberania Técnica. Cada ação gera um log auditável com hash SHA256. Além disso, o deploy pode ser feito On-Premise (Local), garantindo que nenhum dado saia da rede institucional.',
  },
  {
    q: 'Como começar a utilizar?',
    a: 'Acesse o portal de Acesso Institucional e inicie seu Onboarding. O Certus v2.1.1 é injetado diretamente em seu ecossistema, funcionando como um auditor e orquestrador em tempo real.',
  },
  {
    q: 'O Certus funciona direto no VS Code ou Cursor?',
    a: 'Sim. O Certus pode ser injetado como uma camada de governança em IDEs, transformando sugestões automáticas em códigos precisos e controlados. Até o momento, possuímos uma conexão perfeita com o aparato Antigravity.',
  },
]

// ─── FAQ ITEM ────────────────────────────────────────────────────────────────

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`border border-slate-800 rounded-xl overflow-hidden transition-all duration-300 ${open ? 'border-indigo-500/40' : 'hover:border-slate-700'}`}>
      <button
        id={`faq-btn-${index}`}
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left group"
      >
        <span className="font-semibold text-slate-200 group-hover:text-white transition-colors pr-4">{q}</span>
        <span className={`text-indigo-400 text-xl flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <div className="px-5 pb-5 text-slate-400 leading-relaxed text-sm border-t border-slate-800/60 pt-4">
          {a}
        </div>
      )}
    </div>
  )
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO — A DOR ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="max-w-3xl">
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight mb-6">
              Infraestrutura Institucional <span className="gradient-text">Soberana LATAM</span>
            </h1>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-400 mb-8">
              Certus Engine v2.1.1 — Sovereign Master Edition
            </h2>

            <p className="text-xl text-slate-400 leading-relaxed mb-8 max-w-2xl">
              Sua IA alucina em projetos grandes, quebra o orçamento ou entrega códigos que não funcionam? 
              <br className="mb-4 block" />
              O <strong className="text-white">Certus Engine</strong> é o cérebro que organiza a sua IA, garantindo que ela execute tarefas com precisão matemática, sem alucinações e com custo controlado.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/acesso-institucional"
                id="hero-cta-institutional"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-lg shadow-2xl hover:shadow-indigo-500/30 transition-all duration-200 text-center animate-pulse-glow"
              >
                Acesso Institucional →
              </Link>
              <Link
                href="/documentacao"
                id="hero-cta-docs"
                className="px-8 py-4 rounded-xl glass border border-slate-700 hover:border-indigo-500/50 text-slate-300 hover:text-white font-semibold text-lg transition-all duration-200 text-center"
              >
                Agendar Demo Enterprise
              </Link>
            </div>

            <p className="text-xs text-slate-600">
              ✓ Governança de Missão Crítica &nbsp; ✓ Deploy On-Premise &nbsp; ✓ PII-Zero Compliant
            </p>
          </div>

          {/* Floating proof card */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block w-96 animate-float">
            <div className="glass-bright rounded-2xl p-6 shadow-2xl glow-indigo">
              <div className="text-indigo-400 font-bold mb-4">Métricas de Governança</div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="text-emerald-500">✓</span> Resiliência "Nunca Cego" v2.1.1
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="text-emerald-500">✓</span> Comandante Qwen 3.5 Alpha
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="text-emerald-500">✓</span> Autonomia Soberana de Troca
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROOF STATS ════════════════════════════════════════════════════ */}
      <section className="py-12 border-y border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {PROOF_STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-black gradient-text mb-2">{s.value}</p>
                <p className="text-xs text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SOVEREIGN RESILIENCE DASHBOARD ═════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
              <p className="text-xs font-bold text-emerald-400 uppercase tracking-[0.4em] mb-3 animate-pulse">● Live Infrastructure Status</p>
              <h2 className="text-4xl font-black text-white tracking-tight">Painel de <span className="text-emerald-400">Resiliência Soberana</span></h2>
            </div>
            <div className="flex items-center gap-3 bg-slate-900/50 border border-slate-800 px-6 py-3 rounded-2xl">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Protocolo "Nunca Cego" Ativo</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Nodos Soberanos', value: '12 Ativos', sub: 'LATAM Distributed', color: 'emerald' },
              { label: 'Latência ZK-Gate', value: '14ms', sub: 'Optimized Routing', color: 'cyan' },
              { label: 'Consenso Tribunal', value: 'Síncrono', sub: '5/5 CPUs Active', color: 'indigo' },
              { label: 'Escudo PII-Zero', value: '100% Inabalável', sub: 'Zero Data Leaks', color: 'violet' },
            ].map((stat) => (
              <div key={stat.label} className="glass-bright rounded-2xl p-6 border border-slate-800 hover:border-emerald-500/20 transition-all duration-500 group relative">
                <div className="absolute top-0 right-0 p-3 opacity-20">
                   <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{stat.label}</p>
                <p className={`text-2xl font-black text-white group-hover:text-emerald-400 transition-colors`}>{stat.value}</p>
                <p className="text-[9px] font-mono text-slate-600 mt-2 uppercase">{stat.sub}</p>
                
                <div className="mt-4 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 animate-shimmer-progress" style={{ width: '85%' }} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 glass flex flex-wrap items-center justify-between p-6 rounded-3xl border border-indigo-500/10 gap-6">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                 <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <div>
                <p className="text-sm font-bold text-white mb-1 tracking-tight">Dossiê Técnico Institucional v2.1.1</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Multilingual Edition (PT/ES/EN) • Restricted Access</p>
              </div>
            </div>
            <Link 
              href="/whitepaper"
              className="px-6 py-3 bg-white/5 hover:bg-indigo-500 hover:text-white rounded-xl text-indigo-400 text-[10px] font-bold uppercase tracking-widest border border-indigo-500/20 transition-all"
            >
              Acessar Whitepaper Técnico →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ A DOR — PAIN SECTION ═══════════════════════════════════════════ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-3">O Problema que Todo Mundo Ignora</p>
            <h2 className="text-4xl font-black text-white mb-4">
              Soa familiar? Você não está{' '}
              <span className="text-red-400">sozinho.</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Antes do Certus Engine, até as IAs mais poderosas falhavam em escala. Aqui estão as dores que solucionamos:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PAIN_POINTS.map((p) => (
              <div key={p.title} className="glass rounded-2xl p-6 border border-red-500/10 hover:border-red-500/30 transition-all duration-300">
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="font-bold text-white text-base mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ A SOLUÇÃO — BY PERSONA ══════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-b from-transparent to-slate-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">A Solução</p>
            <h2 className="text-4xl font-black text-white mb-4">
              O Certus trabalha para{' '}
              <span className="gradient-text">quem você é.</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Seja você um desenvolvedor, um empresário ou uma instituição — o Certus tem uma resposta precisa para a sua dor específica.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SOLUTIONS.map((s) => (
              <div key={s.role} className="glass-bright rounded-2xl p-8 flex flex-col gap-4 hover:glow-sm transition-all duration-300 group">
                <div className="text-4xl">{s.persona}</div>
                <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">{s.role}</p>
                <h3 className="font-black text-2xl text-white group-hover:text-indigo-200 transition-colors">{s.headline}</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{s.desc}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {s.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ARQUITETURA DA INFRAESTRUTURA ═════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-600/5 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-3">Tecnologia de Missão Crítica</p>
            <h2 className="text-4xl font-black text-white mb-4">
              Arquitetura da <span className="gradient-text">Infraestrutura</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Soberania técnica em camadas modulares para governos e instituições. PII-Zero por design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {INFRA_ARCHITECTURE.map((infra) => (
              <div key={infra.title} className="glass-bright rounded-3xl p-8 border border-white/5 hover:border-indigo-500/30 hover:glow-sm transition-all duration-500 group">
                <div className="text-5xl mb-6 filter drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]">{infra.icon}</div>
                <h3 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">{infra.subtitle}</h3>
                <h4 className="text-2xl font-black text-white mb-4 group-hover:text-indigo-200 transition-colors">{infra.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {infra.desc}
                </p>
                <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10 mb-8">
                  <p className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest mb-1">Objetivo Estratégico</p>
                  <p className="text-xs text-slate-300 font-medium tracking-tight">🎯 {infra.goal}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Link
                    href={infra.link}
                    className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest group-hover:text-indigo-400 transition-colors"
                  >
                    Saiba Mais <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                  {infra.title === 'Portal de Transparência Soberana' && (
                    <Link
                      href="https://civitas-institucional.vercel.app"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest hover:bg-emerald-500/20 transition-all"
                    >
                      Visão
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ A PROVA — centenas de horas SEM FALHAS ════════════════════════════════ */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="glass-bright rounded-3xl p-10 md:p-16 relative overflow-hidden border border-indigo-500/20 glow-indigo">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-600/5 rounded-full blur-[80px]" />

            <div className="relative">
              <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-4">A Prova Real</p>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Mais de{' '}
                <span className="gradient-text">centenas de horas</span>{' '}
                trabalhadas sem uma única falha.
              </h2>
              <p className="text-xl text-slate-300 mb-6 max-w-3xl leading-relaxed">
                Em uma codebase de <strong className="text-white">milhares de linhas de código</strong>, distribuída em <strong className="text-white">5 grandes projetos simultâneos</strong>, o Certus Engine manteve o Antigravity focado, preciso e incansável — eliminando delírios, confusão de contexto e gasto de tokens desperdiçados.
              </p>
              <blockquote className="border-l-4 border-indigo-500 pl-6 text-slate-400 italic text-lg mb-8">
                "Antes do Certus, eu enfrentava desafios constantes. A IA misturava páginas e acessava pastas erradas. Após a implementação do Certus Engine, foram centenas de horas trabalhadas sem uma única falha. Estou realmente impressionado."
              </blockquote>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/acesso-institucional"
                  id="proof-cta-institutional"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold shadow-2xl hover:shadow-indigo-500/30 transition-all text-center"
                >
                  Inicie o Protocolo de Acesso →
                </Link>

                <Link
                  href="/vantagens"
                  id="proof-cta-learn"
                  className="px-8 py-4 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold transition-all text-center"
                >
                  Ver Todas as Vantagens
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ COMPARISON TABLE ═══════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-b from-transparent to-slate-900/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">Comparativo</p>
            <h2 className="text-4xl font-black text-white mb-4">
              Certus vs.{' '}
              <span className="text-slate-500">Wrappers Genéricos</span>
            </h2>
            <p className="text-slate-400">
              A diferença entre uma ferramenta que "parece funcionar" e uma que <strong className="text-white">garante</strong> que funciona.
            </p>
          </div>
          <div className="glass rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700/50">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-slate-400">Capacidade</th>
                  <th className="py-4 px-6 text-sm font-bold text-indigo-300">Certus Engine</th>
                  <th className="py-4 px-6 text-sm font-medium text-slate-500">Concorrentes Genéricos</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-slate-700/30 ${i % 2 === 0 ? 'bg-slate-800/10' : ''}`}>
                    <td className="py-3.5 px-6 text-sm text-slate-300">{row.feature}</td>
                    <td className="py-3.5 px-6 text-center text-lg">✅</td>
                    <td className="py-3.5 px-6 text-center text-sm">
                      {row.generic === true ? '✅' : row.generic === 'parcial' ? (
                        <span className="text-yellow-500 text-xs">Parcial</span>
                      ) : '❌'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ ECOSSISTEMA — IDEs, DevOps, APIs ═══════════════════════════════ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">Ecossistema</p>
            <h2 className="text-4xl font-black text-white mb-4">
              O Certus se integra ao que você{' '}
              <span className="gradient-text">já usa.</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Não substitua suas ferramentas. Governe-as. O Certus é injetável em qualquer ecossistema.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '💻',
                label: 'IDEs (VS Code / Copilot / Cursor)',
                desc: 'Custo previsível por desenvolvedor. Sugestões de código validadas sintaticamente na borda. Fim do "Tab" que quebra o build.',
              },
              {
                icon: '🐳',
                label: 'DevOps (Docker / CI/CD)',
                desc: 'Automação baseada em telemetria real. Dockerfiles que se auto-corrigem. PII-Zero impede segredos no docker-compose.yaml.',
              },
              {
                icon: '🛡️',
                label: 'APIs (OpenAI / Gemini / Anthropic)',
                desc: 'Transforma modelos probabilísticos em microserviços determinísticos com JSON estruturado, auditável e compliance-ready.',
              },
            ].map((item) => (
              <div key={item.label} className="glass rounded-2xl p-8 hover:border-indigo-500/30 hover:glow-sm transition-all duration-300 group">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-white text-lg mb-3 group-hover:text-indigo-300 transition-colors">{item.label}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SUPER FAQ ══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-b from-transparent to-slate-900/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-4xl font-black text-white mb-4">
              Perguntas{' '}
              <span className="gradient-text">Frequentes</span>
            </h2>
            <p className="text-slate-400">
              Tudo o que você precisa saber antes de transformar a sua IA em um Motor de Execução.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {FAQ.map((item, index) => (
              <FaqItem key={index} q={item.q} a={item.a} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRICING CTA ════════════════════════════════════════════════════ */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="glass-bright rounded-3xl p-10 glow-indigo relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500" />
            <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-4">🔒 Acesso Institucional</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-2">
              Sob Consulta
            </h2>
            <p className="text-slate-400 mb-2">Deploy On-Premise & Hybrid Cloud</p>
            <p className="text-emerald-400 font-semibold mb-2">
              Arquitetura de missão crítica com conformidade absoluta.
            </p>
            <p className="text-slate-500 text-sm mb-8">
              Consultoria de Deploy · Auditoria Técnica · Monitoramento de Soberania
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/acesso-institucional"
                id="pricing-cta-institutional"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold shadow-2xl hover:shadow-indigo-500/30 transition-all"
              >
                Obter Acesso
              </Link>

              <Link
                href="/contato"
                id="pricing-cta-plans"
                className="px-8 py-4 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold transition-all"
              >
                Agendar Demonstração →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
