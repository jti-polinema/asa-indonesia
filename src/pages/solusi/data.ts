import { IMG, type SolutionKey } from '../../data/content'

export interface SolutionPage {
  key: SolutionKey
  name: string
  message: string
  image: string
  goal: string
  problem: string
  observed: { items: string[]; note: string }
  role: string
  meaning: string
  action: string
  summary: string
  story: { metric: string; unit: string; series: number[]; warnAt: number; steps: string[]; caveat: string }
  demo: string[]
}

export const intro =
  'ASA Indonesia menghadirkan pemantauan yang disesuaikan dengan kebutuhan setiap bidang budidaya. Data sensor dicatat dan ditampilkan sebagai kondisi terkini, riwayat, serta peringatan ketika suatu nilai perlu diperiksa. Jelajahi bagaimana pendekatan ini digunakan pada budidaya maggot, ayam, aquaponic, dan hydroponic.'

export const sensorNote =
  'Jenis sensor mengikuti perangkat yang dipasang di setiap lokasi. Contoh data pada prototipe atau simulator tidak otomatis berarti seluruh sensor tersebut tersedia di semua lokasi budidaya. Batas pemantauan juga bukan angka universal: aturan ditetapkan sesuai konfigurasi budidaya masing-masing.'

export const pages: SolutionPage[] = [
  {
    key: 'maggot',
    name: 'Smart Maggot',
    message: 'Pahami perubahan kondisi lingkungan dan media budidaya BSF.',
    image: IMG.maggot,
    goal: 'Memahami kondisi lingkungan dan media budidaya maggot BSF dari waktu ke waktu.',
    problem: 'Perubahan kondisi lingkungan atau media tidak selalu terlihat saat pengelola melakukan pemeriksaan. Yang diketahui hanya angka pada saat itu, bukan apakah kondisi berubah sepanjang hari.',
    observed: {
      items: ['Suhu', 'Kelembapan'],
      note: 'Kondisi media dapat ditambahkan sesuai sensor yang benar-benar dipasang.',
    },
    role: 'Memperlihatkan pembacaan terkini, mencatat perubahannya, dan menandai nilai yang melewati aturan pemantauan.',
    meaning: 'Riwayat membantu membedakan kenaikan yang hanya sesaat dari perubahan yang berlangsung terus.',
    action: 'Pengelola tahu kapan perlu memeriksa media atau lingkungan budidaya secara langsung.',
    summary:
      'Smart Maggot membantu pengelola memahami kondisi budidaya BSF dari waktu ke waktu. Pembacaan suhu dan kelembapan ditampilkan bersama riwayatnya, sehingga perubahan kondisi lebih mudah dikenali. Ketika suatu nilai melewati batas pemantauan yang ditetapkan, pengelola mendapat petunjuk untuk memeriksa kondisi di lokasi.',
    story: {
      metric: 'Suhu',
      unit: '°C',
      series: [29, 29, 30, 30, 31, 32, 33, 34, 35, 35, 36, 35],
      warnAt: 34,
      steps: [
        'Suhu mulai meningkat pada siang hari.',
        'Pengelola membuka grafik riwayat untuk melihat apakah kenaikannya berlangsung terus atau hanya sesaat.',
        'Bila perlu, pengelola memeriksa media dan lingkungan budidaya secara langsung.',
      ],
      caveat: 'Cerita ini menunjukkan manfaat riwayat data. ASA tidak diklaim otomatis meningkatkan hasil panen.',
    },
    demo: ['Kondisi terkini suhu dan kelembapan', 'Riwayat sensor', 'Aturan ambang batas', 'Peringatan di aplikasi'],
  },
  {
    key: 'chicken',
    name: 'Smart Chicken',
    message: 'Ketahui kondisi kandang dan temukan pembacaan yang perlu diperiksa.',
    image: IMG.chicken,
    goal: 'Memantau lingkungan kandang dan kebutuhan operasional yang datanya tersedia.',
    problem: 'Kondisi kandang dapat berubah di antara pemeriksaan rutin, sementara pengelola membutuhkan riwayat untuk memahami kapan perubahan dimulai.',
    observed: {
      items: ['Suhu', 'Kelembapan', 'Amonia'],
      note: 'Data pakan, air minum, atau prebiotik hanya ditampilkan bila didukung perangkat pada implementasi tersebut. Pembacaan sensor dipisahkan dari status perangkat seperti pintu, pompa, atau lampu.',
    },
    role: 'Menyatukan kondisi kandang dalam satu pemantauan dan memberi tanda saat nilai perlu ditinjau.',
    meaning: 'Hubungan data, peringatan, lalu pemeriksaan: operator melihat perubahan, bukan hanya angka terakhir.',
    action: 'Memeriksa kandang, ventilasi, persediaan, atau perangkat terkait berdasarkan informasi yang muncul.',
    summary:
      'Smart Chicken membantu operator memantau kondisi kandang secara lebih teratur. Data seperti suhu, kelembapan, dan amonia dapat dilihat sebagai kondisi terkini maupun riwayat. Saat pembacaan memasuki status peringatan, operator dapat meninjau perubahan data dan memeriksa kondisi kandang secara langsung.',
    story: {
      metric: 'Amonia',
      unit: 'ppm',
      series: [6, 6, 7, 8, 8, 10, 12, 14, 17, 21, 24, 26],
      warnAt: 20,
      steps: [
        'Nilai amonia naik melewati batas yang dikonfigurasi.',
        'Operator melihat peringatan dan membuka riwayat amonia.',
        'Operator melakukan pemeriksaan di kandang.',
      ],
      caveat: 'Alurnya berhenti pada pemeriksaan oleh operator. ASA tidak memperbaiki kondisi kandang secara otomatis.',
    },
    demo: ['Kondisi terkini kandang', 'Riwayat amonia', 'Aturan ambang batas', 'Peringatan di aplikasi'],
  },
  {
    key: 'aquaponic',
    name: 'Smart Aquaponic',
    message: 'Ikuti perubahan kualitas air pada sistem ikan dan tanaman.',
    image: IMG.aqua,
    goal: 'Memantau kondisi air pada budidaya yang menggabungkan ikan dan tanaman.',
    problem: 'Kondisi air perlu dipantau secara berkala dan perubahannya perlu ditelusuri. Satu perubahan pada air relevan untuk keseluruhan sistem, bukan hanya salah satu bagiannya.',
    observed: {
      items: ['pH', 'Oksigen terlarut', 'Suhu air'],
      note: 'Parameter lain dapat ditampilkan sesuai sensor yang tersedia pada instalasi.',
    },
    role: 'Menyimpan riwayat kondisi air dan membantu menunjukkan pembacaan yang memerlukan perhatian.',
    meaning: 'Operator memiliki konteks data tentang sejak kapan kondisi air bergeser.',
    action: 'Memutuskan untuk memeriksa kolam, sirkulasi, atau perangkat pengukuran.',
    summary:
      'Smart Aquaponic membantu pengelola mengikuti perubahan kondisi air dalam satu sistem budidaya. Pembacaan pH, oksigen terlarut, dan suhu air dapat diamati bersama riwayatnya. Peringatan dari aturan yang dikonfigurasi membantu operator mengetahui kondisi mana yang perlu diperiksa lebih lanjut.',
    story: {
      metric: 'pH air',
      unit: '',
      series: [7.1, 7.1, 7.0, 7.0, 6.9, 6.9, 6.8, 6.8, 6.7, 6.6, 6.6, 6.5],
      warnAt: 6.7,
      steps: [
        'Pembacaan pH bergeser dari rentang aturan.',
        'Operator melihat sejak kapan pergeseran terjadi.',
        'Operator memeriksa kondisi air dan memastikan pembacaan sensornya.',
      ],
      caveat: 'ASA tidak diklaim memperbaiki komposisi air secara otomatis.',
    },
    demo: ['Kondisi terkini kualitas air', 'Riwayat pH dan suhu air', 'Aturan ambang batas', 'Peringatan di aplikasi'],
  },
  {
    key: 'hydroponic',
    name: 'Smart Hydroponic',
    message: 'Pantau perubahan larutan nutrisi dan kondisi sistem tanam.',
    image: IMG.hydro,
    goal: 'Memantau larutan nutrisi dan kondisi sistem tanam secara berkelanjutan.',
    problem: 'Perubahan larutan nutrisi perlu diketahui dan dibandingkan dengan riwayat, bukan hanya dibaca sekali.',
    observed: {
      items: ['pH', 'TDS', 'Suhu air'],
      note: 'pH menunjukkan tingkat keasaman larutan, sedangkan TDS memberi gambaran konsentrasi zat terlarut. Sensor lingkungan, cahaya, atau aliran dapat dijelaskan bila tersedia pada perangkat yang digunakan.',
    },
    role: 'Menunjukkan tren dan menandai kondisi yang keluar dari aturan pemantauan.',
    meaning: 'Tren memperlihatkan kapan perubahan terjadi, sehingga pemeriksaan bisa lebih terarah.',
    action: 'Meninjau data lalu memeriksa larutan atau sistem tanam di lokasi.',
    summary:
      'Smart Hydroponic membantu pengelola memantau perubahan larutan nutrisi secara berkelanjutan. Data pH, TDS, dan suhu air ditampilkan sebagai kondisi terkini dan riwayat. Ketika pembacaan menyimpang dari aturan yang ditetapkan, pengelola dapat mengetahui kapan perubahan terjadi dan menentukan pemeriksaan yang diperlukan.',
    story: {
      metric: 'TDS',
      unit: 'ppm',
      series: [780, 790, 800, 830, 870, 920, 980, 1040, 1090, 1130, 1150, 1170],
      warnAt: 1000,
      steps: [
        'TDS berubah sepanjang hari dan masuk status peringatan.',
        'Pengelola membuka grafik dan membandingkannya dengan pembacaan sebelumnya.',
        'Pengelola memeriksa larutan nutrisi.',
      ],
      caveat: 'Pada prototipe, pengamatan proses dan keluaran perangkat yang bersifat simulasi tetap disebut simulasi, bukan tindakan otomatis pada perangkat fisik.',
    },
    demo: ['Kondisi terkini larutan', 'Riwayat pH dan TDS', 'Aturan ambang batas', 'Peringatan di aplikasi'],
  },
]
