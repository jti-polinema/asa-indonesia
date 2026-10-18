# Panduan proyek ASA Indonesia

## Peta aplikasi

- `src/main.tsx` memuat CSS global dan memasang aplikasi React.
- `src/App.tsx` menyediakan `RouterProvider`.
- `src/routes.tsx` mendefinisikan rute dengan React Router `createBrowserRouter`.
- `src/pages/Home.tsx` menyusun bagian landing page dari `src/components/landing/`.
- `src/pages/solusi/` menangani daftar solusi dan halaman detail per solusi.
- `src/pages/HowItWorks.tsx` dan `src/pages/About.tsx` adalah halaman informatif.
- `src/pages/Placeholder.tsx` dipakai untuk halaman yang belum dirancang.
- `src/data/content.ts` dan `src/pages/solusi/data.ts` memuat konten serta contoh data.
- `src/index.css` memuat Tailwind CSS v4, token warna, font, dan gaya global.

## Batas klaim dan data

- Jangan menyatakan notifikasi WhatsApp/email/Telegram, kontrol aktuator otomatis, prediksi AI, ROI aktual, atau perbandingan multiwilayah telah tersedia.
- ASA memberi informasi bagi operator untuk diperiksa di lapangan; jangan menyatakan aplikasi menggerakkan perangkat fisik secara otomatis.
- Beri label pada setiap grafik, dashboard, atau angka sebagai `data perangkat`, `data simulasi`, atau `contoh tampilan`.
- Perlakukan angka biaya dan ROI sebagai estimasi yang memerlukan data biaya dan produksi yang valid.
- Batas pemantauan mengikuti konfigurasi budidaya; jenis sensor mengikuti perangkat yang benar-benar dipasang.
- Jangan mengklaim hasil panen meningkat, penggunaan luas, atau dukungan resmi institusi tanpa bukti dan persetujuan tim.
- Pertahankan pemisahan pembacaan sensor dari status perangkat diskret seperti pintu, pompa, dan lampu.
- Gunakan bahasa Indonesia untuk teks antarmuka. Istilah teknis tidak perlu masuk ke narasi utama.

## Placeholder yang harus dipertahankan sampai ada data

- `src/pages/About.tsx`: nama tim, institusi, anggota/peran, dan rumusan hubungan institusi.
- `src/components/landing/Footer.tsx`: alamat email kontak dan identitas tim.
- Rute `/fitur`, `/kontak`, dan `/minta-demo` masih kerangka; form demo belum mengirim data.
- Foto Smart Maggot masih foto stok; favicon belum memakai logo ASA.

Jangan mengisi fakta tersebut dengan tebakan. Perbarui panduan ini bila kontrak konten atau struktur aplikasi berubah.

## Perintah

- `pnpm dev` untuk server lokal.
- `pnpm typecheck` untuk pemeriksaan TypeScript.
- `pnpm build` untuk menghasilkan `dist/`.
- `pnpm preview` untuk melihat hasil build secara lokal.

Hosting statis harus mengirim ulang rute aplikasi ke `/index.html` agar URL React Router dapat dibuka langsung. Tambahkan aturan sesuai platform setelah host ditentukan.
