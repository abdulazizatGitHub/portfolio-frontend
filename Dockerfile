# Multi-stage build for React Portfolio
# Stage 1: Build the React application
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (npm ci installs all dependencies including dev by default)
RUN npm ci

# Copy source code
COPY . .

# Build the application (disable source maps to reduce size by ~5-10MB)
RUN GENERATE_SOURCEMAP=false npm run build

# Remove any remaining source maps and unnecessary files
RUN find /app/build -name "*.map" -type f -delete 2>/dev/null || true

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Install wget for health checks (minimal install, clean cache)
RUN apk add --no-cache wget && \
    rm -rf /var/cache/apk/* /tmp/*

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/health || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

