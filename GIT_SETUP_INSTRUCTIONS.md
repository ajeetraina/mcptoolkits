# Git Setup Instructions for MCPToolkits

Follow these steps to initialize your Git repository and push it to GitHub:

## Local Setup

1. Open a terminal window
2. Navigate to the project directory:
   ```
   cd /Users/ajeetsraina/Desktop/mcptoolkits
   ```

3. Initialize a new Git repository:
   ```
   git init
   ```

4. Add all files to the repository:
   ```
   git add .
   ```

5. Commit the changes:
   ```
   git commit -m "Initial commit for MCPToolkits website"
   ```

## Connecting to GitHub

1. Create a new repository named 'mcptoolkits' in your GitHub account if you haven't already done so.

2. Connect your local repository to GitHub:
   ```
   git remote add origin https://github.com/ajeetraina/mcptoolkits.git
   ```

3. Push your code to GitHub:
   ```
   git push -u origin main
   ```
   
   Note: If your default branch is named 'master' instead of 'main', use:
   ```
   git push -u origin master
   ```

## Verifying the Setup

1. Check if your repository is properly connected:
   ```
   git remote -v
   ```

2. Visit https://github.com/ajeetraina/mcptoolkits to ensure your code has been pushed successfully.

## Next Steps

After successfully pushing your code, you can:

1. Set up GitHub Pages to host your website
2. Configure domain settings to point mcptoolkits.com to your GitHub Pages site
3. Continue developing and pushing updates to the repository
