import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-glow" />

      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            RF<span>.</span>
          </Link>

          <p>
            Rizal Faisal — Developer yang membangun project,
            eksperimen, tools, dan sistem Android.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <span className="footer-label">EXPLORE</span>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/android">Android</Link>
            <Link to="/lab">Lab</Link>
          </div>

          <div>
            <span className="footer-label">SYSTEM</span>
            <Link to="/tools">Tools</Link>
            <Link to="/contact">Contact</Link>
            <a
              href="https://github.com/rizztzy21"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Rizal Faisal</span>
        <span className="footer-status">
          <i /> SYSTEM ONLINE
        </span>
        <span>RF.DEV</span>
      </div>
    </footer>
  );
}
