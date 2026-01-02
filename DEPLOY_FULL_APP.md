# 🚀 Deploy Full Bolt.DIY Application Guide

**Complete guide to deploying the actual Bolt.DIY application with AI capabilities**

*Enhanced by [itskiranbabu](https://github.com/itskiranbabu) | Powered by KeyRun AI*

---

## 📋 Table of Contents

1. [Understanding the Architecture](#understanding-the-architecture)
2. [Prerequisites](#prerequisites)
3. [Local Development](#local-development)
4. [Deploy to Vercel](#deploy-to-vercel)
5. [Deploy to Netlify](#deploy-to-netlify)
6. [Deploy to Cloudflare](#deploy-to-cloudflare)
7. [Environment Variables](#environment-variables)
8. [Troubleshooting](#troubleshooting)

---

## Understanding the Architecture

### Why Two Repositories?

**This Repository (bolt-diy-enhanced):**
- Documentation and guides
- Landing page
- Deployment instructions
- Enhanced with your branding

**Original bolt.diy:**
- Full application code
- WebContainer integration
- AI model connections
- Complete UI/UX

### Deployment Options

**Option 1: Deploy Original bolt.diy** (Recommended)
- Use StackBlitz's original repository
- Add your API keys
- Deploy to your Vercel account
- Full functionality immediately

**Option 2: Fork and Customize**
- Fork original bolt.diy
- Add your customizations
- Deploy your fork
- More control, more maintenance

---

## Prerequisites

### Required

✅ **LLM API Key** - At least one:
- [OpenAI API Key](https://platform.openai.com/api-keys) - GPT-4, GPT-3.5
- [Anthropic API Key](https://console.anthropic.com/) - Claude 3.5
- [Google AI API Key](https://makersuite.google.com/app/apikey) - Gemini

✅ **Deployment Platform Account:**
- [Vercel Account](https://vercel.com/signup) (Recommended)
- [Netlify Account](https://app.netlify.com/signup)
- [Cloudflare Account](https://dash.cloudflare.com/sign-up)

✅ **Tools:**
- Node.js 18.18.0+
- pnpm 9.14.4+
- Git

---

## Local Development

### Step 1: Clone Original Repository

```bash
# Clone the original bolt.diy
git clone https://github.com/stackblitz-labs/bolt.diy.git
cd bolt.diy

# Or clone a specific version
git clone --branch main https://github.com/stackblitz-labs/bolt.diy.git
```

### Step 2: Install Dependencies

```bash
# Install pnpm if you haven't
npm install -g pnpm

# Install dependencies
pnpm install
```

### Step 3: Configure Environment

```bash
# Copy environment file
cp .env.example .env.local

# Edit .env.local
nano .env.local
# or
code .env.local
```

**Add your API keys:**

```env
# Required: At least ONE of these
OPENAI_API_KEY=sk-proj-your-key-here
ANTHROPIC_API_KEY=sk-ant-your-key-here
GOOGLE_GENERATIVE_AI_API_KEY=your-key-here

# Optional: Additional providers
GROQ_API_KEY=gsk_your-key-here
OPENROUTER_API_KEY=sk-or-your-key-here
```

### Step 4: Start Development Server

```bash
# Start the app
pnpm run dev

# Open browser
# http://localhost:5173
```

**You should see:**
- Chat interface
- File explorer
- Terminal
- Preview pane

### Step 5: Test the Application

**Try a prompt:**
```
Create a simple todo app with React and Tailwind CSS
```

**The AI should:**
1. Generate code files
2. Install dependencies
3. Show live preview
4. Allow editing

---

## Deploy to Vercel

### Method 1: One-Click Deploy (Easiest)

**Step 1: Click Deploy Button**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/stackblitz-labs/bolt.diy&env=OPENAI_API_KEY,ANTHROPIC_API_KEY,GOOGLE_GENERATIVE_AI_API_KEY&envDescription=At%20least%20one%20LLM%20API%20key%20is%20required&envLink=https://github.com/stackblitz-labs/bolt.diy#environment-variables)

**Step 2: Configure**
1. Sign in to Vercel
2. Name your project: `my-bolt-diy`
3. Add environment variables:
   - `OPENAI_API_KEY` = your OpenAI key
   - OR `ANTHROPIC_API_KEY` = your Anthropic key
   - OR `GOOGLE_GENERATIVE_AI_API_KEY` = your Google key

**Step 3: Deploy**
1. Click "Deploy"
2. Wait 3-5 minutes
3. Your app is live!

**Your URL:**
```
https://my-bolt-diy.vercel.app
```

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to bolt.diy directory
cd bolt.diy

# Login to Vercel
vercel login

# Deploy
vercel

# Add environment variables
vercel env add OPENAI_API_KEY production
# Enter your API key when prompted

# Deploy to production
vercel --prod
```

### Method 3: GitHub Integration

**Step 1: Fork Repository**
1. Go to: https://github.com/stackblitz-labs/bolt.diy
2. Click "Fork"
3. Create fork in your account

**Step 2: Import to Vercel**
1. Go to: https://vercel.com/new
2. Import your forked repository
3. Configure:
   - Framework: Remix
   - Build Command: `pnpm run build`
   - Output Directory: `build/client`
   - Install Command: `pnpm install`

**Step 3: Add Environment Variables**
1. Settings → Environment Variables
2. Add your API keys:
   ```
   OPENAI_API_KEY=sk-proj-...
   ANTHROPIC_API_KEY=sk-ant-...
   GOOGLE_GENERATIVE_AI_API_KEY=...
   ```

**Step 4: Deploy**
1. Click "Deploy"
2. Wait for completion
3. Visit your live site!

---

## Deploy to Netlify

### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Step 2: Build the Project

```bash
cd bolt.diy
pnpm install
pnpm run build
```

### Step 3: Deploy

```bash
# Login to Netlify
netlify login

# Initialize site
netlify init

# Deploy
netlify deploy --prod
```

### Step 4: Add Environment Variables

```bash
# Via CLI
netlify env:set OPENAI_API_KEY "your-key-here"

# Or via Dashboard
# Site Settings → Environment Variables
```

---

## Deploy to Cloudflare Pages

### Step 1: Install Wrangler

```bash
npm install -g wrangler
```

### Step 2: Login

```bash
wrangler login
```

### Step 3: Deploy

```bash
cd bolt.diy
pnpm install
pnpm run deploy
```

### Step 4: Add Environment Variables

```bash
# Via Cloudflare Dashboard
# Pages → Your Project → Settings → Environment Variables
```

---

## Environment Variables

### Required Variables

**At least ONE of these:**

```env
# OpenAI (Recommended)
OPENAI_API_KEY=sk-proj-...

# Anthropic (Claude)
ANTHROPIC_API_KEY=sk-ant-...

# Google (Gemini)
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

# Local LLMs
OLLAMA_API_BASE_URL=http://localhost:11434
LMSTUDIO_API_BASE_URL=http://localhost:1234

# Application Settings
VITE_LOG_LEVEL=info
VITE_MAX_RESPONSE_SEGMENTS=10
```

### How to Get API Keys

**OpenAI:**
1. Go to: https://platform.openai.com/api-keys
2. Click "Create new secret key"
3. Copy key (starts with `sk-proj-`)
4. Add to environment variables

**Anthropic:**
1. Go to: https://console.anthropic.com/
2. Settings → API Keys
3. Create key
4. Copy key (starts with `sk-ant-`)

**Google:**
1. Go to: https://makersuite.google.com/app/apikey
2. Create API key
3. Copy key

---

## Troubleshooting

### Issue: "API Key Not Found"

**Solution:**
1. Verify environment variable name matches exactly
2. Restart deployment after adding variables
3. Check variable is set for "Production" environment

### Issue: "WebContainer Not Loading"

**Solution:**
1. Use Chrome or Edge browser (best support)
2. Enable SharedArrayBuffer
3. Check browser console for errors
4. Clear browser cache

### Issue: "Build Failed"

**Solution:**
```bash
# Clear cache and rebuild
rm -rf node_modules .cache build
pnpm install
pnpm run build
```

### Issue: "Module Not Found"

**Solution:**
```bash
# Ensure all dependencies installed
pnpm install

# Check package.json for missing deps
# Install specific package if needed
pnpm add missing-package
```

---

## Custom Domain

### Vercel

```bash
# Add domain
vercel domains add yourdomain.com

# Configure DNS
# Add CNAME: yourdomain.com → cname.vercel-dns.com
```

### Netlify

```bash
# Add domain
netlify domains:add yourdomain.com

# Configure DNS
# Add CNAME: yourdomain.com → your-site.netlify.app
```

---

## Monitoring & Analytics

### Enable Analytics

**Vercel:**
1. Project Settings → Analytics
2. Enable Web Analytics
3. View metrics in dashboard

**Netlify:**
1. Site Settings → Analytics
2. Enable Analytics
3. View traffic and performance

---

## Security Best Practices

### 1. Protect API Keys

✅ **DO:**
- Store in environment variables
- Use secrets management
- Rotate keys regularly
- Monitor usage

❌ **DON'T:**
- Commit keys to Git
- Share keys publicly
- Use same key everywhere
- Ignore usage alerts

### 2. Rate Limiting

```javascript
// Implement rate limiting
const rateLimit = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
};
```

### 3. CORS Configuration

```javascript
// Configure CORS properly
const corsOptions = {
  origin: 'https://yourdomain.com',
  credentials: true
};
```

---

## Cost Optimization

### Monitor API Usage

**OpenAI:**
- Dashboard → Usage
- Set spending limits
- Monitor daily usage

**Anthropic:**
- Console → Usage
- Track API calls
- Set alerts

### Optimize Requests

1. **Use appropriate models:**
   - GPT-3.5 for simple tasks
   - GPT-4 for complex tasks

2. **Limit token usage:**
   - Set max_tokens parameter
   - Use streaming responses

3. **Cache responses:**
   - Cache common queries
   - Reduce duplicate calls

---

## Next Steps

### After Deployment

1. ✅ **Test thoroughly**
   - Try different prompts
   - Test all features
   - Check error handling

2. ✅ **Monitor performance**
   - Check response times
   - Monitor API usage
   - Track errors

3. ✅ **Share your deployment**
   - Add to portfolio
   - Share on social media
   - Get feedback

### Customization Ideas

1. **Branding:**
   - Add your logo
   - Custom colors
   - Custom domain

2. **Features:**
   - Add templates
   - Custom prompts
   - User authentication

3. **Integrations:**
   - GitHub integration
   - Database connection
   - Analytics

---

## Support

### Get Help

**Documentation:**
- [Bolt.DIY Docs](https://github.com/stackblitz-labs/bolt.diy)
- [Vercel Docs](https://vercel.com/docs)
- [Remix Docs](https://remix.run/docs)

**Community:**
- [GitHub Discussions](https://github.com/itskiranbabu/bolt-diy-enhanced/discussions)
- [WhatsApp Community](https://whatsapp.com/channel/0029VbCCj7FGJP8EeBLXzD1C)

**Contact:**
- Email: itskeyrun.ai@gmail.com
- LinkedIn: [itskiranbabu](https://linkedin.com/in/itskiranbabu)

---

## Summary

**You now know how to:**
✅ Deploy full Bolt.DIY application
✅ Configure environment variables
✅ Use multiple deployment platforms
✅ Troubleshoot common issues
✅ Optimize costs and performance
✅ Secure your deployment

**Your deployment is ready to:**
- Generate full-stack applications with AI
- Support 20+ LLM providers
- Provide live preview with WebContainer
- Deploy generated apps

---

**Happy Building with AI!** 🚀

*Enhanced by [itskiranbabu](https://github.com/itskiranbabu) | Powered by KeyRun AI*
