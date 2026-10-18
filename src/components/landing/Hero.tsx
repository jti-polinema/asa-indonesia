import { IMG } from '../../data/content'
import { Button, DataTag, StatusChip } from './ui'

const cards = [
  { name: 'Smart Chicken', metric: 'Amonia', value: '26', unit: 'ppm', level: 'perhatian' as const, cls: 'lg:right-44 lg:top-0 lg:w-56 lg:-rotate-3', delay: '0s' },
  { name: 'Smart Hydroponic', metric: 'pH larutan', value: '7,4', unit: '', level: 'perhatian' as const, cls: 'lg:right-0 lg:top-16 lg:w-60 lg:rotate-3', delay: '-2s' },
  { name: 'Smart Aquaponic', metric: 'Oksigen terlarut', value: '6,2', unit: 'mg/L', level: 'normal' as const, cls: 'lg:right-52 lg:top-52 lg:w-60 lg:rotate-2', delay: '-4s' },
]

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-forest text-white">
      <img src={IMG.hero} alt="Seseorang berjalan di hamparan lahan hijau saat matahari terbenam" className="absolute inset-0 -z-20 size-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,#0a2a1a_2%,rgba(10,42,26,0.55)_40%,rgba(10,42,26,0.15)_75%),linear-gradient(to_right,rgba(10,42,26,0.6),transparent_60%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-40 lg:pb-24">
        <div className="hidden lg:block">
          <div className="absolute right-5 top-32 h-[24rem] w-[30rem]">
            {cards.map((c) => (
              <div
                key={c.name}
                style={{ animationDelay: c.delay }}
                className={`absolute animate-[drift_7s_ease-in-out_infinite] rounded-3xl border border-white/30 bg-white/15 p-5 shadow-2xl backdrop-blur-xl ${c.cls}`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-white/80">{c.name}</span>
                  <StatusChip level={c.level} />
                </div>
                <p className="mt-5 text-xs text-white/75">{c.metric}</p>
                <p className="font-display text-5xl font-light leading-none">
                  {c.value}
                  <span className="ml-1 font-sans text-base text-white/70">{c.unit}</span>
                </p>
              </div>
            ))}
            <div className="absolute bottom-0 right-0">
              <DataTag label="data simulasi" dark />
            </div>
          </div>
        </div>

        <div className="max-w-3xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs backdrop-blur">
            <span className="size-2 animate-[pulse-dot_2s_infinite] rounded-full bg-lime" />
            Prototipe — sedang dikembangkan dan diuji
          </p>
          <h1 className="font-display text-[clamp(2.8rem,7vw,6rem)] font-light leading-[0.98] tracking-tight">
            Tahu kapan budidaya <em className="font-normal text-lime">mulai berubah.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            ASA Indonesia membantu pengelola budidaya memantau kondisi lapangan melalui sensor, melihat riwayat perubahan, dan mengenali kondisi yang perlu ditindaklanjuti.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#demo">Lihat Demo</Button>
            <Button href="#solusi" variant="ghost">Pelajari Empat Solusi</Button>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden border-t border-white/15 bg-forest/70 py-4 backdrop-blur" aria-hidden>
        <div className="flex w-max animate-[marquee_34s_linear_infinite] font-mono text-xs uppercase tracking-[0.22em] text-white/70">
          {[0, 1].map((k) => (
            <div key={k} className="flex">
              {['Suhu', 'Kelembapan', 'Amonia', 'pH', 'TDS', 'Oksigen terlarut', 'Suhu air', 'Riwayat sensor', 'Ambang batas', 'Peringatan'].map((t) => (
                <span key={t + k} className="flex items-center px-6">
                  {t}
                  <span className="ml-12 size-1 rounded-full bg-lime" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
