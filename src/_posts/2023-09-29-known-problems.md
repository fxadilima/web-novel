---
layout: post
title:  "Link Problems"
date:   2023-09-29 21:30:09 +0700
categories: web-novel problems
excerpt_separator: <!--more-->
author: FX. Adi Lima
---

Banyak _link_ yang bermasalah di dalam buku, khususnya yang mengacu ke buku yang berlainan.
Ini karena sebelumnya saya menulisnya seperti contoh berikut:

```markdown
Salah satu [narasi atau dialog](buku-referensi.md#nama-tag "Narasi atau dialog secara singkat...").
```

Jika kita menghilangkan `.md` pada link tersebut, maka problem ini akan hilang[^problem-1].

<!--more-->

Tetapi masalahnya adalah, buku ini terdiri dari 40 jilid, belum termasuk artikel-artikel pendukungnya.
Memerlukan waktu untuk meneliti semuanya kembali.

[^problem-1]: Di dalam GitHub cara penulisan seperti itu dianggap sah.

