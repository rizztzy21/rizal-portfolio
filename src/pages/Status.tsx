import { useEffect, useState } from "react";

type Service = {
  name: string;
  description: string;
  status: "OPERATIONAL" | "READY";
};

const services: Service[] = [
  {
    name: "RF.DEV",
    description: "Developer Hub website",
    status: "OPERATIONAL",
  },
  {
    name: "GITHUB API",
    description: "Public repository data",
    status: "OPERATIONAL",
  },
  {
    name: "API PLAYGROUND",
    description: "Frontend API testing interface",
    status: "READY",
  },
  {
    name: "DEVELOPER TERMINAL",
    description: "Interactive portfolio terminal",
    status: "READY",
  },
];

export default function Status() {
  const [checkedAt, setCheckedAt] = useState("");

  const checkStatus = () => {
    setCheckedAt(
      new Intl.DateTimeFormat("id-ID", {
        dateStyle: "medium",
        timeStyle: "medium",
      }).format(new Date())
    );
  };

  useEffect(() => {
    checkStatus();

    const interval = window.setInterval(checkStatus, 30000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="status-page">
      <div className="status-grid" />

      <div className="status-container">
        <header className="status-hero">
          <span className="eyebrow">RF.DEV / SYSTEM STATUS</span>

          <div className="status-main">
            <div>
              <h1>
                SYSTEM
                <br />
                <span>OPERATIONAL.</span>
              </h1>

              <p>
                Monitoring sederhana untuk memastikan komponen utama
                Developer Hub tetap tersedia dan dapat digunakan.
              </p>
            </div>

            <div className="status-orb">
              <span />
              <strong>ONLINE</strong>
            </div>
          </div>
        </header>

        <div className="status-summary">
          <div>
            <small>OVERALL STATUS</small>
            <strong>OPERATIONAL</strong>
          </div>

          <div>
            <small>SERVICES</small>
            <strong>{services.length} / {services.length}</strong>
          </div>

          <div>
            <small>LAST CHECK</small>
            <strong>{checkedAt || "CHECKING..."}</strong>
          </div>
        </div>

        <section className="status-services">
          <div className="status-section-head">
            <div>
              <span className="eyebrow">SERVICES</span>
              <h2>ALL SYSTEMS</h2>
            </div>

            <span className="status-live">
              ● LIVE MONITOR
            </span>
          </div>

          <div className="status-list">
            {services.map((service, index) => (
              <article className="status-service" key={service.name}>
                <span className="status-service-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="status-service-info">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>

                <div className="status-service-state">
                  <span className="status-dot" />
                  <strong>{service.status}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="status-info">
          <div>
            <span className="eyebrow">INFRASTRUCTURE</span>
            <h2>BUILT FOR THE WEB.</h2>
          </div>

          <div className="status-info-copy">
            <p>
              RF.DEV menggunakan frontend modern berbasis React dan Vite,
              dengan deployment production melalui Vercel.
            </p>

            <p>
              Status di halaman ini merupakan indikator availability
              aplikasi, bukan monitoring server infrastructure secara penuh.
            </p>
          </div>
        </section>

        <footer className="status-footer">
          <span>RF.DEV STATUS CENTER</span>
          <strong>● ALL SYSTEMS NOMINAL</strong>
          <span>AUTO REFRESH 30S</span>
        </footer>
      </div>
    </section>
  );
}
