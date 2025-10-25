import "./Sermons.css";
import churchBge from "../../assets/churchBge.jpeg";

function Sermons() {
  return (
    <div className="sermons-page">
      {/* ✅ Hero Header Section */}
      <div className="sermons-hero">
        <img src={churchBge} alt="Sermons Background" className="hero-bg" />
        <div className="overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title">Our Sermons</h1>
          <p className="hero-subtitle">
            Be strengthened and inspired by the Word of God — watch, listen, and grow in faith through our powerful messages.
          </p>
        </div>
      </div>

      {/* ✅ Featured Sermon */}
      <section className="featured-sermon">
        <h2>Featured Message</h2>
        <div className="featured-video">
        <iframe
  src="https://www.youtube.com/embed/abOUHGQRnz0"
  title="Featured Sermon"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

        </div>
        <h3>“Walking in the Power of Faith”</h3>
        <p className="sermon-date">October 20, 2025</p>
        <p className="sermon-description">
          Learn how to live a victorious life by walking in faith and trusting God’s promises
          even in difficult times. A message by Rev. Comfort Ankomah.
        </p>
      </section>

      {/* ✅ Recent Sermons */}
      <section className="recent-sermons">
        <h2>Recent Sermons</h2>
        <div className="sermons-grid">
          <div className="sermon-card">
            <iframe
              src="https://www.youtube.com/embed/abOUHGQRnz0"
              title="Sermon 1"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <h4>“The Power of Prayer”</h4>
            <p>October 10, 2025</p>
          </div>

          <div className="sermon-card">
            <iframe
              src="https://www.youtube.com/embed/4zJHNOA2h4s"
              title="Sermon 2"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <h4>“Overcoming Fear Through Faith”</h4>
            <p>September 28, 2025</p>
          </div>

          <div className="sermon-card">
            <iframe
              src="https://www.youtube.com/embed/4zJHNOA2h4s"
              title="Sermon 3"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <h4>“Living by the Spirit”</h4>
            <p>September 14, 2025</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sermons;
