import { IMG } from '../../data/content'
import { Button } from './ui'
import logo from '../../assets/asa-logo.png'

// Ganti dengan jalur kontak tim yang benar-benar dipantau.
const CONTACT_EMAIL = 'kontak@asa-indonesia.example'

export function Footer() {
  return (
    <footer id="kontak" className="relative isolate overflow-hidden bg-forest text-white">
      <img src={IMG.riceWide} alt="" className="absolute inset-0 -z-10 size-full object-cover opacity-20" />
      <div className="mx-auto max-w-6xl px-5 pt-24 lg:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[clamp(2.2rem,5vw,4.2rem)] font-light leading-[1.05] tracking-tight">
            Ingin melihat ASA <em className="text-lime">bekerja?</em>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/70">
            Kami sedang mencari kolaborasi untuk uji lapangan, integrasi perangkat, dan masukan dari operator budidaya.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="#demo">Lihat Demo</Button>
            <Button href="#solusi" variant="ghost">Pelajari Empat Solusi</Button>
            <Button href={`mailto:${CONTACT_EMAIL}`} variant="ghost">Hubungi Tim untuk Kolaborasi</Button>
          </div>
        </div>

        <div className="mt-20 grid gap-10 border-t border-white/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <img src={logo} alt="ASA Indonesia" className="h-10 w-auto brightness-0 invert" />
            <p className="mt-2 text-sm text-white/60">Platform pemantauan budidaya yang sedang dikembangkan dan diuji.</p>
          </div>
          {[
            ['Solusi', ['Smart Maggot', 'Smart Chicken', 'Smart Aquaponic', 'Smart Hydroponic']],
            ['Halaman', ['Masalah', 'Alur data', 'Contoh kejadian', 'Tahap proyek']],
          ].map(([t, items]) => (
            <div key={t as string}>
              <p className="font-mono text-[10px] uppercase tracking-wider text-lime">{t as string}</p>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                {(items as string[]).map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-lime">Kontak</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-3 block text-sm text-white/70 underline-offset-4 hover:text-white hover:underline">
              {CONTACT_EMAIL}
            </a>
            <p className="mt-2 text-sm text-white/50">Tim / institusi: isi sesuai identitas Anda</p>
          </div>
        </div>

        <p
          aria-hidden
          className="mt-12 select-none bg-cover bg-center bg-clip-text text-center text-[clamp(7rem,34vw,26rem)] font-extrabold uppercase leading-[0.82] tracking-tighter text-transparent"
          style={{ backgroundImage: `url(${IMG.rice})` }}
        >
          ASA
        </p>
        <p className="pb-6 text-center text-xs text-white/40">© 2026 ASA Indonesia. Seluruh tampilan produk adalah contoh atau data simulasi.</p>
      </div>
    </footer>
  )
}
