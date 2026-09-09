const updates = [
  ["09.09.26", "Developer Hub foundation", "Routing, mobile-first layout, Android Hub."],
  ["08.09.26", "Portfolio upgrade", "New visual identity and project system."],
  ["07.09.26", "Project cleanup", "Repository and deployment workflow improved."],
];

export default function Changelog() {
  return (
    <section className="listing-page">
      <div className="listing-intro">
        <span>CHANGELOG</span>
        <h1>
          Building
          <br />
          <em>in public.</em>
        </h1>
      </div>

      <div className="timeline">
        {updates.map(([date, title, description]) => (
          <article key={date + title}>
            <span>{date}</span>
            <div>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
