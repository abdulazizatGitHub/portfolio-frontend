# 🚀 Deployment Guide

Complete guide for deploying the portfolio application using automated CI/CD pipeline.

## 📋 Overview

This project uses a fully automated CI/CD pipeline that:

1. ✅ Validates code quality (lint, format, test)
2. ✅ Runs security audits
3. ✅ Builds and tests Docker images
4. ✅ Pushes Docker images to GitHub Container Registry
5. ✅ Automatically deploys to Vercel

## 🔄 Automated Pipeline Flow

```
Push to main branch
    ↓
GitHub Actions Triggered
    ↓
┌─────────────────────────────────────┐
│ 1. Code Quality Checks              │
│    - ESLint                         │
│    - Prettier                       │
│    - Jest Tests                     │
└─────────────────────────────────────┘
    ↓
┌─────────────────────────────────────┐
│ 2. Security Audit                   │
│    - npm audit                      │
└─────────────────────────────────────┘
    ↓
┌─────────────────────────────────────┐
│ 3. Build Verification               │
│    - Production build               │
│    - Build size check               │
└─────────────────────────────────────┘
    ↓
┌─────────────────────────────────────┐
│ 4. Docker Build & Push             │
│    - Build Docker image             │
│    - Push to GHCR                  │
│    - Test container                 │
└─────────────────────────────────────┘
    ↓
┌─────────────────────────────────────┐
│ 5. Vercel Deployment               │
│    - Automatic deployment           │
│    - Live at: vercel.app            │
└─────────────────────────────────────┘
```

## 🌐 Deployment Platforms

### 1. Vercel (Primary - Automatic)

**Status**: ✅ Fully Automated

- **URL**: [https://abdulaziz-eta.vercel.app/](https://abdulaziz-eta.vercel.app/)
- **Trigger**: Push to `main` branch
- **Process**: Automatic after CI checks pass
- **Configuration**: `vercel.json`

**Setup**:

1. Connect GitHub repo to Vercel
2. Vercel auto-detects React app
3. Uses `npm run vercel-build` command
4. Deploys automatically on every push

### 2. Docker (Alternative Deployment)

**Status**: ✅ Automated Build & Push

- **Registry**: GitHub Container Registry (GHCR)
- **Image**: `ghcr.io/abdulazizatgithub/portfolio-frontend:latest`
- **Trigger**: Push to `main` branch (after CI passes)

**Pull and Run**:

```bash
# Pull image
docker pull ghcr.io/abdulazizatgithub/portfolio-frontend:latest

# Run container
docker run -p 3000:80 ghcr.io/abdulazizatgithub/portfolio-frontend:latest
```

**Deploy to Cloud Platforms**:

#### AWS (ECS/Fargate)

```bash
# Push to AWS ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account>.dkr.ecr.us-east-1.amazonaws.com
docker tag ghcr.io/abdulazizatgithub/portfolio-frontend:latest <account>.dkr.ecr.us-east-1.amazonaws.com/portfolio:latest
docker push <account>.dkr.ecr.us-east-1.amazonaws.com/portfolio:latest
```

#### Google Cloud Run

```bash
# Tag for GCR
docker tag ghcr.io/abdulazizatgithub/portfolio-frontend:latest gcr.io/<project-id>/portfolio:latest

# Push to GCR
docker push gcr.io/<project-id>/portfolio:latest

# Deploy to Cloud Run
gcloud run deploy portfolio --image gcr.io/<project-id>/portfolio:latest --platform managed
```

#### Azure Container Instances

```bash
# Tag for ACR
docker tag ghcr.io/abdulazizatgithub/portfolio-frontend:latest <registry>.azurecr.io/portfolio:latest

# Push to ACR
docker push <registry>.azurecr.io/portfolio:latest

# Deploy to ACI
az container create --resource-group <rg> --name portfolio --image <registry>.azurecr.io/portfolio:latest --dns-name-label portfolio --ports 80
```

## 🔧 Manual Deployment

### Local Docker Build

```bash
# Build image
npm run docker:build

# Run container
npm run docker:run

# Or use docker-compose
npm run docker:dev
```

### Manual Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## 📊 Pipeline Status

Check pipeline status:

1. **GitHub Actions**: [Actions Tab](https://github.com/abdulazizatGitHub/portfolio-frontend/actions)
2. **Vercel Dashboard**: [Vercel Dashboard](https://vercel.com/dashboard)
3. **Docker Images**: [GHCR Packages](https://github.com/abdulazizatGitHub/portfolio-frontend/pkgs/container/portfolio-frontend)

## 🔍 Monitoring

### Health Checks

- **Vercel**: Automatic health monitoring
- **Docker**: Health endpoint at `/health`
- **CI/CD**: All workflows include status checks

### Deployment Notifications

- GitHub Actions sends status updates
- Vercel sends deployment notifications (if configured)
- Docker build status visible in Actions tab

## 🚨 Troubleshooting

### CI/CD Pipeline Fails

1. Check GitHub Actions logs
2. Verify all tests pass locally: `npm run test:ci`
3. Check linting: `npm run lint`
4. Verify formatting: `npm run format:check`

### Docker Build Fails

1. Test locally: `npm run docker:build`
2. Check Dockerfile syntax
3. Verify `.dockerignore` is correct
4. Check GitHub Actions logs for specific errors

### Vercel Deployment Fails

1. Check Vercel dashboard for build logs
2. Verify `vercel.json` configuration
3. Test build locally: `npm run vercel-build`
4. Check environment variables in Vercel dashboard

## 🔐 Security

- ✅ All dependencies audited in CI/CD
- ✅ Docker images scanned (if enabled)
- ✅ Secrets managed via GitHub Secrets
- ✅ No secrets in code or config files

## 📈 Performance

- **Build Time**: ~2-3 minutes (CI/CD)
- **Docker Build**: ~1-2 minutes
- **Vercel Deploy**: ~1-2 minutes
- **Total Pipeline**: ~5-7 minutes

## ✅ Best Practices

1. **Never push directly to main** - Use PRs
2. **All checks must pass** before deployment
3. **Test locally first** before pushing
4. **Monitor deployments** after push
5. **Keep dependencies updated** regularly

---

**Last Updated**: 2024  
**Status**: Production Ready ✅
