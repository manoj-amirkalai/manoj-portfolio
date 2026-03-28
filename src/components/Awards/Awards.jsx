import { useState, useEffect } from "react";
import "./Awards.css";
import { awardsData } from "../../Data";

const filters = ["Awards", "Appreciation"];

export default function Awards() {
  const [active, setActive] = useState("Awards");
  const [flipped, setFlipped] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedImg(null);
    };
    if (selectedImg) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [selectedImg]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedImg ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImg]);

  const filtered = awardsData.filter((item) => {
    if (active === "Awards") return item.type === "award";
    if (active === "Appreciation") return item.type === "appreciation";
    return false;
  });

  return (
    <section className="awards section" id="awards">
      <div className="awards__container container">

        {/* Header */}
        <div className="awards__header">
          <p className="section__subtitle">What I've Earned</p>
          <h2 className="section__title">
            Awards &amp;{" "}
            <span className="awards__title--accent">Recognitions</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="awards__filters">
          {filters.map((f) => (
            <button
              key={f}
              className={`awards__filter-btn ${active === f ? "active" : ""}`}
              onClick={() => {
                setActive(f);
                setFlipped(null);
              }}
            >
              {f === "Awards" ? "🏅 Awards" : "🤝 Appreciations"}
            </button>
          ))}
        </div>

        {/* Cards Grid — flex-wrap centres last odd card automatically */}
        <div className="awards__grid">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`awards__card ${flipped === item.id ? "flipped" : ""}`}
              onClick={() => setFlipped(flipped === item.id ? null : item.id)}
            >
              {/* ── Front Face ── */}
              <div className="awards__card-front">
                <div className="awards__card-glow" />

                <div className="awards__card-top">
                  <span
                    className={`awards__badge ${
                      item.type === "award"
                        ? "awards__badge--award"
                        : "awards__badge--appreciation"
                    }`}
                  >
                    {item.type === "award" ? "🏅 Award" : "🤝 Appreciation"}
                  </span>
                  <span className="awards__year">{item.year}</span>
                </div>

                <div className="awards__icon-wrap">
                  <span className="awards__icon">{item.icon}</span>
                  <div className="awards__icon-ring" />
                </div>

                <div className="awards__card-body">
                  <h3 className="awards__card-title">{item.title}</h3>
                  <p className="awards__card-issuer">
                    <span className="awards__issuer-dot" />
                    {item.issuer}
                  </p>
                </div>
                   <div className="awards__back-footer">
                  <p className="awards__back-issuer">
                    Issued by <strong>{item.issuer}</strong>
                  </p>

                  {item.image && (
                    <button
                      className="awards__view-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImg({ src: item.image, title: item.title });
                      }}
                    >
                      <span>🖼</span> View Certificate
                    </button>
                  )}
                </div>

                <div className="awards__card-footer">
                  <span className="awards__tag">{item.tag}</span>
                  <span className="awards__flip-hint">Details →</span>
                </div>
              </div>

              {/* ── Back Face ── */}
              <div className="awards__card-back">
                <div className="awards__card-glow awards__card-glow--back" />

                <div className="awards__back-top">
                  <span className="awards__back-icon">{item.icon}</span>
                  <span className="awards__year">{item.year}</span>
                </div>

                <h3 className="awards__back-title">{item.title}</h3>
                <div className="awards__divider" />

                <p className="awards__back-desc">{item.description}</p>

                <div className="awards__back-footer">
                  <p className="awards__back-issuer">
                    Issued by <strong>{item.issuer}</strong>
                  </p>

                  {item.image && (
                    <button
                      className="awards__view-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImg({ src: item.image, title: item.title });
                      }}
                    >
                      <span>🖼</span> View Certificate
                    </button>
                  )}
                </div>

                <span className="awards__flip-hint--back">← Tap to go back</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════ Image Modal ══════════ */}
    
    {selectedImg && (
  <div
    className="awards__modal"
    onClick={() => setSelectedImg(null)}
    role="dialog"
    aria-modal="true"
    aria-label="Certificate preview"
  >
    <div
      className="awards__modal-content"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Modal Header */}
      <div className="awards__modal-header">
        <p className="awards__modal-title">{selectedImg.title}</p>
        <button
          className="awards__modal-close"
          onClick={() => setSelectedImg(null)}
          aria-label="Close modal"
        >
          ✕
        </button>
      </div>

      {/* Image or PDF Viewport */}
      <div className="awards__modal-img-wrap">
        {selectedImg.src.toLowerCase().endsWith(".pdf") ? (
          <iframe
            src={selectedImg.src}
            title={selectedImg.title}
            className="awards__modal-pdf"
          />
        ) : (
          <img
            src={selectedImg.src}
            alt={selectedImg.title}
            className="awards__modal-img"
          />
        )}
      </div>

      {/* Modal Footer */}
      <div className="awards__modal-footer">
        <a
          href={selectedImg.src}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="awards__modal-download"
          onClick={(e) => e.stopPropagation()}
        >
          ⬇ Download
        </a>
        <button
          className="awards__modal-dismiss"
          onClick={() => setSelectedImg(null)}
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}

      <div className="section__bg-wrapper">
        <span className="bg__title">Awards</span>
      </div>
    </section>
  );
}
