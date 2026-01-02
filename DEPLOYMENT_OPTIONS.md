# 🚀 How to Deploy Bolt.DIY - Complete Guide

## ⚠️ Important: Bolt.DIY Cannot Deploy to Vercel

The original bolt.diy application uses **Remix with Cloudflare Workers**, which requires Cloudflare-specific infrastructure that Vercel doesn't support.

**Error you'll see on Vercel:**
```
@cloudflare/workerd-linux-64
GLIBC_2.35 not found
```

This is **normal and expected**. Bolt.DIY is designed for Cloudflare or local development.

---

## ✅ Recommended Deployment Options

### **Option 1: Run Locally (BEST)** ⭐

**Perfect for:**
- Development
- Testing
- Personal use
- Full control

**Steps:**
```bash
# 1. Clone the repository
git clone https://github.com/stackblitz-labs/bolt.diy.git
cd bolt.diy

# 2. Install dependencies
pnpm install

# 3. Configure environment
cp .env.example .env.local

# 4. Add your API key to .env.local
# Choose ONE or more:
OPENAI_API_KEY=sk-proj-your-key-here
GROQ_API_KEY=gsk_your-key-here
ANTHROPIC_API_KEY=sk-ant-your-key-here
GOOGLE_GENERATIVE_AI_API_KEY=your-key-here

# 5. Start the application
pnpm run dev

# 6. Open in browser
# http://localhost:5173
```

**Advantages:**
- ✅ Works perfectly
- ✅ No deployment issues
- ✅ Free (except API costs)
- ✅ Fast and responsive
- ✅ Full debugging capabilities

---

### **Option 2: Deploy to Cloudflare Pages** ☁️

**Perfect for:**
- Production deployment
- Sharing with team
- Public access
- Scalability

**Method A: Via Cloudflare Dashboard**

1. **Fork the Repository**
   - Go to: https://github.com/stackblitz-labs/bolt.diy
   - Click "Fork"
   - Create fork in your account

2. **Create Cloudflare Pages Project**
   - Go to: https://dash.cloudflare.com/
   - Click "Pages" → "Create a project"
   - Click "Connect to Git"
   - Select your forked repository

3. **Configure Build Settings**
   - Framework preset: **Remix**
   - Build command: `pnpm run build`
   - Build output directory: `build/client`
   - Root directory: `/`

4. **Add Environment Variables**
   - Click "Environment variables"
   - Add at least ONE:
     - `OPENAI_API_KEY`
     - `GROQ_API_KEY`
     - `ANTHROPIC_API_KEY`
     - `GOOGLE_GENERATIVE_AI_API_KEY`
   - Apply to: Production and Preview

5. **Deploy**
   - Click "Save and Deploy"
   - Wait 3-5 minutes
   - Your app will be live!

**Method B: Via Wrangler CLI**

```bash
# 1. Install Wrangler
npm install -g wrangler

# 2. Login to Cloudflare
wrangler login

# 3. Navigate to bolt.diy
cd bolt.diy

# 4. Deploy
pnpm run deploy

# 5. Add environment variables
wrangler pages secret put OPENAI_API_KEY
# Enter your API key when prompted
```

**Advantages:**
- ✅ Production-ready
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Free tier available
- ✅ Designed for Cloudflare

---

### **Option 3: Docker Container** 🐳

**Perfect for:**
- Self-hosting
- Enterprise deployment
- Custom infrastructure

```bash
# 1. Clone repository
git clone https://github.com/stackblitz-labs/bolt.diy.git
cd bolt.diy

# 2. Create Dockerfile
cat > Dockerfile << 'EOF'
FROM node:18-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm run build
EXPOSE 5173
CMD ["pnpm", "run", "start"]
EOF

# 3. Build image
docker build -t bolt-diy .

# 4. Run container
docker run -p 5173:5173 \
  -e OPENAI_API_KEY=your-key-here \
  bolt-diy

# 5. Open http://localhost:5173
```

---

## 🔑 Getting API Keys

### **OpenAI (Recommended)**
- Website: https://platform.openai.com/api-keys
- Models: GPT-4, GPT-4 Turbo, GPT-3.5
- Pricing: Pay-as-you-go
- Free tier: $5 credit for new accounts

### **Groq (Fast & Free)**
- Website: https://console.groq.com/
- Models: Llama 3, Mixtral, Gemma
- Pricing: Free tier available
- Speed: Very fast inference

### **Anthropic (Claude)**
- Website: https://console.anthropic.com/
- Models: Claude 3.5 Sonnet, Claude 3 Opus
- Pricing: Pay-as-you-go
- Quality: Excellent for coding

### **Google (Gemini)**
- Website: https://makersuite.google.com/app/apikey
- Models: Gemini 1.5 Pro, Gemini Flash
- Pricing: Free tier available
- Features: Long context window

### **Perplexity**
- Website: https://www.perplexity.ai/settings/api
- Models: Sonar, Chat
- Pricing: Pay-as-you-go
- Features: Search-enhanced

### **OpenRouter (100+ Models)**
- Website: https://openrouter.ai/keys
- Models: Access to 100+ models
- Pricing: Varies by model
- Features: One API for many providers

---

## ❌ Why Not Vercel?

**Technical Reasons:**

1. **Cloudflare Workers Dependency**
   - Bolt.DIY uses `@cloudflare/workers-types`
   - Requires Cloudflare runtime
   - Not compatible with Vercel's infrastructure

2. **GLIBC Version**
   - Cloudflare workerd requires GLIBC 2.35+
   - Vercel uses older system libraries
   - Cannot be resolved without major changes

3. **Remix Configuration**
   - Configured for Cloudflare Pages
   - Uses Cloudflare-specific plugins
   - Would require complete rebuild for Vercel

**Bottom Line:**
- ✅ Use Cloudflare Pages for deployment
- ✅ Use local development for testing
- ❌ Don't try to deploy to Vercel (won't work)

---

## 🎯 Recommended Workflow

### **For Development:**
```
Local Setup → Test → Iterate → Deploy to Cloudflare
```

### **For Production:**
```
Fork Repo → Cloudflare Pages → Add API Keys → Deploy
```

### **For Teams:**
```
Fork Repo → Cloudflare Pages → Team Access → Collaborate
```

---

## 📚 Additional Resources

- **Official Docs:** https://github.com/stackblitz-labs/bolt.diy
- **Cloudflare Pages:** https://pages.cloudflare.com/
- **Remix Docs:** https://remix.run/docs
- **WebContainer:** https://webcontainers.io/

---

## 💡 Quick Start Summary

**Fastest way to get started:**

1. ✅ Clone: `git clone https://github.com/stackblitz-labs/bolt.diy.git`
2. ✅ Install: `pnpm install`
3. ✅ Configure: Add API key to `.env.local`
4. ✅ Run: `pnpm run dev`
5. ✅ Build: Start creating apps with AI!

**For production:**
- Deploy to Cloudflare Pages
- Add environment variables
- Share with your team

---

## 🆘 Need Help?

- **Documentation:** https://github.com/itskiranbabu/bolt-diy-enhanced
- **Issues:** https://github.com/itskiranbabu/bolt-diy-enhanced/issues
- **Community:** https://whatsapp.com/channel/0029VbCCj7FGJP8EeBLXzD1C
- **Email:** itskeyrun.ai@gmail.com

---

**Happy Building with AI!** 🚀
