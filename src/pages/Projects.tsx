import { useMemo, useState } from "react";

type Project = {
  number: string;
  title: string;
  type: string;
  description: string;
  details: string;
  tech: string[];
  status: string;
  github?: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "ZallAI",
    type: "AI / MACHINE LEARNING",
    description:
      "Eksperimen AI/ML yang dibangun dari awal menggunakan C++.",
    details:
      "Project eksperimen yang mencakup tokenizer, training, inference, model serialization, dan eksperimen transformer-style.",
    tech: ["C++", "ML", "CMake"],
    status: "Experimental",
  },
  {
    number: "02",
    title: "Zall Hub",
    type: "WEB PLATFORM",
    description:
      "Web application berisi berbagai tools yang dikembangkan secara modular.",
    details:
      "Platform web dengan fokus pada interface responsif, modularitas, dan kumpulan utility yang dapat dikembangkan terus.",
    tech: ["React", "TypeScript", "Vite"],
    status: "Development",
  },
  {
    number: "03",
    title: "Media Downloader API",
    type: "BACKEND / API",
    description:
      "Backend API untuk pemrosesan media menggunakan FFmpeg dan yt-dlp.",
    details:
      "Backend service yang menangani request pemrosesan media dan mengintegrasikan utility untuk processing serta pengelolaan file.",
    tech: ["Node.js", "FFmpeg", "yt-dlp"],
    status: "Development",
  },
  {
    number: "04",
    title: "Android Projects",
    type: "ANDROID DEVELOPMENT",
    description:
      "Kumpulan project dan eksperimen aplikasi Android.",
    details:
      "Eksplorasi Android SDK, Gradle, Java, Kotlin, build system, dan berbagai eksperimen pengembangan aplikasi mobile.",
    tech: ["Android", "Gradle", "Java", "Kotlin"],
    status: "Ongoing",
    github: "https://github.com/rizztzy21/android-dev-studio",
  },
  {
    number: "05",
    title: "ZControl",
    type: "ANDROID / NATIVE",
    description:
      "Project Android native berbasis Kotlin dan Gradle.",
    details:
      "Project Android native dengan fokus pada workflow development, konfigurasi build, dan pengembangan melalui Git.",
    tech: ["Android", "Kotlin", "Gradle"],
    status: "Ongoing",
    github: "https://github.com/rizztzy21/ZControl",
  },
];

const filters = [
  "ALL",
  "C++",
  "REACT",
  "ANDROID",
  "NODE.JS",
  "KOTLIN",
];

export default function Projects() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("ALL");
  const [selected, setSelected] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(query.toLowerCase()) ||
        project.description.toLowerCase().includes(query.toLowerCase()) ||
        project.tech.some((tech) =>
          tech.toLowerCase().includes(query.toLowerCase())
        );

      const matchesFilter =
        filter === "ALL" ||
        project.tech.some(
          (tech) => tech.toLowerCase() === filter.toLowerCase()
        );

      return matchesSearch && matchesFilter;
    });
  }, [query, filter]);

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="section-label">
          <span>01</span>
          PROJECT ARCHIVE
        </div>

        <h1>
          Things I&apos;m
          <br />
          <em>building.</em>
        </h1>

        <p>
          Kumpulan project, eksperimen, dan software yang sedang
          dikembangkan atau pernah dikerjakan.
        </p>
      </section>

      <section className="project-controls">
        <div className="project-search">
          <span>⌕</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects..."
          />
          {query && (
            <button onClick={() => setQuery("")}>×</button>
          )}
        </div>

        <div className="project-filters">
          {filters.map((item) => (
            <button
              key={item}
              className={filter === item ? "selected" : ""}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      <section className="project-list">
        <div className="project-count">
          <span>{filteredProjects.length}</span>
          PROJECTS FOUND
        </div>

        {filteredProjects.length === 0 ? (
          <div className="project-empty">
            <strong>NO PROJECT FOUND</strong>
            <p>Coba kata pencarian atau filter yang berbeda.</p>
            <button
              onClick={() => {
                setQuery("");
                setFilter("ALL");
              }}
            >
              RESET FILTER
            </button>
          </div>
        ) : (
          <div className="project-cards">
            {filteredProjects.map((project) => (
              <article
                className="project-card-large"
                key={project.number}
                onClick={() => setSelected(project)}
              >
                <div className="project-card-number">
                  {project.number}
                </div>

                <div className="project-card-main">
                  <span className="project-type">{project.type}</span>

                  <h2>{project.title}</h2>

                  <p>{project.description}</p>

                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-card-side">
                  <span className="project-status">
                    <i />
                    {project.status}
                  </span>

                  <strong>↗</strong>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {selected && (
        <div
          className="project-modal-backdrop"
          onClick={() => setSelected(null)}
        >
          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelected(null)}
            >
              ×
            </button>

            <span className="project-type">
              {selected.type}
            </span>

            <h2>{selected.title}</h2>

            <p>{selected.details}</p>

            <div className="modal-tech">
              {selected.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="modal-actions">
              {selected.github && (
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-primary"
                >
                  Open GitHub ↗
                </a>
              )}

              <button
                className="button button-ghost"
                onClick={() => setSelected(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
