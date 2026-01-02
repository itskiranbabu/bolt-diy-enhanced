<div align="center">

# 🚀 Bolt.DIY Enhanced

*AI-Powered Full-Stack Web Application Builder*

[![GitHub Stars](https://img.shields.io/github/stars/itskiranbabu/bolt-diy-enhanced?style=social)](https://github.com/itskiranbabu/bolt-diy-enhanced/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/itskiranbabu/bolt-diy-enhanced?style=social)](https://github.com/itskiranbabu/bolt-diy-enhanced/network/members)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18.18.0-brightgreen.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue.svg)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black.svg)](https://vercel.com)

**Prompt, run, edit, and deploy full-stack web applications using any LLM you want!**

*Enhanced with comprehensive documentation, deployment guides, and professional branding*

[Features](#-features) • [Quick Start](#-quick-start) • [Deployment](#-deployment-guides) • [Documentation](#-documentation) • [LLM Support](#-supported-llms) • [Contributing](#-contributing)

---

**Enhanced by [itskiranbabu](https://github.com/itskiranbabu) | Powered by KeyRun AI**

**Original Project:** [bolt.diy by StackBlitz Labs](https://github.com/stackblitz-labs/bolt.diy)

</div>

---

## 📋 Table of Contents

- [What is Bolt.DIY Enhanced?](#-what-is-boltdiy-enhanced)
- [Key Features](#-key-features)
- [Enhancements](#-enhancements)
- [Quick Start](#-quick-start)
- [Deployment Guides](#-deployment-guides)
- [Supported LLMs](#-supported-llms)
- [Configuration](#-configuration)
- [Documentation](#-documentation)
- [Architecture](#-architecture)
- [Development](#-development)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [Community](#-community)
- [License](#-license)

---

## 🎯 What is Bolt.DIY Enhanced?

**Bolt.DIY Enhanced** is an advanced, AI-powered web application builder that allows you to:

✅ **Prompt** - Describe your app in natural language
✅ **Run** - See your app running in real-time
✅ **Edit** - Modify code with AI assistance
✅ **Deploy** - One-click deployment to production

### The Power of AI-Driven Development

Unlike traditional development tools, Bolt.DIY Enhanced:
- Uses **any LLM** (OpenAI, Anthropic, Google, Ollama, etc.)
- Generates **full-stack applications** from prompts
- Provides **live preview** with WebContainer technology
- Enables **AI-assisted editing** of generated code
- Supports **instant deployment** to multiple platforms

---

## ✨ Key Features

### 🤖 Multi-LLM Support

**20+ LLM Providers Supported:**
- OpenAI (GPT-4, GPT-3.5)
- Anthropic (Claude 3.5 Sonnet, Claude 3 Opus)
- Google (Gemini Pro, Gemini Flash)
- Mistral AI
- Cohere
- DeepSeek
- Ollama (Local LLMs)
- LM Studio (Local LLMs)
- OpenRouter (100+ models)
- Together AI
- Groq
- HuggingFace
- Perplexity
- And many more!

### 💻 Full-Stack Development

**Complete Development Environment:**
- **Frontend Frameworks**: React, Vue, Svelte, Angular
- **Backend**: Node.js, Express, Fastify
- **Databases**: SQLite, PostgreSQL (via Supabase)
- **Styling**: Tailwind CSS, CSS Modules, Sass
- **Build Tools**: Vite, Webpack, Rollup
- **Package Management**: npm, pnpm, yarn

### 🎨 Live Preview

**Real-Time Development:**
- Instant preview with WebContainer
- Hot module replacement (HMR)
- Browser-based terminal
- File system access
- Network requests support

### 📝 AI-Assisted Editing

**Intelligent Code Modification:**
- Natural language code edits
- Context-aware suggestions
- Multi-file editing
- Diff visualization
- Undo/redo support

### 🚀 One-Click Deployment

**Deploy Anywhere:**
- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages
- Custom servers

### 🔧 Advanced Features

- **Git Integration** - Version control built-in
- **Terminal Access** - Full shell access
- **File Management** - Upload, download, organize
- **Code Export** - Download as ZIP
- **Collaboration** - Share projects
- **Templates** - Pre-built starters
- **Extensions** - Customize functionality

---

## 🌟 Enhancements

### What Makes This Version Enhanced?

**Original bolt.diy:**
- AI-powered app builder
- Multi-LLM support
- Live preview
- Basic documentation

**Bolt.DIY Enhanced (This Version):**
✅ **Comprehensive Documentation** (100+ pages)
✅ **Deployment Guides** (Vercel, Netlify, Cloudflare, Docker)
✅ **Configuration Wizard** - Easy setup
✅ **Troubleshooting Guide** - Common issues solved
✅ **Video Tutorials** - Step-by-step guides
✅ **Best Practices** - Production-ready tips
✅ **Performance Optimization** - Speed improvements
✅ **Security Hardening** - Production security
✅ **Professional Branding** - Your identity
✅ **Community Support** - Active help channels
✅ **Regular Updates** - Maintained actively

---

## 🚀 Quick Start

### Prerequisites

**Required:**
- Node.js 18.18.0 or higher
- pnpm 9.14.4 or higher
- Git

**Optional:**
- Docker (for containerized deployment)
- Vercel CLI (for Vercel deployment)

### Installation

#### Method 1: Clone & Install (Recommended)

```bash
# Clone the repository
git clone https://github.com/itskiranbabu/bolt-diy-enhanced.git
cd bolt-diy-enhanced

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local

# Configure your LLM API keys (see Configuration section)
nano .env.local

# Start development server
pnpm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser! 🎉

#### Method 2: Docker

```bash
# Clone repository
git clone https://github.com/itskiranbabu/bolt-diy-enhanced.git
cd bolt-diy-enhanced

# Copy environment file
cp .env.example .env.local

# Configure API keys
nano .env.local

# Build Docker image
pnpm run dockerbuild

# Run container
pnpm run dockerrun
```

Open [http://localhost:5173](http://localhost:5173)

#### Method 3: One-Click Deploy

**Deploy to Vercel:**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/itskiranbabu/bolt-diy-enhanced)

**Deploy to Netlify:**

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/itskiranbabu/bolt-diy-enhanced)

---

## 📦 Deployment Guides

### Vercel Deployment (Recommended)

**Why Vercel?**
- Zero configuration
- Automatic HTTPS
- Global CDN
- Serverless functions
- Free tier available

**Step-by-Step:**

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Build the project**
   ```bash
   pnpm run build
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Configure Environment Variables**
   - Go to Vercel Dashboard
   - Select your project
   - Settings → Environment Variables
   - Add your LLM API keys

5. **Redeploy**
   ```bash
   vercel --prod
   ```

**Environment Variables for Vercel:**

```env
# Required
OPENAI_API_KEY=your_openai_key
ANTHROPIC_API_KEY=your_anthropic_key
GOOGLE_GENERATIVE_AI_API_KEY=your_google_key

# Optional
GROQ_API_KEY=your_groq_key
OPENROUTER_API_KEY=your_openrouter_key
```

**Custom Domain:**
```bash
vercel domains add yourdomain.com
```

See [VERCEL_DEPLOYMENT.md](docs/VERCEL_DEPLOYMENT.md) for detailed guide.

### Netlify Deployment

**Step-by-Step:**

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build**
   ```bash
   pnpm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

4. **Configure Environment Variables**
   - Netlify Dashboard → Site Settings → Environment Variables
   - Add your API keys

See [NETLIFY_DEPLOYMENT.md](docs/NETLIFY_DEPLOYMENT.md) for details.

### Cloudflare Pages

**Step-by-Step:**

1. **Install Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **Login**
   ```bash
   wrangler login
   ```

3. **Deploy**
   ```bash
   pnpm run deploy
   ```

See [CLOUDFLARE_DEPLOYMENT.md](docs/CLOUDFLARE_DEPLOYMENT.md) for details.

### Docker Deployment

**Production Build:**

```bash
# Build production image
pnpm run dockerbuild:prod

# Run container
docker run -d -p 5173:5173 --env-file .env.local bolt-ai:production
```

**Docker Compose:**

```bash
# Start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

See [DOCKER_DEPLOYMENT.md](docs/DOCKER_DEPLOYMENT.md) for details.

---

## 🤖 Supported LLMs

### Cloud Providers

#### OpenAI
```env
OPENAI_API_KEY=sk-...
```
**Models:** GPT-4, GPT-4 Turbo, GPT-3.5 Turbo

#### Anthropic
```env
ANTHROPIC_API_KEY=sk-ant-...
```
**Models:** Claude 3.5 Sonnet, Claude 3 Opus, Claude 3 Haiku

#### Google
```env
GOOGLE_GENERATIVE_AI_API_KEY=...
```
**Models:** Gemini 1.5 Pro, Gemini 1.5 Flash

#### Groq
```env
GROQ_API_KEY=gsk_...
```
**Models:** Llama 3, Mixtral, Gemma

#### OpenRouter
```env
OPENROUTER_API_KEY=sk-or-...
```
**Models:** 100+ models from various providers

#### Mistral AI
```env
MISTRAL_API_KEY=...
```
**Models:** Mistral Large, Mistral Medium, Mistral Small

#### Cohere
```env
COHERE_API_KEY=...
```
**Models:** Command, Command Light

#### DeepSeek
```env
DEEPSEEK_API_KEY=...
```
**Models:** DeepSeek Coder, DeepSeek Chat

### Local LLMs

#### Ollama
```env
OLLAMA_API_BASE_URL=http://localhost:11434
```
**Models:** Llama 3, Mistral, CodeLlama, Phi-3, etc.

**Setup:**
```bash
# Install Ollama
curl -fsSL https://ollama.com/install.sh | sh

# Pull a model
ollama pull llama3

# Start Ollama
ollama serve
```

#### LM Studio
```env
LMSTUDIO_API_BASE_URL=http://localhost:1234
```
**Models:** Any GGUF model

**Setup:**
1. Download [LM Studio](https://lmstudio.ai/)
2. Load a model
3. Start local server
4. Configure base URL

See [LLM_CONFIGURATION.md](docs/LLM_CONFIGURATION.md) for complete guide.

---

## ⚙️ Configuration

### Environment Variables

**Required Variables:**

```env
# At least one LLM provider is required
OPENAI_API_KEY=your_key_here
# OR
ANTHROPIC_API_KEY=your_key_here
# OR
GOOGLE_GENERATIVE_AI_API_KEY=your_key_here
```

**Optional Variables:**

```env
# Additional LLM Providers
GROQ_API_KEY=your_groq_key
OPENROUTER_API_KEY=your_openrouter_key
MISTRAL_API_KEY=your_mistral_key
COHERE_API_KEY=your_cohere_key
DEEPSEEK_API_KEY=your_deepseek_key

# Local LLMs
OLLAMA_API_BASE_URL=http://localhost:11434
LMSTUDIO_API_BASE_URL=http://localhost:1234

# Custom OpenAI-compatible endpoints
OPENAI_LIKE_API_BASE_URL=https://your-endpoint.com
OPENAI_LIKE_API_KEY=your_key

# Application Settings
VITE_LOG_LEVEL=debug
VITE_MAX_RESPONSE_SEGMENTS=10
```

### Configuration File

Create `bolt.config.js`:

```javascript
export default {
  // Default LLM provider
  defaultProvider: 'openai',
  
  // Default model
  defaultModel: 'gpt-4-turbo-preview',
  
  // Max tokens
  maxTokens: 4096,
  
  // Temperature
  temperature: 0.7,
  
  // Enable features
  features: {
    git: true,
    terminal: true,
    fileUpload: true,
    export: true,
  },
};
```

See [CONFIGURATION.md](docs/CONFIGURATION.md) for complete guide.

---

## 📚 Documentation

### Complete Documentation

- **[Installation Guide](docs/INSTALLATION.md)** - Detailed setup instructions
- **[Deployment Guide](docs/DEPLOYMENT.md)** - All deployment options
- **[LLM Configuration](docs/LLM_CONFIGURATION.md)** - Configure AI providers
- **[User Guide](docs/USER_GUIDE.md)** - How to use Bolt.DIY
- **[API Reference](docs/API_REFERENCE.md)** - Developer documentation
- **[Troubleshooting](docs/TROUBLESHOOTING.md)** - Common issues & solutions
- **[Best Practices](docs/BEST_PRACTICES.md)** - Production tips
- **[FAQ](docs/FAQ.md)** - Frequently asked questions

### Quick References

- **[Quick Start Guide](docs/QUICK_START.md)** - Get started in 5 minutes
- **[Cheat Sheet](docs/CHEAT_SHEET.md)** - Common commands
- **[Video Tutorials](docs/TUTORIALS.md)** - Step-by-step videos

---

## 🏗️ Architecture

### Technology Stack

**Frontend:**
- React 18.3
- Remix 2.15
- TypeScript 5.7
- UnoCSS
- Radix UI
- Framer Motion

**Backend:**
- Cloudflare Workers
- Remix Server
- WebContainer API

**AI Integration:**
- Vercel AI SDK
- Multiple LLM providers
- Streaming responses

**Development:**
- Vite 5.4
- pnpm 9.14
- ESLint
- Prettier

### Project Structure

```
bolt-diy-enhanced/
├── app/                    # Application source
│   ├── components/        # React components
│   ├── lib/              # Core libraries
│   ├── routes/           # Remix routes
│   ├── styles/           # CSS/UnoCSS
│   ├── types/            # TypeScript types
│   └── utils/            # Utility functions
├── docs/                  # Documentation
├── electron/             # Electron app (desktop)
├── functions/            # Cloudflare functions
├── public/               # Static assets
├── .env.example          # Environment template
├── package.json          # Dependencies
├── vite.config.ts        # Vite configuration
└── README.md             # This file
```

### How It Works

1. **User Input** → Natural language prompt
2. **LLM Processing** → AI generates code
3. **WebContainer** → Runs code in browser
4. **Live Preview** → Real-time updates
5. **AI Editing** → Iterative improvements
6. **Deployment** → One-click publish

See [ARCHITECTURE.md](docs/ARCHITECTURE.md) for detailed explanation.

---

## 💻 Development

### Development Setup

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm run dev

# Run tests
pnpm run test

# Lint code
pnpm run lint

# Format code
pnpm run lint:fix

# Type check
pnpm run typecheck
```

### Development Scripts

```bash
# Development
pnpm run dev              # Start dev server
pnpm run dev:debug        # Start with debugging

# Building
pnpm run build            # Production build
pnpm run preview          # Preview production build

# Testing
pnpm run test             # Run tests once
pnpm run test:watch       # Watch mode

# Code Quality
pnpm run lint             # Lint code
pnpm run lint:fix         # Fix linting issues
pnpm run typecheck        # Type checking

# Docker
pnpm run dockerbuild      # Build dev image
pnpm run dockerbuild:prod # Build prod image
pnpm run dockerrun        # Run container

# Electron (Desktop App)
pnpm run electron:dev     # Dev mode
pnpm run electron:build   # Build desktop app
```

### Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

**Ways to contribute:**
1. Report bugs
2. Suggest features
3. Improve documentation
4. Submit pull requests
5. Share your projects

---

## 🔧 Troubleshooting

### Common Issues

#### Issue: "Module not found"

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

#### Issue: "API key not working"

**Solution:**
1. Check `.env.local` file exists
2. Verify API key format
3. Restart dev server
4. Check API key permissions

#### Issue: "WebContainer not loading"

**Solution:**
1. Use Chrome/Edge (best support)
2. Enable SharedArrayBuffer
3. Check browser console
4. Clear browser cache

#### Issue: "Build fails"

**Solution:**
```bash
# Clean and rebuild
pnpm run clean
pnpm install
pnpm run build
```

See [TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md) for complete guide.

---

## 🤝 Contributing

### How to Contribute

1. **Fork the repository**
2. **Create a branch** (`git checkout -b feature/amazing-feature`)
3. **Make changes**
4. **Commit** (`git commit -m 'Add amazing feature'`)
5. **Push** (`git push origin feature/amazing-feature`)
6. **Open Pull Request**

### Contribution Guidelines

- Follow TypeScript best practices
- Write tests for new features
- Update documentation
- Follow code style (ESLint + Prettier)
- Keep commits atomic and descriptive

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

---

## 👥 Community

### Join Our Community

📱 **WhatsApp Channel** - Daily AI & Tech insights
🔗 [Join Channel](https://whatsapp.com/channel/0029VbCCj7FGJP8EeBLXzD1C)

💬 **WhatsApp Group** - Interactive discussions
🔗 [Join Group](https://chat.whatsapp.com/IfIKh4bVhCc1qjPEOFKQeh)

🐙 **GitHub Discussions** - Ask questions, share ideas
🔗 [Join Discussions](https://github.com/itskiranbabu/bolt-diy-enhanced/discussions)

💼 **LinkedIn** - Professional networking
🔗 [Connect on LinkedIn](https://linkedin.com/in/itskiranbabu)

### Get Help

- **Documentation** - Check our [comprehensive docs](docs/)
- **FAQ** - See [frequently asked questions](docs/FAQ.md)
- **Issues** - [Search existing issues](https://github.com/itskiranbabu/bolt-diy-enhanced/issues)
- **Discussions** - [Ask the community](https://github.com/itskiranbabu/bolt-diy-enhanced/discussions)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Original Project

This is an enhanced version of [bolt.diy](https://github.com/stackblitz-labs/bolt.diy) by StackBlitz Labs.

Original bolt.diy is also licensed under MIT License.

---

## 🙏 Acknowledgments

### Original Creators

**Huge thanks to [StackBlitz Labs](https://github.com/stackblitz-labs)** for creating the amazing bolt.diy project that makes AI-powered development accessible to everyone.

### Contributors

Thank you to all contributors who have helped enhance this project!

### Technologies

- **StackBlitz** - WebContainer technology
- **Vercel** - AI SDK and hosting
- **Remix** - Full-stack framework
- **React** - UI library
- **TypeScript** - Type safety
- **Cloudflare** - Edge computing

### Community

Special thanks to:
- AI Innovators & Agile Leaders Hub community
- All users providing feedback and suggestions
- Open-source contributors worldwide

---

## 📊 Project Stats

![GitHub Stars](https://img.shields.io/github/stars/itskiranbabu/bolt-diy-enhanced?style=social)
![GitHub Forks](https://img.shields.io/github/forks/itskiranbabu/bolt-diy-enhanced?style=social)
![GitHub Issues](https://img.shields.io/github/issues/itskiranbabu/bolt-diy-enhanced)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/itskiranbabu/bolt-diy-enhanced)
![Last Commit](https://img.shields.io/github/last-commit/itskiranbabu/bolt-diy-enhanced)

---

## 🗺️ Roadmap

### Upcoming Features

- [ ] More LLM providers
- [ ] Advanced code editing
- [ ] Team collaboration
- [ ] Project templates
- [ ] Plugin system
- [ ] Mobile app
- [ ] VS Code extension
- [ ] API access

### In Progress

- [x] Enhanced documentation
- [x] Deployment guides
- [x] Troubleshooting guide
- [x] Community building

---

## 💬 Feedback

We'd love to hear from you!

- **Feature Requests** - [Open an issue](https://github.com/itskiranbabu/bolt-diy-enhanced/issues/new?template=feature_request.md)
- **Bug Reports** - [Report a bug](https://github.com/itskiranbabu/bolt-diy-enhanced/issues/new?template=bug_report.md)
- **General Feedback** - [Start a discussion](https://github.com/itskiranbabu/bolt-diy-enhanced/discussions)
- **Email** - itskeyrun.ai@gmail.com

---

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=itskiranbabu/bolt-diy-enhanced&type=Date)](https://star-history.com/#itskiranbabu/bolt-diy-enhanced&Date)

---

<div align="center">

## 🚀 Ready to Build with AI?

**[Get Started Now](#-quick-start)** | **[Deploy to Vercel](#-deployment-guides)** | **[Join Community](#-community)**

---

**Enhanced by [itskiranbabu](https://github.com/itskiranbabu)**

**Powered by KeyRun AI**

⭐ **Star this repo if you find it helpful!** ⭐

---

**Connect with me:**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-itskiranbabu-blue?style=flat&logo=linkedin)](https://linkedin.com/in/itskiranbabu)
[![GitHub](https://img.shields.io/badge/GitHub-itskiranbabu-black?style=flat&logo=github)](https://github.com/itskiranbabu)
[![Email](https://img.shields.io/badge/Email-itskeyrun.ai@gmail.com-red?style=flat&logo=gmail)](mailto:itskeyrun.ai@gmail.com)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-Community-green?style=flat&logo=whatsapp)](https://whatsapp.com/channel/0029VbCCj7FGJP8EeBLXzD1C)

**Original Project:** [bolt.diy by StackBlitz Labs](https://github.com/stackblitz-labs/bolt.diy)

</div>
