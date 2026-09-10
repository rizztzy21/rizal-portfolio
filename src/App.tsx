import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import CommandPalette from "./components/CommandPalette";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Android from "./pages/Android";
import Lab from "./pages/Lab";
import NotFound from "./pages/NotFound";
import Github from "./pages/Github";
import Status from "./pages/Status";
import Changelog from "./pages/Changelog";
import Releases from "./pages/Releases";
import Footer from "./components/Footer";
import Terminal from "./pages/Terminal";
import Api from "./pages/Api";
import Tools from "./pages/Tools";
import Contact from "./pages/Contact";

function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const duration = 2200;

    const timer = setInterval(() => {
      const value = Math.min(
        100,
        Math.floor(((Date.now() - start) / duration) * 100)
      );

      setProgress(value);

      if (value >= 100) {
        clearInterval(timer);
        setTimeout(() => setDone(true), 350);
      }
    }, 20);

    return () => clearInterval(timer);
  }, []);

  if (done) return null;

  return (
    <div className="boot-screen">
      <div className="boot-noise" />
      <div className="boot-grid" />

      <div className="boot-top">
        <span>RF.DEV</span>
        <span>ANDROID SYSTEM / 01</span>
      </div>

      <div className="boot-center">
        <div className="boot-orbit">
          <div className="boot-ring ring-one" />
          <div className="boot-ring ring-two" />
          <div className="boot-core">
            <span>RF</span>
          </div>
        </div>

        <div className="boot-status">INITIALIZING</div>
        <h1>RIZAL FAISAL</h1>
        <p>DEVELOPER HUB</p>

        <div className="boot-progress">
          <div style={{ width: `${progress}%` }} />
        </div>

        <div className="boot-percent">
          SYSTEM ONLINE {String(progress).padStart(3, "0")}%
        </div>
      </div>

      <div className="boot-bottom">
        <span>CORE</span>
        <span>ANDROID</span>
        <span>PROJECTS</span>
        <span>LAB</span>
        <span>TOOLS</span>
        <span>RF.DEV</span>
      </div>
    </div>
  );
}

function PageWrapper() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <CommandPalette />

      <main key={location.pathname} className="page-transition">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/android" element={<Android />} />
          <Route path="/lab" element={<Lab />} />
        <Route path="/terminal" element={<Terminal />} />
        <Route path="/api" element={<Api />} />
        <Route path="*" element={<NotFound />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/github" element={<Github />} />
        <Route path="/status" element={<Status />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="/releases" element={<Releases />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Loader />
      <PageWrapper />
    </BrowserRouter>
  );
}
