import { useEffect, useRef, useState } from 'react'

const stats = [
  ['4', 'bidang budidaya', 'Maggot, ayam, aquaponic, hydroponic'],
  ['5', 'langkah data', 'Dari sensor sampai ringkasan pengelola'],
  ['6', 'kemampuan utama', 'Kondisi, riwayat, ambang batas, peringatan, aset, ringkasan'],
  ['3', 'peran pengguna', 'Operator, pengelola, tim pengembang dan mitra'],
]

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const target = Number(value)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      setDisplayValue(target)
      return
    }

    let frame = 0
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()

      const start = performance.now()
      const animate = (now: number) => {
        const progress = Math.min((now - start) / 1050, 1)
        const eased = 1 - Math.pow(1 - progress, 4)
        setDisplayValue(Math.round(target * eased))
        if (progress < 1) frame = requestAnimationFrame(animate)
      }

      frame = requestAnimationFrame(animate)
    }, { threshold: 0.65 })

    observer.observe(element)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value])

  return <span ref={ref} aria-hidden="true" className="stat-number">{displayValue}</span>
}

export function Stats() {
  return (
    <section className="bg-forest text-white">
      <div className="mx-auto grid max-w-7xl gap-px bg-white/10 px-0 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([n, l, d]) => (
          <div key={l} className="bg-forest px-6 py-10">
            <p className="font-display text-7xl font-light text-lime"><AnimatedNumber value={n} /><span className="sr-only">{n}</span></p>
            <p className="mt-2 text-lg font-medium uppercase tracking-tight">{l}</p>
            <p className="mt-1 text-sm text-white/55">{d}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
