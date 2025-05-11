#!/bin/bash

echo "Building and starting MCPToolkits in Docker..."
echo "The website will be available at http://localhost:8080"

# Navigate to the project directory
cd /Users/ajeetsraina/Desktop/mcptoolkits

# Stop any existing containers first
docker-compose down

# Build and start the container using docker-compose
docker-compose up --build -d

echo "Container is running! Access the website at: http://localhost:8080"
echo "To stop the container, run: docker-compose down"