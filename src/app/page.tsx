'use client'

import Link from 'next/link'
import { useState } from 'react'

// ─── DATA ────────────────────────────────────────────────────────────────────

const PAIN_POINTS = [
  {
    icon: '🌎',
    title: 'Dependência de Nuvens Estrangeiras',
    desc: 'Dados institucionais e governamentais armazenados em infraestruturas externas sem soberania real sobre os logs e o processamento.',
  },
  {
    icon: '🗳️',
    title: 'Processos Democráticos Opacos',
    desc: 'Votações e consultas que não permitem auditoria pública em tempo real, gerando desconfiança e instabilidade institucional.',
  },
  {
    icon: '🔐',
    title: 'Identidade e PII em Risco',
    desc: 'Exposição de dados sensíveis de cidadãos e servidores em plataformas que não seguem o protocolo de anonimização ZK-ID.',
  },
  {
    icon: '⚖️',
    title: 'Falta de Auditoria Imutável',
    desc: 'A impossibilidade de rastreio técnico independente sobre decisões tomadas por sistemas automatizados ou processos de consulta.',
  },
]

const SOLUTIONS = [
  {
    persona: '🔐',
    role: 'ZK-ID Soberano',
    headline: 'Identidade Digital sem Medo',
    desc: 'Nossa camada de identificação garante que o usuário prove quem é sem nunca revelar dados privados. Soberania total do cidadão sobre sua própria identidade digital.',
    tags: ['Zero-Knowledge', 'Privacidade Total', 'Compatível LATAM'],
  },
  {
    persona: '🗳️',
    role: 'Civitas Governamental',
    headline: 'Democracia Auditável em Tempo Real',
    desc: 'Infraestrutura de votação e consulta para governos. Transparência imutável via blockchain interna e provas criptográficas de integridade.',
    tags: ['Voto Auditável', 'Hashing Imutável', 'Transparência'],
  },
  {
    persona: '🏛️',
    role: 'Civitas Institucional',
    headline: 'Governança para Instituições',
    desc: 'Plataforma de inteligência social e consultas internas para universidades e empresas. Dados anonimizados para decisões estratégicas seguras.',
    tags: ['Inteligência Social', 'Compliance LGPD', 'Dados Seguros'],
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
  { feature: 'Identidade ZK-ID (Zero-Knowledge)', educatech: true, legacy: false },
  { feature: 'Votação Digital Auditável com Hash', educatech: true, legacy: false },
  { feature: 'Governança Regional Soberana', educatech: true, legacy: false },
  { feature: 'PII-Zero — Privacidade por Design', educatech: true, legacy: false },
  { feature: 'Auditoria Imutável SHA256', educatech: true, legacy: false },
  { feature: 'Deploy em Infraestrutura Nacional', educatech: true, legacy: 'parcial' },
  { feature: 'Anonimização de Dados em Massa', educatech: true, legacy: false },
]

const FAQ = [
  {
    q: 'O que é a Educatech AI Soberana?',
    a: 'É uma infraestrutura digital de missão crítica projetada especificamente para a América Latina. Focamos em prover soberania de dados, identidade digital segura (ZK-ID) e processos democráticos auditáveis (Civitas) para governos e instituições corporativas.',
  },
  {
    q: 'Por que focar na América Latina?',
    a: 'A região enfrenta desafios únicos de soberania de dados e transparência. A Educatech AI foi construída para atender essas demandas regionalizadas com conformidade absoluta e deploy em redes nacionais.',
  },
  {
    q: 'O que é o ZK-ID?',
    a: 'O Zero-Knowledge ID é o nosso pilar de identidade. Ele permite que cidadãos comprovem atributos (idade, nacionalidade, cargo) sem revelar seus dados sensíveis, utilizando provas criptográficas de conhecimento zero.',
  },
  {
    q: 'Como funciona a auditoria do Civitas?',
    a: 'Cada voto ou resposta é registrado com um hash imutável SHA256 e encadeado cronologicamente. Isso permite que qualquer auditor externo verifique a integridade do processo sem violar o anonimato do participante.',
  },
  {
    q: 'A infraestrutura pode ser implantada localmente?',
    a: 'Sim. A Educatech AI suporta deploy On-Premise (Local), garantindo que dados institucionais sensíveis nunca deixem a infraestrutura nacional ou corporativa.',
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
      {/* Ultra Glass Background System */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="aurora" />
        <div className="grid-bg opacity-40 h-full w-full" />
      </div>

      {/* ═══ HERO — A DOR ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-16 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="max-w-4xl">
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-8">
              Infraestrutura Digital <br />
              <span className="shimmer-text">Soberana LATAM</span>
            </h1>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-10 tracking-tight">
              Educatech AI — Regional Master Edition
            </h2>

            <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl font-medium">
              A fundação técnica para a autonomia digital da América Latina. 
              Implementamos redes de identidade, governança e transparência regional inabalável.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-5 mb-10">
              <Link
                href="/acesso-institucional"
                id="hero-cta-institutional"
                className="px-10 py-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xl shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 text-center animate-pulse-glow"
              >
                Solicitar Acesso à Infraestrutura →
              </Link>
            </div>

            <p className="text-xs text-slate-600">
              ✓ Soberania de Dados Nacional &nbsp; ✓ Deploy On-Premise &nbsp; ✓ PII-Zero Compliant
            </p>
          </div>

          {/* Floating proof card */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block w-96 animate-float">
            <div className="ultra-glass rounded-3xl p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] border border-emerald-500/20">
              <div className="text-emerald-400 font-black tracking-widest text-xs uppercase mb-6">Security Pulse</div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-slate-200 font-medium">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                  Resiliência Soberana Ativa
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-200 font-medium">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                  Node Consolidated: SSoT
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-200 font-medium">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                  PII-Zero Hardened Core
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
              <p className="text-xs font-bold text-emerald-400 uppercase tracking-[0.4em] mb-3 animate-pulse">● LATAM Regional Monitoring</p>
              <h2 className="text-4xl font-black text-white tracking-tight">Status da <span className="text-emerald-400">Infraestrutura Soberana</span></h2>
            </div>
            <div className="flex items-center gap-3 bg-slate-900/50 border border-slate-800 px-6 py-3 rounded-2xl">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Protocolo de Soberania Ativo</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Nodos Soberanos', value: '12 Ativos', sub: 'LATAM Distributed', color: 'emerald' },
              { label: 'Latência ZK-Gate', value: '14ms', sub: 'Optimized Routing', color: 'cyan' },
              { label: 'Consenso Tribunal', value: 'Síncrono', sub: '5/5 CPUs Active', color: 'indigo' },
              { label: 'Escudo PII-Zero', value: '100% Inabalável', sub: 'Zero Data Leaks', color: 'violet' },
            ].map((stat) => (
              <div key={stat.label} className="ultra-glass rounded-3xl p-8 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-500 group relative">
                <div className="absolute top-0 right-0 p-4 opacity-40">
                   <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse glow-neon" />
                </div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{stat.label}</p>
                <p className={`text-2xl font-black text-white group-hover:text-emerald-400 transition-colors`}>{stat.value}</p>
                <p className="text-[9px] font-mono text-slate-600 mt-2 uppercase">{stat.sub}</p>
                
                <div className="mt-5 h-1 w-full bg-slate-900 rounded-full overflow-hidden">
                   <div className="h-full bg-emerald-500/50 animate-shimmer" style={{ width: '85%' }} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 glass flex flex-wrap items-center justify-between p-6 rounded-3xl border border-emerald-500/10 gap-6">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                 <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <p className="text-sm font-bold text-white mb-1 tracking-tight">Plano de Infraestrutura Regional v2.2.0</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Multilingual Edition (PT/ES/EN) • Latin America Treaty</p>
              </div>
            </div>
            <Link 
              href="/whitepaper"
              className="px-6 py-3 bg-white/5 hover:bg-emerald-500 hover:text-white rounded-xl text-emerald-400 text-[10px] font-bold uppercase tracking-widest border border-emerald-500/20 transition-all"
            >
              Acessar Plano de Infraestrutura →
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
          <div className="ultra-glass rounded-3xl p-10 md:p-16 relative overflow-hidden border border-emerald-500/20 glow-emerald">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-600/5 rounded-full blur-[80px]" />

            <div className="relative">
              <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-4">Integridade Crítica</p>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Infraestrutura Distribuída <br />
                <span className="shimmer-text">Garante Soberania Real</span>
              </h2>
              <p className="text-xl text-slate-300 mb-6 max-w-3xl leading-relaxed">
                Nossos sistemas de identidade (ZK-ID) e governança (Civitas) já foram testados em cenários de alta complexidade, provando que a América Latina pode e deve ter sua própria base técnica independente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/acesso-institucional"
                  id="proof-cta-institutional"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold shadow-2xl hover:shadow-emerald-500/30 transition-all text-center"
                >
                  Inicie o Protocolo de Acesso →
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
            <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-3">Comparativo</p>
            <h2 className="text-4xl font-black text-white mb-4">
              Educatech vs.{' '}
              <span className="text-slate-500">Sistemas Legados</span>
            </h2>
            <p className="text-slate-400">
              A diferença entre infraestrutura estrangeira e <strong className="text-white">soberania regional real</strong>.
            </p>
          </div>
          <div className="ultra-glass rounded-2xl overflow-hidden border border-emerald-500/10">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-slate-400">Capacidade</th>
                  <th className="py-4 px-6 text-sm font-bold text-emerald-400">Educatech AI</th>
                  <th className="py-4 px-6 text-sm font-medium text-slate-500">Sistemas Externos</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-white/5' : ''}`}>
                    <td className="py-3.5 px-6 text-sm text-slate-300">{row.feature}</td>
                    <td className="py-3.5 px-6 text-center text-lg">✅</td>
                    <td className="py-3.5 px-6 text-center text-sm">
                      {row.legacy === true ? '✅' : row.legacy === 'parcial' ? (
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
            <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-3">Ecossistema Regional</p>
            <h2 className="text-4xl font-black text-white mb-4">
              Integração Institucional <br />
              <span className="shimmer-text">Sem Exposição de Dados</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Nossa infraestrutura se integra aos sistemas governamentais existentes, provendo uma camada de soberania técnica imediata.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌍',
                label: 'Redes Governamentais',
                desc: 'Deploy em datacenters nacionais ou soberanos. Controle total sobre a trilha de auditoria e logs de processamento.',
              },
              {
                icon: '🏛️',
                label: 'Conselhos e Universidades',
                desc: 'Inteligência social e consultas de larga escala com garantia de anonimato ZK-ID e integridade técnica.',
              },
              {
                icon: '🛂',
                label: 'Sistemas de Identidade',
                desc: 'Provedor de ID Digital Soberano. Autenticação criptográfica sem necessidade de armazenamento centralizado de PII.',
              },
            ].map((item) => (
              <div key={item.label} className="ultra-glass rounded-3xl p-8 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300 group">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-white text-lg mb-3 group-hover:text-emerald-300 transition-colors">{item.label}</h3>
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
              Tudo o que você precisa saber para proteger sua operação com a Infraestrutura Soberana.
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
          <div className="ultra-glass rounded-3xl p-12 glow-emerald relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />
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
                className="px-10 py-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300"
              >
                Obter Acesso
              </Link>

              <Link
                href="/contato"
                id="pricing-cta-plans"
                className="px-10 py-5 rounded-2xl ultra-glass border border-emerald-500/20 hover:border-emerald-500/50 text-slate-200 hover:text-white font-bold transition-all duration-300"
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
