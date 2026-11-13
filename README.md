# Sayan Banerjee — Portfolio

Personal portfolio for my backend engineering and AI application work. Built with React 18, Vite, CSS and Lucide icons, and deployed to GitHub Pages through GitHub Actions.

## Local development

Requires Node.js 18 or newer.

```sh
npm ci
npm run dev
```

Create and preview a production build with:

```sh
npm run build
npm run preview
```

## Project structure

- `src/App.jsx` — assembles the portfolio sections
- `src/components/` — individual section components and their styles (`Header`, `Hero`, `About`, `Expertise`, `Projects`, `Experience`, `Education`, `Exploring`, `Contact`, and `Footer`)
- `src/App.css` — shared layout, theme utilities and reusable buttons
- `src/index.css` — global typography, colors and base styles
- `public/` — portfolio image and favicon
- `.github/workflows/deploy.yml` — GitHub Pages build and deployment

Project details and links are maintained in their corresponding section components. Deployment runs on pushes to `main`.
