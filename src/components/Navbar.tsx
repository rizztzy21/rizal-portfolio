import { NavLink } from "react-router-dom";
import { useState } from "react";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Projects", "/projects"],
  ["Android", "/android"],
  ["Lab", "/lab"],
  ["Tools", "/tools"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <NavLink to="/" className="nav-logo" onClick={() => setOpen(false)}>
          RF<span>.</span>
        </NavLink>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          className={`nav-menu ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div
        className={`nav-backdrop ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />
    </>
  );
}
