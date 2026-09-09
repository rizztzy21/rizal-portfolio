const systems = [
  ["Website", "Operational"],
  ["Projects", "Active"],
  ["Android Hub", "Active"],
  ["Developer Tools", "Building"],
  ["Release Center", "Planned"],
];

export default function Status() {
  return (
    <section className="listing-page status-page">
      <div className="listing-intro">
        <span>SYSTEM STATUS</span>
        <h1>
          Everything
          <br />
          <em>looks good.</em>
        </h1>
      </div>

      <div className="status-list">
        {systems.map(([name, status]) => (
          <div key={name}>
            <span className="status-indicator" />
            <strong>{name}</strong>
            <small>{status}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
