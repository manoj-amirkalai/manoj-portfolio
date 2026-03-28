import { useState } from "react";
import "./Awards.css";
import { awardsData } from "../../Data";



const filters = ["Awards",'Appreciation'];

export default function Awards() {
  const [active, setActive] = useState("Awards");
  const [flipped, setFlipped] = useState(null);

  const filtered = awardsData.filter((item) => {
    if (active === "All") return true;
    if (active === "Awards") return item.type === "award";
    if (active === "Appreciation") return item.type === "appreciation";
    if (active === "Certificates") return item.type === "certificate";
  });

  return (
    <section className="awards section" id="awards">
      {/* Background decorative title */}
      {/* <span className="bg__title">Achievements</span> */}

      <div className="awards__container container">
        {/* Section Header */}
        <div className="awards__header">
          <p className="section__subtitle">What I've Earned</p>
          <h2 className="section__title">
            Awards &amp; <span className="awards__title--accent">Certificates</span>
          </h2>
          <p className="awards__desc">
            Recognition and certifications earned through dedication, performance,
            and continuous learning during my professional journey.
          </p>
        </div>

        {/* Stats Bar */}
        {/* <div className="awards__stats">
          <div className="awards__stat">
            <span className="awards__stat-number">
              {awardsData.filter((a) => a.type === "award").length}
            </span>
            <span className="awards__stat-label">Awards</span>
          </div>
          <div className="awards__stat-divider" />
          <div className="awards__stat">
            <span className="awards__stat-number">
              {awardsData.filter((a) => a.type === "certificate").length}
            </span>
            <span className="awards__stat-label">Certificates</span>
          </div>
          <div className="awards__stat-divider" />
          <div className="awards__stat">
            <span className="awards__stat-number">3+</span>
            <span className="awards__stat-label">Years Span</span>
          </div>
        </div> */}

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
              {f}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="awards__grid">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`awards__card ${flipped === item.id ? "flipped" : ""}`}
              onClick={() =>
                setFlipped(flipped === item.id ? null : item.id)
              }
            >
              {/* Front Face */}
              <div className="awards__card-front">
                <div className="awards__card-glow" />
                <div className="awards__card-top">
                  <span
                    className={`awards__badge ${
                      item.type === "award"
                        ? "awards__badge--award"
                        : "awards__badge--cert"
                    }`}
                  >
                    {item.type === "award" ? "🏅 Award" : "📜 Appreciation"}
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

                <div className="awards__card-footer">
                  <span className="awards__tag">{item.tag}</span>
                  <span className="awards__flip-hint">Tap to read more →</span>
                </div>
              </div>

              {/* Back Face */}
              <div className="awards__card-back">
                <div className="awards__card-glow awards__card-glow--back" />
                <div className="awards__back-top">
                  <span className="awards__back-icon">{item.icon}</span>
                  <span className="awards__year">{item.year}</span>
                </div>
                <h3 className="awards__back-title">{item.title}</h3>
                <div className="awards__divider" />
                <p className="awards__back-desc">{item.description}</p>
                <p className="awards__back-issuer">
                  Issued by <strong>{item.issuer}</strong>
                </p>
                <span className="awards__flip-hint awards__flip-hint--back">
                  ← Tap to go back
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section__bg-wrapper">
        <span className="bg__title">
          Achievements
        </span>
      </div>
    </section>
  );
}