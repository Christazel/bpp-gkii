# 🎨 Standar Styling & Pedoman Pengembangan - Portal Resmi BPP GKII

Dokumen ini merupakan panduan standar desain, tata warna, tipografi, dan arsitektur kode yang **wajib diterapkan** saat melakukan pemeliharaan (*maintenance*) atau penambahan fitur baru pada proyek web **Portal Resmi BPP GKII**.

---

## 🏛️ 1. Identitas Visual & Skema Warna (Color Palette)

Seluruh komponen visual harus konsisten menggunakan variabel warna berikut:

| Peran Warna | Hex Code | Penggunaan Dalam Kode |
| :--- | :--- | :--- |
| **Primary Royal Blue** | `#0c35a6` | Judul utama, tombol CTA primer, border aktif, ikon utama |
| **Deep Executive Navy** | `#06195c` | Background hero, header topbar, background footer |
| **Accent Gold** | `#B8962E` | Badge kategori, highlight teks, label bidang |
| **Light Gold Accent** | `#D4AF37` | Teks highlight emas di hero, border modal emas |
| **Base Soft Background** | `#FAFCFF` | Latar belakang seksi/kartu sekunder |
| **Surface White** | `#FFFFFF` | Background kartu dokumen, modal pop-up, navbar |
| **Muted Text Slate** | `text-slate-500` | Subtitle, deskripsi, keterangan ukuran file |

---

## 🔤 2. Tipografi & Hirarki Teks (Typography Standard)

- **Font Utama**: **Gabarito** (diimpor via `next/font/google` pada `layout.tsx`).
- **Font Cadangan**: **Inter**, sans-serif.

### Ukuran & Bobot Teks Standard:
- **Heading Utama Hero (H1)**: `text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight`
- **Heading Judul Seksi (H2)**: `text-2xl sm:text-3xl font-extrabold text-[#0c35a6]`
- **Judul Kartu/Komponen (H3)**: `text-base sm:text-lg font-bold text-[#0c35a6]`
- **Badge Kategori/Kicker**: `text-[10px] font-black uppercase text-[#B8962E] tracking-wider`
- **Teks Isian/Deskripsi (Body)**: `text-xs sm:text-sm text-slate-500 leading-relaxed`

---

## 📐 3. Layout, Spacing, & Corner Radius

1. **Jarak Antar Seksi (Padding)**:
   - Seksi Utama: `py-16` hingga `py-24`
   - Panel Ringkas/Kompak: `py-12`
2. **Kontainer Utama**:
   - Standard: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
   - Panel Terfokus: `max-w-4xl mx-auto`
3. **Sudut Kelengkungan (Border Radius)**:
   - Kartu & Modal: `rounded-2xl`
   - Tombol, Input & Badge: `rounded-xl` atau `rounded-full`

---

## 🛡️ 4. Standar Keamanan Kode & Aksesibilitas (Security & A11y)

1. **Keamanan Link Eksternal**:
   - Seluruh tag `<a target="_blank">` **WAJIB** menyertakan `rel="noopener noreferrer"` untuk mencegah serangan *tabnabbing*.
2. **Aksesibilitas (A11y)**:
   - Seluruh tombol berbentuk ikon (`button` tanpa teks) **WAJIB** memiliki atribut `aria-label="Deskripsi Tombol"`.
3. **Pemisahan Data & Logika**:
   - Data statis (dokumen, pengurus, wilayah BPW, STT, warta) **TIDAK BOLEH** di-hardcode di dalam file TSX. Seluruh data wajib disimpan dalam berkas terpusat `src/data/bpp-data.json`.
4. **Verifikasi Build**:
   - Setiap kali melakukan pengkodean, jalankan perintah kompilasi `npm run build` untuk memastikan 0 type error dan 0 lint warning.

---

*Dokumen standar ini disusun untuk menjaga kebersihan, konsistensi visual, dan performa tinggi pada website BPP GKII.*
