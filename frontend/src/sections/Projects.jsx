import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Darija Knowledge AI",
      type: "Full-Stack / AI",
      description:
        "Learning platform for Moroccan Darija featuring OCR, automatic translation, quizzes and gamification with XP and badges.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Google AI",
        "Docker",
      ],
      github: "https://github.com/chaimae-sda/explore-bladi",
    },

    {
      title: "Maghribia Msafra",
      type: "TravelTech / Full-Stack",
      description:
        "Social TravelTech platform designed to facilitate safer travel between Moroccan women.",
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "SQL",
        "Python",
      ],
      github: "https://github.com/chaimae-sda/maghribia-msafra",
    },

    {
      title: "PSI-Mind",
      type: "Web Development",
      description:
        "Educational platform for PSI preparatory-class students, providing learning resources, authentication and an interactive competition mode.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Supabase",
        "Vercel",
      ],
      github: "https://github.com/la-hertz-yla/psi-mind-website-v2",
    },

    {
      title: "Mini Cloud Dashboard",
      type: "Cloud / C++",
      description:
        "Cloud monitoring simulation based on object-oriented architecture representing compute, storage and network resources.",
      technologies: [
        "C++",
        "OOP",
        "Cloud Computing",
      ],
      github:
        "https://github.com/la-hertz-yla/mini-cloud-services-dashboard-oop",
    },

    {
      title: "Professional Portfolio",
      type: "Web Development",
      description:
        "Responsive personal portfolio showcasing my academic background, technical skills, projects and professional journey.",
      technologies: [
        "React",
        "JavaScript",
        "CSS",
        "Vite",
      ],
      github:
        "https://github.com/la-hertz-yla/portfolio-professional",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">

        <p className="section-label">My Projects</p>

        <h2>
          Featured <span>Projects</span>
        </h2>

        <p className="projects-intro">
          A selection of projects developed across software
          engineering, Cloud and web technologies.
        </p>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>

              <div className="project-top">
                <span className="project-type">
                  {project.type}
                </span>

                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project →
              </a>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;