# Quick Start Guide

## Getting Started in 2 Minutes

### Option 1: Open Directly
Simply open `index.html` in your browser. That's it!

### Option 2: Use a Local Server (Recommended)

#### Using Python
```bash
python -m http.server 8000
```
Then visit: http://localhost:8000

#### Using Node.js
```bash
npx serve
```
Then visit: http://localhost:3000

#### Using VS Code
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

## Project Structure at a Glance

```
portfolio/
├── index.html          # Home page - START HERE
├── pages/              # Other pages (skills, projects, etc.)
├── css/                # All stylesheets
├── js/                 # All JavaScript modules
└── *.jpeg, *.mp4       # Media files
```

## Making Changes

### Update Content
- **Home page**: Edit `index.html`
- **Other pages**: Edit files in `pages/` folder
- **Styling**: Edit files in `css/` folder
- **Behavior**: Edit files in `js/` folder

### Add New Certificate
1. Add image to root folder
2. Edit `pages/certificates.html`
3. Add new card with `onclick="openModal('your-image.jpeg')"`

### Change Colors
Edit `css/variables.css`:
```css
:root {
  --color-primary: #00f0ff;  /* Change this */
}
```

### Modify Typing Text
Edit `js/config.js`:
```javascript
typing: {
  text: "Your new text here"
}
```

## Common Tasks

### Add a New Skill
Edit `pages/skills.html` and add:
```html
<article class="card">
  <h3 class="card__title">Your Skill</h3>
  <p class="card__content">Description</p>
</article>
```

### Add a New Project
Edit `pages/projects.html` and add:
```html
<article class="card">
  <h3 class="card__title">Project Name</h3>
  <p class="card__content">Description</p>
</article>
```

### Update Contact Info
Edit `pages/contact.html` and modify the contact items.

## Need Help?

- Check `README.md` for detailed documentation
- Check `ARCHITECTURE.md` for technical details
- All code is well-commented for easy understanding

## Browser Compatibility

Works on all modern browsers:
- Chrome ✓
- Firefox ✓
- Safari ✓
- Edge ✓

## Tips

1. Use browser DevTools (F12) to inspect and debug
2. Check console for any JavaScript errors
3. Test on mobile devices or use DevTools device emulation
4. Keep backups before making major changes

Happy coding! 🚀
