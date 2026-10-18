const u = (id: string, w = 1400) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`

export const IMG = {
  hero: u('1760544013558-caa6c491e4f3', 2000),
  aerial: u('1769258958976-8852440011b8', 2000),
  rice: u('1558388556-2261d4cc1938', 1400),
  riceWide: u('1557445796-184d83fc49b9', 2000),
  chicken: u('1715034076526-79a3241d046d', 1400),
  aqua: u('1691387824643-227cc84127cf', 1400),
  pond: u('1766716968228-692bb7564666', 1600),
  hydro: u('1708796705570-33fd29ef67d0', 1400),
  tomato: u('1566218246241-934ad8b38ea6', 1200),
  maggot: u('1550811214-ab22b38fc1ca', 1400),
  field: u('1556490496-45afc7b8b8e5', 1200),
}

export type SolutionKey = 'maggot' | 'chicken' | 'aquaponic' | 'hydroponic'

export interface Solution {
  key: SolutionKey
  no: string
  name: string
  tag: string
  watches: string
  why: string
  sensors: string[]
  image?: string
  series: number[]
  metric: { label: string; unit: string; value: string; warnAt: number }
}

export const solutions: Solution[] = [
  {
    key: 'maggot',
    no: '01',
    name: 'Smart Maggot',
    tag: 'Budidaya BSF',
    watches: 'Kondisi media dan lingkungan budidaya BSF, misalnya suhu dan kelembapan.',
    why: 'Media yang terlalu panas atau terlalu basah mengubah perilaku larva. Riwayat data memperlihatkan kapan pergeseran itu dimulai.',
    sensors: ['Suhu media', 'Kelembapan'],
    image: IMG.maggot,
    series: [29, 30, 30, 31, 31, 32, 33, 34, 35, 36, 36, 35],
    metric: { label: 'Suhu media', unit: '°C', value: '35,4', warnAt: 34 },
  },
  {
    key: 'chicken',
    no: '02',
    name: 'Smart Chicken',
    tag: 'Kandang ayam',
    watches: 'Lingkungan kandang: suhu, kelembapan, dan amonia. Pakan atau air ditampilkan bila perangkat dan datanya tersedia.',
    why: 'Amonia naik perlahan di antara dua pemeriksaan. Tanpa riwayat, kenaikannya baru terasa ketika sudah jauh.',
    sensors: ['Suhu', 'Kelembapan', 'Amonia'],
    image: IMG.chicken,
    series: [6, 6, 7, 8, 8, 10, 12, 14, 17, 20, 23, 26],
    metric: { label: 'Amonia', unit: 'ppm', value: '26', warnAt: 20 },
  },
  {
    key: 'aquaponic',
    no: '03',
    name: 'Smart Aquaponic',
    tag: 'Ikan dan tanaman',
    watches: 'Kondisi air pada sistem ikan dan tanaman: pH, suhu air, dan oksigen terlarut.',
    why: 'Ikan dan tanaman berbagi satu air. Oksigen yang turun pelan-pelan memengaruhi keduanya sekaligus.',
    sensors: ['pH', 'Suhu air', 'Oksigen terlarut'],
    image: IMG.aqua,
    series: [7.1, 7.1, 7.0, 7.0, 6.9, 6.9, 6.8, 6.8, 6.7, 6.7, 6.6, 6.6],
    metric: { label: 'pH air', unit: '', value: '6,6', warnAt: 6.7 },
  },
  {
    key: 'hydroponic',
    no: '04',
    name: 'Smart Hydroponic',
    tag: 'Larutan nutrisi',
    watches: 'Larutan nutrisi dan kondisi budidaya: pH, TDS, dan suhu air.',
    why: 'Saat pH keluar dari rentang, serapan nutrisi terganggu. Mengetahui kapan mulai bergeser membantu menentukan apa yang diperiksa.',
    sensors: ['pH', 'TDS', 'Suhu air'],
    image: IMG.hydro,
    series: [6.0, 6.0, 6.1, 6.1, 6.2, 6.3, 6.4, 6.6, 6.8, 7.0, 7.2, 7.4],
    metric: { label: 'pH larutan', unit: '', value: '7,4', warnAt: 6.8 },
  },
]

export const flow = [
  { no: '01', title: 'Sensor membaca', body: 'Sensor di kandang, media, atau air membaca kondisi secara berkala.', where: 'Lapangan' },
  { no: '02', title: 'Sistem lokal mencatat', body: 'Gateway di lokasi menyimpan data dan tetap bekerja untuk operator.', where: 'Edge lokal' },
  { no: '03', title: 'Aturan memeriksa', body: 'Aturan ambang batas menilai apakah nilai masih normal, perlu perhatian, atau kritis.', where: 'Edge lokal' },
  { no: '04', title: 'Operator melihat', body: 'Peringatan dan riwayat sensor tampil di aplikasi untuk ditindaklanjuti.', where: 'Aplikasi lokal' },
  { no: '05', title: 'Pengelola meninjau', body: 'Dashboard pusat merangkum kondisi antarbidang budidaya.', where: 'Cloud' },
]

export const capabilities = [
  { title: 'Melihat kondisi terkini', body: 'Pembacaan sensor dan status untuk proyek budidaya yang dipilih.' },
  { title: 'Memeriksa riwayat sensor', body: 'Tren yang menunjukkan apakah perubahan sesaat atau berlangsung terus.' },
  { title: 'Meninjau aturan ambang batas', body: 'Nilai yang dianggap normal, perlu perhatian, atau kritis.' },
  { title: 'Melihat peringatan di aplikasi', body: 'Operator langsung menemukan kondisi yang perlu diperiksa.' },
  { title: 'Memantau aset dan sinkronisasi', body: 'Perangkat terdaftar dan status pertukaran data dengan cloud.' },
  { title: 'Melihat ringkasan manajerial', body: 'Membandingkan kondisi antarbidang budidaya dan informasi operasional.' },
]

export const audiences = [
  { who: 'Operator di lokasi', body: 'Melihat kondisi harian, peringatan, dan riwayat sensor saat memeriksa budidaya.' },
  { who: 'Pengelola atau manajer', body: 'Memakai ringkasan untuk tahu bidang mana yang perlu perhatian dan meninjau data operasional.' },
  { who: 'Tim pengembang dan mitra perangkat', body: 'Melihat bagaimana data perangkat masuk ke sistem lalu ditampilkan kepada pengguna.' },
]

export const faqs = [
  { q: 'Apakah data di demo nyata atau simulasi?', a: 'Setiap cuplikan diberi label: data perangkat, data simulasi, atau contoh tampilan. Pada tahap prototipe, sebagian besar tampilan di halaman ini adalah data simulasi.' },
  { q: 'Siapa yang dapat menggunakan sistem ini?', a: 'Operator di lokasi untuk pemantauan harian, pengelola untuk ringkasan lintas bidang, dan tim pengembang atau mitra perangkat yang ingin mengintegrasikan perangkat.' },
  { q: 'Apakah diperlukan perangkat khusus?', a: 'Dibutuhkan sensor yang sesuai bidang budidaya dan sistem lokal untuk mencatat data. Jenis sensor yang tersedia berbeda di tiap solusi.' },
  { q: 'Apakah sistem mengendalikan perangkat secara otomatis?', a: 'Belum. Saat ini ASA menampilkan kondisi, peringatan, dan riwayat. Pengendalian aktuator otomatis belum menjadi kemampuan siap pakai.' },
  { q: 'Apakah angka ROI di halaman ini aktual?', a: 'Bukan. Angka finansial yang muncul adalah estimasi sampai ada pencatatan biaya dan pendapatan yang terverifikasi.' },
]

export const status = {
  ready: [
    'Pemantauan kondisi terkini dan riwayat sensor',
    'Aturan ambang batas dan peringatan di aplikasi',
    'Ringkasan manajerial di dashboard pusat',
  ],
  testing: [
    'Migrasi dan uji menyeluruh (E2E) di lingkungan live',
    'Verifikasi visual dan aksesibilitas di browser',
    'Persistensi data ROI di backend',
  ],
  next: [
    'Pengujian lapangan lebih luas',
    'Integrasi perangkat dari mitra',
    'Analitik lintas wilayah (rencana, belum dikerjakan)',
  ],
}
