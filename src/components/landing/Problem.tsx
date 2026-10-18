import { DataTag, Eyebrow } from './ui'

const pains = [
  'Kandang, media budidaya, dan air biasanya diperiksa pada waktu tertentu saja.',
  'Perubahan di antara dua pemeriksaan bisa luput.',
  'Catatan pengukuran tersebar di buku, ponsel, dan ingatan.',
  'Pengelola sulit melihat kapan sebuah masalah mulai terjadi.',
]

export function Problem() {
  return (
    <section id="masalah" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <Eyebrow>Masalah di lapangan</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.4vw,3.6rem)] font-light leading-[1.05] tracking-tight text-ink">
              Di antara dua pemeriksaan, <em className="text-forest-3">banyak yang bisa luput.</em>
            </h2>
          </div>
          <ul className="divide-y divide-forest/10 self-end">
            {pains.map((p, i) => (
              <li key={p} className="flex gap-4 py-4 text-ink/80">
                <span className="font-mono text-xs text-forest-3 pt-1">0{i + 1}</span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <figure className="mt-16 overflow-hidden rounded-[2rem] bg-mint p-5 sm:p-8">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-forest-3">Satu hari budidaya, tanpa pemantauan sensor</span>
            <DataTag label="contoh tampilan" />
          </div>
          <svg viewBox="0 0 800 240" className="w-full" role="img" aria-label="Nilai sensor melewati ambang batas di antara dua pemeriksaan tanpa terdeteksi">
            <rect x="250" y="0" width="300" height="240" fill="#a9dc3f" opacity="0.12" />
            <line x1="0" x2="800" y1="90" y2="90" stroke="#e5654b" strokeDasharray="6 6" />
            <text x="8" y="82" fontSize="11" fill="#b8402a" fontFamily="JetBrains Mono">AMBANG BATAS</text>
            <path d="M0 180 C80 176 150 170 250 165 C320 160 350 120 400 82 C450 50 500 40 550 62 C620 100 700 150 800 160" fill="none" stroke="#164d31" strokeWidth="3" strokeLinecap="round" />
            <path d="M340 130 C360 112 380 96 400 82 C450 50 500 40 550 62" fill="none" stroke="#e5654b" strokeWidth="3.5" strokeLinecap="round" />
            {[250, 550].map((x, i) => (
              <g key={x}>
                <line x1={x} x2={x} y1="0" y2="240" stroke="#0a2a1a" strokeOpacity="0.4" strokeDasharray="2 4" />
                <circle cx={x} cy={i ? 62 : 165} r="6" fill="#0a2a1a" />
                <text x={x + 10} y="226" fontSize="11" fill="#0a2a1a" fontFamily="JetBrains Mono">PEMERIKSAAN {i + 1}</text>
              </g>
            ))}
            <g>
              <circle cx="400" cy="82" r="9" fill="#e5654b" />
              <circle cx="400" cy="82" r="16" fill="none" stroke="#e5654b" opacity="0.5" />
              <text x="418" y="30" fontSize="13" fill="#0a2a1a" fontWeight="600">Mulai melewati batas — tidak ada yang melihat</text>
            </g>
          </svg>
        </figure>

        <blockquote className="mx-auto mt-16 max-w-3xl text-center font-display text-[clamp(1.4rem,2.6vw,2.2rem)] font-light italic leading-snug text-ink">
          “Ketika suhu atau kualitas air berubah, pengelola perlu mengetahui perubahan itu lebih awal dan memiliki riwayat data untuk memeriksa penyebabnya.”
        </blockquote>
      </div>
    </section>
  )
}
