type Release = {
  version: string;
  project: string;
  status: "STABLE" | "BETA" | "EXPERIMENTAL";
  date: string;
  description: string;
};

const releases: Release[] = [
  {
    version: "v2.0.0",
    project: "RF.DEV",
    status: "STABLE",
    date: "SEP 2026",
    description:
      "Developer Hub dengan API Playground, Terminal, Command Palette, GitHub Hub, dan System Status.",
  },
  {
    version: "v1.0.0",
    project: "RF.DEV",
    status: "STABLE",
    date: "SEP 2026",
    description:
      "Initial public release dari personal Developer Hub Rizal Faisal.",
  },
  {
    version: "DEV",
    project: "ZallAI",
    status: "EXPERIMENTAL",
    date: "ONGOING",
    description:
      "Eksperimen AI/ML berbasis C++ dengan fokus pada training dan inference.",
  },
  {
    version: "DEV",
    project: "ZControl",
    status: "BETA",
    date: "ONGOING",
    description:
      "Eksplorasi Android native berbasis Kotlin dan Gradle.",
  },
];

export default function Releases() {
  return (
    <section className="releases-page">
      <div className="releases-grid" />

      <div className="releases-container">
        <header className="releases-hero">
          <span className="eyebrow">RF.DEV / RELEASE CENTER</span>

          <h1>
            SHIP.
            <br />
            <span>ITERATE.</span>
          </h1>

          <p>
            Release, eksperimen, dan versi project yang sedang dikembangkan.
          </p>
        </header>

        <div className="release-list">
          {releases.map((release, index) => (
            <article className="release-card" key={`${release.project}-${release.version}`}>
              <div className="release-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="release-main">
                <div className="release-top">
                  <span>{release.project}</span>

                  <span className={`release-status ${release.status.toLowerCase()}`}>
                    ● {release.status}
                  </span>
                </div>

                <h2>{release.version}</h2>

                <p>{release.description}</p>

                <div className="release-bottom">
                  <span>RELEASE DATE</span>
                  <strong>{release.date}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>

        <footer className="releases-footer">
          <span>RF.DEV RELEASE CENTER</span>
          <strong>BUILD → TEST → SHIP</strong>
        </footer>
      </div>
    </section>
  );
}
