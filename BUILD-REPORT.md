# Build Report — The Self-Checkout Is Judging You

- Slug: `u-motasimfuad-the-self-checkout-is-judging-you-b71130d6`
- Judul: "The Self-Checkout Is Judging You" — $2, 10 tempat, tutup 27 Nov 2026 01:20 WIB
- Repo GitHub (dibuat parent): `wayangprint/makefun-self-checkout-judging-01`
- Folder kerja: `~/workspace/superteam-raenest/makefun/self-checkout-judging-01/`

## Baris entri

> Twelve yoghurts and zero shame. Please place your dignity in the bagging area — it, too, is an unexpected item.

- Jumlah karakter: **111** (maks 200) — dihitung dengan Python `len()` atas UTF-8, bukan kira-kira
- Jumlah byte: 113 (em dash U+2014 = 2 byte)
- Satu baris, tanpa newline di akhir `entry.txt`
- sha256 `entry.txt`: `760210a742cae0263767fd2096a9b15f7184057f6fadc6d58616c47b2943c83e`

## Determinisme (2x run)

- Run 1: `MAKEFUN_OUTPUT_DIR=/tmp/sco-run1 node main.ts` → sha256 `760210a7…3c83e`
- Run 2: `MAKEFUN_OUTPUT_DIR=/tmp/sco-run2 node main.ts` → sha256 `760210a7…3c83e`
- `entry.txt` di folder repo: sha256 sama `760210a7…3c83e`
- Hasil: **byte-identik** (`cmp` lolos). Node v24.22.1 lokal; program hanya memakai stdlib Node, tanpa network/random/clock.

## Revisi (thinking_revised)

- v1: struktur `SETUP`/`PUNCHLINE` + `singleLine()` + `outputFolders()` + `emit()`.
- v2 (revisi nyata, struktur berbeda): klausa berlabel `CLAUSES` (role `basket`/`verdict`) + `buildRemark()` (map/join) + `resolveOutputDir()` (satu direktori) + `publish()`. Teks baris tidak berubah; struktur, nama fungsi, dan komentar semuanya berbeda. Dijalankan ulang dan terverifikasi deterministik setelah revisi.

## Kit

- Kit bundle_sha256: `7cd04cc81e4c2622c36e12fd4473b517bf8256345b9d39b32424575013b2015d`
- Escrow `rules_sha256` (requirements.json): `7cd04cc81e4c2622c36e12fd4473b517bf8256345b9d39b32424575013b2015d`
- Kecocokan: **COCOK**

## Commit lokal

- Commit SHA: `0fcbe995acc6d69874691a0142079412f2b7b667`
- git user: `wayangprint <243255693+wayangprint@users.noreply.github.com>`

## Daftar file

- `main.ts` — entrypoint Node 22 (stdlib saja)
- `entry.txt` — satu baris entri (111 karakter, tanpa trailing newline)
- `README.md` — 3 badge live make.fun + link bounty + kutip baris + cara run
- `LICENSE` — MIT, baris pertama `SPDX-License-Identifier: MIT`
- `.makefun/owner.json` — `{"wallet": "2cy7DSBQwGoXa3w7qEr9VgtxhjLCF8KqpCRc3opcpFTt"}`
- `requirements.json` — requirements kompetisi (disimpan koordinator)
- `BUILD-REPORT.md` — laporan ini

## Catatan

- Tidak menjalankan bundle / kit check / git push / submit (kerja parent).
- Tidak membuat repo GitHub, tidak memakai browser.
- Tidak menyentuh `makefun-keypair.json` atau `~/.makefun/credentials`.
