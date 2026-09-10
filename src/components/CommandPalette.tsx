import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Command = {
  label: string;
  path: string;
  description: string;
};

const commands: Command[] = [
  { label: "Home", path: "/", description: "Developer Hub" },
  { label: "About", path: "/about", description: "About Rizal Faisal" },
  { label: "Projects", path: "/projects", description: "Project collection" },
  { label: "Android", path: "/android", description: "Android Hub" },
  { label: "Lab", path: "/lab", description: "Experiments & research" },
  { label: "Tools", path: "/tools", description: "Developer utilities" },
  { label: "API Playground", path: "/api", description: "Test API endpoints" },
  { label: "Terminal", path: "/terminal", description: "Interactive terminal" },
  { label: "System Status", path: "/status", description: "Live system status" },
  { label: "Changelog", path: "/changelog", description: "Build history" },
  { label: "Release Center", path: "/releases", description: "Project releases" },
  { label: "GitHub", path: "/github", description: "GitHub Hub" },
  { label: "Contact", path: "/contact", description: "Get in touch" },
];

export default function CommandPalette() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);

  const filtered = commands.filter((command) =>
    `${command.label} ${command.description}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  const close = () => {
    setOpen(false);
    setQuery("");
    setSelected(0);
  };

  const go = (path: string) => {
    close();
    navigate(path);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
        setQuery("");
        setSelected(0);
        return;
      }

      if (event.key === "Escape") {
        close();
        return;
      }

      if (!open) return;

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setSelected((value) =>
          filtered.length ? (value + 1) % filtered.length : 0
        );
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        setSelected((value) =>
          filtered.length ? (value - 1 + filtered.length) % filtered.length : 0
        );
      }

      if (event.key === "Enter" && filtered[selected]) {
        event.preventDefault();
        go(filtered[selected].path);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, filtered, selected]);

  useEffect(() => {
    if (selected >= filtered.length) {
      setSelected(Math.max(0, filtered.length - 1));
    }
  }, [filtered.length, selected]);

  return (
    <>
      <button
        className="command-trigger"
        type="button"
        onClick={() => {
          setOpen(true);
          setSelected(0);
        }}
        aria-label="Open command palette"
      >
        <span>⌘</span>
        <span className="command-trigger-label">COMMAND</span>
      </button>

      {open && (
        <div className="command-overlay" onMouseDown={close}>
          <div
            className="command-palette"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="command-header">
              <span className="command-prefix">RF.DEV</span>
              <span className="command-title">COMMAND PALETTE</span>
              <button type="button" onClick={close} className="command-close">
                ESC
              </button>
            </div>

            <div className="command-search-wrap">
              <span className="command-search-icon">⌕</span>
              <input
                autoFocus
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setSelected(0);
                }}
                placeholder="Search pages..."
                className="command-search"
              />
              <kbd>CTRL K</kbd>
            </div>

            <div className="command-results">
              {filtered.length ? (
                filtered.map((command, index) => (
                  <button
                    key={command.path}
                    type="button"
                    className={`command-item ${
                      index === selected ? "active" : ""
                    }`}
                    onMouseEnter={() => setSelected(index)}
                    onClick={() => go(command.path)}
                  >
                    <span className="command-item-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="command-item-main">
                      <strong>{command.label}</strong>
                      <small>{command.description}</small>
                    </span>

                    <span className="command-item-arrow">↗</span>
                  </button>
                ))
              ) : (
                <div className="command-empty">
                  <span>NO RESULTS</span>
                  <small>Try another search term.</small>
                </div>
              )}
            </div>

            <div className="command-footer">
              <span>↑↓ Navigate</span>
              <span>ENTER Open</span>
              <span>ESC Close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
