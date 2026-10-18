import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import logo from '../../assets/asa-logo.png'
import { solutions } from '../../data/content'

const links = [
  ['Cara Kerja', '/cara-kerja'],
  ['Fitur', '/fitur'],
  ['Tentang Kami', '/tentang-kami'],
  ['Kontak', '/kontak'],
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const headerRef = useRef<HTMLElement>(null)
  const dd = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40)
    on()
    window.addEventListener('scroll', on, { passive: true })
    const click = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) {
        setMenu(false)
        setOpen(false)
      }
    }
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenu(false)
        setOpen(false)
      }
    }
    document.addEventListener('pointerdown', click)
    document.addEventListener('keydown', key)
    return () => {
      window.removeEventListener('scroll', on)
      document.removeEventListener('pointerdown', click)
      document.removeEventListener('keydown', key)
    }
  }, [])

  useEffect(() => {
    setOpen(false)
    setMenu(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  const light = !isHome || scrolled || open
  const link = `rounded-full px-3.5 py-2 text-sm transition-colors ${
    light ? 'text-forest/75 hover:bg-forest/10 hover:text-forest' : 'text-white/80 hover:bg-white/10 hover:text-white'
  }`

  return (
    <header ref={headerRef} className="site-nav fixed inset-x-0 top-0 z-50 box-border w-full px-3 pt-3 sm:px-4 sm:pt-4">
      <div
        className={`mx-auto flex w-full min-w-0 max-w-6xl items-center justify-between rounded-full px-4 py-2.5 pl-5 sm:pl-6 transition-colors ${
          light ? 'bg-white/95 shadow-lg backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <Link viewTransition to="/" aria-label="ASA Indonesia, ke beranda" className="flex items-center gap-2.5">
          <img src={logo} alt="ASA" className={`h-8 w-auto transition-[filter] ${light ? '' : 'brightness-0 invert'}`} />
          <span className={`hidden text-xs font-medium uppercase tracking-[0.18em] sm:inline ${light ? 'text-forest/70' : 'text-white/80'}`}>
            Indonesia
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Utama">
          <NavLink viewTransition to="/" end className={link}>Beranda</NavLink>
          <div ref={dd} className="relative">
            <button className={`${link} inline-flex items-center gap-1`} aria-expanded={menu} aria-haspopup="menu" onClick={() => setMenu(!menu)}>
              Solusi
              <svg width="12" height="12" viewBox="0 0 12 12" className={`transition-transform ${menu ? 'rotate-180' : ''}`}>
                <path d="M2 4.5 6 8l4-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {menu && (
              <div role="menu" className="menu-popover absolute left-0 top-full mt-3 w-64 rounded-3xl bg-white p-2 shadow-2xl ring-1 ring-forest/10">
                <Link viewTransition to="/solusi" role="menuitem" className="block rounded-2xl px-4 py-3 text-sm font-semibold text-forest-3 transition-colors hover:bg-mint">Semua solusi →</Link>
                {solutions.map((s) => (
                  <Link viewTransition key={s.key} to={`/solusi/${s.key}`} role="menuitem" className="block rounded-2xl px-4 py-3 transition-colors hover:bg-mint">
                    <span className="block text-sm font-semibold text-ink">{s.name}</span>
                    <span className="block text-xs text-muted">{s.tag}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          {links.map(([l, h]) => (
            <NavLink viewTransition key={h} to={h} end={h === '/'} className={link}>{l}</NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link viewTransition to="/minta-demo" className="hidden rounded-full bg-lime px-5 py-2 text-sm font-semibold text-forest transition-colors hover:bg-lime-2 sm:inline-block">
            Minta Demo
          </Link>
          <button
            className={`grid size-10 shrink-0 place-items-center rounded-full lg:hidden ${light ? 'text-forest' : 'text-white'}`}
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-controls="mobile-navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d={open ? 'M4 4l12 12M16 4 4 16' : 'M3 6h14M3 14h14'} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-navigation" aria-label="Navigasi mobile" className="mobile-menu-panel menu-popover mx-auto mt-2 w-full min-w-0 max-w-6xl rounded-3xl bg-white p-3 shadow-xl ring-1 ring-forest/10 lg:hidden">
          <Link viewTransition to="/" className="block rounded-2xl px-4 py-2.5 text-forest hover:bg-forest/10">Beranda</Link>
          <div className="my-2 h-px bg-forest/10" />
          <p className="px-4 pb-1 pt-2 font-mono text-[10px] uppercase tracking-wider text-muted">Solusi</p>
          <Link viewTransition to="/solusi" className="block rounded-2xl px-4 py-2.5 font-semibold text-forest hover:bg-forest/10">Semua solusi</Link>
          {solutions.map((s) => (
            <Link viewTransition key={s.key} to={`/solusi/${s.key}`} className="block rounded-2xl px-4 py-2.5 text-forest hover:bg-forest/10">
              {s.name}
            </Link>
          ))}
          <div className="my-2 h-px bg-forest/10" />
          {links.map(([l, h]) => (
            <Link viewTransition key={h} to={h} className="block rounded-2xl px-4 py-2.5 text-forest hover:bg-forest/10">{l}</Link>
          ))}
          <Link viewTransition to="/minta-demo" className="mt-2 block rounded-full bg-lime px-4 py-3 text-center font-semibold text-forest">Minta Demo</Link>
        </nav>
      )}
    </header>
  )
}
