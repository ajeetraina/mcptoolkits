# MCPToolkits Dashboard Setup Guide

This guide will help you set up and access the MCPToolkits interactive dashboard to monitor and manage your MCP servers.

## Quick Start (5 minutes)

### Option 1: Using the pre-built dashboard

The easiest way to access the dashboard is to:

1. **Clone the repository**
   ```bash
   git clone https://github.com/ajeetraina/mcptoolkits.git
   cd mcptoolkits
   ```

2. **Open the dashboard directly**
   ```bash
   # If you have a simple HTTP server installed
   python -m http.server
   # Or with Node.js
   npx serve
   ```

3. **Access the dashboard**
   Open your browser and navigate to:
   - With Python server: http://localhost:8000/dashboard.html
   - With Node.js serve: http://localhost:3000/dashboard.html

### Option 2: Using Docker

For a containerized deployment:

1. **Clone the repository**
   ```bash
   git clone https://github.com/ajeetraina/mcptoolkits.git
   cd mcptoolkits
   ```

2. **Build and run with Docker**
   ```bash
   docker build -t mcptoolkits .
   docker run -p 8080:80 mcptoolkits
   ```

3. **Access the dashboard**
   Open your browser and navigate to http://localhost:8080/dashboard.html

## Directory Structure

The dashboard consists of the following files:

- `dashboard.html` - The main dashboard interface
- `js/dashboard.js` - JavaScript code for dashboard functionality
- `config/servers.json` - Configuration file for MCP servers
- `config/app.json` - Application settings

## Configuring Your MCP Servers

To connect the dashboard to your actual MCP servers:

1. **Edit the server configuration file**

   Open `config/servers.json` and modify it to include your servers:

   ```json
   {
     "servers": [
       {
         "name": "Production Server",
         "host": "mcp-prod.example.com",
         "port": 443,
         "protocol": "https",
         "apiKey": "your-api-key-here",
         "region": "us-west"
       },
       {
         "name": "Development Server",
         "host": "mcp-dev.example.com",
         "port": 443,
         "protocol": "https",
         "apiKey": "your-dev-api-key",
         "region": "us-east"
       }
     ]
   }
   ```

2. **Customize application settings (optional)**

   Open `config/app.json` to adjust settings like refresh interval and alert thresholds:

   ```json
   {
     "refreshInterval": 30,
     "theme": "light",
     "alertThresholds": {
       "latency": {
         "warning": 30,
         "critical": 50
       },
       "uptime": {
         "warning": 99.5,
         "critical": 99.0
       }
     }
   }
   ```

## Dashboard Features

The MCPToolkits dashboard provides:

1. **Server Status Overview** - Quick view of all your MCP servers
2. **Configuration Management** - Track and sync server configurations
3. **Performance Monitoring** - Real-time and historical performance graphs
4. **User Activity Tracking** - Monitor user activity across all servers
5. **Alert System** - Get notified of issues with your servers

## Troubleshooting

### Common Issues

1. **Dashboard shows sample data instead of real data**
   - Verify your server configuration in `config/servers.json`
   - Check that your API keys have the correct permissions
   - Ensure your servers are accessible from the machine running the dashboard

2. **Charts not loading**
   - Check your browser console for JavaScript errors
   - Ensure you have internet access to load Chart.js from CDN

3. **Docker container not working**
   - Check Docker logs: `docker logs <container_id>`
   - Ensure port 8080 is not already in use on your host machine

### Getting Help

If you encounter issues setting up the dashboard:

1. Check the [GitHub repository issues](https://github.com/ajeetraina/mcptoolkits/issues)
2. Open a new issue with details about your problem

## Customizing the Dashboard

You can customize the dashboard to meet your specific needs:

1. **Add custom charts**: Edit `js/dashboard.js` to add new metrics
2. **Change styles**: Edit the CSS classes in `dashboard.html`
3. **Add new features**: Extend the functionality by adding new components

## Security Considerations

When deploying the dashboard in production:

1. **Use HTTPS**: Always use HTTPS for secure communication
2. **Protect API keys**: Keep your API keys secure and rotate them regularly
3. **Implement access control**: Add authentication to protect dashboard access

For detailed installation options, refer to the main [INSTALL.md](./INSTALL.md) guide.
