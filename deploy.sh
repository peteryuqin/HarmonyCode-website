#!/bin/bash

echo "🚀 HarmonyCode Website Deployment Options"
echo "========================================"
echo ""
echo "1. GitHub Pages (Recommended)"
echo "   - Create repo at github.com/new"
echo "   - Run: ./deploy.sh github YOUR_USERNAME YOUR_REPO_NAME"
echo ""
echo "2. Netlify (Instant)"
echo "   - Run: ./deploy.sh netlify"
echo ""
echo "3. Vercel"
echo "   - Run: ./deploy.sh vercel"
echo ""
echo "4. Surge"
echo "   - Run: ./deploy.sh surge"
echo ""

case "$1" in
  "github")
    if [ -z "$2" ] || [ -z "$3" ]; then
      echo "Usage: ./deploy.sh github USERNAME REPO_NAME"
      exit 1
    fi
    git init
    git add .
    git commit -m "Deploy HarmonyCode website"
    git branch -M main
    git remote add origin "https://github.com/$2/$3.git"
    echo "Now run: git push -u origin main"
    echo "Then enable GitHub Pages in repo settings"
    ;;
    
  "netlify")
    echo "Installing Netlify CLI..."
    npm install -g netlify-cli
    netlify deploy --prod --dir=.
    ;;
    
  "vercel")
    npx vercel --yes
    ;;
    
  "surge")
    npx surge .
    ;;
    
  *)
    echo "Choose a deployment option from above"
    ;;
esac