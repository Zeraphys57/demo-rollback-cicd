# Demo Rollback CI/CD

Halaman HTML sederhana di GitHub Pages yang menampilkan versinya.

- `site/index.html`: kode aplikasi
- `.github/workflows/deploy.yml`: pipeline CI/CD

## Cara kerja

- **Deploy**: setiap push ke `main` otomatis di-deploy.
- **Rollback**: tab **Actions** → **Deploy** → **Run workflow** → isi `version` dengan tag versi stabil (mis. `v5.0.0`). Workflow checkout tag itu lalu men-deploy ulang, jadi halaman kembali ke versi tersebut.

## Alur simulasi

| Langkah | Aksi | Halaman menampilkan |
|---|---|---|
| 1 | push `v5.0.0` (kode benar, versi stabil) | Versi 5.0.0, daftar produk lengkap |
| 2 | push `v6.0.0` (kode salah: komentar HTML `<!--` tidak ditutup) | Versi 6.0.0, daftar produk hilang |
| 3 | rollback ke `v5.0.0` | Versi 5.0.0, daftar produk lengkap |

Rollback lewat CLI:

```
gh workflow run deploy.yml -f version=v5.0.0
```

Jalankan di localhost:

```
python -m http.server 8000 --directory site
```

lalu buka http://localhost:8000

`v1.0.0` sampai `v4.0.0` adalah percobaan awal.
