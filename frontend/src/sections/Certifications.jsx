import "./Certifications.css";

function Certifications() {
  const certifications = [
    {
      title: "Git & GitHub Bootcamp",
      type: "Certification",
    },
    {
      title: "Responsive Web Design",
      type: "Certification",
    },
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="certifications-container">

        <p className="section-label">My Certifications</p>

        <h2>
          Certifications <span>& Learning</span>
        </h2>

        <p className="certifications-intro">
          Certifications and learning achievements supporting my
          technical journey.
        </p>

        <div className="certifications-grid">
          {certifications.map((certification) => (
            <article
              className="certification-card"
              key={certification.title}
            >
              <div className="certification-top">
                <span className="certification-type">
                  {certification.type}
                </span>
              </div>

              <div className="certification-icon">
                ✓
              </div>

              <h3>{certification.title}</h3>

              <a
                href="#contact"
                className="certification-link"
              >
                View Credential →
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certifications;