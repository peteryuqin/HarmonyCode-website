#!/bin/bash

echo "🌏 Deploy HarmonyCode Website Globally (including China)"
echo "======================================================="
echo ""
echo "Choose a platform that works well in China:"
echo ""
echo "1. Vercel (Recommended - Works in China)"
echo "   Run: npx vercel --yes"
echo ""
echo "2. Netlify (Good - Usually accessible)"  
echo "   Visit: https://app.netlify.com/drop"
echo "   Or run: netlify deploy --prod --dir=."
echo ""
echo "3. Surge.sh (Fast - Mixed results in China)"
echo "   Run: npx surge ."
echo ""
echo "4. Cloudflare Pages (Best - Global CDN)"
echo "   Run: npx wrangler pages publish . --project-name=harmonycode"
echo ""

read -p "Choose platform (1-4): " choice

case $choice in
  1)
    echo "Deploying to Vercel..."
    npx vercel --yes
    ;;
  2)
    echo "Deploying to Netlify..."
    npx netlify-cli deploy --prod --dir=.
    ;;
  3)
    echo "Deploying to Surge..."
    npx surge .
    ;;
  4)
    echo "Deploying to Cloudflare Pages..."
    npx wrangler pages publish . --project-name=harmonycode
    ;;
  *)
    echo "Invalid choice"
    ;;
esac