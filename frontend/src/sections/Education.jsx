import "./Education.css";

function Education() {
  const education = [
    {
      year: "2025 — 2028",
      degree: "Diplôme d'Ingénieur",
      school:
        "INPT — Institut National des Postes et Télécommunications",
      specialization: "Cloud & DevOps Engineering",
      description:
        "Formation d'ingénieur orientée Cloud, DevOps et systèmes distribués.",
      tags: [
        "Cloud Computing",
        "DevOps",
        "Distributed Systems",
        "Networking",
      ],
    },
    {
      year: "2023 — 2025",
      degree: "Classes Préparatoires PSI",
      school: "CPGE Mohammed Reda Slaoui — Agadir",
      specialization: "Physique et Sciences de l'Ingénieur",
      description:
        "Formation scientifique intensive préparant aux études d'ingénierie.",
      tags: [
        "Mathematics",
        "Physics",
        "Engineering Sciences",
      ],
    },
  ];

  return (
    <section id="education" className="education">
      <div className="education-container">

        <p className="section-label">My Education</p>

        <h2>
          Academic <span>Background</span>
        </h2>

        <p className="education-intro">
          My academic journey in engineering and computer science.
        </p>

        <div className="education-list">
          {education.map((item) => (
            <article
              className="education-card"
              key={item.degree}
            >
              <div className="education-year">
                {item.year}
              </div>

              <div className="education-content">
                <h3>{item.degree}</h3>

                <h4>{item.school}</h4>

                <p className="education-specialization">
                  {item.specialization}
                </p>

                <p>{item.description}</p>

                <div className="education-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;