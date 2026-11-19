# Demo Rollback CI/CD

Halaman statis di GitHub Pages yang menampilkan versinya. Pipeline ada di `.github/workflows/deploy.yml`.

- **Deploy**: setiap push ke `main` otomatis di-deploy.
- **Rollback**: tab **Actions** → **Deploy** → **Run workflow** → isi `version` dengan tag lama (mis. `v2.0.0`). Workflow checkout tag itu lalu men-deploy ulang, jadi halaman kembali ke versi tersebut.

## Alur simulasi

| Langkah | Aksi | Halaman menampilkan |
|---|---|---|
| 1 | push `v1.0.0` | Versi 1.0.0 (biru) |
| 2 | push `v2.0.0` | Versi 2.0.0 (hijau) |
| 3 | push `v3.0.0` (ada bug) | Versi 3.0.0 (merah, error) |
| 4 | rollback ke `v2.0.0` | Versi 2.0.0 (hijau) |

Rollback lewat CLI:

```
gh workflow run deploy.yml -f version=v2.0.0
```
