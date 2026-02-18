# Vercel Deployment Guide

## Quick Deploy

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

### Option 2: Deploy via GitHub

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

## Configuration

The project includes:
- `vercel.json` - Vercel configuration
- `.vercelignore` - Files to exclude from deployment

## Project Structure

```
/
├── index.html          # Main page
├── pages/              # Additional pages
│   ├── skills.html
│   ├── projects.html
│   ├── certificates.html
│   └── contact.html
├── css/                # Stylesheets
├── js/                 # JavaScript modules
├── *.jpeg              # Certificate images
└── *.mp4               # Project videos
```

## Environment

- No build step required (static site)
- All assets are served directly
- ES6 modules are used for JavaScript

## Post-Deployment

After deployment, your site will be available at:
- Production: `https://your-project.vercel.app`
- Preview: Unique URL for each deployment

## Custom Domain

To add a custom domain:
1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## Troubleshooting

If you encounter issues:
1. Check browser console for errors
2. Verify all file paths are relative
3. Ensure all images and videos are committed
4. Check Vercel deployment logs
