# Deployment Guide for MCPToolkits Website

This guide outlines different options for deploying the MCPToolkits website.

## Option 1: GitHub Pages (Simple Static Site)

GitHub Pages is perfect for static websites like this one.

1. Push your code to GitHub (see GIT_SETUP_INSTRUCTIONS.md)
2. Go to your repository on GitHub
3. Navigate to Settings > Pages
4. Select the branch you want to deploy (usually main or master)
5. Select the root folder (/)
6. Click Save
7. Your site will be available at https://ajeetraina.github.io/mcptoolkits

### Configuring Custom Domain

1. In GitHub repository settings, under Pages, add your custom domain (mcptoolkits.com)
2. Create the following DNS records with your domain provider:
   - A record: @ pointing to GitHub Pages IP addresses
   - CNAME record: www pointing to ajeetraina.github.io/mcptoolkits

## Option 2: Netlify Deployment

Netlify provides a more robust hosting solution with additional features.

1. Create an account on Netlify (https://www.netlify.com/)
2. Connect your GitHub repository
3. Configure build settings:
   - Build command: leave empty (for static site)
   - Publish directory: /
4. Deploy the site
5. Configure custom domain in Netlify settings

## Option 3: Vercel Deployment

Vercel is another excellent platform for static sites.

1. Create an account on Vercel (https://vercel.com/)
2. Connect your GitHub repository
3. Configure project settings:
   - Framework preset: Other
   - Build command: leave empty
   - Output directory: .
4. Deploy the site
5. Add custom domain in project settings

## Option 4: Traditional Web Hosting

You can also deploy to any traditional web hosting service.

1. Purchase hosting from a provider like Bluehost, SiteGround, etc.
2. Upload the files via FTP or the hosting control panel
3. Point your domain to the hosting service

## Post-Deployment Tasks

After deploying your site, remember to:

1. Set up SSL/HTTPS (automatic with GitHub Pages, Netlify, and Vercel)
2. Test the website on different devices and browsers
3. Set up Google Analytics or other analytics tools
4. Submit your sitemap to search engines

## Ongoing Maintenance

For future updates:

1. Make changes to your local repository
2. Commit and push changes
3. The deployment will automatically update (with GitHub Pages, Netlify, or Vercel)
