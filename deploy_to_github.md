# Deploy MCPToolkits to GitHub

Follow these steps to deploy your MCPToolkits website to GitHub:

## 1. Initialize the Repository (Only needed for first-time setup)

```bash
# Navigate to the project directory
cd /Users/ajeetsraina/Desktop/mcptoolkits

# Initialize Git repository
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial commit: MCPToolkits website structure"
```

## 2. Connect to GitHub Repository

Before pushing, make sure you've created the repository on GitHub at: https://github.com/ajeetraina/mcptoolkits

Then connect your local repository:

```bash
# Add the GitHub repository as origin
git remote add origin https://github.com/ajeetraina/mcptoolkits.git
```

## 3. Push to GitHub

```bash
# Push to GitHub
git push -u origin main
```

If your default branch is named "master" instead of "main", use:

```bash
git push -u origin master
```

## 4. Enable GitHub Pages (Optional)

To host your website directly from GitHub:

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to "GitHub Pages" section
4. Under "Source", select "main" branch
5. Click "Save"

Your website will be available at: https://ajeetraina.github.io/mcptoolkits/

## 5. Making Future Updates

When you make changes to your website:

```bash
# Add new or modified files
git add .

# Commit changes
git commit -m "Description of your changes"

# Push to GitHub
git push
```

## 6. Using a Custom Domain (Optional)

If you want to use your mcptoolkits.com domain:

1. In GitHub repository settings, under GitHub Pages, enter your domain
2. Create a CNAME file in your repository with your domain name
3. Configure your domain's DNS settings to point to GitHub's servers
