# AstroWind Project

A modern web application built with Astro 5.0 and Tailwind CSS, providing a robust foundation for building fast, SEO-friendly websites.

## 🚀 Tech Stack

- **Framework:** Astro v5.3.1
- **Styling:** Tailwind CSS v3.4.17
- **Language:** TypeScript v5.7.3
- **Node Version:** ^18.17.1 || ^20.3.0 || >= 21.0.0

### Key Dependencies

- **UI/Styling:**

  - @fontsource-variable/inter
  - @tailwindcss/typography
  - tailwind-merge

- **SEO & Analytics:**

  - @astrolib/analytics
  - @astrolib/seo
  - @astrojs/sitemap

- **Content:**
  - @astrojs/mdx
  - astro-embed
  - astro-icon

## 📁 Project Structure

```
src/
├── assets/        # Static assets (images, fonts, etc.)
├── components/    # Reusable UI components
├── content/       # MDX and other content files
├── data/         # Data files and configurations
├── layouts/      # Page layouts and templates
├── pages/        # Route pages
└── utils/        # Utility functions and helpers
```

## 🛠️ Configuration Files

- `astro.config.ts` - Astro configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint rules
- `.prettierrc.cjs` - Code formatting rules

## 🔧 Development Tools

- ESLint v9.18.0 for code linting
- Prettier v3.4.2 for code formatting
- Various optimization plugins:
  - astro-compress
  - sharp
  - reading-time

## 🚀 Getting Started

1. **Prerequisites**

   - Node.js (version specified in engines)
   - npm/yarn/pnpm

2. **Installation**

   ```bash
   npm install
   ```

3. **Development**

   ```bash
   npm run dev
   ```

4. **Build**

   ```bash
   npm run build
   ```

5. **Preview**
   ```bash
   npm run preview
   ```

## 🧰 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Run all checks (astro, eslint, prettier)
- `npm run fix` - Fix eslint and prettier issues

## 🔄 CI/CD

The project includes configuration files for:

- Docker (`Dockerfile`, `docker-compose.yml`)
- Vercel (`vercel.json`)
- Netlify (`netlify.toml`)
- GitHub Actions (`.github/`)

## 📝 License

See [LICENSE.md](LICENSE.md) for details.

---

For more detailed documentation and guides, please refer to the individual component and utility files within the project.
