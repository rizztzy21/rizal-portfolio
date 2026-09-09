import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found-grid" />

      <div className="not-found-content">
        <span className="eyebrow">RF.DEV / ERROR 404</span>

        <div className="not-found-code">404</div>

        <h1>PAGE NOT FOUND</h1>

        <p>
          Halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
        </p>

        <Link to="/" className="primary-btn">
          BACK TO HOME
        </Link>
      </div>
    </section>
  );
}
