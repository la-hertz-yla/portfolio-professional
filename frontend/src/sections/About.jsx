import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">

        <p className="about-label">About Me</p>

        <h2>
          Engineering my path in <span>Cloud & DevOps</span>
        </h2>

        <p className="about-text">
          I am a second-year Computer Engineering student at INPT,
          specializing in Ubiquitous and Distributed Systems with a
          focus on Cloud & IoT.
        </p>

        <p className="about-text">
          My current focus is on developing strong foundations in
          Linux, networking, software development, containers,
          automation and Cloud technologies.
        </p>

        <div className="about-highlight">
          <p>
            My goal is to become a Cloud & DevOps Engineer capable of
            designing, deploying and automating reliable and scalable
            systems.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;