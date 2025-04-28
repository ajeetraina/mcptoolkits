#!/bin/bash

# Navigate to the project directory
cd /Users/ajeetsraina/Desktop/mcptoolkits

# Determine which server to use
if command -v python3 &>/dev/null; then
    echo "Starting server with Python 3 on http://localhost:8000"
    python3 -m http.server
elif command -v python &>/dev/null; then
    echo "Starting server with Python 2 on http://localhost:8000"
    python -m SimpleHTTPServer
elif command -v http-server &>/dev/null; then
    echo "Starting server with Node.js http-server"
    http-server
else
    echo "No suitable server found. Please install Python or Node.js http-server."
    exit 1
fi
