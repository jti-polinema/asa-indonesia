import type { ReactNode } from 'react'

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] ${dark ? 'text-lime' : 'text-forest-3'}`}>
      <span className="h-px w-8 bg-current" />
      {children}
    </span>
  )
}

export type Label = 'data simulasi' | 'contoh tampilan' | 'data perangkat'

export function DataTag({ label, dark = false }: { label: Label; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
        dark ? 'bg-white/10 text-white/80' : 'bg-forest/8 text-forest-3'
      }`}
    >
      <span className="size-1.5 rounded-full bg-warn" />
      {label}
    </span>
  )
}

export function Button({
  href,
  children,
  variant = 'lime',
  onClick,
}: {
  href?: string
  children: ReactNode
  variant?: 'lime' | 'ghost' | 'dark' | 'ghost-dark'
  onClick?: () => void
}) {
  const styles = {
    lime: 'bg-lime text-forest hover:bg-white',
    dark: 'bg-forest text-white hover:bg-forest-3',
    ghost: 'border border-white/30 text-white hover:bg-white/10',
    'ghost-dark': 'border border-forest/25 text-forest hover:bg-forest hover:text-white',
  }[variant]
  const cls = `inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${styles}`
  const arrow = (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M2 12 12 2M4 2h8v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
  if (href)
    return (
      <a href={href} className={cls}>
        {children}
        {arrow}
      </a>
    )
  return (
    <button onClick={onClick} className={cls}>
      {children}
      {arrow}
    </button>
  )
}

export function Sparkline({
  data,
  warnAt,
  height = 80,
  stroke = '#164d31',
  fill = 'rgba(169,220,63,0.25)',
  className = '',
}: {
  data: number[]
  warnAt?: number
  height?: number
  stroke?: string
  fill?: string
  className?: string
}) {
  const w = 300
  const h = height
  const all = warnAt !== undefined ? [...data, warnAt] : data
  const min = Math.min(...all)
  const max = Math.max(...all)
  const span = max - min || 1
  const x = (i: number) => (i / (data.length - 1)) * w
  const y = (v: number) => h - 6 - ((v - min) / span) * (h - 14)
  const line = data.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' ')
  const area = `${line} L${w} ${h} L0 ${h} Z`
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={`w-full ${className}`} preserveAspectRatio="none" aria-hidden>
      <path d={area} fill={fill} />
      {warnAt !== undefined && (
        <line x1="0" x2={w} y1={y(warnAt)} y2={y(warnAt)} stroke="#e5654b" strokeWidth="1" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
      )}
      <path d={line} fill="none" stroke={stroke} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      <circle cx={x(data.length - 1)} cy={y(data[data.length - 1])} r="3.5" fill={stroke} />
    </svg>
  )
}

export function StatusChip({ level }: { level: 'normal' | 'perhatian' | 'kritis' }) {
  const m = {
    normal: 'bg-lime-2/25 text-forest-3',
    perhatian: 'bg-warn/30 text-[#7a5200]',
    kritis: 'bg-crit/20 text-[#9b2c15]',
  }[level]
  return <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${m}`}>{level[0].toUpperCase() + level.slice(1)}</span>
}
