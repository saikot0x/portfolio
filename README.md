# Md Saikot Mia — Portfolio

A dark emerald-green portfolio site with a glassy, rounded card style and an
animated network-schematic hero diagram. Content is written in plain, simple
English throughout so it reads clearly for employers in Bangladesh and
abroad. Fully static — no database, ready for GitHub Pages or Vercel.

## রান করার উপায় (local)

```bash
npx serve .
# অথবা
npm start
```

## Deploy — GitHub Pages

1. এই ফোল্ডারের ফাইলগুলো একটা নতুন GitHub repo তে push করো (root এ `index.html` থাকতে হবে)
2. Repo → Settings → Pages → Source: `main` branch, `/ (root)` সিলেক্ট করো
3. কিছুক্ষণ পর সাইট লাইভ হবে `https://<username>.github.io/<repo-name>/` এ

## Deploy — Vercel

1. [vercel.com](https://vercel.com) এ GitHub দিয়ে লগইন করো
2. "Add New Project" → এই repo সিলেক্ট করো
3. Framework preset: **Other** (static) সিলেক্ট করো, বাকি সব ডিফল্ট রেখে Deploy দাও

## SEO নোট

- `<title>`, meta description, keywords, Open Graph ট্যাগ, এবং JSON-LD structured data
  "Md Saikot Mia" নাম দিয়ে সেট করা আছে
- `robots.txt` ও `sitemap.xml` অন্তর্ভুক্ত আছে
- **গুরুত্বপূর্ণ:** deploy করার পর `index.html`, `robots.txt`, `sitemap.xml` এ থাকা
  `https://saikot0x.github.io/` URL-টা তোমার আসল ডোমেইন/GitHub Pages URL দিয়ে
  বদলে নিও

## Sections

- **Hero** — animated schematic diagram (networking → cybersecurity path with skill branch nodes)
- **About** — plain-English bio with lettered highlights
- **Skills** — tools/subjects as a simple table (skill / category / notes)
- **Training & Progress** — milestones as a simple status table
- **Projects** — 5 project cards
- **Contact** — GitHub / LinkedIn / Email (already filled in with real links)

## এডিট করার জায়গা (এখনো placeholder আছে)

`index.html` এ:
- Project cards এর `href="#"` — এখনো placeholder, real GitHub repo লিংক বসাও
- Project 05 (Draft) — নতুন প্রজেক্ট দিয়ে replace করো বা মুছে ফেলো
- `index.html`, `robots.txt`, `sitemap.xml` এ থাকা `https://saikot0x.github.io/` —
  deploy করার পর তোমার আসল URL দিয়ে বদলে নিও
