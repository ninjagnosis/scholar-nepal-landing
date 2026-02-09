# Scholar Nepal Pvt. Ltd. - Official Website

A modern, bilingual (English/Nepali) website for Scholar Nepal Pvt. Ltd., a multi-disciplinary consulting firm providing specialized expertise in sustainable development.

## 🌐 Live URL

- **English:** http://localhost:4321/
- **Nepali:** http://localhost:4321/ne/

## 🏢 About Scholar Nepal

Scholar Nepal Pvt. Ltd. is a multi-disciplinary consulting firm established in 2013, committed to providing knowledge-based solutions and specialized expertise for sustainable development across Nepal and beyond.

**Registration:** 113492/069/070  
**Location:** Kirtipur-5, Kathmandu, Nepal  
**Email:** scholar.nepal@hotmail.com  
**Phone:** 977-1-5268030

## ✨ Features

- 🌍 **Bilingual Support:** Full English and Nepali translations
- 🎨 **Modern Design:** Professional corporate aesthetic with sharp corners
- 📱 **Fully Responsive:** Works seamlessly on desktop, tablet, and mobile
- ⚡ **Fast Performance:** Built with Astro for optimal speed
- 🔄 **Easy Language Switching:** One-click toggle between English and Nepali
- ♿ **Accessible:** Semantic HTML and ARIA labels

## 🛠️ Tech Stack

- **Framework:** [Astro](https://astro.build/) v5.17.1
- **Styling:** Vanilla CSS with CSS Custom Properties
- **Fonts:** Inter (Google Fonts)
- **Package Manager:** pnpm
- **i18n:** Custom translation utilities with JSON files

## 📁 Project Structure

```
scholar-nepal-landing/
├── src/
│   ├── components/
│   │   ├── Header.astro       # Navigation with language switcher
│   │   └── Footer.astro       # Footer with contact info
│   ├── layouts/
│   │   └── Layout.astro       # Main layout wrapper
│   ├── pages/
│   │   ├── index.astro        # English homepage
│   │   └── ne/
│   │       └── index.astro    # Nepali homepage
│   ├── i18n/
│   │   ├── locales/
│   │   │   ├── en.json        # English translations
│   │   │   └── ne.json        # Nepali translations
│   │   └── utils.ts           # Translation utilities
│   └── styles/
│       └── global.css         # Global styles & design tokens
├── public/                    # Static assets
├── astro.config.mjs          # Astro configuration
└── package.json              # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd scholar-nepal-landing

# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm run dev` | Start development server at http://localhost:4321 |
| `pnpm run build` | Build production site to `dist/` |
| `pnpm run preview` | Preview production build locally |

## 🌐 Internationalization (i18n)

### Adding/Editing Translations

1. Edit translation files in `src/i18n/locales/`:
   - `en.json` for English
   - `ne.json` for Nepali

2. Translation structure:
```json
{
  "site": { "title": "..." },
  "header": { "nav": {...} },
  "hero": { "title": "..." },
  "services": { "items": [...] }
}
```

3. Use in components:
```astro
---
import { getTranslations } from '../i18n/utils';
const t = getTranslations(locale);
---
<h1>{t.hero.title}</h1>
```

### Adding New Languages

1. Create new JSON file in `src/i18n/locales/` (e.g., `hi.json`)
2. Add locale to `astro.config.mjs`:
```js
i18n: {
  locales: ['en', 'ne', 'hi'],
  defaultLocale: 'en'
}
```
3. Create corresponding page directory in `src/pages/`

## 🎨 Customization

### Colors

Edit color variables in `src/styles/global.css`:

```css
:root {
  --primary: #0369a1;      /* Deep blue */
  --secondary: #0d9488;    /* Teal */
  --accent: #ea580c;       /* Orange */
}
```

### Border Radius

All border-radius is set to 0 for sharp corners. To add rounded corners:

```css
:root {
  --radius-md: 0.5rem;  /* Change from 0 */
}
```

## 🏢 Content Sections

### Homepage Includes:
- Hero section with company tagline
- Vision & Mission cards
- 9 Sector Expertise services:
  - Planning & Project Development
  - Public Financial Management
  - Municipal Revenue Enhancement
  - Agricultural Value Chain
  - Governance & Management
  - Capacity Development
  - Local Economic Development
  - Disaster Management
  - Climate Change & Environment
- Core Values checklist
- Call-to-action section

## 📞 Contact Information

All contact details are in the footer and translation files:
- Email: scholar.nepal@hotmail.com
- Phone: 977-1-5268030
- Address: Kirtipur-5, Kathmandu, Nepal
- Registration: 113492/069/070

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

Copyright © 2026 Scholar Nepal Pvt. Ltd. All rights reserved.

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Icons: Unicode emoji

---

**Made with ❤️ for Scholar Nepal Pvt. Ltd.**
