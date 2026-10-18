import { Link } from 'react-router'

export function SiteFooter() {
  return (
    <footer className="bg-forest px-5 py-8 text-sm text-white/60">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
        <p>© 2026 ASA Indonesia. Seluruh tampilan produk adalah contoh atau data simulasi.</p>
        <Link to="/" className="text-white/80 hover:text-white">Kembali ke beranda</Link>
      </div>
    </footer>
  )
}
