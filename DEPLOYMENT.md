# Deployment Guide

## Deployment Options

This portfolio is a static website and can be deployed to various platforms for free.

## 1. GitHub Pages (Recommended)

### Steps:
1. Create a GitHub repository
2. Push your code to the repository
3. Go to Settings > Pages
4. Select branch (main) and folder (root)
5. Save and wait for deployment

Your site will be available at: `https://yourusername.github.io/repository-name`

### Custom Domain (Optional):
1. Add a `CNAME` file with your domain
2. Configure DNS settings with your domain provider

## 2. Netlify

### Steps:
1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Or connect your GitHub repository

Features:
- Automatic deployments on git push
- Free SSL certificate
- Custom domain support
- Form handling (if you add a contact form)

## 3. Vercel

### Steps:
1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy with one click

Features:
- Automatic deployments
- Free SSL
- Edge network (fast worldwide)
- Analytics

## 4. Cloudflare Pages

### Steps:
1. Sign up at [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your GitHub repository
3. Deploy

Features:
- Free unlimited bandwidth
- Global CDN
- Free SSL
- DDoS protection

## 5. Traditional Web Hosting

### Steps:
1. Get hosting (cPanel, FTP access)
2. Upload all files via FTP
3. Ensure `index.html` is in the root directory

## Pre-Deployment Checklist

- [ ] Test all pages locally
- [ ] Verify all links work
- [ ] Check all images load correctly
- [ ] Test on different browsers
- [ ] Test on mobile devices
- [ ] Verify contact links (email, GitHub, LinkedIn)
- [ ] Update meta tags if needed
- [ ] Check console for JavaScript errors
- [ ] Validate HTML (https://validator.w3.org)
- [ ] Validate CSS (https://jigsaw.w3.org/css-validator)

## Post-Deployment

1. Test the live site thoroughly
2. Check loading speed (https://pagespeed.web.dev)
3. Verify mobile responsiveness
4. Test all interactive features
5. Share your portfolio link!

## Performance Tips

1. Optimize images before uploading (use tools like TinyPNG)
2. Enable compression on your hosting
3. Use a CDN if available
4. Monitor with Google Analytics (optional)

## Updating Your Portfolio

### GitHub Pages / Netlify / Vercel:
Simply push changes to your repository - automatic deployment!

### Traditional Hosting:
Upload modified files via FTP

## Troubleshooting

### Issue: Pages not loading
- Check file paths are correct (case-sensitive on Linux servers)
- Verify all files uploaded correctly

### Issue: Styles not applying
- Check CSS file paths in HTML
- Clear browser cache
- Verify CSS files uploaded

### Issue: JavaScript not working
- Check browser console for errors
- Verify JS files uploaded
- Check file paths

## Security

1. Don't commit sensitive information
2. Use HTTPS (most platforms provide free SSL)
3. Keep dependencies updated (if you add any)
4. Regular backups of your code

## Monitoring

Consider adding:
- Google Analytics for visitor tracking
- Google Search Console for SEO
- Uptime monitoring (UptimeRobot)

## Need Help?

- GitHub Pages: https://docs.github.com/pages
- Netlify: https://docs.netlify.com
- Vercel: https://vercel.com/docs

Good luck with your deployment! 🚀
