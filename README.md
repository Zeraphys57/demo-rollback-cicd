# Demo Rollback CI/CD

Aplikasi web sederhana di GitHub Pages yang menghitung total belanja dan menampilkan versinya.

- `site/app.js`: kode aplikasi (nomor versi + fungsi `hitungTotal`)
- `site/index.html`: halaman yang menjalankan `app.js`
- `.github/workflows/deploy.yml`: pipeline CI/CD

## Cara kerja

- **Deploy**: setiap push ke `main` otomatis di-deploy.
- **Rollback**: tab **Actions** → **Deploy** → **Run workflow** → isi `version` dengan tag versi stabil (mis. `v4.0.0`). Workflow checkout tag itu lalu men-deploy ulang, jadi aplikasi kembali ke versi tersebut.

## Alur simulasi

| Langkah | Aksi | Halaman menampilkan |
|---|---|---|
| 1 | push `v4.0.0` (kode benar, versi stabil) | Versi 4.0.0, total Rp 90.000 (hijau) |
| 2 | push `v5.0.0` (kode salah: diskon malah ditambahkan) | Versi 5.0.0, total Rp 110.000 (merah) |
| 3 | rollback ke `v4.0.0` | Versi 4.0.0, total Rp 90.000 (hijau) |

Rollback lewat CLI:

```
gh workflow run deploy.yml -f version=v4.0.0
```

`v1.0.0` sampai `v3.0.0` adalah percobaan awal yang hanya berupa tampilan.
