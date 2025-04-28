#!/bin/bash

# Set this to your Docker Hub username
DOCKER_USERNAME="ajeetraina"
IMAGE_NAME="mcptoolkits"
TAG="latest"

# Navigate to the project directory
cd /Users/ajeetsraina/Desktop/mcptoolkits

# Build the Docker image
echo "Building Docker image..."
docker build -t $DOCKER_USERNAME/$IMAGE_NAME:$TAG .

# Ask before pushing
read -p "Do you want to push the image to Docker Hub? (y/n): " PUSH_CHOICE

if [ "$PUSH_CHOICE" = "y" ]; then
    # Log in to Docker Hub
    echo "Logging in to Docker Hub..."
    docker login
    
    # Push the image
    echo "Pushing image to Docker Hub..."
    docker push $DOCKER_USERNAME/$IMAGE_NAME:$TAG
    
    echo "Image pushed to Docker Hub as $DOCKER_USERNAME/$IMAGE_NAME:$TAG"
    echo "You can now pull it using: docker pull $DOCKER_USERNAME/$IMAGE_NAME:$TAG"
else
    echo "Skipping push to Docker Hub."
    echo "Local image built as: $DOCKER_USERNAME/$IMAGE_NAME:$TAG"
fi