import { Link } from 'react-router'
import { Nav } from '../../components/landing/Nav'
import { Eyebrow } from '../../components/landing/ui'
import { SiteFooter } from '../../components/landing/SiteFooter'
import { intro, pages, sensorNote } from './data'

export default function SolutionsIndex() {
  return (
    <>
      <Nav />
      <main className="bg-mint pt-32">
        <section className="mx-auto max-w-6xl px-5 pb-16">
          <Eyebrow>Solusi</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.4rem,5.5vw,4.6rem)] font-light leading-[1.02] tracking-tight text-ink">
            Satu pendekatan, <em className="text-forest-3">empat bidang budidaya.</em>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">{intro}</p>
        </section>

        <section className="mx-auto grid max-w-6xl gap-5 px-5 pb-16 sm:grid-cols-2">
          {pages.map((p, i) => (
            <Link key={p.key} to={`/solusi/${p.key}`} className="group relative isolate flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-[2rem] p-7 text-white">
              <img src={p.image} alt="" className="absolute inset-0 -z-20 size-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest/90 via-forest/40 to-transparent" />
              <p className="font-mono text-xs text-lime">0{i + 1}</p>
              <h2 className="mt-2 font-display text-4xl font-light">{p.name}</h2>
              <p className="mt-2 max-w-sm text-white/80">{p.message}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.observed.items.map((s) => (
                  <span key={s} className="rounded-full bg-white/15 px-3 py-1 text-xs backdrop-blur">{s}</span>
                ))}
              </div>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-lime">
                Pelajari <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-24">
          <p className="rounded-3xl border border-forest/15 bg-white p-6 text-sm leading-relaxed text-muted">{sensorNote}</p>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
