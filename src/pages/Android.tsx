import { Link } from "react-router-dom";

const androidProjects = [
  {
    number: "01",
    title: "Android Dev Studio",
    description:
      "Environment dan eksperimen pengembangan aplikasi Android dengan Android SDK dan Gradle.",
    tech: ["Android", "Gradle", "Java", "Kotlin"],
    status: "ONGOING",
    github: "https://github.com/rizztzy21/android-dev-studio",
  },
  {
    number: "02",
    title: "ZControl",
    description:
      "Project Android native berbasis Kotlin dengan fokus pada workflow development dan konfigurasi build.",
    tech: ["Kotlin", "Android", "Gradle"],
    status: "ONGOING",
    github: "https://github.com/rizztzy21/ZControl",
  },
];

const androidStack = [
  ["01", "Android SDK", "Platform"],
  ["02", "Kotlin", "Language"],
  ["03", "Java", "Language"],
  ["04", "Gradle", "Build System"],
  ["05", "ADB", "Development"],
  ["06", "Git", "Version Control"],
];

const roadmap = [
  ["01", "Android Foundation", "COMPLETED"],
  ["02", "Native Projects", "COMPLETED"],
  ["03", "Advanced Build Workflow", "IN PROGRESS"],
  ["04", "More Android Projects", "NEXT"],
  ["05", "Public Android Releases", "PLANNED"],
];

export default function Android() {
  return (
    <div className="android-page">

      {/* HERO */}
      <section className="android-hero">
        <div className="android-hero-grid" />

        <div className="android-terminal">
          <span>RF.DEV / ANDROID</span>
          <span>STATUS: ONLINE</span>
        </div>

        <div className="android-hero-content">
          <div className="section-label">
            <span>01</span>
            ANDROID DEVELOPMENT HUB
          </div>

          <h1>
            Building for
            <br />
            <em>Android.</em>
          </h1>

          <p>
            Tempat untuk project Android, eksperimen native,
            build workflow, tools, dan perjalanan development.
          </p>

          <div className="android-hero-actions">
            <Link to="/projects" className="button button-primary">
              View Projects ↗
            </Link>

            <a
              href="https://github.com/rizztzy21"
              target="_blank"
              rel="noreferrer"
              className="button button-ghost"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="android-device">
          <div className="device-notch" />

          <div className="device-ui">
            <small>RF.DEV</small>

            <div className="device-status">
              <span />
              SYSTEM ONLINE
            </div>

            <strong>ANDROID</strong>

            <div className="device-data">
              <div>
                <span>SDK</span>
                <b>35+</b>
              </div>

              <div>
                <span>BUILD</span>
                <b>GRADLE</b>
              </div>

              <div>
                <span>ARCH</span>
                <b>AARCH64</b>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* OVERVIEW */}
      <section className="section android-overview">
        <div className="section-label">
          <span>02</span>
          DEVELOPMENT OVERVIEW
        </div>

        <div className="android-stats">
          <div>
            <strong>02+</strong>
            <span>ANDROID PROJECTS</span>
          </div>

          <div>
            <strong>06+</strong>
            <span>CORE TECHNOLOGIES</span>
          </div>

          <div>
            <strong>35+</strong>
            <span>SDK TARGET</span>
          </div>

          <div>
            <strong>∞</strong>
            <span>EXPERIMENTS</span>
          </div>
        </div>
      </section>


      {/* PROJECTS */}
      <section className="section android-project-section">
        <div className="section-heading">
          <div>
            <div className="section-label">
              <span>03</span>
              ANDROID PROJECTS
            </div>

            <h2>
              Projects built
              <br />
              for <em>mobile.</em>
            </h2>
          </div>
        </div>

        <div className="android-projects">
          {androidProjects.map((project) => (
            <article className="android-project" key={project.number}>
              <div className="android-project-number">
                {project.number}
              </div>

              <div className="android-project-content">
                <span>{project.status}</span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="android-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="android-project-link"
              >
                GitHub ↗
              </a>
            </article>
          ))}
        </div>
      </section>


      {/* STACK */}
      <section className="section android-stack-section">
        <div className="section-label">
          <span>04</span>
          ANDROID STACK
        </div>

        <div className="android-stack">
          {androidStack.map(([number, name, type]) => (
            <div className="android-stack-item" key={name}>
              <span>{number}</span>
              <strong>{name}</strong>
              <small>{type}</small>
            </div>
          ))}
        </div>
      </section>


      {/* ROADMAP */}
      <section className="section android-roadmap-section">
        <div className="section-label">
          <span>05</span>
          DEVELOPMENT ROADMAP
        </div>

        <div className="roadmap">
          {roadmap.map(([number, title, status], index) => (
            <div className="roadmap-item" key={number}>
              <div className="roadmap-line">
                <span>{number}</span>
                {index !== roadmap.length - 1 && <i />}
              </div>

              <div className="roadmap-content">
                <h3>{title}</h3>
                <span>{status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* CTA */}
      <section className="android-cta">
        <p>ANDROID DEVELOPMENT</p>

        <h2>
          More projects.
          <br />
          More <em>experiments.</em>
        </h2>

        <Link to="/contact" className="button button-primary">
          Connect with me ↗
        </Link>
      </section>

    </div>
  );
}
