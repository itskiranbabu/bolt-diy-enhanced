export const metadata = {
  title: 'Bolt.DIY Enhanced - AI-Powered Full-Stack Web App Builder | by Kiran Babu',
  description: 'Build full-stack web applications using AI. Prompt, run, edit, and deploy with 16+ LLM providers. Enhanced by Kiran Babu - AI Automation Engineer & Technical Scrum Master',
}

export default function HomePage() {
  return (
    <div style={{ 
      fontFamily: "system-ui, -apple-system, sans-serif", 
      lineHeight: "1.8",
      background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
      minHeight: "100vh",
      color: "#fff"
    }}>
      {/* Hero Section */}
      <div style={{ 
        maxWidth: "1200px", 
        margin: "0 auto", 
        padding: "4rem 2rem",
        textAlign: "center"
      }}>
        <div style={{ marginBottom: "3rem" }}>
          <h1 style={{ 
            fontSize: "3.5rem", 
            fontWeight: "800", 
            marginBottom: "1rem",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-0.02em"
          }}>
            🚀 Bolt.DIY Enhanced
          </h1>
          <p style={{ 
            fontSize: "1.8rem", 
            color: "#a0aec0",
            marginBottom: "1rem",
            fontWeight: "300"
          }}>
            AI-Powered Full-Stack Web Application Builder
          </p>
          <p style={{ 
            fontSize: "1.1rem", 
            color: "#718096",
            fontStyle: "italic",
            marginBottom: "2rem"
          }}>
            Enhanced by{" "}
            <a 
              href="https://itskiranbabu.github.io/kiranbabu-portfolio/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                color: "#667eea", 
                textDecoration: "none",
                borderBottom: "2px solid #667eea",
                transition: "all 0.3s"
              }}
            >
              Kiran Babu
            </a>
            {" "}| AI Automation Engineer & Technical Scrum Master
          </p>
          
          {/* Stats */}
          <div style={{ 
            display: "flex", 
            gap: "2rem", 
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "2rem"
          }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#667eea" }}>16+</div>
              <div style={{ fontSize: "0.9rem", color: "#a0aec0" }}>LLM Providers</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#764ba2" }}>100KB+</div>
              <div style={{ fontSize: "0.9rem", color: "#a0aec0" }}>Documentation</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#f093fb" }}>Open Source</div>
              <div style={{ fontSize: "0.9rem", color: "#a0aec0" }}>MIT License</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ 
          background: "rgba(255, 255, 255, 0.05)", 
          backdropFilter: "blur(10px)",
          padding: "3rem", 
          borderRadius: "20px",
          maxWidth: "900px",
          margin: "0 auto",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          border: "1px solid rgba(255, 255, 255, 0.18)"
        }}>
          
          {/* What You Can Do */}
          <div style={{ marginBottom: "3rem", textAlign: "left" }}>
            <h2 style={{ 
              fontSize: "2rem", 
              marginBottom: "1.5rem", 
              color: "#fff",
              borderLeft: "4px solid #667eea",
              paddingLeft: "1rem"
            }}>
              🎯 What You Can Do
            </h2>
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.5rem"
            }}>
              {[
                { icon: "💬", title: "Prompt", desc: "Describe your app in natural language" },
                { icon: "⚡", title: "Run", desc: "See it running in real-time" },
                { icon: "✏️", title: "Edit", desc: "Modify code with AI assistance" },
                { icon: "🚀", title: "Deploy", desc: "One-click to production" }
              ].map((item, i) => (
                <div key={i} style={{ 
                  background: "rgba(255, 255, 255, 0.05)",
                  padding: "1.5rem",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "all 0.3s"
                }}>
                  <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{item.icon}</div>
                  <div style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "0.5rem", color: "#fff" }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: "0.9rem", color: "#a0aec0" }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Supported LLMs */}
          <div style={{ marginBottom: "3rem", textAlign: "left" }}>
            <h2 style={{ 
              fontSize: "2rem", 
              marginBottom: "1.5rem", 
              color: "#fff",
              borderLeft: "4px solid #764ba2",
              paddingLeft: "1rem"
            }}>
              🤖 Supported LLMs (16+ Providers)
            </h2>
            <div style={{ 
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1rem",
              color: "#a0aec0"
            }}>
              {[
                { name: "OpenAI", models: "GPT-4, GPT-4 Turbo, GPT-4o", new: false },
                { name: "Anthropic", models: "Claude 3.5 Sonnet, Claude 3 Opus", new: false },
                { name: "Google", models: "Gemini 1.5 Pro, Gemini 2.0", new: false },
                { name: "xAI Grok", models: "Grok-1, Grok-2", new: true },
                { name: "Groq", models: "Llama 3, Mixtral, Gemma", new: true },
                { name: "Perplexity", models: "Sonar, Chat models", new: true },
                { name: "OpenRouter", models: "100+ models", new: true },
                { name: "Mistral AI", models: "Large, Medium, Small", new: false },
                { name: "Ollama", models: "Local LLMs", new: false }
              ].map((provider, i) => (
                <div key={i} style={{ 
                  background: "rgba(255, 255, 255, 0.05)",
                  padding: "1rem",
                  borderRadius: "8px",
                  border: "1px solid rgba(255, 255, 255, 0.1)"
                }}>
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "0.5rem",
                    marginBottom: "0.5rem"
                  }}>
                    <strong style={{ color: "#fff" }}>{provider.name}</strong>
                    {provider.new && (
                      <span style={{ 
                        background: "#667eea",
                        color: "#fff",
                        padding: "0.2rem 0.5rem",
                        borderRadius: "4px",
                        fontSize: "0.7rem",
                        fontWeight: "bold"
                      }}>NEW</span>
                    )}
                  </div>
                  <div style={{ fontSize: "0.85rem" }}>{provider.models}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Deployment Options */}
          <div style={{ 
            background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)", 
            padding: "2rem", 
            borderRadius: "16px",
            border: "2px solid rgba(102, 126, 234, 0.3)",
            marginBottom: "3rem",
            textAlign: "left"
          }}>
            <h2 style={{ 
              fontSize: "2rem", 
              marginBottom: "1.5rem", 
              color: "#fff",
              textAlign: "center"
            }}>
              🚀 How to Deploy Bolt.DIY
            </h2>
            
            <div style={{ 
              background: "rgba(255, 193, 7, 0.1)",
              border: "2px solid rgba(255, 193, 7, 0.5)",
              padding: "1rem",
              borderRadius: "8px",
              marginBottom: "2rem",
              color: "#ffc107"
            }}>
              <strong>⚠️ Important:</strong> Bolt.DIY uses Remix + Cloudflare Workers and <strong>cannot be deployed to Vercel</strong>. Use Cloudflare Pages or run locally.
            </div>

            {/* Option 1: Local */}
            <div style={{ 
              background: "rgba(255, 255, 255, 0.05)",
              padding: "1.5rem",
              borderRadius: "12px",
              marginBottom: "1.5rem",
              border: "1px solid rgba(255, 255, 255, 0.1)"
            }}>
              <h3 style={{ color: "#667eea", marginBottom: "1rem", fontSize: "1.3rem" }}>
                ⭐ Option 1: Run Locally (Recommended)
              </h3>
              <pre style={{ 
                background: "#1a1a2e", 
                color: "#16f4d0", 
                padding: "1.5rem", 
                borderRadius: "8px",
                overflow: "auto",
                fontSize: "0.9rem",
                border: "1px solid rgba(22, 244, 208, 0.2)"
              }}>
{`# Clone the repository
git clone https://github.com/stackblitz-labs/bolt.diy.git
cd bolt.diy

# Install dependencies
pnpm install

# Add your API key
cp .env.example .env.local
# Edit .env.local and add at least ONE API key

# Start the app
pnpm run dev

# Open http://localhost:5173`}
              </pre>
              <div style={{ marginTop: "1rem", color: "#a0aec0", fontSize: "0.9rem" }}>
                ✅ Works perfectly • ✅ Free (except API costs) • ✅ Full control
              </div>
            </div>

            {/* Option 2: Cloudflare */}
            <div style={{ 
              background: "rgba(255, 255, 255, 0.05)",
              padding: "1.5rem",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.1)"
            }}>
              <h3 style={{ color: "#764ba2", marginBottom: "1rem", fontSize: "1.3rem" }}>
                ☁️ Option 2: Deploy to Cloudflare Pages
              </h3>
              <ol style={{ color: "#a0aec0", paddingLeft: "1.5rem", lineHeight: "2" }}>
                <li>Fork the <a href="https://github.com/stackblitz-labs/bolt.diy" target="_blank" style={{ color: "#667eea" }}>bolt.diy repository</a></li>
                <li>Go to <a href="https://dash.cloudflare.com/" target="_blank" style={{ color: "#667eea" }}>Cloudflare Pages</a></li>
                <li>Connect your forked repository</li>
                <li>Add environment variables (at least ONE API key)</li>
                <li>Deploy!</li>
              </ol>
              <div style={{ marginTop: "1rem", color: "#a0aec0", fontSize: "0.9rem" }}>
                ✅ Production-ready • ✅ Global CDN • ✅ Free tier available
              </div>
            </div>
          </div>

          {/* API Keys */}
          <div style={{ marginBottom: "3rem", textAlign: "left" }}>
            <h2 style={{ 
              fontSize: "2rem", 
              marginBottom: "1.5rem", 
              color: "#fff",
              borderLeft: "4px solid #f093fb",
              paddingLeft: "1rem"
            }}>
              🔑 Get Your API Keys
            </h2>
            <div style={{ 
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem"
            }}>
              {[
                { name: "OpenAI", url: "https://platform.openai.com/api-keys", note: "GPT-4, GPT-4o" },
                { name: "Groq", url: "https://console.groq.com/", note: "Fast & Free!" },
                { name: "Anthropic", url: "https://console.anthropic.com/", note: "Claude 3.5" },
                { name: "Google", url: "https://makersuite.google.com/app/apikey", note: "Gemini Pro" },
                { name: "Perplexity", url: "https://www.perplexity.ai/settings/api", note: "Search AI" },
                { name: "OpenRouter", url: "https://openrouter.ai/keys", note: "100+ models" }
              ].map((provider, i) => (
                <a
                  key={i}
                  href={provider.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    background: "rgba(255, 255, 255, 0.05)",
                    padding: "1rem",
                    borderRadius: "8px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    textDecoration: "none",
                    color: "#fff",
                    transition: "all 0.3s",
                    display: "block"
                  }}
                >
                  <div style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>{provider.name}</div>
                  <div style={{ fontSize: "0.85rem", color: "#a0aec0" }}>{provider.note}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Documentation */}
          <div style={{ marginBottom: "3rem", textAlign: "left" }}>
            <h2 style={{ 
              fontSize: "2rem", 
              marginBottom: "1.5rem", 
              color: "#fff",
              borderLeft: "4px solid #667eea",
              paddingLeft: "1rem"
            }}>
              📚 Documentation & Guides
            </h2>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {[
                { title: "⚡ Quick Start", url: "https://github.com/itskiranbabu/bolt-diy-enhanced/blob/main/QUICK_START.md", color: "#667eea" },
                { title: "🚀 Deployment Guide", url: "https://github.com/itskiranbabu/bolt-diy-enhanced/blob/main/DEPLOYMENT_OPTIONS.md", color: "#764ba2" },
                { title: "📖 Full Documentation", url: "https://github.com/itskiranbabu/bolt-diy-enhanced", color: "#f093fb" }
              ].map((doc, i) => (
                <a 
                  key={i}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    padding: "0.75rem 1.5rem", 
                    background: doc.color, 
                    color: "white", 
                    textDecoration: "none", 
                    borderRadius: "8px",
                    display: "inline-block",
                    fontWeight: "600",
                    transition: "all 0.3s",
                    border: "none"
                  }}
                >
                  {doc.title}
                </a>
              ))}
            </div>
          </div>

          {/* Getting Started */}
          <div style={{ 
            background: "rgba(102, 126, 234, 0.1)",
            padding: "2rem",
            borderRadius: "12px",
            border: "1px solid rgba(102, 126, 234, 0.3)",
            textAlign: "left"
          }}>
            <h2 style={{ 
              fontSize: "1.8rem", 
              marginBottom: "1rem", 
              color: "#fff"
            }}>
              💡 Getting Started (3 Steps)
            </h2>
            <ol style={{ color: "#a0aec0", paddingLeft: "1.5rem", lineHeight: "2", fontSize: "1.1rem" }}>
              <li><strong style={{ color: "#fff" }}>Get an API Key</strong> - Choose from OpenAI, Groq, Anthropic, or others</li>
              <li><strong style={{ color: "#fff" }}>Clone & Install</strong> - Follow the commands above to run locally</li>
              <li><strong style={{ color: "#fff" }}>Start Building</strong> - Describe your app and watch AI build it!</li>
            </ol>
          </div>
        </div>

        {/* Footer */}
        <div style={{ 
          marginTop: "4rem", 
          textAlign: "center",
          color: "#718096",
          paddingTop: "2rem",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)"
        }}>
          <p style={{ marginBottom: "1.5rem", fontSize: "1.1rem" }}>
            <strong style={{ color: "#fff" }}>Original Project:</strong>{" "}
            <a href="https://github.com/stackblitz-labs/bolt.diy" style={{ color: "#667eea", textDecoration: "none" }}>
              bolt.diy by StackBlitz Labs
            </a>
          </p>
          
          <div style={{ 
            display: "flex", 
            gap: "2rem", 
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "1.5rem"
          }}>
            <a href="https://github.com/itskiranbabu" target="_blank" style={{ color: "#667eea", textDecoration: "none", fontSize: "1.1rem" }}>
              GitHub
            </a>
            <a href="https://linkedin.com/in/itskiranbabu" target="_blank" style={{ color: "#667eea", textDecoration: "none", fontSize: "1.1rem" }}>
              LinkedIn
            </a>
            <a href="https://itskiranbabu.github.io/kiranbabu-portfolio/" target="_blank" style={{ color: "#667eea", textDecoration: "none", fontSize: "1.1rem" }}>
              Portfolio
            </a>
            <a href="https://whatsapp.com/channel/0029VbCCj7FGJP8EeBLXzD1C" target="_blank" style={{ color: "#667eea", textDecoration: "none", fontSize: "1.1rem" }}>
              WhatsApp Community
            </a>
          </div>
          
          <p style={{ fontSize: "1rem" }}>
            ⭐ <a href="https://github.com/itskiranbabu/bolt-diy-enhanced" style={{ color: "#667eea", textDecoration: "none" }}>
              Star the repo
            </a> if you find it helpful!
          </p>
          
          <p style={{ marginTop: "2rem", fontSize: "0.9rem", color: "#4a5568" }}>
            Built with ❤️ by Kiran Babu | AI Automation Engineer & Technical Scrum Master
          </p>
        </div>
      </div>
    </div>
  )
}
