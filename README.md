# Resume Website (TypeScript + React + Vite + Pico.css)

## Local Dev
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages
1) Create a **public GitHub repo** and push this project:
```bash
git init
git add .
git commit -m "Initial commit (TS + Pico.css)"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO>.git
git push -u origin main
```

2) In GitHub: **Settings → Pages → Source: GitHub Actions**.
   The workflow `.github/workflows/gh-pages.yml` builds & deploys on each push to `main`.

Notes:
- If your repo name is `<USERNAME>.github.io`, site URL is `https://<USERNAME>.github.io/`.
- Else (e.g., `resume`), URL is `https://<USERNAME>.github.io/<REPO>/`. The workflow auto-sets Vite `base`.
- `404.html` is included for SPA fallback.
