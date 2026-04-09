'use client'

import { useState } from 'react'

export default function ContatoPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', type: 'demo' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production: send to API route → email/CRM
    setTimeout(() => setSent(true), 500)
  }

  if (sent) {
    return (
      <div className="pt-28 pb-24 min-h-screen flex items-center justify-center">
        <div className="glass-bright rounded-3xl p-12 text-center max-w-md">
          <div className="text-5xl mb-4">✅</div>
          <h2 className="text-2xl font-black text-white mb-3">Mensagem Enviada!</h2>
          <p className="text-slate-400">Respondemos em até 48h. Para urgências: founder@certusengine.ai</p>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-white mb-4">Entre em Contato</h1>
          <p className="text-slate-400 text-lg">Demo, suporte técnico ou contrato enterprise — escolha o canal.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <div className="glass-bright rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white mb-6">Enviar Mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-500 mb-1 block">Nome</label>
                  <input
                    required
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    className="w-full px-3 py-2.5 glass rounded-lg text-sm text-slate-200 border border-slate-700 focus:border-indigo-500 focus:outline-none transition-colors placeholder:text-slate-600"
                    placeholder="Paulo Paulino"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-500 mb-1 block">Empresa</label>
                  <input
                    value={form.company}
                    onChange={e => setForm({...form, company: e.target.value})}
                    className="w-full px-3 py-2.5 glass rounded-lg text-sm text-slate-200 border border-slate-700 focus:border-indigo-500 focus:outline-none transition-colors placeholder:text-slate-600"
                    placeholder="Educatech AI"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-slate-500 mb-1 block">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                  className="w-full px-3 py-2.5 glass rounded-lg text-sm text-slate-200 border border-slate-700 focus:border-indigo-500 focus:outline-none transition-colors placeholder:text-slate-600"
                  placeholder="voce@empresa.com.br"
                />
              </div>
              <div>
                <label className="text-xs text-slate-500 mb-1 block">Tipo de contato</label>
                <select
                  value={form.type}
                  onChange={e => setForm({...form, type: e.target.value})}
                  className="w-full px-3 py-2.5 glass rounded-lg text-sm text-slate-200 border border-slate-700 focus:border-indigo-500 focus:outline-none bg-transparent transition-colors"
                >
                  <option value="demo">Agendar Demo</option>
                  <option value="enterprise">Contrato Enterprise</option>
                  <option value="tech">Suporte Técnico</option>
                  <option value="security">Segurança / DPO</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-slate-500 mb-1 block">Mensagem</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
                  className="w-full px-3 py-2.5 glass rounded-lg text-sm text-slate-200 border border-slate-700 focus:border-indigo-500 focus:outline-none transition-colors resize-none placeholder:text-slate-600"
                  placeholder="Conte sobre seu caso de uso..."
                />
              </div>
              <p className="text-xs text-slate-600">Sem PII armazenado · Alinhado com nossa política PII-Zero</p>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold transition-all shadow-lg"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Channels */}
          <div className="space-y-4">
            {[
              { icon: '👤', label: 'Fundador', email: 'founder@certusengine.ai', desc: 'Demos, parcerias e early access' },
              { icon: '🔐', label: 'Segurança', email: 'security@certusengine.ai', desc: 'Vulnerabilidades, pentests, CISO' },
              { icon: '⚖️', label: 'DPO / LGPD', email: 'dpo@certusengine.ai', desc: 'Requisições LGPD, órgãos regulatórios' },
            ].map(ch => (
              <div key={ch.email} className="glass rounded-xl p-5 flex items-center gap-4">
                <span className="text-2xl">{ch.icon}</span>
                <div>
                  <p className="font-semibold text-white text-sm">{ch.label}</p>
                  <a href={`mailto:${ch.email}`} className="text-indigo-400 hover:text-indigo-300 text-sm transition-colors">{ch.email}</a>
                  <p className="text-slate-500 text-xs mt-0.5">{ch.desc}</p>
                </div>
              </div>
            ))}
            <div className="glass-bright rounded-xl p-5 border border-indigo-500/20">
              <p className="font-semibold text-white text-sm mb-1">⏱️ Tempo de Resposta</p>
              <p className="text-slate-400 text-xs">Standard: 48h úteis · Enterprise: 24h · Segurança: 12h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
