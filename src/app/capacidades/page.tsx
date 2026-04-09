'use client'

import Link from 'next/link'
import { LucideIcon, ShieldCheck, Zap, Layers, Cpu, Database, CheckCircle2, Award, ArrowRight } from 'lucide-react'
import Image from 'next/image'

// ─── DATA ────────────────────────────────────────────────────────────────────

const CAPABILITIES = [
  {
    icon: <Zap className="w-8 h-8 text-indigo-400" />,
    title: 'Determinismo Absoluto',
    desc: 'O fim das alucinações. Nossas ações não são "chutes estatísticos". Cada linha de código é filtrada por uma governança estrita que impede erros sintáticos e alucinações lógicas.',
    highlight: 'Protocolo Tier A+'
  },
  {
    icon: <Database className="w-8 h-8 text-violet-400" />,
    title: 'Escala Sem Limites',
    desc: 'Testado e aprovado em codebases de mais de milhares de linhas de código linhas, distribuídas em 5 grandes projetos simultâneos. Foco absoluto onde outros motores falham.',
    highlight: 'milhares de linhas de código+ Linhas Gerenciadas'
  },
  {
    icon: <Layers className="w-8 h-8 text-cyan-400" />,
    title: 'Tiered Intelligence',
    desc: 'O motor soberano v1.7.5 (STO) orquestra dinamicamente entre múltiplos modelos de elite, assumindo a complexidade técnica e entregando soberania absoluta.',
    highlight: 'Orquestração Multi-Motor'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
    title: 'Inviolabilidade PII-Zero',
    desc: 'Construído com tecnologia de segurança avançada. Seus segredos comerciais permanecem onde devem estar: com você. Dados nunca alimentam treinamentos externos.',
    highlight: 'Privacidade Absoluta'
  },
  {
    icon: <Award className="w-8 h-8 text-amber-400" />,
    title: 'O Marco de centenas de horas',
    desc: 'Confiabilidade comprovada por resultados. Mais de centenas de horas de trabalho contínuo sem uma única falha técnica ou desvio de contexto.',
    highlight: 'Performance Comprovada'
  },
  {
    icon: <Cpu className="w-8 h-8 text-pink-400" />,
    title: 'Segurança de Hardware',
    desc: 'O Certus se "amarra" à integridade do seu ambiente local, criando uma barreira impenetrável contra clonagem ou uso indevido da licença.',
    highlight: 'Binding Tecnológico'
  }
]

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function CapabilityCard({ capability }: { capability: typeof CAPABILITIES[0] }) {
  return (
    <div className="glass-bright rounded-3xl p-8 border border-white/5 hover:border-indigo-500/30 hover:glow-sm transition-all duration-300 group">
      <div className="mb-6 p-3 rounded-2xl bg-white/5 inline-block group-hover:bg-indigo-500/10 transition-colors">
        {capability.icon}
      </div>
      <h3 className="text-2xl font-black text-white mb-4 group-hover:text-indigo-200 transition-colors">
        {capability.title}
      </h3>
      <p className="text-slate-400 leading-relaxed mb-6">
        {capability.desc}
      </p>
      <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-widest">
        <CheckCircle2 className="w-4 h-4" />
        {capability.highlight}
      </div>
    </div>
  )
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function CapacidadesPage() {
  return (
    <main className="min-h-screen pt-24 pb-24 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 grid-bg opacity-30 fixed pointer-events-none" />
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none fixed" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none fixed" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* ═══ HERO ═════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Zap className="w-3 h-3 text-indigo-400 fill-indigo-400" />
              Upgrade v1.7.5 (STO Edition) Ativo
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight mb-8">
              O que o Certus Engine <span className="gradient-text">Entrega.</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
              Deixamos a Era do Chat para trás. O Certus Engine v1.7.5 é o **Sovereign Technical Officer** do seu projeto. 
              Onde outros motores alucinam, nós entregamos a infraestrutura da certeza.
            </p>
          </div>
        </section>

        {/* ═══ COMPARISON CONCEPT ═══════════════════════════════════════ */}
        <section className="py-16 border-y border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="glass rounded-3xl p-10 border-l-4 border-l-red-500/50">
              <h3 className="text-xl font-bold text-red-100 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                Era do Chat (Probabilística)
              </h3>
              <ul className="space-y-4">
                {[
                  'Alucinações frequentes em projetos grandes',
                  'Mistura de contextos entre arquivos',
                  'Sugestões de código que quebram o build',
                  'Zero visibilidade de custos e infraestrutura'
                ].map((item) => (
                  <li key={item} className="text-slate-500 text-sm flex items-start gap-3">
                    <span className="text-red-500/50 mt-1">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-bright rounded-3xl p-10 border-l-4 border-l-indigo-500 glow-indigo">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                Era da Soberania (Certus v1.7.5 STO)
              </h3>
              <ul className="space-y-4">
                {[
                  'Autonomia de Complexidade (STO Mode)',
                  'Orquestração Nativa de Múltiplas LLMs',
                  'Protocolo Anti-Burlar com Hardware Binding',
                  'Tiered Intelligence: O motor certo para o custo certo'
                ].map((item) => (
                  <li key={item} className="text-slate-200 text-sm flex items-start gap-3">
                    <span className="text-indigo-400 mt-1">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ═══ CAPABILITIES GRID ════════════════════════════════════════ */}
        <section className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">Poderes Centrais</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Desenvolvido com tecnologia de segurança avançada e orquestração de elite.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CAPABILITIES.map((cap) => (
              <CapabilityCard key={cap.title} capability={cap} />
            ))}
          </div>
        </section>

        {/* ═══ FUTURE-PROOF SECTION ════════════════════════════════════════ */}
        <section className="py-24">
          <div className="glass-bright rounded-[3rem] p-12 md:p-20 relative overflow-hidden border border-indigo-500/20 glow-indigo">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px]" />
            
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
                  <ShieldCheck className="w-3 h-3" />
                  Garantia de Independência
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  Infraestrutura à Prova de Futuro <span className="text-indigo-400">(Future-Proof)</span>
                </h2>
                <p className="text-xl text-slate-300 leading-relaxed">
                  O Certus Engine não é refém de versões ou fornecedores. Nossa arquitetura de **Tiered Intelligence** é agnóstica por design. À medida que modelos como o **GPT-5.3** e o **Claude 3.6** elevam o patamar da inteligência artificial, o Certus se integra instantaneamente a eles, oferecendo a governança, o determinismo e a segurança PII-Zero necessários para que essa nova potência se transforme em execução real e eficiente.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                {[
                  { t: 'GPT-5.3 Ready', d: 'Compatível com as novas janelas de contexto e raciocínio multi-modal.' },
                  { t: 'Claude 3.6 + Nexus', d: 'Otimização cirúrgica para os novos protocolos da Anthropic.' },
                  { t: 'Gemini 3.1 Ultra', d: 'Integração de alto nível com a infraestrutura Google Cloud.' }
                ].map((item) => (
                  <div key={item.t} className="glass p-6 rounded-2xl border border-white/5 group-hover:border-indigo-500/20 transition-all">
                    <h4 className="font-bold text-white text-lg mb-1">{item.t}</h4>
                    <p className="text-slate-500 text-sm">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ VISIONARY SECTION ════════════════════════════════════════ */}
        <section className="py-24 bg-gradient-to-br from-indigo-600/5 to-violet-600/5 rounded-[4rem] border border-white/5 relative overflow-hidden group">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-10 md:px-20">
            <div>
              <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4">O Futuro é Soberano</p>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                Privacidade Absoluta. <br /> Mistério Tecnológico.
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                Nós não apenas mascaramos seus dados. Nós criamos um ambiente onde a **soberania digital** é a lei fundamental. 
                Utilizando hardware binding e protocolos que validam ações sem expor identidades, o Certus Engine é impenetrável.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/app"
                  className="px-8 py-4 rounded-2xl bg-white text-slate-950 font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
                >
                  Ativar Motor Certus <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/produto"
                  className="px-8 py-4 rounded-2xl glass hover:bg-white/10 text-white font-semibold transition-all text-center"
                >
                  Conhecer o Produto
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square relative rounded-3xl overflow-hidden glass border border-white/10 glow-indigo group-hover:scale-[1.02] transition-transform duration-500">
                <Image 
                  src="/certus_capacidades_hero.png" 
                  alt="Certus Engine Visionary Architecture" 
                  fill
                  className="object-cover opacity-80"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-bright p-6 rounded-2xl border border-white/10 shadow-2xl animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-black text-xl">
                    ZK
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase">Status de Segurança</p>
                    <p className="text-lg font-black text-white">Inviolável PII-Zero</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ FOOTER CTA ═══════════════════════════════════════════════ */}
        <section className="py-24 text-center">
          <h2 className="text-4xl font-black text-white mb-8">
            Pronto para sair do chat e <span className="gradient-text">entrar na engenharia?</span>
          </h2>
          <Link
            href="/contato"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-black text-xl shadow-2xl hover:shadow-indigo-500/50 hover:scale-105 transition-all"
          >
            Começar Agora <ArrowRight className="w-6 h-6" />
          </Link>
        </section>
      </div>
    </main>
  )
}
