const tools = [
  ["01", "JSON Formatter", "Format and inspect JSON data."],
  ["02", "Base64", "Encode and decode Base64."],
  ["03", "UUID Generator", "Generate UUIDs instantly."],
  ["04", "URL Encoder", "Encode and decode URLs."],
  ["05", "Regex Tester", "Test regular expressions."],
  ["06", "DPI Calculator", "Android display calculations."],
  ["07", "Gradle Helper", "Quick Android build utilities."],
  ["08", "Version Code", "Generate Android version codes."],
];

export default function Tools() {
  return (
    <section className="listing-page tools-page">
      <div className="listing-intro">
        <span>06 / DEVELOPER TOOLS</span>
        <h1>
          Tools for
          <br />
          <em>builders.</em>
        </h1>
        <p>
          Utility kecil yang nantinya bisa langsung digunakan
          dari Developer Hub ini.
        </p>
      </div>

      <div className="tools-grid">
        {tools.map(([number, title, description]) => (
          <button className="tool-card" key={title}>
            <span>{number}</span>
            <div>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
            <b>↗</b>
          </button>
        ))}
      </div>

      <div className="coming-soon">
        <span>TOOLS ENGINE</span>
        <strong>COMING SOON</strong>
      </div>
    </section>
  );
}
