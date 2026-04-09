'use client'

import { useState, useEffect } from 'react'
import { ShieldCheck, Lock, Activity, Key, Database, RefreshCcw } from 'lucide-react'

// ─── ADMIN DASHBOARD ─────────────────────────────────────────────────────────

function Dashboard({ stats, onRefresh }: { stats: any, onRefresh: () => void }) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-white flex items-center gap-3">
            <ShieldCheck className="text-emerald-400 w-8 h-8" />
            Certus Administrative <span className="gradient-text">Portal</span>
          </h1>
          <p className="text-slate-500 text-sm mt-1">Status de Operação: Soberano v1.6.1</p>
        </div>
        <button 
          onClick={onRefresh}
          className="p-3 rounded-xl glass hover:bg-white/10 transition-all text-indigo-400"
          title="Recarregar Métricas"
        >
          <RefreshCcw className="w-5 h-5 focus:animate-spin" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard 
          icon={<Key className="text-indigo-400" />} 
          label="Chaves Geradas" 
          value={stats.count} 
          sub={`Limite: ${stats.limit}`}
          color="indigo"
        />
        <StatsCard 
          icon={<Database className="text-violet-400" />} 
          label="Slots Disponíveis" 
          value={stats.remaining} 
          sub="Pesquisa de Campo"
          color="violet"
        />
        <StatsCard 
          icon={<Activity className="text-emerald-400" />} 
          label="Status do Motor" 
          value="ATIVO" 
          sub="Tiered Intelligence OK"
          color="emerald"
        />
      </div>

      <div className="glass-bright rounded-3xl p-8 border border-white/5 glow-indigo">
        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
          <Activity className="w-5 h-5 text-indigo-400" />
          Logs de Atividade Recente
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono py-2 border-b border-white/5">
            <span className="text-slate-500">SYSTEM_INIT_SUCCESS</span>
            <span className="text-indigo-400">v1.6.1</span>
            <span className="text-slate-600">CONNECTED</span>
          </div>
          <div className="flex items-center justify-between text-xs font-mono py-2 border-b border-white/5">
            <span className="text-slate-500">PII_ZERO_SHIELD</span>
            <span className="text-emerald-400">ENABLED</span>
            <span className="text-slate-600">ACTIVE</span>
          </div>
          <div className="flex items-center justify-between text-xs font-mono py-2">
            <span className="text-slate-500">API_GATEWAY_STATS</span>
            <span className="text-amber-400">POLLING</span>
            <span className="text-slate-600">READY</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatsCard({ icon, label, value, sub, color }: any) {
  const colors: any = {
    indigo: 'from-indigo-500/20 to-indigo-500/5 border-indigo-500/20',
    violet: 'from-violet-500/20 to-violet-500/5 border-violet-500/20',
    emerald: 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/20',
  }
  return (
    <div className={`glass bg-gradient-to-br ${colors[color]} rounded-3xl p-6 border`}>
      <div className="mb-4">{icon}</div>
      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{label}</p>
      <p className="text-4xl font-black text-white">{value}</p>
      <p className="text-xs text-slate-600 mt-2 font-mono">{sub}</p>
    </div>
  )
}

// ─── PIN ENTRY ───────────────────────────────────────────────────────────────

export default function AdminPage() {
  const [pin, setPin] = useState('')
  const [authorized, setAuthorized] = useState(false)
  const [error, setError] = useState('')
  const [stats, setStats] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const fetchStats = async (authPin: string) => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`/api/admin/stats?pin=${authPin}`)
      if (res.ok) {
        const data = await res.json()
        setStats(data)
        setAuthorized(true)
      } else {
        setError('PIN de Acesso Inválido. Acesso Soberano Negado.')
        setPin('')
      }
    } catch (err) {
      setError('Erro catastrófico na conexão com o motor.')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (pin.length === 4) {
      fetchStats(pin)
    }
  }

  // Auto-refresh stats when authorized
  useEffect(() => {
    if (authorized) {
      const interval = setInterval(() => fetchStats(pin), 30000)
      return () => clearInterval(interval)
    }
  }, [authorized, pin])

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 fixed pointer-events-none" />
      
      {!authorized ? (
        <div className="w-full max-w-md glass-bright rounded-[2.5rem] p-10 border border-indigo-500/20 shadow-2xl glow-indigo z-10 animate-in fade-in zoom-in duration-500">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center mx-auto mb-4 border border-indigo-500/20">
              <Lock className="text-indigo-400 w-8 h-8" />
            </div>
            <h2 className="text-2xl font-black text-white mb-2 underline decoration-indigo-500/50 decoration-4">Cofre Administrativo</h2>
            <p className="text-slate-500 text-sm">Insira o PIN de 4 dígitos para liberação soberana.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="password"
              maxLength={4}
              value={pin}
              autoFocus
              autoComplete="off"
              onChange={(e) => setPin(e.target.value.replace(/\D/g, ''))}
              placeholder="••••"
              className="w-full text-center text-4xl tracking-[1rem] py-4 bg-slate-950/50 border border-slate-800 rounded-2xl text-indigo-400 font-mono focus:border-indigo-500 focus:outline-none transition-all placeholder:text-slate-800"
            />
            {error && <p className="text-red-400 text-xs text-center font-bold animate-shake">{error}</p>}
            
            <button
              type="submit"
              disabled={loading || pin.length < 4}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-black hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:grayscale"
            >
              {loading ? 'Validando...' : 'Desbloquear Portal'}
            </button>
          </form>

          <p className="mt-8 text-[10px] text-slate-700 font-mono uppercase text-center tracking-widest">
            Protocolo Certus v1.6.1 · SHA256 Encryption
          </p>
        </div>
      ) : (
        <div className="w-full max-w-4xl z-10">
          <Dashboard stats={stats} onRefresh={() => fetchStats(pin)} />
        </div>
      )}
    </div>
  )
}
