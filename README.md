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

## Rute dan GitHub Pages

Rute aplikasi didefinisikan di `src/routes.tsx` menggunakan React Router. Untuk GitHub Pages, workflow `.github/workflows/deploy-pages.yml` membangun situs ke `dist/`, memakai awalan `/asa-indonesia/`, lalu mengunggah hasilnya. Workflow juga menyalin `index.html` sebagai `404.html` agar rute aplikasi dapat dibuka langsung atau dimuat ulang.

Di GitHub, buka **Settings → Pages → Build and deployment**, lalu pilih **GitHub Actions** sebagai sumber publikasi. Untuk pengembangan lokal, `pnpm dev` tetap menggunakan root (`/`).

## Batas implementasi saat ini

Halaman `/fitur`, `/kontak`, dan `/minta-demo` masih berupa kerangka. Cuplikan dashboard di beranda adalah simulasi dan belum ada mekanisme untuk mengirim permintaan demo. Foto dan font tertentu dimuat dari Unsplash dan Google Fonts, jadi memerlukan akses internet. Data grafik harus tetap diberi label sesuai sumbernya (`data perangkat`, `data simulasi`, atau `contoh tampilan`).
