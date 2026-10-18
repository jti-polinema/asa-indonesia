import type { ReactNode } from 'react'
import { capabilities, IMG } from '../../data/content'
import { DataTag, Eyebrow, Sparkline, StatusChip } from './ui'

const visuals: ReactNode[] = [
  <div className="flex items-end justify-between">
    <div>
      <p className="text-[11px] text-white/60">Amonia · Kandang A</p>
      <p className="font-display text-5xl font-light">18<span className="ml-1 font-sans text-sm text-white/60">ppm</span></p>
    </div>
    <StatusChip level="normal" />
  </div>,
  <Sparkline data={[4, 5, 5, 7, 6, 9, 12, 15, 14, 18, 22, 24]} height={80} stroke="#c9f26b" fill="rgba(201,242,107,0.15)" />,
  <div>
    <div className="flex h-3 overflow-hidden rounded-full">
      <span className="w-[55%] bg-lime-2" /><span className="w-[25%] bg-warn" /><span className="w-[20%] bg-crit" />
    </div>
    <div className="mt-2 flex justify-between font-mono text-[10px] text-white/60"><span>Normal</span><span>Perhatian</span><span>Kritis</span></div>
  </div>,
  <div className="flex items-center gap-3 rounded-2xl bg-warn/25 p-3 text-white">
    <span className="size-2.5 animate-[pulse-dot_1.6s_infinite] rounded-full bg-crit" />
    <div className="text-xs"><p className="font-semibold">Amonia melewati batas</p><p className="text-white/60">Smart Chicken · 14.20</p></div>
  </div>,
  <ul className="space-y-2 text-xs text-white">
    {[['Sensor amonia A1', 'Tersinkron'], ['Sensor suhu A2', 'Tersinkron'], ['Sensor pH H1', 'Menunggu']].map(([n, s]) => (
      <li key={n} className="flex items-center justify-between"><span>{n}</span>
        <span className={`rounded-full px-2 py-0.5 ${s === 'Tersinkron' ? 'bg-lime/25 text-lime' : 'bg-warn/30 text-warn'}`}>{s}</span></li>
    ))}
  </ul>,
  <div className="space-y-2">
    {[['Maggot', 80, 'bg-lime'], ['Chicken', 45, 'bg-warn'], ['Aquaponic', 70, 'bg-lime'], ['Hydroponic', 55, 'bg-warn']].map(([n, w, c]) => (
      <div key={n as string} className="flex items-center gap-2 text-[11px] text-white/70">
        <span className="w-20">{n}</span>
        <span className="h-2 flex-1 rounded-full bg-white/10"><span className={`block h-full rounded-full ${c}`} style={{ width: `${w}%` }} /></span>
      </div>
    ))}
  </div>,
]

const spans = ['lg:col-span-2', '', '', 'lg:col-span-2', '', '']

export function Capabilities() {
  return (
    <section id="fitur" className="bg-forest py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <Eyebrow dark>Yang dapat dilakukan</Eyebrow>
            <h2 className="mt-5 text-[clamp(2.2rem,5.2vw,4.6rem)] font-medium uppercase leading-[0.98] tracking-tight">
              Enam hasil yang dilihat pengguna.
            </h2>
          </div>
          <p className="text-white/65">Setiap kemampuan cukup satu kalimat manfaat dan satu cuplikan produk yang relevan, bukan semua menu sekaligus.</p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative min-h-72 overflow-hidden rounded-[1.75rem] md:col-span-2 lg:row-span-2 lg:col-span-1">
            <img src={IMG.hydro} alt="Rumah kaca dengan tanaman hijau" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 font-display text-2xl font-light italic">Satu kalimat manfaat, satu cuplikan.</p>
          </div>
          {capabilities.map((c, i) => (
            <article key={c.title} className={`flex flex-col rounded-[1.75rem] border border-white/10 bg-forest-2 p-6 transition-colors hover:border-lime/50 ${spans[i]}`}>
              <div className="min-h-24 rounded-2xl bg-black/25 p-4">{visuals[i]}</div>
              <p className="mt-5 font-mono text-[11px] text-lime">0{i + 1}</p>
              <h3 className="mt-1 text-xl font-medium uppercase tracking-tight">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{c.body}</p>
            </article>
          ))}
          <div className="relative min-h-60 overflow-hidden rounded-[1.75rem] lg:col-span-2">
            <img src={IMG.tomato} alt="Barisan tanaman tomat di rumah kaca" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-forest/30" />
          </div>
        </div>
        <div className="mt-6"><DataTag label="contoh tampilan" dark /></div>
      </div>
    </section>
  )
}
