import { useState } from 'react'
import { flow } from '../../data/content'
import { Eyebrow } from './ui'

const tints = [
  'from-[#dff0c4] to-[#f2f9e4]',
  'from-[#cfe9d6] to-[#eef8f1]',
  'from-[#e3efc0] to-[#f7fbe6]',
  'from-[#d3e7f0] to-[#eef7fb]',
  'from-[#dcd9f0] to-[#f4f3fb]',
]

const icons = [
  <path key="a" d="M32 8v28M32 36a8 8 0 1 0 0 .1M20 52h24M24 44h16" />,
  <g key="b"><rect x="12" y="14" width="40" height="14" rx="3" /><rect x="12" y="34" width="40" height="14" rx="3" /><path d="M20 21h.1M20 41h.1" /></g>,
  <path key="c" d="M10 46 24 30l10 8L54 14M42 14h12v12" />,
  <g key="d"><path d="M32 10c10 0 16 8 16 18 0 6-2 9-4 12v6H20v-6c-2-3-4-6-4-12 0-10 6-18 16-18ZM25 52h14" /></g>,
  <g key="e"><rect x="10" y="12" width="44" height="32" rx="4" /><path d="M20 36l8-8 6 5 10-12M24 52h16" /></g>,
]

export function Flow() {
  const [i, setI] = useState(2)
  return (
    <section id="alur" className="bg-gradient-to-b from-background via-mint to-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Perjalanan data</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,4.2rem)] font-light leading-[1.02] tracking-tight text-ink">
            Dari angka sensor menjadi keputusan.
          </h2>
          <p className="mt-5 text-muted">
            Inilah yang membedakan ASA dari kumpulan grafik. Pengolahan lokal melayani operator di lokasi; sistem cloud melayani pemantauan dan analisis manajerial.
          </p>
        </div>

        <ol className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {flow.map((f, k) => (
            <li key={f.no}>
              <button
                onClick={() => setI(k)}
                aria-pressed={k === i}
                className={`flex h-full min-h-72 w-full flex-col rounded-3xl bg-gradient-to-b p-5 text-left transition-all duration-300 ${tints[k]} ${
                  k === i ? 'shadow-xl ring-2 ring-forest lg:-translate-y-3' : 'hover:-translate-y-1'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-white/70 px-2 py-0.5 font-mono text-[10px] text-forest">{f.no}</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-forest-3">{f.where}</span>
                </div>
                <svg viewBox="0 0 64 64" className="mx-auto my-5 size-20 fill-none stroke-forest stroke-[2.2]" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  {icons[k]}
                </svg>
                <h3 className="font-display text-2xl leading-tight text-ink">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{f.body}</p>
              </button>
            </li>
          ))}
        </ol>

        <div className="mt-10" aria-hidden>
          <div className="relative h-px bg-forest/25">
            <span className="absolute left-0 top-0 h-px bg-forest transition-all duration-500" style={{ width: `${(i / (flow.length - 1)) * 100}%` }} />
            {flow.map((f, k) => (
              <span key={f.no} className={`absolute top-1/2 size-2.5 -translate-y-1/2 rounded-full ${k <= i ? 'bg-forest' : 'bg-forest/25'}`} style={{ left: `calc(${(k / (flow.length - 1)) * 100}% - 5px)` }} />
            ))}
          </div>
          <div className="mt-2 flex justify-between font-mono text-[10px] uppercase tracking-wider text-muted">
            <span>Lapangan</span>
            <span>Aplikasi lokal</span>
            <span>Cloud</span>
          </div>
        </div>
      </div>
    </section>
  )
}
