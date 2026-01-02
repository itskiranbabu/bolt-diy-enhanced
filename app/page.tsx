export const metadata = {
  title: 'Bolt.DIY Enhanced - AI-Powered Full-Stack Web App Builder',
  description: 'Build full-stack web applications using AI. Prompt, run, edit, and deploy with any LLM. Enhanced by itskiranbabu | Powered by KeyRun AI',
}

export default function HomePage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <div style={{ 
        maxWidth: "1200px", 
        margin: "0 auto", 
        padding: "2rem",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 style={{ 
            fontSize: "3rem", 
            fontWeight: "bold", 
            marginBottom: "1rem",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            🚀 Bolt.DIY Enhanced
          </h1>
          <p style={{ 
            fontSize: "1.5rem", 
            color: "#666",
            marginBottom: "2rem"
          }}>
            AI-Powered Full-Stack Web Application Builder
          </p>
          <p style={{ 
            fontSize: "1rem", 
            color: "#888",
            fontStyle: "italic"
          }}>
            Enhanced by <a href="https://github.com/itskiranbabu" style={{ color: "#667eea", textDecoration: "none" }}>itskiranbabu</a> | Powered by KeyRun AI
          </p>
        </div>

        <div style={{ 
          background: "#f8f9fa", 
          padding: "2rem", 
          borderRadius: "12px",
          maxWidth: "800px",
          width: "100%",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
        }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#333" }}>
            ✨ Welcome to Bolt.DIY Enhanced!
          </h2>
          
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "#555" }}>
              🎯 What You Can Do:
            </h3>
            <ul style={{ color: "#666", paddingLeft: "1.5rem" }}>
              <li><strong>Prompt</strong> - Describe your app in natural language</li>
              <li><strong>Run</strong> - See your app running in real-time with WebContainer</li>
              <li><strong>Edit</strong> - Modify code with AI assistance</li>
              <li><strong>Deploy</strong> - One-click deployment to production</li>
            </ul>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "#555" }}>
              🤖 Supported LLMs (16+ Providers):
            </h3>
            <ul style={{ color: "#666", paddingLeft: "1.5rem" }}>
              <li><strong>OpenAI</strong> - GPT-4, GPT-4 Turbo, GPT-4o, GPT-3.5</li>
              <li><strong>Anthropic</strong> - Claude 3.5 Sonnet, Claude 3 Opus</li>
              <li><strong>Google</strong> - Gemini 1.5 Pro, Gemini Flash, Gemini 2.0</li>
              <li><strong>xAI Grok</strong> - Grok-1, Grok-2 🆕</li>
              <li><strong>Groq</strong> - Llama 3, Llama 3.1, Mixtral, Gemma 🆕</li>
              <li><strong>Perplexity</strong> - Sonar, Chat models 🆕</li>
              <li><strong>OpenRouter</strong> - 100+ models from various providers 🆕</li>
              <li><strong>Mistral AI</strong> - Mistral Large, Medium, Small</li>
              <li><strong>Ollama</strong> - Local LLMs (Llama 3, CodeLlama, etc.)</li>
              <li>And 7+ more providers!</li>
            </ul>
          </div>

          <div style={{ 
            background: "#e3f2fd", 
            padding: "1.5rem", 
            borderRadius: "8px",
            border: "2px solid #2196f3",
            marginBottom: "2rem"
          }}>
            <h3 style={{ fontSize: "1.3rem", marginBottom: "1rem", color: "#0d47a1", textAlign: "center" }}>
              🚀 Launch the Full Application
            </h3>
            <p style={{ color: "#1565c0", marginBottom: "1rem", textAlign: "center" }}>
              To use the complete Bolt.DIY Enhanced application with AI code generation:
            </p>
            
            <div style={{ 
              background: "white", 
              padding: "1rem", 
              borderRadius: "6px",
              marginBottom: "1rem"
            }}>
              <h4 style={{ color: "#0d47a1", marginBottom: "0.5rem" }}>Option 1: Run Locally (Recommended)</h4>
              <pre style={{ 
                background: "#263238", 
                color: "#aed581", 
                padding: "1rem", 
                borderRadius: "4px",
                overflow: "auto",
                fontSize: "0.9rem"
              }}>
{`# Clone the repository
git clone https://github.com/stackblitz-labs/bolt.diy.git
cd bolt.diy

# Install dependencies
pnpm install

# Add your API key
cp .env.example .env.local
# Edit .env.local and add your key

# Start the app
pnpm run dev

# Open http://localhost:5173`}
              </pre>
            </div>

            <div style={{ 
              background: "white", 
              padding: "1rem", 
              borderRadius: "6px"
            }}>
              <h4 style={{ color: "#0d47a1", marginBottom: "0.5rem" }}>Option 2: Deploy Your Own Instance</h4>
              <p style={{ color: "#1565c0", fontSize: "0.95rem", marginBottom: "0.5rem" }}>
                Deploy your own instance to Vercel:
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "0.75rem" }}>
                <a 
                  href="https://vercel.com/new/clone?repository-url=https://github.com/stackblitz-labs/bolt.diy"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    padding: "0.75rem 1.5rem", 
                    background: "#000", 
                    color: "white", 
                    textDecoration: "none", 
                    borderRadius: "6px",
                    display: "inline-block",
                    fontWeight: "bold"
                  }}
                >
                  Deploy to Vercel →
                </a>
              </div>
              <p style={{ color: "#d32f2f", fontSize: "0.85rem", marginTop: "0.5rem", textAlign: "center", background: "#ffebee", padding: "0.5rem", borderRadius: "4px" }}>
                ⚠️ <strong>Important:</strong> You'll need to add at least ONE API key as an environment variable during deployment (e.g., OPENAI_API_KEY, GROQ_API_KEY, etc.). You can add more keys later in Vercel settings.
              </p>
            </div>
          </div>

          <div style={{ 
            background: "#fff3cd", 
            padding: "1rem", 
            borderRadius: "8px",
            border: "1px solid #ffc107",
            marginBottom: "2rem"
          }}>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "#856404" }}>
              ⚠️ Why Not Hosted Here?
            </h3>
            <p style={{ color: "#856404", margin: 0, fontSize: "0.95rem" }}>
              The full Bolt.DIY application requires your personal LLM API keys, WebContainer runtime, and serverless functions. For security and cost reasons, you should deploy your own instance with your API keys.
            </p>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "#555" }}>
              📚 Documentation & Guides:
            </h3>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a 
                href="https://github.com/itskiranbabu/bolt-diy-enhanced/blob/main/QUICK_START.md" 
                style={{ 
                  padding: "0.5rem 1rem", 
                  background: "#667eea", 
                  color: "white", 
                  textDecoration: "none", 
                  borderRadius: "6px",
                  display: "inline-block"
                }}
              >
                ⚡ Quick Start Guide
              </a>
              <a 
                href="https://github.com/itskiranbabu/bolt-diy-enhanced/blob/main/DEPLOY_FULL_APP.md" 
                style={{ 
                  padding: "0.5rem 1rem", 
                  background: "#764ba2", 
                  color: "white", 
                  textDecoration: "none", 
                  borderRadius: "6px",
                  display: "inline-block"
                }}
              >
                🚀 Deployment Guide
              </a>
              <a 
                href="https://github.com/itskiranbabu/bolt-diy-enhanced" 
                style={{ 
                  padding: "0.5rem 1rem", 
                  background: "#28a745", 
                  color: "white", 
                  textDecoration: "none", 
                  borderRadius: "6px",
                  display: "inline-block"
                }}
              >
                📖 Full Documentation
              </a>
            </div>
          </div>

          <div style={{ 
            background: "#e7f3ff", 
            padding: "1rem", 
            borderRadius: "8px",
            border: "1px solid #2196f3"
          }}>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "#0d47a1" }}>
              💡 Getting Started (3 Steps):
            </h3>
            <ol style={{ color: "#0d47a1", paddingLeft: "1.5rem", margin: 0 }}>
              <li><strong>Get an API Key</strong> - Choose from OpenAI, Anthropic, Google, Groq, or others</li>
              <li><strong>Clone & Install</strong> - Follow the commands above to run locally</li>
              <li><strong>Start Building</strong> - Describe your app and watch AI build it!</li>
            </ol>
          </div>
        </div>

        <div style={{ 
          marginTop: "3rem", 
          textAlign: "center",
          color: "#888"
        }}>
          <p style={{ marginBottom: "1rem" }}>
            <strong>Original Project:</strong>{" "}
            <a href="https://github.com/stackblitz-labs/bolt.diy" style={{ color: "#667eea" }}>
              bolt.diy by StackBlitz Labs
            </a>
          </p>
          <p style={{ marginTop: "1rem" }}>
            <a href="https://github.com/itskiranbabu" style={{ color: "#667eea", marginRight: "1rem" }}>
              GitHub
            </a>
            <a href="https://linkedin.com/in/itskiranbabu" style={{ color: "#667eea", marginRight: "1rem" }}>
              LinkedIn
            </a>
            <a href="https://whatsapp.com/channel/0029VbCCj7FGJP8EeBLXzD1C" style={{ color: "#667eea" }}>
              WhatsApp Community
            </a>
          </p>
          <p style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
            ⭐ <a href="https://github.com/itskiranbabu/bolt-diy-enhanced" style={{ color: "#667eea" }}>Star the repo</a> if you find it helpful!
          </p>
        </div>
      </div>
    </div>
  )
}
