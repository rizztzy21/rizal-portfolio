import { Link } from "react-router-dom";

const featured = [
  {
    number: "01",
    title: "ZallAI",
    type: "AI / MACHINE LEARNING",
    description:
      "Eksperimen AI/ML berbasis C++ yang dibangun dari tokenizer, training, inference hingga model serialization.",
    tech: ["C++", "ML", "CMake"],
  },
  {
    number: "02",
    title: "Zall Hub",
    type: "WEB PLATFORM",
    description:
      "Developer hub berbasis React dan TypeScript yang berisi berbagai tools dan eksperimen web.",
    tech: ["React", "TypeScript", "Vite"],
  },
  {
    number: "03",
    title: "Android Projects",
    type: "ANDROID DEVELOPMENT",
    description:
      "Kumpulan project dan eksperimen Android menggunakan Android SDK, Gradle, Java dan Kotlin.",
    tech: ["Android", "Gradle", "Kotlin"],
  },
];

const stack = [
  "C++",
  "Python",
  "TypeScript",
  "React",
  "Node.js",
  "Android",
  "Kotlin",
  "Linux",
];

export default function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid" />

        <div className="hero-content">
          <div className="hero-status">
            <span />
            AVAILABLE FOR PROJECTS
          </div>

          <p className="hero-kicker">
            RIZAL FAISAL / DEVELOPER
          </p>

          <h1>
            Building
            <br />
            <span>things that</span>
            <br />
            actually work.
          </h1>

          <p className="hero-description">
            Developer yang suka membangun software, Android project,
            web application, automation, dan eksperimen AI dari nol.
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="button button-primary">
              Explore Projects
              <span>↗</span>
            </Link>

            <Link to="/about" className="button button-ghost">
              About Me
            </Link>
          </div>
        </div>

        <div className="hero-orbit">
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
          <div className="orbit-core">
            <strong>RF</strong>
            <small>DEV</small>
          </div>
        </div>

        <div className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <i />
        </div>
      </section>


      {/* MARQUEE */}
      <section className="tech-marquee">
        <div>
          {[...stack, ...stack].map((item, index) => (
            <span key={`${item}-${index}`}>
              {item} <b>✦</b>
            </span>
          ))}
        </div>
      </section>


      {/* STATS */}
      <section className="section stats-section">
        <div className="section-label">
          <span>01</span>
          DEVELOPER OVERVIEW
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <strong>05+</strong>
            <span>PROJECTS</span>
          </div>

          <div className="stat-card">
            <strong>08+</strong>
            <span>TECHNOLOGIES</span>
          </div>

          <div className="stat-card">
            <strong>03</strong>
            <span>MAIN FOCUS</span>
          </div>

          <div className="stat-card">
            <strong>∞</strong>
            <span>EXPERIMENTS</span>
          </div>
        </div>
      </section>


      {/* FEATURED PROJECTS */}
      <section className="section projects-section">
        <div className="section-heading">
          <div>
            <div className="section-label">
              <span>02</span>
              FEATURED WORK
            </div>

            <h2>
              Projects I&apos;m
              <br />
              <em>building.</em>
            </h2>
          </div>

          <Link to="/projects" className="text-link">
            View all projects →
          </Link>
        </div>

        <div className="featured-grid">
          {featured.map((project) => (
            <article className="featured-card" key={project.number}>
              <div className="featured-top">
                <span>{project.number}</span>
                <span>{project.type}</span>
              </div>

              <div className="featured-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <div className="featured-bottom">
                <div className="tech-list">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <span className="arrow">↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>


      {/* ANDROID FEATURE */}
      <section className="section android-feature">
        <div className="android-copy">
          <div className="section-label">
            <span>03</span>
            ANDROID DEVELOPMENT
          </div>

          <h2>
            Built for
            <br />
            <em>Android.</em>
          </h2>

          <p>
            Eksplorasi Android native, Gradle, build system,
            UI, eksperimen perangkat, dan berbagai project
            yang dikerjakan langsung dari environment mobile.
          </p>

          <Link to="/android" className="button button-primary">
            Enter Android Hub <span>↗</span>
          </Link>
        </div>

        <div className="phone-visual">
          <div className="phone">
            <div className="phone-speaker" />
            <div className="phone-screen">
              <small>RF.DEV</small>
              <strong>ANDROID</strong>
              <span>SYSTEM ONLINE</span>

              <div className="phone-bars">
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* STACK */}
      <section className="section stack-section">
        <div className="section-label">
          <span>04</span>
          TECHNOLOGY STACK
        </div>

        <div className="stack-heading">
          <h2>
            Tools I use to
            <br />
            <em>build.</em>
          </h2>

          <p>
            Dari low-level programming sampai modern web
            development dan Android.
          </p>
        </div>

        <div className="stack-grid">
          {stack.map((item, index) => (
            <div className="stack-item" key={item}>
              <span>0{index + 1}</span>
              <strong>{item}</strong>
              <i>↗</i>
            </div>
          ))}
        </div>
      </section>


      {/* CTA */}
      <section className="final-cta">
        <div className="final-glow" />

        <p>READY WHEN YOU ARE</p>

        <h2>
          Let&apos;s build
          <br />
          something <em>great.</em>
        </h2>

        <div>
          <Link to="/contact" className="button button-primary">
            Get in touch ↗
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
      </section>

    </div>
  );
}
