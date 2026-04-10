'use client'

import { useState } from 'react'

export default function FreeKeyGenerator() {
  const [key, setKey] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const generateKey = async () => {
    setLoading(true)
    setError(null)
    setCopied(false)
    try {
      const res = await fetch('/api/generate-key', { method: 'POST' })
      if (!res.ok) {
        if (res.status === 403) {
          setError('Acesso ao Trial Temporário Indisponível. Tente novamente em breve.')
        } else {
          setError('Erro ao gerar chave. Tente novamente.')
        }
        return
      }
      const data = await res.json()
      setKey(data.key)
    } catch (err) {
      setError('Problema de conexão. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = () => {
    if (!key) return
    navigator.clipboard.writeText(key)
    setCopied(true)
    // Protocolo de Segurança: A chave some em 2 segundos após a cópia
    setTimeout(() => {
      setKey(null)
      setCopied(false)
    }, 2000)
  }

  return (
    <div className="max-w-md mx-auto glass-bright p-8 rounded-3xl border border-emerald-500/20 shadow-2xl glow-emerald">
      <h3 className="text-xl font-bold text-white mb-2 text-center">Gere sua Acesso Soberano</h3>
      <p className="text-slate-400 text-xs mb-6 text-center leading-relaxed">
        Obtenha uma chave anônima e instantânea para ativar a infraestrutura soberana em sua operação.
      </p>

      {!key ? (
        <button
          onClick={generateKey}
          disabled={loading}
          className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold transition-all shadow-lg shadow-emerald-500/20 active:scale-95 disabled:opacity-50"
        >
          {loading ? 'Gerando...' : 'Gerar Chave de Acesso'}
        </button>
      ) : (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
          <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800 font-mono text-sm break-all text-emerald-400 text-center">
            {key}
          </div>
          <button
            onClick={copyToClipboard}
            className={`w-full py-4 rounded-xl font-bold transition-all ${
              copied 
                ? 'bg-emerald-600 text-white' 
                : 'bg-white text-slate-900 hover:bg-slate-200'
            }`}
          >
            {copied ? '✓ Copiado! (Limpando...)' : 'Copiar Chave'}
          </button>
          <p className="text-[10px] text-slate-500 text-center italic">
            A chave sumirá permanentemente após a cópia para sua segurança.
          </p>
        </div>
      )}

      {error && (
        <p className="mt-4 text-xs text-red-400 text-center font-medium animate-pulse">
          {error}
        </p>
      )}

      <div className="mt-8 pt-6 border-t border-slate-800/50">
        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-3 text-center">O que fazer com esta chave?</p>
        <ol className="text-[11px] text-slate-400 space-y-2 text-left list-decimal list-inside">
          <li>Copie a chave gerada acima.</li>
          <li>Inicie sua conexão institucional segura.</li>
          <li>A chave ativará os logs de auditoria e monitoramento soberano em tempo real.</li>
        </ol>
      </div>
    </div>
  )
}
