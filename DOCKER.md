# 🐳 Docker Guide for Portfolio

## Overview

This project is fully dockerized with a production-ready multi-stage Docker build using Nginx for serving static files.

## 🎯 Why Docker?

- ✅ **Consistent Environment**: Same environment across all machines
- ✅ **Easy Deployment**: Deploy anywhere Docker runs
- ✅ **Isolation**: No dependency conflicts
- ✅ **Production Ready**: Optimized Nginx configuration
- ✅ **Scalability**: Easy to scale horizontally
- ✅ **CI/CD Integration**: Can be used in deployment pipelines

## 📋 Files Created

1. **Dockerfile**: Multi-stage build (Node.js build + Nginx serve)
2. **docker-compose.yml**: Easy development and deployment
3. **nginx.conf**: Optimized Nginx configuration for React SPA
4. **.dockerignore**: Excludes unnecessary files from Docker build

## 🚀 Quick Start

### Option 1: Using npm scripts (Recommended)

```bash
# Build Docker image
npm run docker:build

# Run container
npm run docker:run

# Use docker-compose
npm run docker:dev      # Start
npm run docker:stop     # Stop
```

### Option 2: Using Docker directly

```bash
# Build
docker build -t portfolio:latest .

# Run
docker run -p 3000:80 portfolio:latest
```

### Option 3: Using Docker Compose

```bash
# Start
docker-compose up -d

# Stop
docker-compose down

# View logs
docker-compose logs -f
```

## 📦 Docker Image Details

- **Base Image**: `node:18-alpine` (lightweight, ~50MB)
- **Production Image**: `nginx:alpine` (minimal, secure)
- **Final Size**: ~50-60MB (optimized)
- **Port**: 80 (configurable)
- **Health Check**: Built-in health endpoint

## 🔧 Configuration

### Port Configuration

Change port mapping in `docker-compose.yml`:

```yaml
ports:
  - '8080:80' # Change 8080 to your desired port
```

Or when running directly:

```bash
docker run -p 8080:80 portfolio:latest
```

### Environment Variables

Add environment variables in `docker-compose.yml`:

```yaml
environment:
  - NODE_ENV=production
  - REACT_APP_API_URL=https://api.example.com
```

## 🌐 Nginx Configuration

The `nginx.conf` includes:

- ✅ **SPA Routing**: Handles React Router (all routes → index.html)
- ✅ **Gzip Compression**: Reduces file sizes
- ✅ **Caching**: Static assets cached for 1 year
- ✅ **Security Headers**: X-Frame-Options, XSS Protection, etc.
- ✅ **Health Check**: `/health` endpoint for monitoring

## 🏗️ Build Process

### Stage 1: Builder

1. Uses Node.js 18 Alpine
2. Installs dependencies (`npm ci`)
3. Builds React app (`npm run build`)
4. Creates optimized production build

### Stage 2: Production

1. Uses Nginx Alpine (minimal)
2. Copies built files from builder
3. Configures Nginx
4. Serves static files

## 📊 Image Optimization

- **Multi-stage build**: Reduces final image size
- **Alpine Linux**: Minimal base images
- **Layer caching**: Optimized for faster rebuilds
- **.dockerignore**: Excludes unnecessary files

## 🚢 Deployment Options

### 1. Docker Hub

```bash
# Tag image
docker tag portfolio:latest yourusername/portfolio:latest

# Push to Docker Hub
docker push yourusername/portfolio:latest

# Pull and run anywhere
docker pull yourusername/portfolio:latest
docker run -p 3000:80 yourusername/portfolio:latest
```

### 2. AWS ECS/Fargate

- Push to ECR (Elastic Container Registry)
- Deploy as ECS task
- Auto-scaling supported

### 3. Google Cloud Run

- Build and push to GCR
- Deploy as Cloud Run service
- Serverless, auto-scaling

### 4. Azure Container Instances

- Push to ACR
- Deploy as container instance
- Pay-per-use

### 5. Kubernetes

- Create deployment manifest
- Use with any K8s cluster
- Full orchestration support

## 🔍 Troubleshooting

### Container won't start

```bash
# Check logs
docker logs portfolio-app

# Check if port is in use
netstat -ano | findstr :3000  # Windows
lsof -i :3000                 # Linux/Mac
```

### Build fails

```bash
# Build with no cache
docker build --no-cache -t portfolio:latest .

# Check Dockerfile syntax
docker build --dry-run .
```

### Permission issues

```bash
# Run with specific user (Linux)
docker run -u $(id -u):$(id -g) -p 3000:80 portfolio:latest
```

## 📈 Performance

- **Build Time**: ~2-3 minutes (first time)
- **Image Size**: ~50-60MB
- **Startup Time**: <1 second
- **Memory Usage**: ~20-30MB
- **CPU Usage**: Minimal (static files)

## ✅ Best Practices Implemented

- ✅ Multi-stage build for smaller images
- ✅ .dockerignore to exclude unnecessary files
- ✅ Health checks for monitoring
- ✅ Security headers in Nginx
- ✅ Gzip compression enabled
- ✅ Proper caching strategy
- ✅ Alpine-based images for security

## 🔐 Security

- Uses Alpine Linux (minimal attack surface)
- Security headers configured
- No root user in container (if configured)
- Regular base image updates recommended

## 📝 Notes

- The Docker setup is **independent** of Vercel deployment
- You can use Docker for other hosting platforms
- Docker image can be used in CI/CD pipelines
- Perfect for local development consistency

---

**Last Updated**: 2024
