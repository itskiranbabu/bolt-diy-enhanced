# 🚀 Bolt.DIY Enhanced

**AI-Powered Full-Stack Web Application Builder**

Enhanced by [Kiran Babu](https://itskiranbabu.github.io/kiranbabu-portfolio/) | AI Automation Engineer & Technical Scrum Master

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)](https://bolt-diy-enhanced.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/itskiranbabu/bolt-diy-enhanced)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

---

## 🌟 Overview

**Bolt.DIY Enhanced** is a comprehensive documentation and resource hub for [bolt.diy](https://github.com/stackblitz-labs/bolt.diy) - the revolutionary AI-powered web application builder that lets you prompt, run, edit, and deploy full-stack applications using natural language.

This enhanced version provides:
- ✅ **16+ LLM Provider Support** - OpenAI, Anthropic, Google, Grok, Groq, Perplexity, OpenRouter & more
- ✅ **100KB+ Documentation** - Comprehensive guides and tutorials
- ✅ **Professional Landing Page** - Easy-to-navigate resource hub
- ✅ **Deployment Guides** - Step-by-step instructions for Cloudflare and local setup
- ✅ **API Key Resources** - Direct links to get started with any provider

---

## ⚠️ Important: Deployment Information

**Bolt.DIY uses Remix + Cloudflare Workers and CANNOT be deployed to Vercel.**

### ✅ Supported Deployment Options:

1. **Local Development** (Recommended) ⭐
   - Perfect for development and testing
   - Free (except API costs)
   - Full control and debugging

2. **Cloudflare Pages** ☁️
   - Production-ready deployment
   - Global CDN
   - Free tier available
   - Designed for Cloudflare infrastructure

3. **Docker Container** 🐳
   - Self-hosting
   - Enterprise deployment
   - Custom infrastructure

### ❌ Why Not Vercel?

Bolt.DIY requires:
- Cloudflare Workers runtime
- GLIBC 2.35+ (Vercel uses older versions)
- Cloudflare-specific Remix configuration

**This landing page (bolt-diy-enhanced) runs on Vercel**, but the **full bolt.diy application** requires Cloudflare or local setup.

---

## 🚀 Quick Start

### Option 1: Run Locally (Recommended)

```bash
# Clone the repository
git clone https://github.com/stackblitz-labs/bolt.diy.git
cd bolt.diy

# Install dependencies
pnpm install

# Configure environment
cp .env.example .env.local
# Add at least ONE API key to .env.local

# Start the application
pnpm run dev

# Open http://localhost:5173
```

### Option 2: Deploy to Cloudflare Pages

1. Fork the [bolt.diy repository](https://github.com/stackblitz-labs/bolt.diy)
2. Go to [Cloudflare Pages](https://dash.cloudflare.com/)
3. Connect your forked repository
4. Configure build settings:
   - Build command: `pnpm run build`
   - Build output: `build/client`
5. Add environment variables (at least ONE API key)
6. Deploy!

**Detailed Guide:** [DEPLOYMENT_OPTIONS.md](DEPLOYMENT_OPTIONS.md)

---

## 🤖 Supported LLM Providers (16+)

### Major Providers:
- **OpenAI** - GPT-4, GPT-4 Turbo, GPT-4o, GPT-3.5
- **Anthropic** - Claude 3.5 Sonnet, Claude 3 Opus, Claude 3 Haiku
- **Google** - Gemini 1.5 Pro, Gemini Flash, Gemini 2.0

### New Providers: 🆕
- **xAI Grok** - Grok-1, Grok-2
- **Groq** - Llama 3, Llama 3.1, Mixtral, Gemma (Fast & Free!)
- **Perplexity** - Sonar, Chat models (Search-enhanced)
- **OpenRouter** - 100+ models from various providers

### Additional Providers:
- Mistral AI, Cohere, DeepSeek, Together AI, HuggingFace, Replicate

### Local LLMs:
- **Ollama** - Llama 3, CodeLlama, Mistral, Phi-3, etc.
- **LM Studio** - Any GGUF model

### Custom:
- Any OpenAI-compatible API endpoint

---

## 🔑 Getting API Keys

| Provider | URL | Notes |
|----------|-----|-------|
| **OpenAI** | [platform.openai.com/api-keys](https://platform.openai.com/api-keys) | GPT-4, GPT-4o - $5 free credit |
| **Groq** | [console.groq.com](https://console.groq.com/) | Fast & Free tier! |
| **Anthropic** | [console.anthropic.com](https://console.anthropic.com/) | Claude 3.5 Sonnet |
| **Google** | [makersuite.google.com](https://makersuite.google.com/app/apikey) | Gemini Pro - Free tier |
| **Perplexity** | [perplexity.ai/settings/api](https://www.perplexity.ai/settings/api) | Search-enhanced AI |
| **OpenRouter** | [openrouter.ai/keys](https://openrouter.ai/keys) | Access 100+ models |

**You only need ONE API key to get started!**

---

## 📚 Documentation

- **[Quick Start Guide](QUICK_START.md)** - Get started in 5 minutes
- **[Deployment Options](DEPLOYMENT_OPTIONS.md)** - Complete deployment guide
- **[Full App Deployment](DEPLOY_FULL_APP.md)** - Detailed setup instructions
- **[Environment Variables](.env.example)** - All supported API keys

---

## 🎯 Features

### What You Can Do:

- **💬 Prompt** - Describe your app in natural language
- **⚡ Run** - See your app running in real-time with WebContainer
- **✏️ Edit** - Modify code with AI assistance
- **🚀 Deploy** - One-click deployment to production (via Cloudflare)

### Enhanced Features:

- ✅ Support for 16+ LLM providers
- ✅ Comprehensive documentation (100KB+)
- ✅ Professional landing page
- ✅ Step-by-step deployment guides
- ✅ API key resources and links
- ✅ Community support

---

## 🏗️ Project Structure

```
bolt-diy-enhanced/
├── app/
│   ├── layout.tsx          # Next.js layout
│   └── page.tsx            # Landing page
├── public/
│   ├── manifest.json       # PWA manifest
│   └── robots.txt          # SEO
├── .env.example            # Environment variables template
├── README.md               # This file
├── QUICK_START.md          # Quick start guide
├── DEPLOYMENT_OPTIONS.md   # Deployment guide
├── DEPLOY_FULL_APP.md      # Full app deployment
└── LICENSE                 # MIT License
```

---

## 🌐 Live Demo

**Landing Page:** [bolt-diy-enhanced.vercel.app](https://bolt-diy-enhanced.vercel.app/)

This landing page provides:
- Overview of bolt.diy features
- List of all 16+ supported LLM providers
- Deployment instructions
- API key resources
- Documentation links

**Note:** This is a documentation hub. To use the full bolt.diy application, follow the deployment instructions above.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Original Project:** [bolt.diy](https://github.com/stackblitz-labs/bolt.diy) by StackBlitz Labs
- **Enhanced by:** [Kiran Babu](https://itskiranbabu.github.io/kiranbabu-portfolio/)
- **Community:** All contributors and users

---

## 📞 Contact & Support

- **Portfolio:** [itskiranbabu.github.io/kiranbabu-portfolio](https://itskiranbabu.github.io/kiranbabu-portfolio/)
- **GitHub:** [@itskiranbabu](https://github.com/itskiranbabu)
- **LinkedIn:** [linkedin.com/in/itskiranbabu](https://linkedin.com/in/itskiranbabu)
- **Email:** babu.jtek@gmail.com
- **WhatsApp Community:** [Join Here](https://whatsapp.com/channel/0029VbCCj7FGJP8EeBLXzD1C)

---

## ⭐ Show Your Support

If you find this project helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 📢 Sharing with others

---

**Built with ❤️ by Kiran Babu | AI Automation Engineer & Technical Scrum Master**

**Powered by:** Next.js, React, TypeScript, Vercel

---

## 🔗 Quick Links

- [Live Demo](https://bolt-diy-enhanced.vercel.app/)
- [Original bolt.diy](https://github.com/stackblitz-labs/bolt.diy)
- [Quick Start Guide](QUICK_START.md)
- [Deployment Guide](DEPLOYMENT_OPTIONS.md)
- [API Keys Guide](.env.example)

---

**Happy Building with AI!** 🚀
