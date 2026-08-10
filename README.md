# Portfolio — Setup Notes

Built with React + TypeScript + Ant Design, dark "signal" theme (electric
cyan / violet glow on near-black), matching the structure you already had.

## 1. Install dependencies

```bash
npm install antd @ant-design/icons
```

(Assumes you already have `react`, `react-dom`, and Vite/TypeScript set up.)

## 2. Fonts

`index.css` pulls Space Grotesk, Inter, and IBM Plex Mono from Google Fonts
via `@import`. For production, consider self-hosting or using `<link>` tags
in `index.html` instead of the CSS `@import` for faster first paint.

## 3. Replace placeholder content

- `src/assets/profile.jpg` / `project1.png` — generated placeholder images;
  swap in your real photo and project screenshots (keep same filenames or
  update the imports in `Hero.tsx` / `data/projects.ts`).
- `src/data/*.ts` — your name, bio, skills, work history, and projects.
- `src/components/Header.tsx` — the "Your Name" brand mark.
- `src/sections/Contact.tsx` / `Footer.tsx` — your real email and location.
- `src/data/socialLinks.ts` — your real profile URLs.
- Contact form currently just logs to console + shows a success toast —
  wire `handleFinish` in `Contact.tsx` up to your email service (e.g.
  Formspree, EmailJS, or your own API) when ready.

## 4. Run

```bash
npm run dev
```

## Design tokens

All colors, spacing, type, and motion live in `src/styles/theme.css` as CSS
custom properties — change the palette or scale in one place and it
propagates everywhere, including the antd `ConfigProvider` token overrides
in `App.tsx` (keep those two in sync if you retheme).
"# Web-Portfolio" 
"# MyPortfolio" 
