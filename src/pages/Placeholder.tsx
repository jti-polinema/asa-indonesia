import { Link, useParams } from 'react-router'
import { Nav } from '../components/landing/Nav'
import { solutions } from '../data/content'

const titles: Record<string, string> = {
  'cara-kerja': 'Cara Kerja',
  fitur: 'Fitur',
  'tentang-kami': 'Tentang Kami',
  kontak: 'Kontak',
  'minta-demo': 'Minta Demo',
}

export default function Placeholder({ page }: { page: string }) {
  const { key } = useParams()
  const title = page === 'solusi' ? solutions.find((s) => s.key === key)?.name ?? 'Solusi' : titles[page] ?? 'Halaman'

  return (
    <>
      <Nav />
      <main className="grid min-h-screen place-items-center bg-mint px-5 pt-28">
        <div className="max-w-xl text-center">
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted">ASA Indonesia</p>
          <h1 className="mt-4 font-display text-[clamp(2.4rem,6vw,4.5rem)] font-light leading-none tracking-tight text-ink">{title}</h1>
          <p className="mt-5 text-muted">Konten halaman ini masih dirancang.</p>
          <Link to="/" className="mt-8 inline-block rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-forest-3">
            Kembali ke beranda
          </Link>
        </div>
      </main>
    </>
  )
}
