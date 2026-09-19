import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "Python",
        "SQL",
        "R",
      ],
    },
    {
      title: "Programming",
      skills: [
        "C++",
        "Object-Oriented Programming",
        "Algorithms",
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "Linux",
        "Networking",
        "AWS",
        "Docker",
        "Supabase",
        "Vercel",
        "Netlify",
      ],
    },
    {
      title: "Tools & Databases",
      skills: [
        "Git",
        "GitHub",
        "MongoDB",
      ],
    },
    {
      title: "Architecture",
      skills: [
        "Web Architecture",
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">

        <p className="section-label">My Skills</p>

        <h2>
          Technologies <span>& Tools</span>
        </h2>

        <p className="skills-intro">
          Technologies and tools I use and explore across
          software engineering, Cloud and DevOps.
        </p>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div className="skill-card" key={category.title}>

              <div className="skill-card-header">
                <h3>{category.title}</h3>
              </div>

              <div className="skill-list">
                {category.skills.map((skill) => (
                  <span className="skill-badge" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;