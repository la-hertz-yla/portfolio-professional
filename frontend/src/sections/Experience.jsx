import "./Experience.css";

function Experience() {
  const experiences = [
    {
      period: "2025 · 2 mois",
      title: "Stagiaire DevOps",
      company: "Ironbridge",
      description:
        "Participation au déploiement et à la mise en production d'applications web sur des environnements cloud. Travail sur l'automatisation des déploiements, la configuration des serveurs et la conteneurisation.",
      technologies: [
        "Docker",
        "CI/CD",
        "Cloud",
        "Linux",
        "Deployment",
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">

        <p className="section-label">My Experience</p>

        <h2>
          Professional <span>Experience</span>
        </h2>

        <p className="experience-intro">
          Practical experience gained through internships and
          technical projects.
        </p>

        <div className="experience-list">
          {experiences.map((experience) => (
            <article
              className="experience-card"
              key={experience.title}
            >
              <div className="experience-period">
                {experience.period}
              </div>

              <div className="experience-content">
                <h3>{experience.title}</h3>

                <h4>{experience.company}</h4>

                <p>{experience.description}</p>

                <div className="experience-technologies">
                  {experience.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
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

export default Experience;