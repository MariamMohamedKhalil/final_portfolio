#!/bin/bash

# Portfolio Deployment Script for Vercel
# This script helps you deploy your portfolio quickly

echo "🚀 Portfolio Deployment Helper"
echo "================================"
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
    git branch -M main
    echo "✅ Git initialized"
else
    echo "✅ Git repository found"
fi

# Check for uncommitted changes
if [[ -n $(git status -s) ]]; then
    echo ""
    echo "📝 Uncommitted changes found. Committing..."
    git add .
    read -p "Enter commit message (or press Enter for default): " commit_msg
    if [ -z "$commit_msg" ]; then
        commit_msg="Update portfolio"
    fi
    git commit -m "$commit_msg"
    echo "✅ Changes committed"
else
    echo "✅ No uncommitted changes"
fi

# Check if remote exists
if ! git remote | grep -q 'origin'; then
    echo ""
    echo "🔗 No remote repository found."
    read -p "Enter your GitHub repository URL: " repo_url
    if [ -n "$repo_url" ]; then
        git remote add origin "$repo_url"
        echo "✅ Remote added"
    else
        echo "⚠️  No remote added. You'll need to add it manually."
    fi
fi

# Push to GitHub
echo ""
echo "📤 Pushing to GitHub..."
if git push -u origin main 2>/dev/null; then
    echo "✅ Pushed to GitHub successfully"
else
    echo "⚠️  Push failed. You may need to:"
    echo "   1. Create the repository on GitHub first"
    echo "   2. Set up authentication (SSH key or token)"
    echo "   3. Run: git push -u origin main"
fi

echo ""
echo "================================"
echo "🎉 Next Steps:"
echo ""
echo "1. Go to https://vercel.com"
echo "2. Click 'Add New Project'"
echo "3. Import your GitHub repository"
echo "4. Click 'Deploy'"
echo ""
echo "Or use Vercel CLI:"
echo "  npm install -g vercel"
echo "  vercel login"
echo "  vercel --prod"
echo ""
echo "📚 For detailed instructions, see:"
echo "   - README_VERCEL_QUICK.md"
echo "   - VERCEL_DEPLOYMENT_GUIDE.md"
echo "   - DEPLOYMENT_CHECKLIST_VERCEL.md"
echo ""
echo "================================"
echo "✨ Good luck with your deployment!"
