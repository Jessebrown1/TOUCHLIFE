import "./Home.css";
import churchBg from "../../assets/churchBg.jpeg";
import tlife from "../../assets/tlife.mp4"


function Home() {
  return (
    <>
      {/* ✅ HERO SECTION */}
      <div className="vid">
        <video
          className="vid-bg"
          src={tlife}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <div className="overlay"></div>

        <div className="home-content">
          <h1 className="home-title">
            Step Into Touchlife Deliverance Ministry
          </h1>
          <p className="home-subtitle">
            Where lives are transformed, faith is ignited, and God’s presence fills every heart.
          </p>

          <div className="button-group">
            <a
              href="http://touchlifedm.com/ms/register"
              target="_blank"
              rel="noopener noreferrer"
              className="shake"
            >
              <span>Join Us</span>
            </a>

            <button id="fold-button">
              <b>Events</b>
            </button>
          </div>
        </div>
      </div>

      {/* ✅ INTRODUCTION SECTION */}
      <section className="intro-section">
        <div className="intro-content">
          <h2>Welcome to Touchlife Deliverance Ministry</h2>
          <p>
            At Touchlife Deliverance Ministry, we believe in the transforming power of God’s Word and Spirit.
            Our mission is to reach the lost, heal the broken, and raise a people of purpose.
            No matter who you are or where you come from, there’s a place for you here.
          </p>

          <div className="intro-info">
            <div>
              <h4>📅 Service Time</h4>
              <p>Sunday • 7:30 AM</p>
              
            </div>
            <div>
              <h4>📍 Location</h4>
              <p>Tema, Accra</p>
            </div>
            <div>
              <h4>🤝 Get Involved</h4>
              <p>Youth • Music • Outreach</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ MINISTRIES SECTION */}
<section className="ministries-section">
  <div className="ministries-content">
    <h2>Our Ministries</h2>
    <p>
      Discover the many ways you can grow, serve, and connect at Touchlife Deliverance Ministry.
      Each ministry is built to help you strengthen your faith and impact lives.
    </p>

    <div className="ministries-grid">
      <div className="ministry-card">
        <span className="ministry-icon">🧒</span>
        <h3>Youth Ministry</h3>
        <p>Empowering the next generation to live boldly for Christ.</p>
      </div>

      <div className="ministry-card">
        <span className="ministry-icon">🎵</span>
        <h3>Music Ministry</h3>
        <p>Leading hearts into worship and creating an atmosphere of God's presence.</p>
      </div>

      <div className="ministry-card">
        <span className="ministry-icon">🤝</span>
        <h3>Outreach</h3>
        <p>Sharing God’s love through compassion, service, and community care.</p>
      </div>
    </div>

    <a href="/ministries" className="view-all-btn">
      View All Ministries
    </a>
  </div>
</section>

{/* ✅ Worship Times & Location Section */}
<section className="worship-section">
  <h2 className="section-title">Worship Times & Location</h2>
  <div className="worship-content">
    <div className="worship-times">
      <ul>
        <li>
          <strong>Sunday Service:</strong> 9:00 AM – 12:00 PM
        </li>
        <li>
          <strong>Wednesday Prayer Meeting:</strong> 6:30 PM – 8:00 PM
        </li>
        <li>
          <strong>Youth Fellowship:</strong> Saturday – 4:00 PM
        </li>
      </ul>
      <a
        href="https://www.google.com/maps/place/Touchlife+Deliverance+Ministry/@5.7146741,-0.0127956,17z/"
        target="_blank"
        rel="noopener noreferrer"
        className="direction-btn"
      >
        Get Directions
      </a>
    </div>

    <div className="map-container">
      <iframe
        title="Touchlife Deliverance Ministry Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.989323690536!2d-0.012795625231538882!3d5.714674132034159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf81002af66825%3A0x6e586441ab590d72!2sTouchlife%20Deliverance%20Ministry!5e0!3m2!1sen!2sgh!4v1761064581933!5m2!1sen!2sgh"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>
    </>
    

    
    
  );
}

export default Home;