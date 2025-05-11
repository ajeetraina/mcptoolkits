#!/bin/bash

# Navigate to the project directory
cd /Users/ajeetsraina/Desktop/mcptoolkits

# Add the new files
git add images/dashboard/dashboard.svg
git add index.html

# Commit the changes
git commit -m "Add dashboard SVG image and update HTML references"

# Push to GitHub
git push

echo "Changes have been pushed to GitHub. Your website will be updated shortly."
echo "The dashboard image should now be visible on your website."
