import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            LC
          </a>

          <p className="footer-text">
            © {new Date().getFullYear()} Layla Chmourk.
            All rights reserved.
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;