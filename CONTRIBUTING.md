# Contributing Guide

Thank you for your interest in contributing to this portfolio project!

## Code of Conduct

- Be respectful and professional
- Provide constructive feedback
- Help others learn and grow
- Follow best practices

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported
2. Use the bug report template in TESTING.md
3. Include detailed steps to reproduce
4. Add screenshots if applicable
5. Mention your environment (browser, OS, device)

### Suggesting Enhancements

1. Check if the enhancement has been suggested
2. Clearly describe the enhancement
3. Explain why it would be useful
4. Provide examples if possible

### Code Contributions

#### Before You Start

1. Fork the repository
2. Create a new branch for your feature
3. Follow the existing code style
4. Write clean, documented code

#### Development Setup

```bash
# Clone your fork
git clone https://github.com/yourusername/portfolio.git

# Create a branch
git checkout -b feature/your-feature-name

# Make your changes
# Test thoroughly

# Commit your changes
git commit -m "Add: your feature description"

# Push to your fork
git push origin feature/your-feature-name

# Create a Pull Request
```

## Code Style Guidelines

### HTML

```html
<!-- Use semantic HTML5 -->
<section class="section">
  <h2 class="section__title">Title</h2>
  <p>Content</p>
</section>

<!-- Proper indentation (2 spaces) -->
<!-- Descriptive class names -->
<!-- Accessibility attributes -->
```

### CSS

```css
/* Follow BEM methodology */
.block {}
.block__element {}
.block--modifier {}

/* Use CSS custom properties */
:root {
  --color-primary: #00f0ff;
}

/* Organize by component */
/* Add comments for sections */
/* Use consistent spacing */
```

### JavaScript

```javascript
/* Use ES6+ features */
import { module } from './module.js';

/* Descriptive function names */
const initializeFeature = () => {
  // Implementation
};

/* Add JSDoc comments */
/**
 * Description of function
 * @param {string} param - Parameter description
 * @returns {boolean}
 */

/* Proper error handling */
try {
  // Code
} catch (error) {
  console.error('Error:', error);
}

/* Use const/let, not var */
/* Arrow functions for callbacks */
/* Async/await for promises */
```

## Commit Message Guidelines

### Format

```
Type: Brief description

Detailed description (if needed)
```

### Types

- `Add:` New feature or file
- `Update:` Modify existing feature
- `Fix:` Bug fix
- `Refactor:` Code restructuring
- `Style:` Formatting, no code change
- `Docs:` Documentation only
- `Test:` Adding tests
- `Chore:` Maintenance tasks

### Examples

```
Add: Certificate modal functionality

Implemented modal component with open/close functionality,
keyboard support (ESC key), and click-outside-to-close.
```

```
Fix: Navigation active state on page load

Fixed issue where active navigation link wasn't highlighted
correctly when directly accessing a page.
```

## Pull Request Process

1. **Update Documentation**
   - Update README.md if needed
   - Update CHANGELOG.md
   - Add comments to code

2. **Test Your Changes**
   - Test on multiple browsers
   - Test responsive design
   - Check accessibility
   - Run validation tools

3. **Create Pull Request**
   - Clear title and description
   - Reference any related issues
   - Include screenshots if UI changes
   - List what was tested

4. **Code Review**
   - Address feedback promptly
   - Make requested changes
   - Keep discussion professional

5. **Merge**
   - Squash commits if needed
   - Update branch if needed
   - Celebrate! 🎉

## Testing Requirements

Before submitting:

- [ ] Code follows style guidelines
- [ ] No console errors or warnings
- [ ] Tested on Chrome, Firefox, Safari
- [ ] Tested on mobile devices
- [ ] Accessibility checked
- [ ] HTML/CSS validated
- [ ] Documentation updated
- [ ] Commit messages are clear

## Project Structure

```
portfolio/
├── css/              # Stylesheets (modular)
├── js/               # JavaScript modules
├── pages/            # HTML pages
├── .vscode/          # Editor config
└── Documentation     # MD files
```

## Key Principles

1. **Modularity**: Keep code modular and reusable
2. **Simplicity**: Write simple, clear code
3. **Performance**: Optimize for speed
4. **Accessibility**: Make it accessible to all
5. **Responsiveness**: Work on all devices
6. **Documentation**: Document your code
7. **Testing**: Test thoroughly

## Areas for Contribution

### High Priority
- Performance optimizations
- Accessibility improvements
- Browser compatibility fixes
- Mobile experience enhancements

### Medium Priority
- New features (with discussion first)
- UI/UX improvements
- Animation enhancements
- Code refactoring

### Low Priority
- Documentation improvements
- Code comments
- Examples and demos
- Testing improvements

## Questions?

- Open an issue for discussion
- Check existing documentation
- Review closed issues/PRs
- Contact the maintainer

## Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md (if created)
- Mentioned in release notes
- Credited in commit history

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing! 🙏
