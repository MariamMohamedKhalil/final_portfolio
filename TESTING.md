# Testing Guide

## Manual Testing Checklist

### Functionality Testing

#### Navigation
- [ ] All navigation links work correctly
- [ ] Active page is highlighted in navigation
- [ ] Navigation is sticky on scroll
- [ ] Navigation background changes on scroll
- [ ] Logo link returns to home page

#### Home Page
- [ ] Typing effect displays correctly
- [ ] Typing animation completes
- [ ] "View My Work" button navigates to projects
- [ ] About section displays properly

#### Skills Page
- [ ] All skill cards display
- [ ] Cards have hover effects
- [ ] Content is readable
- [ ] Layout is responsive

#### Projects Page
- [ ] All project cards display
- [ ] Video player works (if applicable)
- [ ] Cards have hover effects
- [ ] Content is readable

#### Certificates Page
- [ ] All certificate cards display
- [ ] Clicking card opens modal
- [ ] Modal displays certificate image
- [ ] Close button (X) closes modal
- [ ] Clicking outside modal closes it
- [ ] ESC key closes modal
- [ ] Modal prevents body scroll when open

#### Contact Page
- [ ] Email link opens mail client
- [ ] GitHub link opens in new tab
- [ ] LinkedIn link opens in new tab
- [ ] All links are correct

### Responsive Testing

Test on these breakpoints:
- [ ] Mobile (320px - 480px)
- [ ] Tablet (481px - 768px)
- [ ] Desktop (769px - 1024px)
- [ ] Large Desktop (1025px+)

#### Mobile Specific
- [ ] Navigation is usable
- [ ] Text is readable (not too small)
- [ ] Buttons are tap-friendly (min 44x44px)
- [ ] No horizontal scroll
- [ ] Images scale properly
- [ ] Cards stack vertically

#### Tablet Specific
- [ ] Layout adapts appropriately
- [ ] Grid columns adjust
- [ ] Navigation remains functional

#### Desktop Specific
- [ ] Full layout displays correctly
- [ ] Hover effects work
- [ ] Content is centered/aligned properly

### Browser Testing

Test on:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

Check for:
- [ ] Layout consistency
- [ ] Animation smoothness
- [ ] Font rendering
- [ ] Color accuracy

### Performance Testing

- [ ] Page loads in < 3 seconds
- [ ] No console errors
- [ ] No console warnings
- [ ] Smooth scrolling
- [ ] Smooth animations
- [ ] No layout shifts (CLS)
- [ ] Images load properly

### Accessibility Testing

#### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Focus indicators are visible
- [ ] Modal can be closed with ESC
- [ ] No keyboard traps

#### Screen Reader
- [ ] Page structure makes sense
- [ ] Images have alt text
- [ ] Links have descriptive text
- [ ] ARIA labels are present
- [ ] Headings are hierarchical

#### Color Contrast
- [ ] Text is readable on backgrounds
- [ ] Links are distinguishable
- [ ] Buttons have sufficient contrast

### SEO Testing

- [ ] Title tags are unique per page
- [ ] Meta descriptions are present
- [ ] Headings are hierarchical (h1 > h2 > h3)
- [ ] Images have alt attributes
- [ ] Links have descriptive text
- [ ] robots.txt is accessible
- [ ] sitemap.xml is accessible

### Code Quality

#### HTML
- [ ] Valid HTML5 (test at validator.w3.org)
- [ ] Semantic elements used
- [ ] No deprecated tags
- [ ] Proper nesting

#### CSS
- [ ] Valid CSS3 (test at jigsaw.w3.org/css-validator)
- [ ] No unused styles
- [ ] Consistent naming (BEM)
- [ ] Proper organization

#### JavaScript
- [ ] No console errors
- [ ] No console warnings
- [ ] Proper error handling
- [ ] Clean code structure
- [ ] ES6+ features work

## Automated Testing Tools

### Performance
1. **Lighthouse** (Chrome DevTools)
   - Performance score > 90
   - Accessibility score > 90
   - Best Practices score > 90
   - SEO score > 90

2. **PageSpeed Insights**
   - Visit: https://pagespeed.web.dev
   - Test both mobile and desktop
   - Address any issues

### Validation
1. **HTML Validator**
   - Visit: https://validator.w3.org
   - Validate all pages
   - Fix any errors

2. **CSS Validator**
   - Visit: https://jigsaw.w3.org/css-validator
   - Validate CSS files
   - Fix any errors

### Accessibility
1. **WAVE**
   - Visit: https://wave.webaim.org
   - Check for accessibility issues
   - Fix any errors

2. **axe DevTools**
   - Install browser extension
   - Run on all pages
   - Address violations

### Mobile Testing
1. **Mobile-Friendly Test**
   - Visit: https://search.google.com/test/mobile-friendly
   - Verify mobile compatibility

2. **Responsive Design Checker**
   - Visit: https://responsivedesignchecker.com
   - Test various devices

## Testing Scenarios

### Scenario 1: First-Time Visitor
1. Land on home page
2. Read about section
3. Navigate to skills
4. Navigate to projects
5. Navigate to certificates
6. Open a certificate modal
7. Navigate to contact
8. Click external links

### Scenario 2: Recruiter
1. Land on home page
2. Quick scan of skills
3. Review projects
4. Check certificates
5. Find contact information
6. Visit LinkedIn/GitHub

### Scenario 3: Mobile User
1. Access site on mobile
2. Navigate through pages
3. View certificates
4. Access contact links

## Bug Reporting Template

```
**Bug Description:**
[Clear description of the issue]

**Steps to Reproduce:**
1. [First step]
2. [Second step]
3. [...]

**Expected Behavior:**
[What should happen]

**Actual Behavior:**
[What actually happens]

**Environment:**
- Browser: [e.g., Chrome 120]
- OS: [e.g., Windows 11]
- Device: [e.g., Desktop, iPhone 14]
- Screen Size: [e.g., 1920x1080]

**Screenshots:**
[If applicable]

**Console Errors:**
[If any]
```

## Pre-Deployment Testing

Before deploying, ensure:
- [ ] All tests pass
- [ ] No console errors
- [ ] All links work
- [ ] Images load
- [ ] Responsive on all devices
- [ ] Accessible
- [ ] SEO optimized
- [ ] Performance is good
- [ ] Code is clean
- [ ] Documentation is updated

## Post-Deployment Testing

After deploying:
- [ ] Test live site thoroughly
- [ ] Verify all pages load
- [ ] Check all links
- [ ] Test on real devices
- [ ] Monitor for errors
- [ ] Check analytics setup

## Continuous Testing

Regular checks:
- Weekly: Check for broken links
- Monthly: Run Lighthouse audit
- Quarterly: Full accessibility audit
- Yearly: Complete redesign review

## Tools & Resources

- Chrome DevTools
- Firefox Developer Tools
- Lighthouse
- WAVE
- axe DevTools
- BrowserStack (for cross-browser testing)
- Real devices (when possible)

Happy testing! 🧪
