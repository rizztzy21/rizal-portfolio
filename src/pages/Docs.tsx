const docs = [
  ["Android", "Android development notes"],
  ["Kotlin", "Language and implementation notes"],
  ["Gradle", "Build system experiments"],
  ["C++", "Systems and AI experiments"],
  ["Linux", "Development environment notes"],
  ["Web", "React and TypeScript notes"],
];

export default function Docs() {
  return (
    <section className="listing-page">
      <div className="listing-intro">
        <span>DOCUMENTATION</span>
        <h1>
          Learn.
          <br />
          <em>Document.</em>
        </h1>
        <p>
          Catatan teknis dari hal-hal yang saya pelajari
          selama membangun project.
        </p>
      </div>

      <div className="docs-grid">
        {docs.map(([title, description]) => (
          <article key={title}>
            <span>DOCS</span>
            <h2>{title}</h2>
            <p>{description}</p>
            <b>Coming soon ↗</b>
          </article>
        ))}
      </div>
    </section>
  );
}
