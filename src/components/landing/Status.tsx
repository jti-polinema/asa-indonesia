import { status } from '../../data/content'
import { Eyebrow } from './ui'

const cols = [
  { title: 'Sudah dapat dicoba', items: status.ready, dot: 'bg-lime-2' },
  { title: 'Masih perlu pengujian', items: status.testing, dot: 'bg-warn' },
  { title: 'Pengembangan berikutnya', items: status.next, dot: 'bg-forest/30' },
]

export function Status() {
  return (
    <section id="status" className="bg-mint py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Eyebrow>Tahap proyek</Eyebrow>
        <h2 className="mt-5 max-w-3xl font-display text-[clamp(2rem,4.4vw,3.6rem)] font-light leading-[1.05] tracking-tight text-ink">
          Platform yang sedang <em className="text-forest-3">dikembangkan dan diuji.</em>
        </h2>
        <p className="mt-5 max-w-2xl text-muted">
          Kami membedakan dengan jelas apa yang sudah dibuat dari apa yang masih menunggu integrasi dan pengujian live. Notifikasi WhatsApp, pengendalian aktuator otomatis, prediksi AI, ROI aktual, dan perbandingan banyak wilayah belum kami tawarkan sebagai kemampuan siap pakai.
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cols.map((c) => (
            <div key={c.title} className="rounded-[1.75rem] bg-white p-7">
              <h3 className="font-display text-2xl text-ink">{c.title}</h3>
              <ul className="mt-5 space-y-3">
                {c.items.map((t) => (
                  <li key={t} className="flex gap-3 text-sm text-ink/80">
                    <span className={`mt-1.5 size-2 shrink-0 rounded-full ${c.dot}`} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
