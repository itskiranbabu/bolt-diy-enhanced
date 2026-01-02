# 🚀 Vercel Deployment Guide - Bolt.DIY Enhanced

**Complete guide to deploying Bolt.DIY Enhanced on Vercel**

*Enhanced by [itskiranbabu](https://github.com/itskiranbabu) | Powered by KeyRun AI*

---

## 📋 Table of Contents

1. [Why Vercel?](#why-vercel)
2. [Prerequisites](#prerequisites)
3. [Quick Deploy](#quick-deploy)
4. [Manual Deployment](#manual-deployment)
5. [Environment Variables](#environment-variables)
6. [Custom Domain](#custom-domain)
7. [Troubleshooting](#troubleshooting)
8. [Best Practices](#best-practices)

---

## Why Vercel?

**Vercel is the recommended platform for deploying Bolt.DIY Enhanced:**

✅ **Zero Configuration** - Works out of the box
✅ **Automatic HTTPS** - Free SSL certificates
✅ **Global CDN** - Fast worldwide
✅ **Serverless Functions** - Scalable backend
✅ **Preview Deployments** - Test before production
✅ **Git Integration** - Auto-deploy on push
✅ **Free Tier** - Generous free plan
✅ **Easy Rollbacks** - One-click revert

---

## Prerequisites

**Required:**
- GitHub account
- Vercel account (free) - [Sign up](https://vercel.com/signup)
- LLM API keys (OpenAI, Anthropic, etc.)

**Optional:**
- Vercel CLI
- Custom domain

---

## Quick Deploy

### Method 1: One-Click Deploy (Easiest)

**Step 1: Click Deploy Button**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/itskiranbabu/bolt-diy-enhanced)

**Step 2: Configure**
1. Sign in to Vercel
2. Name your project
3. Click "Deploy"

**Step 3: Add Environment Variables**
1. Go to Project Settings
2. Navigate to "Environment Variables"
3. Add your API keys (see [Environment Variables](#environment-variables))

**Step 4: Redeploy**
1. Go to Deployments
2. Click "..." on latest deployment
3. Click "Redeploy"

**Done!** Your app is live! 🎉

---

## Manual Deployment

### Method 2: Vercel CLI (Recommended for Developers)

**Step 1: Install Vercel CLI**

```bash
npm i -g vercel
```

**Step 2: Clone Repository**

```bash
git clone https://github.com/itskiranbabu/bolt-diy-enhanced.git
cd bolt-diy-enhanced
```

**Step 3: Install Dependencies**

```bash
pnpm install
```

**Step 4: Build Project**

```bash
pnpm run build
```

**Step 5: Login to Vercel**

```bash
vercel login
```

**Step 6: Deploy**

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

**Step 7: Configure Environment Variables**

```bash
# Add environment variables
vercel env add OPENAI_API_KEY
vercel env add ANTHROPIC_API_KEY
vercel env add GOOGLE_GENERATIVE_AI_API_KEY

# Pull environment variables locally
vercel env pull
```

**Step 8: Redeploy with Environment Variables**

```bash
vercel --prod
```

---

### Method 3: GitHub Integration (Best for Teams)

**Step 1: Push to GitHub**

```bash
# Create new repository on GitHub
# Then push your code

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

**Step 2: Import to Vercel**

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset**: Remix
   - **Build Command**: `pnpm run build`
   - **Output Directory**: `build/client`
   - **Install Command**: `pnpm install`

**Step 3: Add Environment Variables**

1. In project settings, go to "Environment Variables"
2. Add all required variables (see below)
3. Click "Save"

**Step 4: Deploy**

1. Click "Deploy"
2. Wait for deployment to complete
3. Visit your live site!

**Auto-Deploy:**
- Every push to `main` branch auto-deploys to production
- Pull requests create preview deployments
- Easy rollbacks to previous versions

---

## Environment Variables

### Required Variables

**At least ONE LLM provider is required:**

```env
# OpenAI (Recommended)
OPENAI_API_KEY=sk-proj-...

# OR Anthropic
ANTHROPIC_API_KEY=sk-ant-...

# OR Google
GOOGLE_GENERATIVE_AI_API_KEY=...
```

### Optional Variables

```env
# Additional LLM Providers
GROQ_API_KEY=gsk_...
OPENROUTER_API_KEY=sk-or-...
MISTRAL_API_KEY=...
COHERE_API_KEY=...
DEEPSEEK_API_KEY=...

# Local LLMs (if using)
OLLAMA_API_BASE_URL=http://localhost:11434
LMSTUDIO_API_BASE_URL=http://localhost:1234

# Custom OpenAI-compatible
OPENAI_LIKE_API_BASE_URL=https://your-endpoint.com
OPENAI_LIKE_API_KEY=your_key

# Application Settings
VITE_LOG_LEVEL=info
VITE_MAX_RESPONSE_SEGMENTS=10
```

### How to Add Environment Variables

#### Via Vercel Dashboard:

1. Go to your project
2. Settings → Environment Variables
3. Add each variable:
   - **Name**: Variable name (e.g., `OPENAI_API_KEY`)
   - **Value**: Your API key
   - **Environment**: Production, Preview, Development
4. Click "Save"

#### Via Vercel CLI:

```bash
# Add single variable
vercel env add OPENAI_API_KEY production

# Add from .env file
vercel env pull .env.local
```

#### Via vercel.json:

**⚠️ WARNING: Never commit API keys to Git!**

```json
{
  "env": {
    "OPENAI_API_KEY": "@openai-api-key"
  }
}
```

Then add secrets:
```bash
vercel secrets add openai-api-key your_actual_key
```

---

## Custom Domain

### Add Custom Domain

**Step 1: Go to Project Settings**
1. Open your project in Vercel
2. Go to "Settings" → "Domains"

**Step 2: Add Domain**
1. Enter your domain (e.g., `bolt.yourdomain.com`)
2. Click "Add"

**Step 3: Configure DNS**

**Option A: Vercel Nameservers (Recommended)**
1. Update nameservers at your domain registrar:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```
2. Wait for DNS propagation (up to 48 hours)

**Option B: CNAME Record**
1. Add CNAME record at your DNS provider:
   ```
   Type: CNAME
   Name: bolt (or @)
   Value: cname.vercel-dns.com
   ```
2. Wait for DNS propagation

**Step 4: Verify**
1. Vercel will automatically verify
2. SSL certificate issued automatically
3. Your site is live on custom domain!

### Multiple Domains

```bash
# Add multiple domains
vercel domains add yourdomain.com
vercel domains add www.yourdomain.com
vercel domains add bolt.yourdomain.com
```

---

## Troubleshooting

### Common Issues

#### Issue: "Build Failed"

**Symptoms:**
- Deployment fails during build
- Error in build logs

**Solutions:**

1. **Check build logs:**
   ```bash
   vercel logs
   ```

2. **Test build locally:**
   ```bash
   pnpm run build
   ```

3. **Clear cache and rebuild:**
   - Vercel Dashboard → Deployments
   - Click "..." → "Redeploy"
   - Check "Clear cache"

4. **Check Node.js version:**
   - Ensure `package.json` has:
   ```json
   "engines": {
     "node": ">=18.18.0"
   }
   ```

#### Issue: "Environment Variables Not Working"

**Symptoms:**
- API calls fail
- "API key not found" errors

**Solutions:**

1. **Verify variables are set:**
   - Vercel Dashboard → Settings → Environment Variables
   - Check all required variables exist

2. **Check variable names:**
   - Must match exactly (case-sensitive)
   - No extra spaces

3. **Redeploy after adding variables:**
   ```bash
   vercel --prod
   ```

4. **Check variable scope:**
   - Ensure variables are set for "Production"

#### Issue: "Function Timeout"

**Symptoms:**
- 504 Gateway Timeout
- Long-running requests fail

**Solutions:**

1. **Upgrade Vercel plan** (if needed)
   - Free: 10s timeout
   - Pro: 60s timeout
   - Enterprise: 900s timeout

2. **Optimize LLM requests:**
   - Reduce max tokens
   - Use streaming responses
   - Implement request queuing

3. **Use Edge Functions:**
   ```javascript
   export const config = {
     runtime: 'edge',
   };
   ```

#### Issue: "Domain Not Working"

**Symptoms:**
- Domain shows error
- SSL certificate issues

**Solutions:**

1. **Check DNS propagation:**
   ```bash
   nslookup yourdomain.com
   ```

2. **Verify DNS records:**
   - CNAME should point to `cname.vercel-dns.com`
   - Or use Vercel nameservers

3. **Wait for SSL:**
   - SSL certificates can take up to 24 hours
   - Check status in Vercel Dashboard

4. **Remove and re-add domain:**
   - Settings → Domains
   - Remove domain
   - Add again

#### Issue: "Preview Deployment Not Working"

**Symptoms:**
- Pull request deployments fail
- Preview URLs don't work

**Solutions:**

1. **Check GitHub integration:**
   - Vercel Dashboard → Settings → Git
   - Ensure repository is connected

2. **Verify branch protection:**
   - GitHub → Settings → Branches
   - Ensure Vercel checks are enabled

3. **Check deployment settings:**
   - Vercel → Settings → Git
   - Enable "Preview Deployments"

---

## Best Practices

### Performance Optimization

**1. Enable Edge Functions**

```javascript
// app/routes/_index.tsx
export const config = {
  runtime: 'edge',
};
```

**2. Optimize Images**

```javascript
import { Image } from '@vercel/image';

<Image
  src="/logo.png"
  width={200}
  height={200}
  alt="Logo"
/>
```

**3. Enable Caching**

```javascript
// vercel.json
{
  "headers": [
    {
      "source": "/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### Security

**1. Use Environment Variables**
- Never commit API keys
- Use Vercel secrets for sensitive data

**2. Enable CORS**

```javascript
// vercel.json
{
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        {
          "key": "Access-Control-Allow-Origin",
          "value": "https://yourdomain.com"
        }
      ]
    }
  ]
}
```

**3. Rate Limiting**

```javascript
// Implement rate limiting for API routes
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
```

### Monitoring

**1. Enable Analytics**
- Vercel Dashboard → Analytics
- Track performance metrics
- Monitor errors

**2. Set Up Alerts**
- Configure deployment notifications
- Set up error alerts
- Monitor usage limits

**3. Review Logs**

```bash
# View logs
vercel logs

# Follow logs in real-time
vercel logs --follow
```

### Cost Optimization

**1. Monitor Usage**
- Check bandwidth usage
- Monitor function invocations
- Track build minutes

**2. Optimize Builds**
- Use build cache
- Minimize dependencies
- Optimize bundle size

**3. Use Edge Functions**
- Faster execution
- Lower costs
- Better performance

---

## Advanced Configuration

### vercel.json Configuration

```json
{
  "version": 2,
  "buildCommand": "pnpm run build",
  "devCommand": "pnpm run dev",
  "installCommand": "pnpm install",
  "framework": "remix",
  "outputDirectory": "build/client",
  "env": {
    "VITE_LOG_LEVEL": "info"
  },
  "build": {
    "env": {
      "NODE_VERSION": "18.18.0"
    }
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ],
  "redirects": [
    {
      "source": "/old-path",
      "destination": "/new-path",
      "permanent": true
    }
  ]
}
```

### Deployment Hooks

**Trigger deployments via webhook:**

```bash
# Get deploy hook URL from Vercel Dashboard
# Settings → Git → Deploy Hooks

# Trigger deployment
curl -X POST https://api.vercel.com/v1/integrations/deploy/...
```

---

## Continuous Deployment

### GitHub Actions Integration

```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Install Vercel CLI
        run: npm install -g vercel
      
      - name: Deploy to Vercel
        run: vercel --prod --token=${{ secrets.VERCEL_TOKEN }}
        env:
          VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
          VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## Support

### Get Help

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Community**: [Join our WhatsApp](https://whatsapp.com/channel/0029VbCCj7FGJP8EeBLXzD1C)
- **GitHub Issues**: [Report issues](https://github.com/itskiranbabu/bolt-diy-enhanced/issues)

---

## Next Steps

After successful deployment:

1. ✅ **Test your deployment** - Visit your live URL
2. ✅ **Configure custom domain** - Add your domain
3. ✅ **Set up monitoring** - Enable analytics
4. ✅ **Share your project** - Show the world!

---

**Deployment successful? Star the repo! ⭐**

*Enhanced by [itskiranbabu](https://github.com/itskiranbabu) | Powered by KeyRun AI*
