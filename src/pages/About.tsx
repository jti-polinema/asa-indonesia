import { Link } from 'react-router'
import { Nav } from '../components/landing/Nav'
import { Eyebrow } from '../components/landing/ui'
import { SiteFooter } from '../components/landing/SiteFooter'
import { IMG } from '../data/content'

const goals = [
  ['Pemantauan berkala', 'Membantu memantau kondisi budidaya secara berkala.'],
  ['Riwayat sensor', 'Memudahkan penelusuran riwayat sensor untuk melihat kapan perubahan terjadi.'],
  ['Peringatan', 'Memberi peringatan saat nilai melewati aturan yang ditetapkan.'],
  ['Informasi keputusan', 'Menyediakan informasi yang lebih jelas untuk pengambilan keputusan.'],
]

const fields = [
  ['Smart Maggot', IMG.maggot],
  ['Smart Chicken', IMG.chicken],
  ['Smart Aquaponic', IMG.aqua],
  ['Smart Hydroponic', IMG.hydro],
]

// Isi setelah dikonfirmasi tim. Biarkan teks kosong agar tampil sebagai "menunggu konfirmasi".
const team = {
  name: '',
  institution: '',
  members: [] as { name: string; role: string }[],
}

const relations = [
  ['Dikembangkan oleh', 'Tim yang membangun dan memelihara proyek.'],
  ['Dibimbing oleh', 'Pembimbing atau dosen yang mendampingi.'],
  ['Menggunakan fasilitas', 'Laboratorium atau tempat uji yang dipakai.'],
  ['Bermitra dengan', 'Pihak yang bekerja sama secara resmi.'],
]

const Pending = ({ children }: { children: string }) => (
  <span className="rounded-full border border-dashed border-forest/30 px-3 py-1 text-xs text-muted">{children}</span>
)

export default function About() {
  return (
    <>
      <Nav />
      <header className="relative isolate overflow-hidden bg-forest pb-16 pt-36 text-white lg:pb-24">
        <img src={IMG.field} alt="" className="absolute inset-0 -z-20 size-full object-cover opacity-50" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-forest/60 to-forest" />
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow dark>Tentang kami</Eyebrow>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.6rem,6.5vw,5.4rem)] font-light leading-[1.02] tracking-tight">
            Data budidaya yang <em className="text-lime">lebih mudah dipahami.</em>
          </h1>
        </div>
      </header>

      <main className="bg-mint">
        <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1fr_1.2fr] lg:py-24">
          <div>
            <Eyebrow>Cerita singkat</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-light leading-[1.05] tracking-tight text-ink">
              Berangkat dari kebutuhan melihat kondisi budidaya.
            </h2>
          </div>
          <div className="space-y-5 leading-relaxed text-ink/80">
            <p>
              ASA Indonesia adalah proyek pengembangan platform smart farming yang bertujuan membantu pemantauan kegiatan budidaya melalui data. Dalam satu kegiatan budidaya, informasi sensor, kondisi perangkat, dan catatan kejadian bisa tersebar di banyak tempat. Proyek ini berusaha menyatukannya agar operator dapat melihat kondisi di lokasi, sementara pengelola memperoleh gambaran yang lebih menyeluruh.
            </p>
            <p>
              Kami melihat bahwa pembacaan sensor lebih bermanfaat ketika kondisinya dapat dipahami, riwayatnya dapat ditelusuri, dan perubahan pentingnya dapat segera diketahui oleh orang yang bertanggung jawab.
            </p>
            <p>
              Tujuan kami bukan menggantikan pengalaman pelaku budidaya, melainkan memberi mereka informasi yang lebih jelas untuk menilai kondisi dan menentukan tindak lanjut.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-16 lg:pb-24">
          <Eyebrow>Tujuan proyek</Eyebrow>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {goals.map(([t, d], i) => (
              <li key={t} className="rounded-[2rem] bg-white p-6">
                <p className="font-mono text-xs text-forest-3">0{i + 1}</p>
                <p className="mt-3 font-display text-2xl text-ink">{t}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-forest py-16 text-white lg:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <Eyebrow dark>Cakupan yang sedang dikembangkan</Eyebrow>
            <p className="mt-5 max-w-2xl text-white/75">
              Empat bidang budidaya menjadi konteks proyek ini. Rincian tiap bidang ada di menu Solusi.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {fields.map(([n, img]) => (
                <Link viewTransition key={n} to={`/solusi/${n.split(' ')[1].toLowerCase()}`} className="group relative isolate flex aspect-[3/4] items-end overflow-hidden rounded-3xl p-4">
                  <img src={img} alt="" style={{ viewTransitionName: `solution-image-${n.split(' ')[1].toLowerCase()}` }} className="absolute inset-0 -z-20 size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest/90 to-transparent" />
                  <span className="font-display text-xl">{n}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
          <Eyebrow>Tim dan institusi</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-light leading-[1.05] tracking-tight text-ink">
            Siapa di balik ASA Indonesia.
          </h2>

          <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_1fr]">
            <div className="rounded-[2rem] bg-white p-7">
              <p className="font-mono text-[11px] uppercase tracking-wider text-forest-3">Tim pengembang</p>
              <p className="mt-3 font-display text-3xl text-ink">{team.name || <Pending>Nama tim menunggu konfirmasi</Pending>}</p>
              <p className="mt-2 text-muted">{team.institution || <Pending>Institusi menunggu konfirmasi</Pending>}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {team.members.length
                  ? team.members.map((m) => (
                      <li key={m.name} className="rounded-2xl bg-mint p-4">
                        <p className="font-semibold text-ink">{m.name}</p>
                        <p className="text-sm text-muted">{m.role}</p>
                      </li>
                    ))
                  : [0, 1].map((n) => (
                      <li key={n} className="rounded-2xl border border-dashed border-forest/25 p-4 text-sm text-muted">Anggota dan peran menunggu konfirmasi</li>
                    ))}
              </ul>
            </div>
            <div className="rounded-[2rem] bg-white p-7">
              <p className="font-mono text-[11px] uppercase tracking-wider text-forest-3">Hubungan dengan institusi</p>
              <dl className="mt-4 divide-y divide-forest/10">
                {relations.map(([t, d]) => (
                  <div key={t} className="py-3">
                    <dt className="font-semibold text-ink">{t}</dt>
                    <dd className="text-sm text-muted">{d}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-2 text-xs text-muted">Keempatnya tidak berarti hal yang sama dan hanya ditulis bila hubungannya sudah dikonfirmasi.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-24">
          <div className="rounded-[2rem] bg-lime p-8 text-forest sm:p-10">
            <p className="font-mono text-[11px] uppercase tracking-wider">Kondisi proyek saat ini</p>
            <p className="mt-3 max-w-3xl font-display text-[clamp(1.5rem,3vw,2.3rem)] font-light leading-snug">
              ASA Indonesia masih dalam tahap prototipe. Kami terus menguji sistem, menerima masukan, dan menyempurnakannya agar sesuai dengan kebutuhan penggunaan nyata.
            </p>
            <p className="mt-4 max-w-3xl text-sm text-forest/80">
              Belum semua solusi tersedia sebagai layanan produksi di lapangan.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link viewTransition to="/kontak" className="rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white hover:bg-forest-3">Hubungi Kami</Link>
              <Link viewTransition to="/minta-demo" className="rounded-full border border-forest/30 px-6 py-3 text-sm font-semibold hover:bg-forest/10">Minta Demo</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
