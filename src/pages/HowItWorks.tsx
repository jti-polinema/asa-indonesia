import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { Nav } from '../components/landing/Nav'
import { DataTag, Eyebrow, Sparkline } from '../components/landing/ui'
import { SiteFooter } from '../components/landing/SiteFooter'
import { IMG } from '../data/content'

const chip = (cls: string, t: string) => <span key={t} className={`rounded-full px-3 py-1 text-xs font-semibold ${cls}`}>{t}</span>

const rows = [
  { t: '14.00', v: '28,4' }, { t: '14.05', v: '28,9' }, { t: '14.10', v: '29,6' }, { t: '14.15', v: '30,8' },
]

const steps: { title: string; body: string; example: string; note?: string; visual: ReactNode }[] = [
  {
    title: 'Sensor membaca kondisi budidaya',
    body: 'Perangkat mengambil pembacaan sesuai jenis budidaya: suhu dan kelembapan pada Smart Maggot, kondisi kandang pada Smart Chicken, kondisi air pada Smart Aquaponic, serta pH dan TDS pada Smart Hydroponic. Jenis data yang tersedia mengikuti sensor yang dipasang di lokasi.',
    example: 'Perangkat sensor membaca kondisi budidaya secara berkala. Setiap solusi menggunakan parameter yang sesuai dengan kebutuhannya, sehingga pengelola dapat mengikuti perubahan kondisi berdasarkan data dari lokasi.',
    visual: (
      <ul className="grid grid-cols-2 gap-2 text-xs">
        {[['Smart Maggot', 'Suhu · Kelembapan'], ['Smart Chicken', 'Kondisi kandang'], ['Smart Aquaponic', 'Kondisi air'], ['Smart Hydroponic', 'pH · TDS']].map(([a, b]) => (
          <li key={a} className="rounded-2xl bg-white/10 p-3"><p className="font-semibold text-white">{a}</p><p className="mt-0.5 text-white/60">{b}</p></li>
        ))}
      </ul>
    ),
  },
  {
    title: 'Data diterima dan dicatat oleh sistem lokal',
    body: 'Setelah terbaca, data dikirim ke sistem ASA di lokasi budidaya. Sistem lokal mencatat nilai beserta waktunya, sehingga ASA tidak hanya menunjukkan angka terbaru: pengguna juga dapat menelusuri apa yang terjadi sebelumnya.',
    example: 'Pembacaan sensor diterima dan disimpan pada sistem lokal. Catatan waktu pada setiap pembacaan membantu pengguna mengetahui kapan suatu kondisi mulai berubah.',
    visual: (
      <table className="w-full text-left font-mono text-xs text-white">
        <thead className="text-white/50"><tr><th className="pb-2 font-normal">Waktu</th><th className="pb-2 font-normal">Suhu (°C)</th></tr></thead>
        <tbody>{rows.map((r) => <tr key={r.t} className="border-t border-white/10"><td className="py-2 text-white/70">{r.t}</td><td className="py-2">{r.v}</td></tr>)}</tbody>
      </table>
    ),
  },
  {
    title: 'Operator melihat kondisi dan riwayatnya',
    body: 'Data yang tercatat ditampilkan pada dashboard lokal. Operator bisa melihat kondisi terkini, memilih sensor yang ingin diperiksa, lalu membaca grafik riwayatnya. Di sinilah data mentah berubah menjadi informasi yang berguna.',
    example: 'Operator dapat memantau pembacaan terbaru dan membuka riwayat setiap sensor. Dengan melihat trennya, operator dapat membedakan perubahan sesaat dari kondisi yang berlangsung lebih lama.',
    note: 'Misalnya, suhu saat ini terlihat meningkat. Melalui riwayat, operator mengetahui apakah kenaikannya baru terjadi atau sudah berlangsung sejak beberapa jam lalu.',
    visual: <Sparkline data={[28, 28, 29, 29, 30, 31, 33, 34, 35, 35]} height={110} stroke="#c9f26b" fill="rgba(201,242,107,0.14)" />,
  },
  {
    title: 'Aturan pemantauan menandai kondisi yang perlu perhatian',
    body: 'ASA memiliki aturan ambang batas yang mengevaluasi pembacaan sensor. Jika suatu nilai melewati batas yang dikonfigurasi, sistem dapat menunjukkan status seperti Optimal, Warning, atau Critical dan menampilkan peringatan di aplikasi lokal. Batas tersebut diatur sesuai kebutuhan pemantauan, bukan satu angka yang otomatis cocok untuk semua lokasi.',
    example: 'Aturan pemantauan membantu mengenali pembacaan yang keluar dari batas yang ditetapkan. Ketika kondisi perlu diperiksa, operator dapat melihat status dan peringatannya di aplikasi.',
    note: 'Pada tahap prototipe, peringatan ditampilkan di aplikasi. Pengiriman melalui WhatsApp, email, atau Telegram belum menjadi bagian dari tahap ini.',
    visual: (
      <div className="flex flex-wrap gap-2">
        {chip('bg-lime/25 text-lime', 'Optimal')}{chip('bg-warn/30 text-warn', 'Warning')}{chip('bg-crit/30 text-[#ffb3a1]', 'Critical')}
      </div>
    ),
  },
  {
    title: 'Operator memeriksa dan menindaklanjuti di lapangan',
    body: 'Peringatan memberi tahu apa yang perlu dicek; operator tetap menilai kondisi sebenarnya, memeriksa riwayat, dan melakukan pemeriksaan di lokasi. Pada alur notifikasi prototipe, peringatan juga dapat ditinjau atau ditandai sedang ditangani.',
    example: 'Ketika peringatan muncul, operator dapat melihat sensor terkait, nilai pembacaan, dan waktu kejadian. Informasi tersebut membantu menentukan tindakan yang sesuai di lapangan.',
    visual: (
      <div className="rounded-2xl bg-warn/20 p-4 text-sm text-white">
        <p className="font-semibold">Amonia melewati batas</p>
        <p className="mt-1 text-xs text-white/65">Sensor amonia kandang A · 26 ppm · 14.20</p>
        <div className="mt-3 flex gap-2 text-[11px]">
          <span className="rounded-full bg-white/15 px-3 py-1">Ditinjau</span>
          <span className="rounded-full bg-lime px-3 py-1 font-semibold text-forest">Sedang ditangani</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Data yang tersedia disinkronkan untuk ringkasan pengelola',
    body: 'Sistem ASA dirancang dengan bagian lokal dan cloud. Data dari lokasi dapat disinkronkan secara berkala ke sistem pusat ketika koneksi dan konfigurasi memungkinkan. Ringkasan pusat mengikuti data yang sudah diterima, dan tidak dijanjikan terjadi pada detik yang sama dengan pembacaan sensor.',
    example: 'Data dari lokasi dapat disinkronkan ke sistem pusat untuk membantu pengelola melihat ringkasan operasional. Operator memperoleh informasi untuk pekerjaan harian, sementara pengelola dapat meninjau kondisi dari sudut pandang yang lebih luas.',
    visual: (
      <div className="flex items-center gap-3 text-xs text-white">
        <span className="rounded-2xl bg-white/10 px-4 py-3">Sistem lokal</span>
        <span className="h-px flex-1 border-t border-dashed border-lime/70" />
        <span className="rounded-2xl bg-lime px-4 py-3 font-semibold text-forest">Sistem pusat</span>
      </div>
    ),
  },
]

export default function HowItWorks() {
  return (
    <>
      <Nav />
      <header className="relative isolate overflow-hidden bg-forest pb-16 pt-36 text-white lg:pb-24">
        <img src={IMG.aerial} alt="" className="absolute inset-0 -z-20 size-full object-cover opacity-60" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-forest/60 to-forest" />
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow dark>Cara kerja</Eyebrow>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.6rem,6.5vw,5.4rem)] font-light leading-[1.02] tracking-tight">
            Membaca, mencatat, menampilkan, <em className="text-lime">memperingatkan.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">
            Enam langkah dari sensor di lapangan sampai ringkasan untuk pengelola, tanpa janji bahwa prototipe sudah mengendalikan perangkat secara otomatis.
          </p>
        </div>
      </header>

      <main className="bg-mint">
        <ol className="mx-auto max-w-6xl space-y-5 px-5 py-16 lg:py-24">
          {steps.map((s, i) => (
            <li key={s.title} className="grid gap-6 rounded-[2rem] bg-white p-6 sm:p-8 lg:grid-cols-[1.25fr_1fr] lg:gap-10">
              <div>
                <p className="font-display text-6xl font-light leading-none text-forest-3/30">0{i + 1}</p>
                <h2 className="mt-3 font-display text-[clamp(1.5rem,2.6vw,2.2rem)] font-light leading-tight text-ink">{s.title}</h2>
                <p className="mt-4 leading-relaxed text-ink/80">{s.body}</p>
                <p className="mt-4 border-l-2 border-lime-2 pl-4 leading-relaxed text-muted">{s.example}</p>
                {s.note && <p className="mt-4 text-sm leading-relaxed text-muted">{s.note}</p>}
              </div>
              <div className="flex flex-col justify-center rounded-3xl bg-forest p-5">
                {s.visual}
                <div className="mt-4"><DataTag label="contoh tampilan" dark /></div>
              </div>
            </li>
          ))}
        </ol>

        <section className="mx-auto max-w-6xl px-5 pb-16">
          <div className="grid overflow-hidden rounded-[2rem] bg-forest text-white lg:grid-cols-2">
            <div className="relative min-h-64">
              <img src={IMG.chicken} alt="Ayam di kandang" className="absolute inset-0 size-full object-cover" />
            </div>
            <div className="p-8 sm:p-10">
              <Eyebrow dark>Contoh cerita utuh</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-light">Smart Chicken, dari sensor sampai ringkasan.</h2>
              <p className="mt-4 leading-relaxed text-white/75">
                Sensor membaca kondisi kandang dan mengirimkan datanya ke sistem lokal ASA Indonesia. Operator melihat pembacaan terbaru serta riwayat perubahan pada dashboard. Ketika amonia melewati batas pemantauan yang dikonfigurasi, aplikasi menampilkan peringatan. Operator kemudian memeriksa riwayat sensor dan kondisi kandang secara langsung. Data yang tersedia dapat disinkronkan ke sistem pusat agar pengelola memiliki gambaran kondisi operasional.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-24">
          <div className="rounded-3xl border border-forest/15 p-6 text-sm leading-relaxed text-muted">
            <p className="font-semibold text-ink">Tentang angka biaya dan ROI</p>
            <p className="mt-2">
              Perhitungan finansial atau ROI membutuhkan data biaya dan produksi yang valid. Angka tersebut tidak dihasilkan langsung dari setiap pembacaan sensor, dan setiap angka yang ditampilkan di situs ini adalah estimasi atau contoh.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/minta-demo" className="rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white hover:bg-forest-3">Minta Demo</Link>
            <Link to="/solusi" className="rounded-full border border-forest/25 px-6 py-3 text-sm font-semibold text-forest hover:bg-forest/10">Lihat empat solusi</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
