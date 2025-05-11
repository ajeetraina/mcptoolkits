#!/bin/bash
# MCPToolkits Setup Script

echo "? Setting up MCPToolkits..."

# Create necessary directories if they don't exist
mkdir -p config
mkdir -p css
mkdir -p js
mkdir -p images/dashboard

# Check if config files exist, create them if not
if [ ! -f config/servers.json ]; then
  echo "Creating default server configuration..."
  cat > config/servers.json << EOL
{
  "servers": [
    {
      "name": "Example Server",
      "host": "mcp-server.example.com",
      "port": 443,
      "protocol": "https",
      "apiKey": "YOUR_API_KEY_HERE",
      "region": "us-west"
    }
  ]
}
EOL
fi

if [ ! -f config/app.json ]; then
  echo "Creating default application configuration..."
  cat > config/app.json << EOL
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
      "critical": 90.0
    }
  },
  "defaultView": "overview",
  "features": {
    "enableNotifications": true,
    "enableHistoricalData": true
  }
}
EOL
fi

# Check if we have a local server available
PYTHON_CMD=""
if command -v python3 &> /dev/null; then
  PYTHON_CMD="python3"
elif command -v python &> /dev/null; then
  PYTHON_CMD="python"
fi

# Start a local server
if [ ! -z "$PYTHON_CMD" ]; then
  echo "? Starting local server..."
  echo "? Dashboard will be available at: http://localhost:8000/dashboard.html"
  echo "? Portal will be available at: http://localhost:8000"
  echo "Press Ctrl+C to stop the server"
  $PYTHON_CMD -m http.server
else
  echo "?? Python not found. Please start a local server manually or install Python."
  echo "? Once your server is running, access the dashboard at: /dashboard.html"
fi