FROM node:16-alpine

WORKDIR /app

# Copy all files
COPY . .

# Create directories if they don't exist
RUN mkdir -p logs
RUN mkdir -p config

# Install serve to run the application
RUN npm install -g serve

# Expose port 80
EXPOSE 80

# Start the application
CMD ["serve", "-s", ".", "-l", "80"]