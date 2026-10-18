import { useState } from 'react'
import { solutions } from '../../data/content'
import { DataTag, Eyebrow, Sparkline, StatusChip } from './ui'

type Level = 'normal' | 'perhatian' | 'kritis'
const levels: Record<string, Level> = { maggot: 'perhatian', chicken: 'kritis', aquaponic: 'perhatian', hydroponic: 'perhatian' }

export function Demo() {
  const [sel, setSel] = useState(1)
  const s = solutions[sel]
  return (
    <section id="demo" className="bg-forest py-24 text-white lg:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <Eyebrow dark>Cuplikan demo</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.4vw,3.6rem)] font-light leading-[1.05] tracking-tight">
              Satu tampilan, <em className="text-lime">satu poin.</em> Pilih solusi untuk melihat riwayatnya.
            </h2>
          </div>
          <p className="max-w-md text-white/65">
            Setiap bukti diberi label supaya jelas statusnya: data perangkat, data simulasi, atau contoh tampilan. Tampilan di bawah adalah <strong className="text-white">contoh tampilan dengan data simulasi</strong>.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/15 bg-forest-2 shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-crit/70" /><span className="size-2.5 rounded-full bg-warn/70" /><span className="size-2.5 rounded-full bg-lime/70" />
              <span className="ml-3 font-mono text-xs text-white/60">Dashboard lokal · Lokasi contoh</span>
            </div>
            <DataTag label="contoh tampilan" dark />
          </div>
          <div className="grid gap-5 p-5 lg:grid-cols-[1.6fr_1fr] lg:p-6">
            <div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {solutions.map((x, i) => (
                  <button
                    key={x.key}
                    onClick={() => setSel(i)}
                    aria-pressed={i === sel}
                    className={`rounded-2xl border p-4 text-left transition-colors ${i === sel ? 'border-lime bg-white/10' : 'border-white/10 hover:bg-white/5'}`}
                  >
                    <p className="font-mono text-[10px] uppercase tracking-wider text-white/55">{x.name.replace('Smart ', '')}</p>
                    <p className="mt-3 font-display text-2xl">{x.metric.value}<span className="ml-1 font-sans text-xs text-white/50">{x.metric.unit}</span></p>
                    <div className="mt-2"><StatusChip level={levels[x.key]} /></div>
                  </button>
                ))}
              </div>
              <div className="mt-4 rounded-2xl bg-black/20 p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-white/80">{s.name} · {s.metric.label} · 12 jam terakhir</p>
                  <span className="font-mono text-[10px] text-crit">-- ambang batas</span>
                </div>
                <Sparkline key={s.key} data={s.series} warnAt={s.metric.warnAt} height={180} stroke="#c9f26b" fill="rgba(201,242,107,0.14)" className="mt-3" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl bg-black/20 p-5">
                <p className="font-mono text-[10px] uppercase tracking-wider text-lime">Peringatan aktif</p>
                <ul className="mt-3 space-y-3 text-sm">
                  <li className="flex gap-3"><span className="mt-1.5 size-2 shrink-0 rounded-full bg-crit" /><span>Amonia Kandang A melewati batas <em className="block text-xs not-italic text-white/50">14.20 · Smart Chicken</em></span></li>
                  <li className="flex gap-3"><span className="mt-1.5 size-2 shrink-0 rounded-full bg-warn" /><span>pH larutan di luar rentang <em className="block text-xs not-italic text-white/50">13.45 · Smart Hydroponic</em></span></li>
                </ul>
              </div>
              <div className="rounded-2xl bg-black/20 p-5">
                <p className="font-mono text-[10px] uppercase tracking-wider text-lime">Aset dan sinkronisasi</p>
                <div className="mt-3 flex items-end justify-between">
                  <p className="font-display text-4xl font-light">12<span className="text-lg text-white/50"> / 14</span></p>
                  <p className="text-xs text-white/60">perangkat tersinkron ke cloud</p>
                </div>
                <div className="mt-3 h-2 rounded-full bg-white/10"><span className="block h-full w-[86%] rounded-full bg-lime" /></div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-5 text-sm text-white/50">Angka ROI dan finansial, bila ditampilkan, adalah estimasi sampai ada pencatatan biaya dan pendapatan yang terverifikasi.</p>
      </div>
    </section>
  )
}
