# ⚡ Quick Start Guide - Bolt.DIY Enhanced

**Get started with Bolt.DIY Enhanced in 5 minutes!**

*Enhanced by [itskiranbabu](https://github.com/itskiranbabu) | Powered by KeyRun AI*

---

## 🎯 What You'll Learn

In this guide, you'll:
1. Install Bolt.DIY Enhanced
2. Configure your first LLM
3. Create your first AI-generated app
4. Deploy to production

**Time Required:** 5-10 minutes

---

## 📋 Prerequisites

Before starting, ensure you have:

✅ **Node.js 18.18.0+** - [Download](https://nodejs.org/)
✅ **pnpm** - Install with `npm install -g pnpm`
✅ **Git** - [Download](https://git-scm.com/)
✅ **LLM API Key** - Get from [OpenAI](https://platform.openai.com/api-keys), [Anthropic](https://console.anthropic.com/), or [Google](https://makersuite.google.com/app/apikey)

---

## 🚀 Step 1: Installation (2 minutes)

### Clone the Repository

```bash
# Clone the repository
git clone https://github.com/itskiranbabu/bolt-diy-enhanced.git

# Navigate to directory
cd bolt-diy-enhanced

# Install dependencies
pnpm install
```

**Expected Output:**
```
Progress: resolved 1234, reused 1200, downloaded 34, added 1234, done
```

---

## ⚙️ Step 2: Configuration (2 minutes)

### Set Up Environment Variables

```bash
# Copy example environment file
cp .env.example .env.local

# Open in your editor
nano .env.local
# or
code .env.local
```

### Add Your API Key

**Choose ONE of the following:**

#### Option A: OpenAI (Recommended)

```env
OPENAI_API_KEY=sk-proj-your-key-here
```

Get your key: [OpenAI API Keys](https://platform.openai.com/api-keys)

#### Option B: Anthropic (Claude)

```env
ANTHROPIC_API_KEY=sk-ant-your-key-here
```

Get your key: [Anthropic Console](https://console.anthropic.com/)

#### Option C: Google (Gemini)

```env
GOOGLE_GENERATIVE_AI_API_KEY=your-key-here
```

Get your key: [Google AI Studio](https://makersuite.google.com/app/apikey)

#### Option D: Local LLM (Ollama)

```env
OLLAMA_API_BASE_URL=http://localhost:11434
```

**Setup Ollama:**
```bash
# Install Ollama
curl -fsSL https://ollama.com/install.sh | sh

# Pull a model
ollama pull llama3

# Start Ollama
ollama serve
```

**Save the file** (Ctrl+S or Cmd+S)

---

## 🎬 Step 3: Start Development Server (1 minute)

```bash
# Start the development server
pnpm run dev
```

**Expected Output:**
```
  VITE v5.4.11  ready in 1234 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

**Open your browser:** [http://localhost:5173](http://localhost:5173)

You should see the Bolt.DIY Enhanced interface! 🎉

---

## 🤖 Step 4: Create Your First App (2 minutes)

### Example 1: Simple Todo App

**In the chat interface, type:**

```
Create a todo app with React and Tailwind CSS. 
It should have:
- Add new todos
- Mark todos as complete
- Delete todos
- Filter by all/active/completed
```

**Press Enter** and watch the magic happen! ✨

### Example 2: Weather Dashboard

```
Build a weather dashboard that:
- Shows current weather for a city
- Displays 5-day forecast
- Has a search bar for different cities
- Uses a weather API
- Styled with modern UI
```

### Example 3: Calculator

```
Create a calculator app with:
- Basic operations (+, -, *, /)
- Clear and backspace buttons
- Keyboard support
- Modern design
```

---

## 🎨 Step 5: Interact with Your App

### What You Can Do:

**1. View Live Preview**
- See your app running in real-time
- Changes appear instantly

**2. Edit Code**
- Click on any file in the file tree
- Make changes
- See updates immediately

**3. Use Terminal**
- Click terminal icon
- Run commands
- Install packages

**4. Ask for Changes**
```
Add a dark mode toggle to the app
```

```
Make the buttons more colorful
```

```
Add animations when adding todos
```

---

## 🚀 Step 6: Deploy to Production (Optional)

### Quick Deploy to Vercel

**Method 1: One-Click**

1. Click "Deploy" button in the app
2. Sign in to Vercel
3. Configure environment variables
4. Deploy!

**Method 2: Vercel CLI**

```bash
# Install Vercel CLI
npm i -g vercel

# Build the project
pnpm run build

# Deploy
vercel --prod
```

**Your app is live!** 🎉

See [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md) for detailed guide.

---

## 🎓 Next Steps

### Learn More

**Tutorials:**
- [User Guide](docs/USER_GUIDE.md) - Complete usage guide
- [LLM Configuration](docs/LLM_CONFIGURATION.md) - Configure different LLMs
- [Best Practices](docs/BEST_PRACTICES.md) - Production tips

**Advanced Features:**
- [Git Integration](docs/GIT_INTEGRATION.md) - Version control
- [Custom Templates](docs/TEMPLATES.md) - Pre-built starters
- [API Reference](docs/API_REFERENCE.md) - Developer docs

### Try These Prompts

**Web Apps:**
```
Create a blog with markdown support
```

```
Build a chat application with real-time messaging
```

```
Make a portfolio website with animations
```

**Games:**
```
Create a tic-tac-toe game
```

```
Build a snake game with score tracking
```

**Tools:**
```
Create a markdown editor with live preview
```

```
Build a color palette generator
```

---

## 🔧 Troubleshooting

### Common Issues

#### Issue: "Module not found"

**Solution:**
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

#### Issue: "API key not working"

**Solution:**
1. Check `.env.local` exists
2. Verify API key format
3. Restart dev server: `pnpm run dev`

#### Issue: "Port 5173 already in use"

**Solution:**
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or use different port
PORT=3000 pnpm run dev
```

#### Issue: "WebContainer not loading"

**Solution:**
1. Use Chrome or Edge browser
2. Clear browser cache
3. Check browser console for errors

See [TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md) for more solutions.

---

## 💡 Tips & Tricks

### Writing Better Prompts

**Be Specific:**
❌ "Create a website"
✅ "Create a portfolio website with hero section, about, projects, and contact form"

**Include Technologies:**
❌ "Make it look good"
✅ "Style with Tailwind CSS and add Framer Motion animations"

**Describe Functionality:**
❌ "Add features"
✅ "Add user authentication with email/password and Google OAuth"

### Iterative Development

**Start Simple:**
```
Create a basic todo app
```

**Then Enhance:**
```
Add categories to todos
```

```
Add due dates and reminders
```

```
Add dark mode
```

### Using the Terminal

**Install Packages:**
```bash
npm install axios
```

**Run Scripts:**
```bash
npm run build
```

**Check Versions:**
```bash
node --version
npm --version
```

---

## 📚 Resources

### Documentation

- [Complete Documentation](docs/)
- [FAQ](docs/FAQ.md)
- [Video Tutorials](docs/TUTORIALS.md)

### Community

- [WhatsApp Channel](https://whatsapp.com/channel/0029VbCCj7FGJP8EeBLXzD1C)
- [WhatsApp Group](https://chat.whatsapp.com/IfIKh4bVhCc1qjPEOFKQeh)
- [GitHub Discussions](https://github.com/itskiranbabu/bolt-diy-enhanced/discussions)

### Get Help

- [Report Issues](https://github.com/itskiranbabu/bolt-diy-enhanced/issues)
- [Ask Questions](https://github.com/itskiranbabu/bolt-diy-enhanced/discussions)
- Email: itskeyrun.ai@gmail.com

---

## 🎉 Congratulations!

You've successfully:
✅ Installed Bolt.DIY Enhanced
✅ Configured your LLM
✅ Created your first AI-generated app
✅ Learned how to interact with the app

**Ready to build something amazing?** 🚀

---

## 📝 Quick Reference

### Essential Commands

```bash
# Start development
pnpm run dev

# Build for production
pnpm run build

# Run tests
pnpm run test

# Lint code
pnpm run lint

# Deploy to Vercel
vercel --prod
```

### Keyboard Shortcuts

- **Ctrl/Cmd + K** - Open command palette
- **Ctrl/Cmd + /** - Toggle comment
- **Ctrl/Cmd + S** - Save file
- **Ctrl/Cmd + F** - Find in file
- **Ctrl/Cmd + `** - Toggle terminal

---

## 🌟 What's Next?

### Explore Features

1. **Try Different LLMs** - Compare results
2. **Build Complex Apps** - Multi-page applications
3. **Deploy to Production** - Share with the world
4. **Join Community** - Learn from others
5. **Contribute** - Help improve the project

### Share Your Creation

Built something cool? Share it!

- Tweet with #BoltDIY
- Post in WhatsApp group
- Share on LinkedIn
- Submit to showcase

---

**Happy Building!** 🚀

*Enhanced by [itskiranbabu](https://github.com/itskiranbabu) | Powered by KeyRun AI*
