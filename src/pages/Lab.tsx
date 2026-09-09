import { useMemo, useState } from "react";

type Experiment = {
  id: string;
  title: string;
  category: string;
  description: string;
  status: string;
  progress: number;
  tech: string[];
};

const experiments: Experiment[] = [
  {
    id: "01",
    title: "ZallAI Transformer",
    category: "AI",
    description:
      "Eksperimen membangun model transformer-style sederhana dari awal menggunakan C++.",
    status: "ACTIVE",
    progress: 72,
    tech: ["C++", "ML", "Transformer"],
  },
  {
    id: "02",
    title: "Android Build System",
    category: "ANDROID",
    description:
      "Eksplorasi workflow Android SDK, Gradle, build configuration, dan proses menghasilkan APK.",
    status: "ACTIVE",
    progress: 64,
    tech: ["Android", "Gradle", "SDK"],
  },
  {
    id: "03",
    title: "Developer Terminal",
    category: "WEB",
    description:
      "Eksperimen membuat terminal interaktif berbasis web dengan command system sendiri.",
    status: "EXPERIMENTAL",
    progress: 45,
    tech: ["React", "TypeScript", "CSS"],
  },
  {
    id: "04",
    title: "API Playground",
    category: "BACKEND",
    description:
      "Eksperimen interface untuk testing endpoint, request, response, dan JSON.",
    status: "PLANNED",
    progress: 20,
    tech: ["Node.js", "API", "JSON"],
  },
  {
    id: "05",
    title: "Mobile UI System",
    category: "UI",
    description:
      "Eksperimen membangun komponen UI mobile-first dengan animasi dan responsive layout.",
    status: "ACTIVE",
    progress: 58,
    tech: ["React", "CSS", "Mobile"],
  },
  {
    id: "06",
    title: "Automation Toolkit",
    category: "AUTOMATION",
    description:
      "Kumpulan eksperimen automation untuk development workflow dan utility.",
    status: "EXPERIMENTAL",
    progress: 37,
    tech: ["Python", "Linux", "Shell"],
  },
];

const categories = [
  "ALL",
  "AI",
  "ANDROID",
  "WEB",
  "BACKEND",
  "UI",
  "AUTOMATION",
];

export default function Lab() {
  const [category, setCategory] = useState("ALL");
  const [selected, setSelected] = useState<Experiment | null>(null);

  const visibleExperiments = useMemo(() => {
    if (category === "ALL") return experiments;

    return experiments.filter(
      (experiment) => experiment.category === category
    );
  }, [category]);

  return (
    <div className="lab-page">

      <section className="lab-hero">
        <div className="lab-grid" />

        <div className="section-label">
          <span>01</span>
          EXPERIMENTAL LAB
        </div>

        <h1>
          Ideas become
          <br />
          <em>experiments.</em>
        </h1>

        <p>
          Tempat untuk eksperimen, prototype, konsep baru,
          dan project yang masih dalam proses eksplorasi.
        </p>

        <div className="lab-terminal-line">
          <span>rizal@devhub:~$</span>
          <strong>./run-experiment --all</strong>
        </div>
      </section>


      <section className="section lab-overview">
        <div className="section-label">
          <span>02</span>
          LAB STATUS
        </div>

        <div className="lab-stats">
          <div>
            <strong>06</strong>
            <span>EXPERIMENTS</span>
          </div>

          <div>
            <strong>03</strong>
            <span>ACTIVE</span>
          </div>

          <div>
            <strong>07+</strong>
            <span>TECHNOLOGIES</span>
          </div>

          <div>
            <strong>∞</strong>
            <span>IDEAS</span>
          </div>
        </div>
      </section>


      <section className="section lab-experiments">
        <div className="section-heading">
          <div>
            <div className="section-label">
              <span>03</span>
              EXPERIMENT ARCHIVE
            </div>

            <h2>
              Current
              <br />
              <em>experiments.</em>
            </h2>
          </div>
        </div>

        <div className="lab-filters">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="experiment-grid">
          {visibleExperiments.map((experiment) => (
            <article
              className="experiment-card"
              key={experiment.id}
              onClick={() => setSelected(experiment)}
            >
              <div className="experiment-top">
                <span>{experiment.id}</span>
                <span>{experiment.category}</span>
              </div>

              <div>
                <div className="experiment-status">
                  <i />
                  {experiment.status}
                </div>

                <h3>{experiment.title}</h3>

                <p>{experiment.description}</p>
              </div>

              <div>
                <div className="experiment-progress-info">
                  <span>PROGRESS</span>
                  <strong>{experiment.progress}%</strong>
                </div>

                <div className="experiment-progress">
                  <i style={{ width: `${experiment.progress}%` }} />
                </div>

                <div className="experiment-tech">
                  {experiment.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>


      <section className="lab-principles">
        <div className="section-label">
          <span>04</span>
          LAB PRINCIPLES
        </div>

        <div className="principles-grid">
          <div>
            <span>01</span>
            <h3>BUILD</h3>
            <p>Ide dibuat menjadi sesuatu yang benar-benar bisa dijalankan.</p>
          </div>

          <div>
            <span>02</span>
            <h3>BREAK</h3>
            <p>Bug dan kegagalan menjadi bagian dari proses eksperimen.</p>
          </div>

          <div>
            <span>03</span>
            <h3>LEARN</h3>
            <p>Setiap experiment menghasilkan pengetahuan baru.</p>
          </div>

          <div>
            <span>04</span>
            <h3>ITERATE</h3>
            <p>Prototype terus diperbaiki sampai menjadi project nyata.</p>
          </div>
        </div>
      </section>


      {selected && (
        <div
          className="lab-modal-backdrop"
          onClick={() => setSelected(null)}
        >
          <div
            className="lab-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="lab-modal-close"
              onClick={() => setSelected(null)}
            >
              ×
            </button>

            <span className="project-type">
              {selected.category} / EXPERIMENT
            </span>

            <h2>{selected.title}</h2>

            <p>{selected.description}</p>

            <div className="modal-progress">
              <div>
                <span>EXPERIMENT PROGRESS</span>
                <strong>{selected.progress}%</strong>
              </div>

              <i>
                <b style={{ width: `${selected.progress}%` }} />
              </i>
            </div>

            <div className="modal-tech">
              {selected.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <button
              className="button button-ghost"
              onClick={() => setSelected(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
