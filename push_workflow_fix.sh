#!/bin/bash

# Navigate to the project directory
cd /Users/ajeetsraina/Desktop/mcptoolkits

# Add the new workflow file
git add .github/workflows/pages-deploy.yml

# Commit the changes
git commit -m "Fix GitHub Actions workflow for pages deployment"

# Push to GitHub
git push

echo "GitHub Actions workflow has been updated."
echo "This should fix the 'report-build-status' cancellation issue."
