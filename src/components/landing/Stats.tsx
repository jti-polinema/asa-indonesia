const stats = [
  ['4', 'bidang budidaya', 'Maggot, ayam, aquaponic, hydroponic'],
  ['5', 'langkah data', 'Dari sensor sampai ringkasan pengelola'],
  ['6', 'kemampuan utama', 'Kondisi, riwayat, ambang batas, peringatan, aset, ringkasan'],
  ['3', 'peran pengguna', 'Operator, pengelola, tim pengembang dan mitra'],
]

export function Stats() {
  return (
    <section className="bg-forest text-white">
      <div className="mx-auto grid max-w-7xl gap-px bg-white/10 px-0 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([n, l, d]) => (
          <div key={l} className="bg-forest px-6 py-10">
            <p className="font-display text-7xl font-light text-lime">{n}</p>
            <p className="mt-2 text-lg font-medium uppercase tracking-tight">{l}</p>
            <p className="mt-1 text-sm text-white/55">{d}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
