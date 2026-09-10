import { useEffect, useMemo, useState } from "react";
import { fetchGithubRepos, type GithubRepo } from "../services/github";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

export default function Github() {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    fetchGithubRepos()
      .then((data) => {
        if (active) setRepos(data);
      })
      .catch((err: unknown) => {
        if (active) {
          setError(
            err instanceof Error ? err.message : "Failed to load GitHub data."
          );
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const languages = useMemo(
    () =>
      [...new Set(repos.map((repo) => repo.language).filter(Boolean))] as string[],
    [repos]
  );

  return (
    <section className="github-page">
      <div className="github-grid" />

      <div className="github-container">
        <header className="github-hero">
          <span className="eyebrow">RF.DEV / GITHUB HUB</span>

          <h1>
            CODE.
            <br />
            <span>PUBLICLY.</span>
          </h1>

          <p>
            Repository dan project yang tersedia secara publik di GitHub.
            Data ditampilkan langsung dari GitHub API.
          </p>

          <a
            href="https://github.com/rizztzy21"
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >
            OPEN GITHUB ↗
          </a>
        </header>

        <div className="github-overview">
          <div>
            <small>PUBLIC REPOS</small>
            <strong>{loading ? "—" : repos.length}</strong>
          </div>

          <div>
            <small>LANGUAGES</small>
            <strong>{loading ? "—" : languages.length}</strong>
          </div>

          <div>
            <small>SYNC</small>
            <strong>{error ? "ERROR" : loading ? "..." : "LIVE"}</strong>
          </div>
        </div>

        <div className="github-section-head">
          <div>
            <span className="eyebrow">REPOSITORIES</span>
            <h2>PUBLIC PROJECTS</h2>
          </div>

          <span className="github-count">
            {loading ? "LOADING" : `${repos.length} REPOSITORIES`}
          </span>
        </div>

        {error && (
          <div className="github-state github-error">
            <strong>GITHUB CONNECTION ERROR</strong>
            <span>{error}</span>
          </div>
        )}

        {loading && (
          <div className="github-repo-grid">
            {[1, 2, 3, 4, 5].map((item) => (
              <div className="github-card github-skeleton" key={item}>
                <span />
                <span />
                <span />
              </div>
            ))}
          </div>
        )}

        {!loading && !error && repos.length === 0 && (
          <div className="github-state">
            <strong>NO PUBLIC REPOSITORIES</strong>
            <span>Nothing is available to display right now.</span>
          </div>
        )}

        {!loading && !error && repos.length > 0 && (
          <div className="github-repo-grid">
            {repos.map((repo) => (
              <article className="github-card" key={repo.id}>
                <div className="github-card-top">
                  <span className="github-repo-number">
                    #{String(repo.id).slice(-4)}
                  </span>

                  <span
                    className={`github-status ${
                      repo.archived ? "archived" : ""
                    }`}
                  >
                    {repo.archived ? "ARCHIVED" : "ACTIVE"}
                  </span>
                </div>

                <h3>{repo.name}</h3>

                <p>
                  {repo.description || "No repository description available."}
                </p>

                <div className="github-meta">
                  <span>
                    {repo.language ? `● ${repo.language}` : "● MULTI"}
                  </span>
                  <span>★ {repo.stargazers_count}</span>
                  <span>⑂ {repo.forks_count}</span>
                </div>

                <div className="github-card-bottom">
                  <small>UPDATED {formatDate(repo.updated_at)}</small>

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    VIEW ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}

        <footer className="github-footer-note">
          <span>DATA SOURCE</span>
          <strong>GITHUB PUBLIC API</strong>
          <span>LIVE REPOSITORY DATA</span>
        </footer>
      </div>
    </section>
  );
}
