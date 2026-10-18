import { useState } from 'react'
import { faqs } from '../../data/content'
import { Eyebrow } from './ui'

export function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.05] tracking-tight text-ink">
            Pertanyaan yang <em className="text-forest-3">sering muncul.</em>
          </h2>
        </div>
        <div className="divide-y divide-forest/10 border-y border-forest/10">
          {faqs.map((f, i) => {
            const on = open === i
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(on ? -1 : i)}
                  aria-expanded={on}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-xl text-ink"
                >
                  {f.q}
                  <span className={`grid size-9 shrink-0 place-items-center rounded-full border transition-all ${on ? 'rotate-45 border-forest bg-forest text-lime' : 'border-forest/25'}`}>+</span>
                </button>
                <div className={`grid transition-all duration-300 ${on ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'}`}>
                  <p className="overflow-hidden text-muted">{f.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
