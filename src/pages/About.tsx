import { Link } from "react-router-dom";

const skills = [
  ["01", "Kotlin", "Android"],
  ["02", "Java", "Android"],
  ["03", "C++", "Systems / AI"],
  ["04", "TypeScript", "Web"],
  ["05", "React", "Frontend"],
  ["06", "Node.js", "Backend"],
  ["07", "Gradle", "Build"],
  ["08", "Linux", "Environment"],
];

export default function About() {
  return (
    <section className="about-page">
      <div className="about-intro">
        <span>02 / ABOUT</span>
        <h1>
          Developer
          <br />
          <em>in progress.</em>
        </h1>
        <p>
          Saya Rizal Faisal. Saya suka membangun software,
          terutama Android, sambil terus mengeksplorasi
          teknologi lain di sekitarnya.
        </p>
      </div>

      <div className="about-statement">
        <span>THE IDEA</span>
        <p>
          <strong>Build first.</strong> Learn from the process.
          Dokumentasikan apa yang berhasil, apa yang gagal,
          lalu coba lagi dengan cara yang lebih baik.
        </p>
      </div>

      <div className="skills-section">
        <div className="section-heading">
          <span>TECH STACK</span>
          <h2>
            Things I
            <br />
            <em>work with.</em>
          </h2>
        </div>

        <div className="skills-list">
          {skills.map(([number, name, type]) => (
            <div className="skill-row" key={name}>
              <span>{number}</span>
              <h3>{name}</h3>
              <small>{type}</small>
            </div>
          ))}
        </div>
      </div>

      <div className="about-cta">
        <p>Want to see what I'm building?</p>
        <Link to="/projects">Explore projects ↗</Link>
      </div>
    </section>
  );
}
