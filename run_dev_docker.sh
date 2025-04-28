#!/bin/bash

echo "Starting MCPToolkits Development Environment in Docker..."
echo "The website will be available at http://localhost:8080"
echo "Any changes you make to files will be reflected immediately in the browser."

# Navigate to the project directory
cd /Users/ajeetsraina/Desktop/mcptoolkits

# Stop any existing containers first
docker-compose -f dev_docker_compose.yml down

# Start the container using docker-compose
docker-compose -f dev_docker_compose.yml up -d

echo "Development container is running! Access the website at: http://localhost:8080"
echo "To stop the container, run: docker-compose -f dev_docker_compose.yml down"