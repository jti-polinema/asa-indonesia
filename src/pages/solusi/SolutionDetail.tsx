import { Link, Navigate, useParams } from 'react-router'
import { Nav } from '../../components/landing/Nav'
import { DataTag, Eyebrow, Sparkline } from '../../components/landing/ui'
import { SiteFooter } from '../../components/landing/SiteFooter'
import { pages, sensorNote } from './data'

export default function SolutionDetail() {
  const { key } = useParams()
  const i = pages.findIndex((p) => p.key === key)
  if (i < 0) return <Navigate to="/solusi" replace />
  const p = pages[i]
  const others = pages.filter((x) => x.key !== p.key)
  const last = p.story.series[p.story.series.length - 1]

  const facts: [string, string][] = [
    ['Tujuan budidaya', p.goal],
    ['Masalah yang dipantau', p.problem],
    ['Peran ASA', p.role],
    ['Arti data bagi pengguna', p.meaning],
  ]

  return (
    <>
      <Nav />
      <header className="relative isolate overflow-hidden bg-forest pb-16 pt-36 text-white lg:pb-24">
        <img src={p.image} alt="" style={{ viewTransitionName: `solution-image-${p.key}` }} className="absolute inset-0 -z-20 size-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-forest/70 via-forest/60 to-forest" />
        <div className="mx-auto max-w-6xl px-5">
          <Link viewTransition to="/solusi" className="text-sm text-white/70 hover:text-white">← Semua solusi</Link>
          <p className="mt-8 font-mono text-xs text-lime">Solusi 0{i + 1}</p>
          <h1 className="mt-3 font-display text-[clamp(2.8rem,7vw,6rem)] font-light leading-none tracking-tight">{p.name}</h1>
          <p className="mt-5 max-w-2xl font-display text-2xl font-light italic text-white/90">{p.message}</p>
        </div>
      </header>

      <main className="bg-mint">
        <section className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
          <p className="max-w-3xl font-display text-[clamp(1.4rem,2.6vw,2rem)] font-light leading-snug text-ink">{p.summary}</p>
        </section>

        <section className="mx-auto grid max-w-6xl gap-4 px-5 lg:grid-cols-3">
          <div className="rounded-[2rem] bg-forest p-7 text-white lg:row-span-2">
            <Eyebrow dark>Data yang diamati</Eyebrow>
            <ul className="mt-5 space-y-2">
              {p.observed.items.map((s) => (
                <li key={s} className="flex items-center gap-3 font-display text-3xl font-light">
                  <span className="size-2 rounded-full bg-lime" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-white/65">{p.observed.note}</p>
          </div>
          {facts.map(([t, d]) => (
            <div key={t} className="rounded-[2rem] bg-white p-7">
              <p className="font-mono text-[11px] uppercase tracking-wider text-forest-3">{t}</p>
              <p className="mt-3 leading-relaxed text-ink/85">{d}</p>
            </div>
          ))}
          <div className="rounded-[2rem] bg-lime p-7 text-forest lg:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-wider">Tindakan pengguna</p>
            <p className="mt-3 text-lg font-medium leading-relaxed">{p.action}</p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
          <Eyebrow>Contoh kejadian</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.9rem,4vw,3.2rem)] font-light leading-[1.05] tracking-tight text-ink">
            Dari data, ke peringatan, ke <em className="text-forest-3">pemeriksaan.</em>
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_1.1fr]">
            <ol className="space-y-3">
              {p.story.steps.map((s, n) => (
                <li key={s} className="flex gap-4 rounded-3xl bg-white p-5">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-forest font-mono text-xs text-lime">{n + 1}</span>
                  <p className="text-ink/85">{s}</p>
                </li>
              ))}
              <li className="rounded-3xl border border-dashed border-forest/25 p-5 text-sm text-muted">{p.story.caveat}</li>
            </ol>
            <div className="rounded-[2rem] bg-forest p-6 text-white sm:p-8">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-lime">Riwayat · {p.story.metric}</p>
                  <p className="mt-2 font-display text-5xl font-light">
                    {String(last).replace('.', ',')}
                    <span className="ml-1 font-sans text-base text-white/60">{p.story.unit}</span>
                  </p>
                </div>
                <DataTag label="data simulasi" dark />
              </div>
              <div className="py-6">
                <Sparkline data={p.story.series} warnAt={p.story.warnAt} height={170} stroke="#c9f26b" fill="rgba(201,242,107,0.14)" />
                <div className="mt-2 flex justify-between font-mono text-[10px] text-white/50">
                  <span>awal</span><span className="text-crit">-- contoh batas pemantauan</span><span>sekarang</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-16">
          <Eyebrow>Yang bisa didemonstrasikan</Eyebrow>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {p.demo.map((d) => (
              <li key={d} className="rounded-3xl bg-white p-5 text-sm font-medium text-ink">{d}</li>
            ))}
          </ul>
          <p className="mt-6 rounded-3xl border border-forest/15 p-5 text-sm leading-relaxed text-muted">{sensorNote}</p>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-24">
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-[2rem] bg-forest p-8 text-white">
            <p className="font-display text-2xl font-light">Ingin melihat {p.name} bekerja?</p>
            <Link viewTransition to="/minta-demo" className="rounded-full bg-lime px-6 py-3 text-sm font-semibold text-forest hover:bg-lime-2">Minta Demo</Link>
          </div>
          <p className="mt-12 font-mono text-[11px] uppercase tracking-wider text-muted">Solusi lainnya</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {others.map((o) => (
              <Link viewTransition key={o.key} to={`/solusi/${o.key}`} className="rounded-3xl bg-white p-5 transition-colors hover:bg-mint-2">
                <p className="font-display text-xl text-ink">{o.name}</p>
                <p className="mt-1 text-sm text-muted">{o.message}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
