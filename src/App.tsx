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
    description: "Eksperimen AI/ML yang dikembangkan dari awal menggunakan C++.",
    details:
      "Project eksperimen membangun sistem AI/ML sendiri menggunakan C++. Mencakup tokenizer, training, inference, model serialization, dan eksperimen transformer-style.",
    status: "Experimental",
  },
  {
    number: "02",
    title: "Zall Hub",
    tech: ["React", "TypeScript", "Vite"],
    description: "Web application berisi berbagai tools yang dikembangkan secara modular.",
    details:
      "Kumpulan tools berbasis web dengan fokus pada tampilan sederhana, responsif, modular, dan mudah digunakan.",
    status: "Development",
  },
  {
    number: "03",
    title: "Media Downloader API",
    tech: ["Node.js", "FFmpeg", "yt-dlp"],
    description: "Backend API untuk pemrosesan media dengan integrasi FFmpeg dan yt-dlp.",
    details:
      "Backend service untuk menangani request pemrosesan media serta mengintegrasikan berbagai utility untuk processing dan pengelolaan file media.",
    status: "Development",
  },
  {
    number: "04",
    title: "Android Projects",
    tech: ["Android", "Gradle", "Java/Kotlin"],
    description: "Berbagai eksperimen dan pengembangan aplikasi Android.",
    details:
      "Kumpulan project dan eksperimen Android menggunakan Android SDK, Gradle, serta berbagai pengujian dan eksplorasi pada perangkat Android.",
    status: "Ongoing",
    github: "https://github.com/rizztzy21/android-dev-studio",
  },
  {
    number: "05",
    title: "ZControl",
    tech: ["Android", "Kotlin", "Gradle"],
    description: "Aplikasi Android yang dikembangkan dengan Kotlin dan Gradle.",
    details:
      "Project Android native berbasis Kotlin dan Gradle, termasuk konfigurasi build serta workflow pengembangan melalui Git.",
    status: "Ongoing",
    github: "https://github.com/rizztzy21/ZControl",
  },
];

const skills = [
  ["01", "C++", "System & AI"],
  ["02", "Python", "Automation"],
  ["03", "JavaScript", "Web & Backend"],
  ["04", "TypeScript", "Modern Web"],
  ["05", "React", "Frontend"],
  ["06", "Node.js", "Backend & API"],
  ["07", "Android", "Mobile"],
  ["08", "Linux", "Development"],
];

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeNav, setActiveNav] = useState("home");

  useEffect(() => {
    const duration = 1300;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const value = Math.min(100, Math.round((elapsed / duration) * 100));

      setProgress(value);

      if (value < 100) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => setLoading(false), 350);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(entry.target.id);
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.18 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  useEffect(() => {
    const move = (event: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <main>
      {/* LOADER */}
      <div className={`loader ${loading ? "" : "loader-hidden"}`}>
        <div className="loader-noise" />

        <div className="loader-content">
          <div className="loader-top">
            <span>RF.DEV</span>
            <span>2026</span>
          </div>

          <div className="loader-center">
            <div className="loader-symbol">RF</div>
            <p>RIZAL FAISAL</p>
          </div>

          <div className="loader-bar">
            <div
              className="loader-progress"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="loader-info">
            <span>INITIALIZING SYSTEM</span>
            <span>{progress}%</span>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="nav-logo">
          RF<span>.</span>
        </a>

        <div className="nav-links">
          {[
            ["home", "Home"],
            ["about", "Tentang"],
            ["projects", "Proyek"],
            ["skills", "Skill"],
          ].map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeNav === id ? "active" : ""}
            >
              {label}
            </a>
          ))}
        </div>

        <a href="#contact" className="nav-contact">
          Let's Talk <span>↗</span>
        </a>
      </nav>

      {/* HERO */}
      <section id="home" className="hero reveal visible">
        <div className="hero-grid" />
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />

        <div className="hero-lines">
          <span />
          <span />
          <span />
        </div>

        <div className="hero-orbit">
          <div className="orbit-ring ring-one" />
          <div className="orbit-ring ring-two" />
          <div className="orbit-core">
            <span>RF</span>
          </div>
        </div>

        <div className="hero-content">
          <div className="availability">
            <span className="status-dot" />
            AVAILABLE FOR WORK
          </div>

          <p className="eyebrow">HELLO, I'M</p>

          <h1>
            <span className="hero-name">Rizal</span>
            <span className="hero-name outline">Faisal</span>
            <span className="hero-role">| Developer</span>
          </h1>

          <p className="description">
            Developer yang suka membangun sesuatu dari nol,
            mengeksplorasi teknologi, dan mencari tahu bagaimana
            sesuatu bekerja di balik layar.
          </p>

          <div className="actions">
            <a href="#projects" className="button primary">
              Explore Projects <span>↗</span>
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

        <div className="hero-meta">
          <span>BASED IN</span>
          <strong>INDONESIA</strong>
          <span>FOCUS</span>
          <strong>CODE / BUILD / LEARN</strong>
        </div>

        <a href="#about" className="scroll-explore">
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-line">
            <div className="scroll-dot" />
          </div>
          <span>↓</span>
        </a>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-track">
          <span>BUILD</span>
          <b>✦</b>
          <span>EXPLORE</span>
          <b>✦</b>
          <span>CREATE</span>
          <b>✦</b>
          <span>LEARN</span>
          <b>✦</b>
          <span>IMPROVE</span>
          <b>✦</b>
          <span>BUILD</span>
          <b>✦</b>
          <span>EXPLORE</span>
          <b>✦</b>
          <span>CREATE</span>
          <b>✦</b>
          <span>LEARN</span>
          <b>✦</b>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="about reveal">
        <div className="section-heading">
          <p className="eyebrow">01 / ABOUT ME</p>
          <h2>Tentang Saya</h2>
        </div>

        <div className="about-layout">
          <div className="about-content">
            <p className="about-text">
              Saya adalah seorang developer yang senang mempelajari
              teknologi dan membangun berbagai proyek dari nol.
            </p>

            <p className="about-text muted">
              Saya menikmati proses mencoba hal baru, memahami
              bagaimana sesuatu bekerja, lalu mengubah ide menjadi
              sesuatu yang benar-benar bisa digunakan.
            </p>
          </div>

          <div className="stats">
            <div className="stat">
              <strong>05+</strong>
              <span>PROJECTS</span>
            </div>

            <div className="stat">
              <strong>08+</strong>
              <span>TECHNOLOGIES</span>
            </div>

            <div className="stat">
              <strong>∞</strong>
              <span>THINGS TO LEARN</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects reveal">
        <div className="section-heading">
          <p className="eyebrow">02 / SELECTED WORK</p>
          <h2>Proyek</h2>
          <p>Beberapa hal yang pernah saya bangun dan eksplorasi.</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-card-bg" />

              <div className="project-top">
                <span className="project-number">{project.number}</span>
                <span className="project-status">
                  <i />
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
                  <span>VIEW CASE</span>
                  <span>↗</span>
                </button>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-github"
                  >
                    <span>SOURCE</span>
                    <span>↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="skills reveal">
        <div className="section-heading">
          <p className="eyebrow">03 / TECHNOLOGIES</p>
          <h2>Tech Stack</h2>
          <p>
            Tools dan teknologi yang saya gunakan untuk membangun
            berbagai project.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map(([number, title, description]) => (
            <div className="skill" key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <strong>↗</strong>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact reveal">
        <div className="contact-orb" />

        <p className="eyebrow">04 / GET IN TOUCH</p>

        <h2>
          Mari buat
          <br />
          sesuatu<span>.</span>
        </h2>

        <p className="contact-copy">
          Punya ide, project, atau sekadar ingin ngobrol soal
          teknologi? Jangan ragu untuk menghubungi saya.
        </p>

        <div className="contact-links">
          <a href="mailto:rizzcasanno@gmail.com">
            <span>EMAIL</span>
            <strong>rizzcasanno@gmail.com</strong>
            <i>↗</i>
          </a>

          <a
            href="https://github.com/rizztzy21"
            target="_blank"
            rel="noreferrer"
          >
            <span>GITHUB</span>
            <strong>@rizztzy21</strong>
            <i>↗</i>
          </a>

          <a href="https://discord.com" target="_blank" rel="noreferrer">
            <span>DISCORD</span>
            <strong>@kaijentiji</strong>
            <i>↗</i>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div>
          <strong>RF.</strong>
          <span>Rizal Faisal</span>
        </div>

        <span>© 2026 — Built with React + TypeScript</span>

        <a href="#home">BACK TO TOP ↑</a>
      </footer>

      {/* MODAL */}
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
              {selectedProject.number} / PROJECT
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

            {selectedProject.github && (
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="modal-source"
              >
                VIEW SOURCE CODE ↗
              </a>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
