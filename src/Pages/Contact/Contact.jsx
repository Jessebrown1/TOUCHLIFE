import "./Contact.css";
import churchBg from "../../assets/churchBge.jpeg"; // ✅ reuse same background

function Contact() {
  return (
    <>
      {/* ✅ Hero Section */}
      <div className="contact-hero">
        <img src={churchBg} alt="Contact Touchlife Deliverance Ministry" className="hero-bg" />
        <div className="overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title">Contact Touchlife Deliverance Ministry</h1>
          <p className="hero-subtitle">
            We’d love to hear from you. Reach out to us for prayers, inquiries, or partnership.
          </p>
        </div>
      </div>

      {/* ✅ Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Left side — Info Cards */}
          <div className="contact-info">
            <div className="info-card">
              <h3>📍 Address</h3>
              <p>
                Touchlife Deliverance Ministry<br />
                Community 8, Tema, Accra, Ghana
              </p>
            </div>

            <div className="info-card">
              <h3>📞 Phone</h3>
              <p>
                +233 552 384 351<br />
                +233 509 457 303
              </p>
            </div>

            <div className="info-card">
              <h3>📧 Email</h3>
              <p>touchlifeministry@gmail.com</p>
            </div>
          </div>

          {/* Right side — Contact Form */}
          <div className="contact-form-section">
            <h2>Send Us a Message</h2>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* ✅ Google Map */}
      <section className="map-section">
        <h2>Find Us Here</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.865654315398!2d-0.02093828536912955!3d5.664450534635529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10207965d65a65e9%3A0x6b94c1766e6e67d0!2sTema!5e0!3m2!1sen!2sgh!4v1700048964032!5m2!1sen!2sgh"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Church Location"
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default Contact;
