# Professional Portfolio - Sayan Banerjee

A modern, professional portfolio website built with React and Vite, showcasing AI & Backend development expertise.

## Features

- ✨ Modern, responsive design
- 🎨 Professional color scheme and typography
- 📱 Mobile-friendly interface
- ⚡ Fast performance with Vite
- 🚀 Easy GitHub Pages deployment
- 📊 Sections: Hero, About, Expertise, Projects, Availability, Contact

## Tech Stack

- React 18
- Vite
- CSS3 with custom properties
- Lucide Icons

## Development

### Prerequisites

- Node.js 16+ 
- npm, yarn, pnpm, or bun

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Option 2: Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Copy the `dist` folder contents to your `gh-pages` branch or docs folder

3. Push to GitHub and enable GitHub Pages in repository settings

## Customization

### Update Your Information

Edit the component files to customize:

- **Hero Section**: `/src/components/Hero.jsx`
- **About Section**: `/src/components/About.jsx`
- **Expertise**: `/src/components/Expertise.jsx`
- **Projects**: `/src/components/Projects.jsx`
- **Contact**: `/src/components/Contact.jsx`

### Modify Colors

Edit color variables in `/src/index.css`:

```css
:root {
  --color-accent: #3b82f6;
  --color-text-primary: #ffffff;
  /* ... more colors */
}
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

All rights reserved © 2024 Sayan Banerjee

## Contact

- Email: sayan14banerjee@gmail.com
- LinkedIn: linkedin.com/in/sayan-banerjee
- GitHub: github.com/sayan14banerjee
