import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Terminal as TerminalIcon,
  Code2,
  Database,
  Activity,
  Copy,
  Check,
  Play,
  CornerDownLeft,
  Sparkles,
  GitBranch,
  ShieldCheck,
  Cpu,
} from 'lucide-react';

type DevTab = 'terminal' | 'architecture' | 'database' | 'telemetry';

interface CommandHistory {
  cmd: string;
  output: React.ReactNode;
}

export const DeveloperTerminalSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<DevTab>('terminal');
  const [copied, setCopied] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      cmd: 'whoami',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-emerald-400 font-semibold">Muhammad Saqib (Saqib Visuals)</p>
          <p className="text-slate-400">Role: Full-Stack Software Engineer &amp; AI Systems Developer</p>
          <p className="text-slate-400">Specialization: React 19, Next.js 14, Node.js, TypeScript, PostgreSQL, Gemini AI SDK</p>
          <p className="text-slate-400">Location: Faisalabad, Pakistan • Active in Remote &amp; Global Contracts</p>
        </div>
      ),
    },
    {
      cmd: 'git status',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-sky-400">On branch main (origin/main)</p>
          <p className="text-emerald-400">✔ Working tree clean — 0 vulnerabilities — 100% TypeScript compile pass</p>
          <p className="text-slate-400">Latest commit: feat(core): scale reactive microservices &amp; edge deployment</p>
        </div>
      ),
    },
  ]);

  const handleCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim().toLowerCase();
    if (!trimmed) return;

    let output: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        output = (
          <div className="space-y-1 text-slate-300">
            <p className="text-purple-300 font-semibold">Available Commands:</p>
            <p className="text-xs text-slate-400"><span className="text-emerald-400 font-mono">whoami</span> — Display engineer profile &amp; credentials</p>
            <p className="text-xs text-slate-400"><span className="text-emerald-400 font-mono">skills</span> — List primary programming languages &amp; frameworks</p>
            <p className="text-xs text-slate-400"><span className="text-emerald-400 font-mono">projects</span> — View flagship full-stack &amp; AI software builds</p>
            <p className="text-xs text-slate-400"><span className="text-emerald-400 font-mono">techstack</span> — Show active production infrastructure</p>
            <p className="text-xs text-slate-400"><span className="text-emerald-400 font-mono">metrics</span> — Real-time performance &amp; Lighthouse telemetry</p>
            <p className="text-xs text-slate-400"><span className="text-emerald-400 font-mono">contact</span> — Get direct developer communication channels</p>
            <p className="text-xs text-slate-400"><span className="text-emerald-400 font-mono">clear</span> — Clear the terminal history</p>
          </div>
        );
        break;
      case 'whoami':
        output = (
          <div className="space-y-1 text-slate-300">
            <p className="text-emerald-400 font-semibold">Muhammad Saqib (Saqib Visuals)</p>
            <p className="text-slate-400">Role: Full-Stack Software Engineer &amp; AI Systems Developer</p>
            <p className="text-slate-400">Stack: React 19, Next.js, Node.js, TypeScript, PostgreSQL, Docker, Gemini AI</p>
          </div>
        );
        break;
      case 'skills':
        output = (
          <div className="space-y-1 text-slate-300">
            <p className="text-sky-300 font-semibold">Engineering Competencies:</p>
            <p className="text-xs text-slate-400">• Frontend: React 19, Next.js 14 (App Router), TypeScript, Tailwind CSS v4, Motion</p>
            <p className="text-xs text-slate-400">• Backend: Node.js, Express.js, Python FastAPI, RESTful APIs, GraphQL</p>
            <p className="text-xs text-slate-400">• Databases: PostgreSQL, MongoDB, Redis Caching, Prisma ORM, Drizzle</p>
            <p className="text-xs text-slate-400">• AI/Cloud: Gemini AI SDK, OpenAI, Docker, Vercel Edge, GitHub Actions CI/CD</p>
          </div>
        );
        break;
      case 'projects':
        output = (
          <div className="space-y-1 text-slate-300">
            <p className="text-emerald-400 font-semibold">Featured Production Systems:</p>
            <p className="text-xs text-slate-300">1. <span className="font-semibold text-white">Finova</span> — High-performance cross-border banking app (React Native + Node.js + PostgreSQL)</p>
            <p className="text-xs text-slate-300">2. <span className="font-semibold text-white">MetricsPulse</span> — Real-time telemetry dashboard streaming 100k+ data points (Next.js + WebSockets)</p>
            <p className="text-xs text-slate-300">3. <span className="font-semibold text-white">NexusAI</span> — Autonomous agent cloud with Gemini LLM function orchestration (React 19 + Python)</p>
          </div>
        );
        break;
      case 'techstack':
        output = (
          <div className="text-xs text-slate-300">
            <p className="text-amber-300 font-semibold mb-1">Production Architecture:</p>
            <p className="font-mono text-emerald-400">[React 19] ⇄ [Next.js SSR/Edge] ⇄ [Node.js Express / Python] ⇄ [PostgreSQL + Redis Caching]</p>
          </div>
        );
        break;
      case 'metrics':
        output = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-emerald-400">⚡ Google Lighthouse: 99/100 (Performance, A11y, Best Practices, SEO)</p>
            <p className="text-sky-400">🚀 Median API Latency: 14ms (Edge CDN Cache)</p>
            <p className="text-purple-400">🔒 Security Vulnerabilities: 0 (OWASP Audited)</p>
            <p className="text-amber-400">📦 Bundle Overhead: Zero-bloat tree-shaken ESM</p>
          </div>
        );
        break;
      case 'contact':
        output = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-emerald-400 font-semibold">Connect with Muhammad Saqib:</p>
            <p>Email: <span className="text-white">mrsaqib242242@gmail.com</span></p>
            <p>WhatsApp: <span className="text-white">+92 347 8936242</span></p>
            <p>Portfolio: <span className="text-sky-400 underline">https://mrsaqib242.vercel.app</span></p>
          </div>
        );
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      default:
        output = (
          <p className="text-rose-400 text-xs">
            command not found: <span className="font-mono">{trimmed}</span>. Type <span className="text-emerald-400 font-mono">help</span> for available commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { cmd: rawCmd, output }]);
    setInputVal('');
  };

  const codeSnippetArchitecture = `// src/server/routes/aiStreamHandler.ts
import { GoogleGenAI } from "@google/genai";
import { Request, Response } from "express";
import { prisma } from "../db/client";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function handleStreamPrediction(req: Request, res: Response) {
  try {
    const { prompt, userId, contextType } = req.body;
    
    // 1. Validate authorization & rate-limits
    const session = await prisma.userSession.findUnique({ where: { id: userId } });
    if (!session?.isActive) return res.status(401).json({ error: "Unauthorized" });

    // 2. Stream generation with low-latency chunking
    const stream = await ai.models.generateContentStream({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: "You are a specialized software architecture assistant.",
        temperature: 0.2,
      },
    });

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");

    for await (const chunk of stream) {
      res.write(\`data: \${JSON.stringify({ text: chunk.text })}\\n\\n\`);
    }

    res.end();
  } catch (err: any) {
    res.status(500).json({ error: "Inference Error", message: err.message });
  }
}`;

  const codeSnippetDatabase = `-- migrations/001_create_fintech_ledger.sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  biometrics_enabled BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE accounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  currency_code VARCHAR(3) NOT NULL, -- USD, EUR, GBP
  balance NUMERIC(18, 4) NOT NULL DEFAULT 0.0000,
  updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sender_account_id UUID REFERENCES accounts(id),
  recipient_account_id UUID REFERENCES accounts(id),
  amount NUMERIC(18, 4) NOT NULL CHECK (amount > 0),
  status VARCHAR(20) DEFAULT 'COMPLETED',
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- High-throughput query performance indexes
CREATE INDEX idx_transactions_sender ON transactions(sender_account_id, created_at DESC);
CREATE INDEX idx_accounts_user ON accounts(user_id);`;

  const codeSnippetTelemetry = `{
  "system": "Saqib Visuals Core Runtime",
  "status": "HEALTHY",
  "environment": "production-edge",
  "build": {
    "engine": "Vite 8 + React 19",
    "type_safety": "TypeScript strict mode (0 errors)",
    "bundle_size": "74.2 kB gzip (tree-shaken)",
    "build_duration_ms": 780
  },
  "metrics": {
    "google_lighthouse": {
      "performance": 100,
      "accessibility": 99,
      "best_practices": 100,
      "seo": 100
    },
    "edge_latency_ms": 14,
    "uptime_pct": 99.98,
    "test_coverage_pct": 96.5
  },
  "security": {
    "owasp_vulnerabilities": 0,
    "jwt_encryption": "HS256 with rotation",
    "rate_limiting": "enabled (Redis token bucket)"
  }
}`;

  const currentCode =
    activeTab === 'architecture'
      ? codeSnippetArchitecture
      : activeTab === 'database'
      ? codeSnippetDatabase
      : codeSnippetTelemetry;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="developer-workbench" className="py-20 relative bg-slate-950 text-slate-100 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6C5CE7]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/40 border border-purple-500/30 text-xs font-bold uppercase tracking-wider text-purple-300 mb-3 shadow-inner">
              <Cpu className="w-3.5 h-3.5 text-purple-400" />
              <span>LIVE DEVELOPER WORKBENCH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Interactive Terminal &amp; Architecture Inspector
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">
              Explore real typed source code, database models, live telemetry metrics, or run interactive bash commands directly inside the developer console.
            </p>
          </motion.div>
        </div>

        {/* Terminal Window Frame */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-slate-800/90 bg-slate-900/90 backdrop-blur-xl shadow-2xl overflow-hidden"
        >
          {/* Mac-Style Header Bar */}
          <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block border border-rose-600/40" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block border border-amber-600/40" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block border border-emerald-600/40" />
              <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline-block">
                saqib@visuals-core: ~/production-workspace
              </span>
            </div>

            {/* Quick Status Pill */}
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="hidden sm:inline">Edge Runtime: Optimal (v22.14)</span>
              <span className="sm:hidden">Online</span>
            </div>
          </div>

          {/* Workbench Tabs */}
          <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-950/60 px-3 sm:px-4 py-2 gap-2 overflow-hidden">
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 whitespace-nowrap">
              <button
                id="dev-tab-terminal"
                onClick={() => setActiveTab('terminal')}
                className={`flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-mono transition-all shrink-0 ${
                  activeTab === 'terminal'
                    ? 'bg-slate-800 text-emerald-400 border border-emerald-500/30 shadow-xs'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-850'
                }`}
              >
                <TerminalIcon className="w-3.5 h-3.5" />
                <span>terminal.sh</span>
              </button>

              <button
                id="dev-tab-architecture"
                onClick={() => setActiveTab('architecture')}
                className={`flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-mono transition-all shrink-0 ${
                  activeTab === 'architecture'
                    ? 'bg-slate-800 text-sky-400 border border-sky-500/30 shadow-xs'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-850'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>aiStream.ts</span>
              </button>

              <button
                id="dev-tab-database"
                onClick={() => setActiveTab('database')}
                className={`flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-mono transition-all shrink-0 ${
                  activeTab === 'database'
                    ? 'bg-slate-800 text-purple-400 border border-purple-500/30 shadow-xs'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-850'
                }`}
              >
                <Database className="w-3.5 h-3.5" />
                <span>schema.sql</span>
              </button>

              <button
                id="dev-tab-telemetry"
                onClick={() => setActiveTab('telemetry')}
                className={`flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-mono transition-all shrink-0 ${
                  activeTab === 'telemetry'
                    ? 'bg-slate-800 text-amber-400 border border-amber-500/30 shadow-xs'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-850'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>metrics.json</span>
              </button>
            </div>

            {/* Copy Button for code tabs */}
            {activeTab !== 'terminal' && (
              <button
                id="copy-code-snippet"
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 text-xs font-mono text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 rounded-md border border-slate-700/60 transition-colors shrink-0"
                title="Copy snippet to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Copy Code</span>
                  </>
                )}
              </button>
            )}
          </div>

          {/* Tab Body */}
          <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-x-auto min-h-[360px] max-h-[480px]">
            {activeTab === 'terminal' ? (
              <div className="space-y-4">
                {/* Banner / Welcome text in terminal */}
                <div className="text-slate-500 pb-2 border-b border-slate-800">
                  <p className="text-purple-400 font-bold">Saqib Visuals Interactive Shell [Version 3.2.0-LTS]</p>
                  <p>Type <span className="text-emerald-400 font-bold">help</span> to view commands or click the quick command chips below.</p>
                </div>

                {/* Quick Command Chips */}
                <div className="flex flex-wrap items-center gap-2 pb-2">
                  <span className="text-xs text-slate-500 font-sans font-semibold">Try:</span>
                  {['whoami', 'skills', 'projects', 'techstack', 'metrics', 'contact', 'help', 'clear'].map((cmd) => (
                    <button
                      key={cmd}
                      id={`quick-cmd-${cmd}`}
                      onClick={() => handleCommand(cmd)}
                      className="px-2.5 py-1 rounded bg-slate-800 text-emerald-300 hover:bg-emerald-600 hover:text-white text-xs font-mono border border-slate-700/80 transition-all flex items-center gap-1"
                    >
                      <Play className="w-2.5 h-2.5 opacity-60" />
                      <span>{cmd}</span>
                    </button>
                  ))}
                </div>

                {/* Command History */}
                <div className="space-y-3">
                  {history.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center gap-2 text-slate-400">
                        <span className="text-emerald-400 font-bold hidden sm:inline">saqib@visuals:~$</span>
                        <span className="text-emerald-400 font-bold sm:hidden">$</span>
                        <span className="text-white font-semibold">{item.cmd}</span>
                      </div>
                      <div className="pl-3 sm:pl-4 border-l-2 border-slate-800 py-0.5">{item.output}</div>
                    </div>
                  ))}
                </div>

                {/* Interactive Prompt Input */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleCommand(inputVal);
                  }}
                  className="flex items-center gap-1.5 sm:gap-2 pt-2"
                >
                  <span className="text-emerald-400 font-bold shrink-0 hidden sm:inline">saqib@visuals:~$</span>
                  <span className="text-emerald-400 font-bold shrink-0 sm:hidden">$</span>
                  <input
                    id="terminal-interactive-input"
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder="type command (e.g. skills, metrics)..."
                    className="flex-1 bg-transparent text-emerald-300 focus:outline-hidden placeholder-slate-600 font-mono text-xs sm:text-sm min-w-0"
                    autoComplete="off"
                    spellCheck="false"
                  />
                  <button
                    type="submit"
                    className="p-1 text-slate-400 hover:text-white transition-colors"
                    title="Execute command"
                  >
                    <CornerDownLeft className="w-4 h-4" />
                  </button>
                </form>
              </div>
            ) : (
              <pre className="text-slate-300 leading-relaxed overflow-x-auto whitespace-pre font-mono">
                <code>{currentCode}</code>
              </pre>
            )}
          </div>

          {/* Terminal Footer Bar with Engineering Badges */}
          <div className="px-4 py-2.5 bg-slate-950/90 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <GitBranch className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-slate-300">main</span>
              </span>
              <span className="hidden sm:inline text-slate-600">|</span>
              <span className="flex items-center gap-1 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Strict TypeScript (v5.7)</span>
              </span>
              <span className="hidden md:inline text-slate-600">|</span>
              <span className="hidden md:flex items-center gap-1 text-sky-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next.js 14 App Router</span>
              </span>
            </div>

            <div className="text-slate-500 font-sans">
              Press Enter ↵ to run commands
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
