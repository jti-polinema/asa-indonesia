import { useState } from 'react'
import { IMG } from '../../data/content'
import { DataTag, Eyebrow, Sparkline } from './ui'

const scenarios = [
  {
    key: 'chicken',
    title: 'Smart Chicken',
    metric: 'Amonia',
    unit: 'ppm',
    warnAt: 20,
    series: [6, 6, 7, 8, 8, 10, 12, 14, 17, 21, 24, 26],
    steps: [
      ['Pembacaan amonia meningkat', 'Nilai naik bertahap sepanjang sore.'],
      ['Melewati aturan yang ditetapkan', 'Sistem lokal menandai status menjadi Perhatian.'],
      ['Operator melihat peringatan', 'Peringatan muncul di aplikasi lokal.'],
      ['Membuka riwayat amonia', 'Terlihat kapan kenaikan dimulai.'],
      ['Memeriksa kondisi kandang', 'Tindakan dilakukan operator di lokasi.'],
    ],
  },
  {
    key: 'hydroponic',
    title: 'Smart Hydroponic',
    metric: 'pH larutan',
    unit: '',
    warnAt: 6.8,
    series: [6.0, 6.0, 6.1, 6.1, 6.2, 6.3, 6.4, 6.6, 6.9, 7.1, 7.3, 7.4],
    steps: [
      ['pH bergerak keluar rentang', 'Dari sekitar 6,1 menuju 7,4.'],
      ['Status berubah', 'Aturan menandai nilai di luar rentang yang ditetapkan.'],
      ['Operator melihat kapan mulai', 'Riwayat memperlihatkan titik awal pergeseran.'],
      ['Memutuskan pemeriksaan larutan nutrisi', 'Keputusan tetap di tangan operator.'],
    ],
  },
]

export function Scenarios() {
  const [k, setK] = useState(0)
  const s = scenarios[k]
  return (
    <section id="kejadian" className="bg-mint py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Eyebrow>Contoh kejadian</Eyebrow>
        <h2 className="mt-5 max-w-3xl font-display text-[clamp(2rem,4.4vw,3.6rem)] font-light leading-[1.05] tracking-tight text-ink">
          Cerita singkat, <em className="text-forest-3">berhenti pada tindakan yang memang didukung.</em>
        </h2>

        <div className="mt-10 inline-flex rounded-full bg-forest/10 p-1" role="tablist">
          {scenarios.map((x, i) => (
            <button
              key={x.key}
              role="tab"
              aria-selected={i === k}
              onClick={() => setK(i)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${i === k ? 'bg-forest text-white' : 'text-forest hover:bg-forest/10'}`}
            >
              {x.title}
            </button>
          ))}
        </div>

        <div key={s.key} className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div>
          <div className="relative mb-3 h-44 overflow-hidden rounded-3xl">
            <img src={s.key === 'chicken' ? IMG.chicken : IMG.hydro} alt={s.title} className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/70 to-transparent" />
            <p className="absolute bottom-4 left-5 font-display text-2xl italic text-white">{s.title}</p>
          </div>
          <ol className="space-y-3">
            {s.steps.map(([t, d], i) => (
              <li key={t} className="flex gap-4 rounded-3xl bg-white p-5">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-forest font-mono text-xs text-lime">{i + 1}</span>
                <div>
                  <p className="font-display text-xl text-ink">{t}</p>
                  <p className="text-sm text-muted">{d}</p>
                </div>
              </li>
            ))}
          </ol>
          </div>
          <div className="flex flex-col rounded-[2rem] bg-forest p-6 text-white sm:p-8">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-lime">Riwayat 12 jam · {s.metric}</p>
                <p className="mt-2 font-display text-5xl font-light">
                  {String(s.series[s.series.length - 1]).replace('.', ',')}
                  <span className="ml-1 font-sans text-base text-white/60">{s.unit}</span>
                </p>
              </div>
              <DataTag label="data simulasi" dark />
            </div>
            <div className="my-auto py-6">
              <Sparkline data={s.series} warnAt={s.warnAt} height={170} stroke="#c9f26b" fill="rgba(201,242,107,0.14)" />
              <div className="mt-2 flex justify-between font-mono text-[10px] text-white/50">
                <span>-12 j</span><span className="text-crit">-- ambang batas</span><span>sekarang</span>
              </div>
            </div>
            <p className="rounded-2xl bg-white/8 p-4 text-sm text-white/75">
              ASA menampilkan peringatan dan riwayat. Sistem tidak memperbaiki kondisi atau menyalakan perangkat secara otomatis.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
