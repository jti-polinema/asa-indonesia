import { audiences, IMG } from '../../data/content'
import { Eyebrow } from './ui'

export function Audience() {
  return (
    <section id="untuk-siapa" className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-80 overflow-hidden rounded-[2rem] bg-mint-2">
          <img src={IMG.rice} alt="Lahan sawah bertingkat dilihat dari udara" className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/70 to-transparent" />
          <p className="absolute bottom-6 left-6 right-6 font-display text-3xl font-light italic text-white">Tidak semua orang perlu layar yang sama.</p>
        </div>
        <div>
          <Eyebrow>Untuk siapa</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.05] tracking-tight text-ink">
            Tiga peran, <em className="text-forest-3">tiga cara memakai ASA.</em>
          </h2>
          <ul className="mt-8 divide-y divide-forest/10 border-y border-forest/10">
            {audiences.map((a, i) => (
              <li key={a.who} className="grid gap-2 py-6 sm:grid-cols-[3rem_1fr]">
                <span className="font-mono text-xs text-forest-3">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-2xl text-ink">{a.who}</h3>
                  <p className="mt-1 text-muted">{a.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
