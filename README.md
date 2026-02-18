# Mariam Khalil - Portfolio 🚀

Professional portfolio website for Mariam Khalil, Digital Forensics Specialist and SOC Analyst.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## ✨ Features

- 🎨 Modern, responsive design
- 📦 Clean, modular code architecture
- ⚡ Smooth animations and transitions
- ♿ Accessible (ARIA labels, semantic HTML)
- 🚀 Performance optimized
- 🌐 Cross-browser compatible
- 📱 Mobile-first approach
- 🎯 SEO optimized

## 📁 Project Structure

```
portfolio/
├── css/
│   ├── main.css          # Main stylesheet (imports all modules)
│   ├── variables.css     # CSS custom properties (design tokens)
│   ├── base.css          # Reset and base styles
│   ├── components.css    # Component styles (BEM methodology)
│   └── responsive.css    # Media queries and responsive design
├── js/
│   ├── main.js           # Application entry point
│   ├── config.js         # Configuration and constants
│   ├── utils.js          # Utility functions (debounce, throttle, etc.)
│   ├── navigation.js     # Navigation module
│   ├── typing.js         # Typing effect module
│   └── modal.js          # Modal module
├── pages/
│   ├── skills.html       # Skills page
│   ├── projects.html     # Projects showcase
│   ├── certificates.html # Certificates gallery
│   └── contact.html      # Contact information
├── .vscode/              # VS Code configuration
├── index.html            # Home page
├── robots.txt            # SEO robots file
├── sitemap.xml           # SEO sitemap
└── Documentation files
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox
- **Vanilla JavaScript** - ES6+ modules
- **BEM Methodology** - CSS naming convention
- **Mobile-First Design** - Responsive approach

## 💎 Code Quality Features

- ✅ Modular JavaScript with ES6 modules
- ✅ CSS custom properties for maintainability
- ✅ BEM naming convention for CSS
- ✅ Accessibility best practices (WCAG)
- ✅ Performance optimizations
- ✅ Clean, well-documented code
- ✅ Proper error handling
- ✅ Debounce/throttle utilities
- ✅ Semantic HTML5
- ✅ SEO optimized

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | Latest  |
| Firefox | Latest  |
| Safari  | Latest  |
| Edge    | Latest  |

## 🚀 Quick Start

### Option 1: Direct Open
Simply open `index.html` in your browser.

### Option 2: Local Server (Recommended)

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using npm (if you have package.json)
npm start
```

Then visit: `http://localhost:8000`

## 📚 Documentation

- [Quick Start Guide](QUICKSTART.md) - Get started in 2 minutes
- [Architecture](ARCHITECTURE.md) - Technical architecture details
- [Deployment Guide](DEPLOYMENT.md) - How to deploy your portfolio
- [SEO Guide](SEO.md) - SEO optimization tips
- [Changelog](CHANGELOG.md) - Version history

## 🎯 Key Features Explained

### Modular Architecture
Each feature is separated into its own module for better maintainability and scalability.

### BEM Methodology
CSS follows Block Element Modifier naming convention:
```css
.block {}
.block__element {}
.block--modifier {}
```

### CSS Custom Properties
All design tokens are centralized in `variables.css`:
```css
:root {
  --color-primary: #00f0ff;
  --spacing-md: 1.5rem;
}
```

### ES6 Modules
JavaScript is organized into clean, reusable modules:
```javascript
import { initNavigation } from './navigation.js';
```

## 🔧 Customization

### Change Colors
Edit `css/variables.css`:
```css
:root {
  --color-primary: #00f0ff;  /* Your color here */
}
```

### Update Content
- Home: `index.html`
- Skills: `pages/skills.html`
- Projects: `pages/projects.html`
- Certificates: `pages/certificates.html`
- Contact: `pages/contact.html`

### Modify Typing Effect
Edit `js/config.js`:
```javascript
typing: {
  text: "Your custom text here"
}
```

## 📈 Performance

- ⚡ Minimal dependencies (vanilla JS)
- 🎯 Optimized CSS (modular approach)
- 🚀 Fast loading times
- 📦 Code splitting with ES6 modules
- 🔄 Debounced/throttled event handlers

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader friendly
- Color contrast compliance

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints for all devices
- Flexible grid system
- Touch-friendly interactions
- Optimized for all screen sizes

## 🔍 SEO Features

- Meta tags (description, keywords, author)
- Open Graph tags ready
- Semantic HTML structure
- Sitemap.xml included
- Robots.txt configured
- Fast loading times
- Mobile-friendly

## 🤝 Contributing

This is a personal portfolio, but suggestions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Mariam Khalil**
- Email: mariamkhalil812005@gmail.com
- GitHub: [@MariamMohamedKhalil](https://github.com/MariamMohamedKhalil)
- LinkedIn: [Mariam Khalil](https://www.linkedin.com/in/mariam-khalil-b80aa427b)

## 🙏 Acknowledgments

- Font: [Inter](https://fonts.google.com/specimen/Inter) by Google Fonts
- Design inspiration: Modern portfolio best practices
- Code quality: Senior frontend development standards

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue
- Contact via email
- Connect on LinkedIn

---

Made with ❤️ by Mariam Khalil | © 2026 All rights reserved
