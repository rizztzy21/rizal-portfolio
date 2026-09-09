const roadmap = [
  ["01", "Foundation", "CURRENT", "Developer Hub architecture & UI"],
  ["02", "Android Hub", "CURRENT", "Projects, stack & documentation"],
  ["03", "Developer Tools", "NEXT", "Useful browser-based utilities"],
  ["04", "Docs & Dev Log", "NEXT", "Technical notes and experiments"],
  ["05", "Release Center", "PLANNED", "APK and project releases"],
  ["06", "Backend", "FUTURE", "API, data and admin system"],
];

export default function Roadmap() {
  return (
    <section className="listing-page">
      <div className="listing-intro">
        <span>ROADMAP</span>
        <h1>
          Where this
          <br />
          <em>is going.</em>
        </h1>
      </div>

      <div className="roadmap-list">
        {roadmap.map(([number, title, status, description]) => (
          <article key={number}>
            <span>{number}</span>
            <div>
              <small>{status}</small>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
