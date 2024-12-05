# Landing Page

Modern, responsive landing page built with vanilla JavaScript and SCSS, following BEM methodology.

## 🔧 Technologies used

- [JavaScript (vanilla)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- Styling: [SCSS](https://sass-lang.com/) with [BEM Methodology](https://getbem.com/)
- Development server: [live-server](https://github.com/tapio/live-server)
- Package manager: [pnpm](https://pnpm.io/)
- Slider: [Swiper](https://swiperjs.com/)

### Code quality

- Linting: [ESLint](https://eslint.org/)
- Formatting: [Prettier](https://prettier.io/)
- Style linting: [Stylelint](https://stylelint.io/)
- Pre-commit hooks: [Husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/okonet/lint-staged/)

## 🚀 Getting started

### 💻 Prerequisites

[![Node.js Version](https://img.shields.io/badge/node-v20.11.1-339933?logo=nodedotjs)](https://nodejs.org/)
[![pnpm Version](https://img.shields.io/badge/pnpm-v8.15.8-F69220?logo=pnpm)](https://www.npmjs.com/package/pnpm/v/8.15.8)

```bash
# Install pnpm
npm install -g pnpm

# Verify installations
node -v  # Should be >= 20.11.1
pnpm -v  # Should be >= 8.15.8

```

### 🎈 Start the project

```bash
# Install dependencies
pnpm i

# Start dev server with SCSS watch
pnpm start

```

## 📦 Build

### Tools

- **rimraf**: Clean dist directory
- **copyfiles**: Copy assets maintaining directory structure
- **sass**: SCSS compilation and minification
- **html-minifier**: HTML minification
- **rollup**: JavaScript module bundling
- **terser**: JavaScript minification

### Commands

```bash
# Build for production
pnpm build

# Individual build steps
pnpm clean          # Clean dist directory
pnpm copy:assets    # Copy assets to dist
pnpm build:css      # Compile and minify SCSS
pnpm build:html     # Minify HTML
pnpm build:js       # Bundle and minify JS

```

[🔼 Back To Top](#top)
