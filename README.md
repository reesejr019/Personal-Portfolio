# Personal Portfolio — Reese Johnson

A responsive, animated personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- Single-page application with smooth scroll navigation
- Sticky glassmorphism Navbar with mobile hamburger menu
- Animated Hero section with gradient orbs and staggered text
- About section with bio, stats, and skill badges
- Projects grid with hover animations and tech stack tags
- Contact form with client-side validation (name, email, message)
- Scroll-triggered animations via Framer Motion `useInView`
- Fully responsive across desktop, tablet, and mobile

## Tech Stack

| Tool | Version |
|------|---------|
| React | 18 |
| Vite | 6 |
| Tailwind CSS | 3 |
| Framer Motion | latest |

## Setup & Development

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

## Deployment

### Vercel (recommended)
1. Push the `personal-portfolio` folder to a GitHub repository
2. Import the repo on vercel.com
3. Vercel auto-detects Vite — click Deploy

### GitHub Pages
Add `base` to `vite.config.js`:
```js
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
})
```
Then build and deploy the `dist/` folder to the `gh-pages` branch.

## Project Structure

```
src/
  components/   Navbar, Hero, About, Projects, ProjectCard, Contact, Footer, SkillBadge
  data/         projects.js, skills.js
  assets/       images/
  App.jsx
  main.jsx
  index.css
```

## Customization

- Edit `src/data/projects.js` to add your real projects
- Edit `src/data/skills.js` to update your skills list
- Replace placeholder text in `Hero.jsx` and `About.jsx` with your info
- Swap social links in `Contact.jsx` with your real URLs
