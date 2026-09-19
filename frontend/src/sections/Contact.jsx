import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});

const [status, setStatus] = useState("");

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      setStatus("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setStatus(data.message);
    }
  } catch (error) {
    console.error(error);
    setStatus("Something went wrong.");
  }
};
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        <p className="section-label">Get In Touch</p>

        <h2>
          Let's <span>Connect</span>
        </h2>

        <p className="contact-intro">
          Interested in working together, discussing a project or
          simply connecting? Feel free to reach out.
        </p>

        <div className="contact-grid">

          {/* CONTACT INFORMATION */}
          <div className="contact-info">

            {/* Email */}
            <a
              href="mailto:chmourklayla@gmail.com"
              className="contact-item"
            >
              <span className="contact-icon">@</span>

              <div>
                <h3>Email</h3>
                <p>chmourklayla@gmail.com</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/layla-c-687929386/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <span className="contact-icon">in</span>

              <div>
                <h3>LinkedIn</h3>
                <p>Connect with me professionally</p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/la-hertz-yla"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <span className="contact-icon">GH</span>

              <div>
                <h3>GitHub</h3>
                <p>Explore my projects and code</p>
              </div>
            </a>

            {/* Location */}
            <div className="contact-item">
              <span className="contact-icon">⌖</span>

              <div>
                <h3>Location</h3>
                <p>Rabat, Morocco</p>
              </div>
            </div>

          </div>

          {/* CONTACT FORM */}
          <form className="contact-form" onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            </div>

            <button
              type="submit"
              className="contact-button"
            >
              Send Message →
            </button>
            {status && <p className="form-status">{status}</p>}

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;