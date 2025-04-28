# MCPToolkits Local Installation Guide

This guide will walk you through setting up MCPToolkits locally on your machine.

## Quick Installation (5 minutes)

### Prerequisites
- Node.js v14+ and npm
- Git

### Step 1: Clone the repository
```bash
git clone https://github.com/ajeetraina/mcptoolkits.git
cd mcptoolkits
```

### Step 2: Install dependencies
```bash
npm install
```

### Step 3: Configure your servers
Create a `config` directory and add your server configuration:

```bash
mkdir -p config
```

Create `config/servers.json` with your MCP server details:

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

### Step 4: Start the dashboard
```bash
npm start
```

### Step 5: Access the dashboard
Open your browser and go to: http://localhost:3000

## Docker Installation

For those who prefer Docker:

### Step 1: Clone the repository
```bash
git clone https://github.com/ajeetraina/mcptoolkits.git
cd mcptoolkits
```

### Step 2: Configure your servers
Create the config file as shown in the previous section.

### Step 3: Build and run with Docker
```bash
docker build -t mcptoolkits .
docker run -p 3000:3000 -v $(pwd)/config:/app/config mcptoolkits
```

Access the dashboard at http://localhost:3000

## Offline Demo Mode

If you don't have MCP servers configured yet, you can run in demo mode:

```bash
# Create an empty config directory
mkdir -p config

# Start in demo mode
DEMO_MODE=true npm start
```

This will use sample data so you can explore the interface.

## Configuration Options

### Basic Server Configuration (config/servers.json)
```json
{
  "servers": [
    {
      "name": "Server Name",
      "host": "hostname.example.com",
      "port": 443,
      "protocol": "https",
      "apiKey": "your-api-key",
      "region": "us-west"
    }
  ]
}
```

### Advanced Configuration (config/app.json)
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

## Troubleshooting

### Common Issues

1. **Connection errors to MCP servers**
   - Check if your API keys are correct
   - Verify network connectivity to the servers
   - Check if firewalls are blocking access

2. **Dashboard not starting**
   - Make sure Node.js is installed correctly
   - Check for port conflicts (default is 3000)
   - Try running with verbose logging: `DEBUG=* npm start`

3. **Empty dashboard**
   - Verify your server configuration is correct
   - Check the browser console for errors
   - Try running in demo mode to verify the UI works

For additional help, please open an issue on GitHub.