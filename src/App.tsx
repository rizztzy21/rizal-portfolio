import { useEffect, useState } from "react";
import "./index.css";

type Project = {
  number: string;
  title: string;
  tech: string[];
  description: string;
  details: string;
  status: string;
  github?: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "ZallAI",
    tech: ["C++", "Machine Learning", "CMake"],
    description:
      "Eksperimen AI/ML yang dikembangkan dari awal menggunakan C++.",
    details:
      "Project ini merupakan eksperimen membangun sistem AI/ML sendiri menggunakan C++. Mencakup tokenizer, training, inference, model serialization, dan beberapa eksperimen transformer-style.",
    status: "Eksperimental",
    github: "https://github.com/rizztzy21/zall.dev",
  },
  {
    number: "02",
    title: "Zall Hub",
    tech: ["React", "TypeScript", "Vite"],
    description:
      "Web application berisi berbagai tools yang dikembangkan secara modular.",
    details:
      "Zall Hub dibuat sebagai kumpulan tools berbasis web dengan fokus pada tampilan yang sederhana, responsif, dan mudah digunakan.",
    status: "Development",
    github: "https://github.com/rizztzy21/zall-hub",
  },
  {
    number: "03",
    title: "Media Downloader API",
    tech: ["Node.js", "FFmpeg", "yt-dlp"],
    description:
      "Backend API untuk pemrosesan media dengan integrasi FFmpeg dan yt-dlp.",
    details:
      "Backend service yang menangani request pemrosesan media dan mengintegrasikan berbagai utility untuk processing serta pengelolaan file media.",
    status: "Development",
  },
  {
    number: "04",
    title: "Android Projects",
    tech: ["Android", "Gradle", "Java/Kotlin"],
    description:
      "Berbagai eksperimen dan pengembangan aplikasi Android.",
    details:
      "Kumpulan project dan eksperimen Android menggunakan Android SDK, Gradle, serta berbagai pengujian dan eksplorasi pada perangkat Android.",
    status: "Ongoing",
    github: "https://github.com/rizztzy21/android-dev-studio",
  },
];

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const duration = 1200;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const value = Math.min(100, Math.round((elapsed / duration) * 100));

      setProgress(value);

      if (value < 100) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => setLoading(false), 250);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <main>
      {/* LOADING */}
      <div className={`loader ${loading ? "" : "loader-hidden"}`}>
        <div className="loader-content">
          <p className="loader-name">RIZAL FAISAL</p>

          <div className="loader-bar">
            <div
              className="loader-progress"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="loader-info">
            <span>INITIALIZING PORTFOLIO</span>
            <span>{progress}%</span>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#" className="nav-logo">
          RF.
        </a>

        <div className="nav-links">
          <a href="#about">Tentang</a>
          <a href="#projects">Proyek</a>
          <a href="#skills">Keahlian</a>
        </div>

        <a href="#contact" className="nav-contact">
          Kontak
        </a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid" />

        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />

        <div className="particles">
          {Array.from({ length: 28 }).map((_, index) => (
            <span
              key={index}
              className="particle"
              style={
                {
                  "--i": index,
                } as React.CSSProperties
              }
            />
          ))}
        </div>

        <div className="hero-orbit">
          <div className="orbit-ring ring-one" />
          <div className="orbit-ring ring-two" />
          <div className="orbit-core" />
        </div>

        <div className="hero-content">
          <p className="eyebrow hero-item item-one">
            HELLO, I'M
          </p>

          <h1 className="hero-title">
            <span className="hero-name hero-item item-two">
              Rizal Faisal
            </span>

            <span className="hero-role hero-item item-three">
              | Developer
            </span>
          </h1>

          <p className="description hero-item item-four">
            Membangun sesuatu, mempelajari cara kerjanya,
            dan terus berkembang melalui setiap proyek.
          </p>

          <div className="actions hero-item item-five">
            <a href="#projects" className="button primary">
              Lihat Proyek <span>↗</span>
            </a>

            <a
              href="https://github.com/rizztzy21"
              target="_blank"
              rel="noreferrer"
              className="button secondary"
            >
              GitHub <span>↗</span>
            </a>
          </div>
        </div>

        <div className="hero-side-note">
          <span>[ 01 ]</span>
          <span>BUILD</span>
          <span>EXPLORE</span>
          <span>LEARN</span>
          <span>IMPROVE</span>
        </div>

        <a href="#projects" className="scroll-explore">
          <span>SCROLL TO EXPLORE</span>

          <div className="scroll-line">
            <div className="scroll-dot" />
          </div>

          <span className="scroll-arrow">↓</span>
        </a>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects reveal">
        <div className="section-heading">
          <p className="eyebrow">SELECTED WORK</p>
          <h2>Proyek</h2>
          <p>
            Beberapa proyek yang pernah saya bangun dan eksplorasi.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top">
                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-status">
                  {project.status}
                </span>
              </div>

              <div className="project-main">
                <h3>{project.title}</h3>

                <div className="tech-list">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <p className="project-description">
                  {project.description}
                </p>
              </div>

              <div className="project-actions">
                <button
                  className="project-detail"
                  onClick={() => setSelectedProject(project)}
                >
                  <span>Lihat Detail</span>
                  <span>↗</span>
                </button>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-github"
                  >
                    <span>Source Code</span>
                    <span>↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about reveal">
        <div className="section-heading">
          <p className="eyebrow">ABOUT ME</p>
          <h2>Tentang Saya</h2>
        </div>

        <div className="about-content">
          <p className="about-text">
            Saya adalah seorang developer yang senang mempelajari
            teknologi dan membangun berbagai proyek dari nol.
          </p>

          <p className="about-text muted">
            Saya menikmati proses mencoba hal baru, mencari tahu
            bagaimana sesuatu bekerja, dan mengembangkan solusi
            melalui proyek-proyek yang saya kerjakan sendiri.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="skills reveal">
        <div className="section-heading">
          <p className="eyebrow">TECHNOLOGIES</p>
          <h2>Keahlian</h2>
          <p>
            Teknologi yang saya gunakan dan eksplorasi dalam berbagai
            proyek.
          </p>
        </div>

        <div className="skills-grid">
          {[
            ["01", "C++", "System & AI Development"],
            ["02", "Python", "Automation & Development"],
            ["03", "JavaScript", "Web & Backend"],
            ["04", "TypeScript", "Modern Web Development"],
            ["05", "React", "Frontend Development"],
            ["06", "Node.js", "Backend & API"],
            ["07", "Android", "Mobile Development"],
            ["08", "Linux", "Development Environment"],
          ].map(([number, title, description]) => (
            <div className="skill" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact reveal">
        <p className="eyebrow">GET IN TOUCH</p>

        <h2>Mari buat sesuatu.</h2>

        <p>
          Punya ide, proyek, atau sekadar ingin ngobrol soal teknologi?
        </p>

        <a
          href="mailto:rizzcasanno@gmail.com"
          className="contact-email"
        >
          rizzcasanno@gmail.com ↗
        </a>
      </section>

      <footer>
        <span>© 2026 Rizal Faisal</span>
        <span>Built with React + TypeScript</span>
      </footer>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Tutup"
            >
              ×
            </button>

            <span className="modal-number">
              {selectedProject.number}
            </span>

            <h2>{selectedProject.title}</h2>

            <div className="tech-list modal-tech">
              {selectedProject.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <p className="modal-description">
              {selectedProject.details}
            </p>

            <div className="modal-status">
              <span>STATUS</span>
              <strong>{selectedProject.status}</strong>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
