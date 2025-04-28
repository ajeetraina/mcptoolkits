FROM nginx:alpine

# Copy the website files to the nginx html directory
COPY . /usr/share/nginx/html

# Remove the Dockerfile and other unnecessary files from the image
RUN rm -f /usr/share/nginx/html/Dockerfile \
    && rm -f /usr/share/nginx/html/docker-compose.yml \
    && rm -f /usr/share/nginx/html/*.sh \
    && rm -rf /usr/share/nginx/html/.git \
    && rm -rf /usr/share/nginx/html/.github

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]