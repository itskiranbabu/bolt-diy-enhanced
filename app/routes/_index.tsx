import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Bolt.DIY Enhanced - AI-Powered Full-Stack Web App Builder" },
    { 
      name: "description", 
      content: "Build full-stack web applications using AI. Prompt, run, edit, and deploy with any LLM. Enhanced by itskiranbabu | Powered by KeyRun AI" 
    },
  ];
};

export default function Index() {
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
              <li>Prompt - Describe your app in natural language</li>
              <li>Run - See your app running in real-time</li>
              <li>Edit - Modify code with AI assistance</li>
              <li>Deploy - One-click deployment to production</li>
            </ul>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "#555" }}>
              🤖 Supported LLMs:
            </h3>
            <ul style={{ color: "#666", paddingLeft: "1.5rem" }}>
              <li>OpenAI (GPT-4, GPT-3.5)</li>
              <li>Anthropic (Claude 3.5 Sonnet, Claude 3 Opus)</li>
              <li>Google (Gemini Pro, Gemini Flash)</li>
              <li>Ollama (Local LLMs)</li>
              <li>And 15+ more providers!</li>
            </ul>
          </div>

          <div style={{ 
            background: "#fff3cd", 
            padding: "1rem", 
            borderRadius: "8px",
            border: "1px solid #ffc107",
            marginBottom: "2rem"
          }}>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "#856404" }}>
              ⚠️ Setup Required
            </h3>
            <p style={{ color: "#856404", margin: 0 }}>
              This is a placeholder page. To use the full Bolt.DIY Enhanced application:
            </p>
            <ol style={{ color: "#856404", paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
              <li>Clone the repository locally</li>
              <li>Install dependencies: <code>pnpm install</code></li>
              <li>Configure environment variables (see .env.example)</li>
              <li>Run development server: <code>pnpm run dev</code></li>
            </ol>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "#555" }}>
              📚 Quick Links:
            </h3>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a 
                href="https://github.com/itskiranbabu/bolt-diy-enhanced" 
                style={{ 
                  padding: "0.5rem 1rem", 
                  background: "#667eea", 
                  color: "white", 
                  textDecoration: "none", 
                  borderRadius: "6px",
                  display: "inline-block"
                }}
              >
                📖 Documentation
              </a>
              <a 
                href="https://github.com/itskiranbabu/bolt-diy-enhanced/blob/main/QUICK_START.md" 
                style={{ 
                  padding: "0.5rem 1rem", 
                  background: "#764ba2", 
                  color: "white", 
                  textDecoration: "none", 
                  borderRadius: "6px",
                  display: "inline-block"
                }}
              >
                ⚡ Quick Start
              </a>
              <a 
                href="https://github.com/itskiranbabu/bolt-diy-enhanced/blob/main/VERCEL_DEPLOYMENT.md" 
                style={{ 
                  padding: "0.5rem 1rem", 
                  background: "#28a745", 
                  color: "white", 
                  textDecoration: "none", 
                  borderRadius: "6px",
                  display: "inline-block"
                }}
              >
                🚀 Deploy Guide
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
              💡 Next Steps:
            </h3>
            <ol style={{ color: "#0d47a1", paddingLeft: "1.5rem", margin: 0 }}>
              <li>Get an LLM API key (OpenAI, Anthropic, or Google)</li>
              <li>Follow the <a href="https://github.com/itskiranbabu/bolt-diy-enhanced/blob/main/QUICK_START.md" style={{ color: "#2196f3" }}>Quick Start Guide</a></li>
              <li>Build your first AI-generated app!</li>
            </ol>
          </div>
        </div>

        <div style={{ 
          marginTop: "3rem", 
          textAlign: "center",
          color: "#888"
        }}>
          <p>
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
            ⭐ Star the repo if you find it helpful!
          </p>
        </div>
      </div>
    </div>
  );
}
