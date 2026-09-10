import { useState } from "react";
import type { FormEvent } from "react";

type Method = "GET" | "POST" | "PUT" | "DELETE";

const presets = [
  {
    name: "JSONPlaceholder",
    method: "GET" as Method,
    url: "https://jsonplaceholder.typicode.com/posts/1",
    body: "",
  },
  {
    name: "HTTP Status 200",
    method: "GET" as Method,
    url: "https://httpbin.org/status/200",
    body: "",
  },
  {
    name: "HTTP Status 404",
    method: "GET" as Method,
    url: "https://httpbin.org/status/404",
    body: "",
  },
];

export default function Api() {
  const [method, setMethod] = useState<Method>("GET");
  const [url, setUrl] = useState(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  const [headers, setHeaders] = useState('{\n  "Accept": "application/json"\n}');
  const [body, setBody] = useState("");
  const [response, setResponse] = useState("");
  const [status, setStatus] = useState<number | null>(null);
  const [responseTime, setResponseTime] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadPreset = (preset: (typeof presets)[number]) => {
    setMethod(preset.method);
    setUrl(preset.url);
    setBody(preset.body);
    setResponse("");
    setStatus(null);
    setResponseTime(null);
    setError("");
  };

  const sendRequest = async (event?: FormEvent) => {
    event?.preventDefault();

    setLoading(true);
    setError("");
    setResponse("");
    setStatus(null);
    setResponseTime(null);

    const start = performance.now();

    try {
      let parsedHeaders: Record<string, string> = {};

      if (headers.trim()) {
        parsedHeaders = JSON.parse(headers);
      }

      const options: RequestInit = {
        method,
        headers: parsedHeaders,
      };

      if (method !== "GET" && method !== "DELETE" && body.trim()) {
        JSON.parse(body);
        options.body = body;

        if (!Object.keys(parsedHeaders).some(
          (key) => key.toLowerCase() === "content-type"
        )) {
          options.headers = {
            ...parsedHeaders,
            "Content-Type": "application/json",
          };
        }
      }

      const res = await fetch(url, options);
      const elapsed = Math.round(performance.now() - start);

      setStatus(res.status);
      setResponseTime(elapsed);

      const text = await res.text();

      try {
        const parsed = JSON.parse(text);
        setResponse(JSON.stringify(parsed, null, 2));
      } catch {
        setResponse(text || "(empty response)");
      }
    } catch (err) {
      setResponseTime(Math.round(performance.now() - start));

      if (err instanceof SyntaxError) {
        setError("Invalid JSON pada Headers atau Request Body.");
      } else if (err instanceof TypeError) {
        setError(
          "Request gagal. Endpoint mungkin tidak mengizinkan CORS atau URL tidak valid."
        );
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unknown request error.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="api-page">
      <div className="api-bg" />

      <section className="api-hero">
        <span className="eyebrow">RF.DEV / API PLAYGROUND</span>

        <h1>
          TEST.
          <br />
          <span>REQUEST.</span>
          <br />
          INSPECT.
        </h1>

        <p>
          Playground HTTP sederhana untuk mengirim request,
          melihat status, response, dan performa endpoint secara langsung.
        </p>
      </section>

      <section className="api-shell">
        <div className="api-presets">
          <div className="api-section-label">QUICK PRESETS</div>

          <div className="api-preset-list">
            {presets.map((preset) => (
              <button
                key={preset.name}
                type="button"
                onClick={() => loadPreset(preset)}
              >
                {preset.name}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={sendRequest}>
          <div className="api-request-bar">
            <select
              value={method}
              onChange={(event) =>
                setMethod(event.target.value as Method)
              }
              aria-label="HTTP method"
            >
              <option>GET</option>
              <option>POST</option>
              <option>PUT</option>
              <option>DELETE</option>
            </select>

            <input
              value={url}
              onChange={(event) => setUrl(event.target.value)}
              placeholder="https://api.example.com/data"
              aria-label="Request URL"
              type="url"
              required
            />

            <button className="api-send" type="submit" disabled={loading}>
              {loading ? "RUNNING..." : "SEND →"}
            </button>
          </div>

          <div className="api-editor-grid">
            <div className="api-panel">
              <div className="api-panel-head">
                <span>HEADERS</span>
                <small>JSON</small>
              </div>

              <textarea
                value={headers}
                onChange={(event) => setHeaders(event.target.value)}
                spellCheck={false}
                placeholder='{"Authorization":"Bearer ..."}'
              />
            </div>

            <div className="api-panel">
              <div className="api-panel-head">
                <span>REQUEST BODY</span>
                <small>JSON</small>
              </div>

              <textarea
                value={body}
                onChange={(event) => setBody(event.target.value)}
                spellCheck={false}
                placeholder='{"name":"Rizal"}'
                disabled={method === "GET" || method === "DELETE"}
              />
            </div>
          </div>
        </form>

        <div className="api-response">
          <div className="api-response-head">
            <div>
              <span className="api-section-label">RESPONSE</span>

              {status !== null && (
                <strong className={status >= 400 ? "api-bad" : "api-good"}>
                  {status}
                </strong>
              )}
            </div>

            <div className="api-meta">
              {responseTime !== null && `${responseTime} ms`}
            </div>
          </div>

          <div className="api-response-window">
            {loading ? (
              <div className="api-placeholder">
                <span className="api-loader" />
                Sending request...
              </div>
            ) : error ? (
              <pre className="api-error">{error}</pre>
            ) : response ? (
              <pre>{response}</pre>
            ) : (
              <div className="api-placeholder">
                Response will appear here.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
