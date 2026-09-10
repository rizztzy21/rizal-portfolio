import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";

type Line = {
  type: "input" | "output" | "error" | "system";
  text: string;
};

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Line[]>([
    {
      type: "system",
      text: "RF.DEV Terminal v1.0.0 — system online.",
    },
    {
      type: "system",
      text: 'Ketik "help" untuk melihat daftar command.',
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    terminalRef.current?.scrollTo({
      top: terminalRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [history]);

  const runCommand = (command: string) => {
    const cmd = command.trim().toLowerCase();

    if (!cmd) return;

    if (cmd === "clear") {
      setHistory([]);
      return;
    }

    let output: Line = {
      type: "output",
      text: "",
    };

    switch (cmd) {
      case "help":
        output = {
          type: "output",
          text:
            "Available commands:\\n\\n" +
            "  about      — tentang Rizal\\n" +
            "  projects   — daftar project\\n" +
            "  android    — Android development\\n" +
            "  lab        — experimental lab\\n" +
            "  tools      — developer tools\\n" +
            "  github     — buka GitHub\\n" +
            "  contact    — informasi contact\\n" +
            "  status     — system status\\n" +
            "  whoami     — identitas developer\\n" +
            "  clear      — bersihkan terminal",
        };
        break;

      case "about":
        output = {
          type: "output",
          text:
            "Rizal Faisal | Developer\\n\\n" +
            "Membangun project Android, web, backend, " +
            "tools, automation, dan eksperimen software.",
        };
        break;

      case "projects":
        output = {
          type: "output",
          text:
            "PROJECTS\\n\\n" +
            "01  ZallAI              C++ / Machine Learning\\n" +
            "02  Zall Hub            React / TypeScript\\n" +
            "03  Media Downloader    Node.js / FFmpeg\\n" +
            "04  Android Projects    Android / Gradle\\n" +
            "05  ZControl            Kotlin / Android",
        };
        break;

      case "android":
        output = {
          type: "output",
          text:
            "ANDROID HUB\\n\\n" +
            "Focus: Android development\\n" +
            "Stack: Android SDK / Gradle / Kotlin / Java\\n" +
            "Target: native mobile applications & experiments.",
        };
        break;

      case "lab":
        output = {
          type: "output",
          text:
            "EXPERIMENTAL LAB\\n\\n" +
            "ACTIVE\\n" +
            "  ZallAI Transformer       72%\\n" +
            "  Android Build System    64%\\n" +
            "  Mobile UI System        58%\\n\\n" +
            "EXPERIMENTAL\\n" +
            "  Developer Terminal      45%\\n" +
            "  Automation Toolkit      37%\\n\\n" +
            "PLANNED\\n" +
            "  API Playground           20%",
        };
        break;

      case "tools":
        output = {
          type: "output",
          text:
            "TOOLS\\n\\n" +
            "JSON Formatter\\n" +
            "Base64 Encoder / Decoder\\n" +
            "UUID Generator\\n" +
            "Timestamp Converter\\n" +
            "Color Converter\\n" +
            "Text Utilities\\n" +
            "Regex Utilities",
        };
        break;

      case "github":
        window.open(
          "https://github.com/rizztzy21",
          "_blank",
          "noopener,noreferrer"
        );

        output = {
          type: "output",
          text: "Opening GitHub...",
        };
        break;

      case "contact":
        output = {
          type: "output",
          text:
            "CONTACT\\n\\n" +
            "Discord: @kaijentiji\\n" +
            "GitHub: github.com/rizztzy21",
        };
        break;

      case "status":
        output = {
          type: "output",
          text:
            "SYSTEM STATUS\\n\\n" +
            "CORE        ONLINE\\n" +
            "WEBSITE     ONLINE\\n" +
            "TERMINAL    ONLINE\\n" +
            "ANDROID     ACTIVE\\n" +
            "LAB         ACTIVE\\n" +
            "STATUS      OPERATIONAL",
        };
        break;

      case "whoami":
        output = {
          type: "output",
          text: "rizal@rf-dev — Developer",
        };
        break;

      default:
        output = {
          type: "error",
          text: `command not found: ${cmd}. Ketik "help".`,
        };
    }

    setHistory((prev) => [
      ...prev,
      { type: "input", text: `$ ${command}` },
      output,
    ]);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    runCommand(input);
    setInput("");
  };

  return (
    <main className="terminal-page">
      <div className="terminal-bg" />

      <section className="terminal-shell">
        <div className="terminal-header">
          <div className="terminal-dots">
            <span />
            <span />
            <span />
          </div>

          <div className="terminal-title">
            RF.DEV / TERMINAL
          </div>

          <Link to="/" className="terminal-exit">
            EXIT
          </Link>
        </div>

        <div className="terminal-body" ref={terminalRef}>
          <div className="terminal-banner">
            <strong>RIZAL FAISAL</strong>
            <span>DEVELOPER TERMINAL</span>
          </div>

          {history.map((line, index) => (
            <div
              className={`terminal-line terminal-${line.type}`}
              key={`${index}-${line.text}`}
            >
              {line.text.split("\\n").map((part, partIndex) => (
                <div key={partIndex}>{part || "\u00a0"}</div>
              ))}
            </div>
          ))}

          <form className="terminal-input-row" onSubmit={handleSubmit}>
            <span>$</span>

            <input
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              autoCapitalize="none"
              autoCorrect="off"
              autoComplete="off"
              spellCheck={false}
              aria-label="Terminal command"
              placeholder="type a command..."
            />

            <span className="terminal-cursor" />
          </form>
        </div>
      </section>

      <div className="terminal-hint">
        RF.DEV // INTERACTIVE SYSTEM
      </div>
    </main>
  );
}
