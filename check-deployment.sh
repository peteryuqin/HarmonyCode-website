#!/bin/bash

echo "🔍 Checking HarmonyCode website deployment status..."
echo ""

URL="https://peteryuqin.github.io/HarmonyCode-website/"

# Check HTTP status
STATUS=$(curl -s -o /dev/null -w "%{http_code}" $URL)

if [ $STATUS -eq 200 ]; then
    echo "✅ SUCCESS! Your website is LIVE!"
    echo "🌐 Visit: $URL"
    echo ""
    echo "Opening in browser..."
    open $URL
else
    echo "⏳ Not live yet (Status: $STATUS)"
    echo ""
    echo "📋 To enable GitHub Pages:"
    echo "1. Go to: https://github.com/peteryuqin/HarmonyCode-website/settings/pages"
    echo "2. Under 'Build and deployment' → Source: Select 'GitHub Actions'"
    echo "3. Check workflow: https://github.com/peteryuqin/HarmonyCode-website/actions"
    echo ""
    echo "Run this script again in 2-3 minutes: ./check-deployment.sh"
fi