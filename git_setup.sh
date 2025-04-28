#!/bin/bash

# Navigate to the project directory
cd /Users/ajeetsraina/Desktop/mcptoolkits

# Initialize a new Git repository
git init

# Add all files to the staging area
git add .

# Create the initial commit
git commit -m "Initial commit: MCPToolkits website structure"

# Configure the remote repository
git remote add origin https://github.com/ajeetraina/mcptoolkits.git

# Push to GitHub
git push -u origin main

echo "Repository has been initialized and committed locally."
echo "To push to GitHub, ensure you have the repository created at https://github.com/ajeetraina/mcptoolkits"
echo "Then run: git push -u origin main"
