import { useState } from 'react'
import { solutions, IMG } from '../../data/content'
import { DataTag, Eyebrow, Sparkline } from './ui'

export function Solutions() {
  const [active, setActive] = useState(1)

  return (
    <section id="solusi" className="relative isolate overflow-hidden py-24 lg:py-32">
      <img src={IMG.aerial} alt="" className="absolute inset-0 -z-20 size-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,#fbfdf7_0%,rgba(251,253,247,0.55)_22%,rgba(10,42,26,0.35)_100%)]" />

      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-end gap-6 lg:grid-cols-2">
          <div>
            <Eyebrow>Empat bidang budidaya</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,4.2rem)] font-light leading-[1.02] tracking-tight text-ink">
              Dari media maggot sampai larutan nutrisi.
            </h2>
          </div>
          <p className="max-w-md text-ink/75 lg:justify-self-end">
            Bukan satu dashboard untuk semua kebutuhan. Setiap solusi menjawab dua hal: apa yang diamati, dan mengapa perubahan pada data itu perlu diperhatikan.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-3 lg:h-[36rem] lg:flex-row">
          {solutions.map((s, i) => {
            const on = i === active
            const over = s.key === 'aquaponic' ? Number(s.metric.value.replace(',', '.')) < s.metric.warnAt : Number(s.metric.value.replace(',', '.')) > s.metric.warnAt
            return (
              <article
                key={s.key}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                tabIndex={0}
                aria-label={s.name}
                className={`group relative cursor-pointer overflow-hidden rounded-[2rem] shadow-2xl outline-offset-4 transition-[flex,height] duration-700 ease-[cubic-bezier(.2,.8,.2,1)] ${
                  on ? 'h-[34rem] lg:h-auto lg:flex-[3.4]' : 'h-24 lg:h-auto lg:flex-1'
                }`}
              >
                <img src={s.image} alt={`${s.name}: ${s.tag}`} className="absolute inset-0 size-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className={`absolute inset-0 transition-colors ${on ? 'bg-gradient-to-t from-forest/90 via-forest/20 to-transparent' : 'bg-forest/45'}`} />

                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 text-white">
                  <span className="font-mono text-xs">{s.no}</span>
                  <span className={`rounded-full bg-white/20 px-3 py-1 text-xs backdrop-blur ${on ? '' : 'hidden lg:inline-block lg:opacity-0'}`}>{s.tag}</span>
                </div>

                <h3
                  className={`absolute left-5 font-display text-white transition-all duration-500 ${
                    on ? 'bottom-[15.5rem] text-4xl font-light italic' : 'bottom-5 text-2xl lg:bottom-6 lg:left-1/2 lg:origin-bottom-left lg:-rotate-90 lg:whitespace-nowrap'
                  }`}
                >
                  {s.name}
                </h3>

                <div
                  className={`absolute inset-x-3 bottom-3 rounded-3xl border border-white/30 bg-white/15 p-5 text-white backdrop-blur-xl transition-all duration-500 ${
                    on ? 'translate-y-0 opacity-100 delay-200' : 'pointer-events-none translate-y-6 opacity-0'
                  }`}
                >
                  <div className="grid gap-5 sm:grid-cols-[1.2fr_1fr]">
                    <div className="space-y-3 text-sm leading-relaxed">
                      <p><span className="font-mono text-[10px] uppercase tracking-wider text-lime">Diamati · </span>{s.watches}</p>
                      <p><span className="font-mono text-[10px] uppercase tracking-wider text-lime">Penting karena · </span>{s.why}</p>
                    </div>
                    <div className="hidden sm:block">
                      <div className="flex items-end justify-between">
                        <div>
                          <p className="text-xs text-white/75">{s.metric.label}</p>
                          <p className="font-display text-3xl font-light">{s.metric.value}<span className="ml-1 font-sans text-xs">{s.metric.unit}</span></p>
                        </div>
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${over ? 'bg-warn/40 text-white' : 'bg-lime/30 text-white'}`}>{over ? 'Perhatian' : 'Normal'}</span>
                      </div>
                      <Sparkline data={s.series} warnAt={s.metric.warnAt} stroke="#c9f26b" fill="rgba(201,242,107,0.18)" height={52} className="mt-1" />
                      <div className="mt-1"><DataTag label="data simulasi" dark /></div>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
