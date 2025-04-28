#!/bin/bash

# Navigate to the project directory
cd /Users/ajeetsraina/Desktop/mcptoolkits

# Stash your current changes
echo "Stashing current changes..."
git stash

# Fetch all changes from remote
echo "Fetching remote changes..."
git fetch origin

# Reset to origin/main
echo "Resetting to match remote repository..."
git reset --hard origin/main

# Apply stashed changes
echo "Applying your changes..."
git stash pop

# Add all files
echo "Adding all files..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "Add CNAME and GitHub workflow for Pages deployment"

# Push to GitHub
echo "Pushing to GitHub..."
git push origin main

echo "Done! Changes have been pushed to GitHub."
