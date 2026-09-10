import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Projects", "/projects"],
  ["Android", "/android"],
  ["Lab", "/lab"],
  ["Tools", "/tools"],
  ["GitHub", "/github"],
  ["Status", "/status"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);

    return () => {
      document.body.classList.remove("nav-open");
    };
  }, [open]);

  useEffect(() => {
    const close = () => setOpen(false);

    window.addEventListener("resize", close);

    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <>
      <header className={`navbar ${open ? "menu-open" : ""}`}>
        <NavLink
          to="/"
          className="nav-logo"
          onClick={() => setOpen(false)}
          aria-label="RF.DEV Home"
        >
          RF<span>.</span>
        </NavLink>

        <nav
          className={`nav-links ${open ? "open" : ""}`}
          aria-label="Main navigation"
        >
          {links.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "active" : undefined
              }
            >
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="nav-meta">
          <span className="nav-live-dot" />
          <span>RF.DEV</span>
        </div>

        <button
          className={`nav-menu ${open ? "active" : ""}`}
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div
        id="main-navigation"
        className={`nav-backdrop ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}
