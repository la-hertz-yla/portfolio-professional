import profileImg from "../assets/profile.jpeg";
import "./Hero.css";



function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>

        <h1>
          Layla <span>Chmourk</span>
        </h1>

        <h2>Cloud & DevOps Engineering Student</h2>

        <p className="hero-description">
            Engineering student at INPT, specializing in SUD Cloud & IoT,
            with a strong interest in Cloud Computing, DevOps,
            automation and software engineering.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="hero-primary">
            View My Projects
          </a>

          <a href="#contact" className="hero-secondary">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-circle">
        <img
          src={profileImg}
          alt="Layla Chmourk"
          className="hero-profile-img"
        />
      </div>
    </div>
    </section>
  );
}

export default Hero;