const changes = [
  {
    version: "2.0.0",
    date: "SEP 2026",
    title: "DEVELOPER HUB",
    items: [
      "Added interactive API Playground",
      "Added Developer Terminal",
      "Added global Command Palette",
      "Added GitHub Hub",
      "Added System Status",
      "Expanded mobile-first navigation",
    ],
  },
  {
    version: "1.1.0",
    date: "SEP 2026",
    title: "PORTFOLIO EXPANSION",
    items: [
      "Added Android Hub",
      "Added Experimental Lab",
      "Added project search and filters",
      "Added project detail views",
      "Added responsive mobile layouts",
    ],
  },
  {
    version: "1.0.0",
    date: "SEP 2026",
    title: "INITIAL RELEASE",
    items: [
      "Launched RF.DEV",
      "Added Home, About, Projects and Contact",
      "Added cinematic developer interface",
      "Added responsive navigation",
    ],
  },
];

export default function Changelog() {
  return (
    <section className="changelog-page">
      <div className="changelog-grid" />

      <div className="changelog-container">
        <header className="changelog-hero">
          <span className="eyebrow">RF.DEV / CHANGELOG</span>
          <h1>
            BUILD
            <br />
            <span>HISTORY.</span>
          </h1>
          <p>
            Catatan perubahan dan perkembangan Developer Hub dari waktu ke
            waktu.
          </p>
        </header>

        <div className="changelog-timeline">
          {changes.map((change) => (
            <article className="changelog-entry" key={change.version}>
              <div className="changelog-marker">
                <span />
              </div>

              <div className="changelog-content">
                <div className="changelog-meta">
                  <span>VERSION {change.version}</span>
                  <span>{change.date}</span>
                </div>

                <h2>{change.title}</h2>

                <ul>
                  {change.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <footer className="changelog-footer">
          <span>RF.DEV / BUILD HISTORY</span>
          <strong>CONTINUOUSLY EVOLVING</strong>
        </footer>
      </div>
    </section>
  );
}
