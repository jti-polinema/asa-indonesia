# ASA Indonesia

Landing page berbahasa Indonesia untuk memperkenalkan pemantauan budidaya ASA Indonesia dan empat solusi: Smart Maggot, Smart Chicken, Smart Aquaponic, dan Smart Hydroponic.

## Teknologi

- React 19 dan TypeScript
- React Router dengan `createBrowserRouter`
- Vite 8
- Tailwind CSS 4

## Menjalankan lokal

Gunakan Node.js 22.12 atau lebih baru dan pnpm 10.34.3 (versi tercatat di `.mise.toml`).

```sh
pnpm install
pnpm dev
```

Perintah proyek:

```sh
pnpm typecheck
pnpm build
pnpm preview
```

Hasil build berada di `dist/`.

## Rute dan hosting

Rute aplikasi didefinisikan di `src/routes.tsx`. Vite menjalankan aplikasi dalam mode SPA, sehingga rute React Router berfungsi di server pengembangan dan preview. Untuk hosting statis, konfigurasi host perlu mengarahkan permintaan rute aplikasi yang tidak cocok dengan berkas fisik kembali ke `/index.html`. Aturan spesifik dapat ditambahkan setelah platform hosting dipilih.

Konfigurasi build saat ini memakai root domain (`base: '/'`). Jika situs nantinya dipasang di subpath, sesuaikan `base` di `vite.config.ts` dengan alamat pemasangannya.

## Batas implementasi saat ini

Halaman `/fitur`, `/kontak`, dan `/minta-demo` masih berupa kerangka. Cuplikan dashboard di beranda adalah simulasi dan belum ada mekanisme untuk mengirim permintaan demo. Foto dan font tertentu dimuat dari Unsplash dan Google Fonts, jadi memerlukan akses internet. Data grafik harus tetap diberi label sesuai sumbernya (`data perangkat`, `data simulasi`, atau `contoh tampilan`).
