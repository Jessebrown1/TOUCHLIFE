import "./About.css";
import churchBg from "../../assets/churchBge.jpeg";

function About() {
  return (
    <>
      {/* ✅ Hero Section */}
      <div className="about-hero">
        <img src={churchBg} alt="Touchlife Deliverance Ministry" className="hero-bg" />
        <div className="overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title">About Touchlife Deliverance Ministry</h1>
          <p className="hero-subtitle">
            We are a family of believers committed to spreading the message of hope,
            healing, and transformation through the power of Jesus Christ.
          </p>
        </div>
      </div>

      {/* ✅ About Details Section */}
      <section className="about-details">
        <div className="about-container">
          <h2>Our Mission</h2>
          <p>
            At Touchlife Deliverance Ministry, our mission is to bring people into
            a life-changing encounter with God. We aim to heal the brokenhearted,
            empower believers through the Word, and equip them to walk in their divine purpose.
            Through fellowship, discipleship, and service, we strive to reveal the love of
            Christ to every soul we reach.
          </p>

          <h2>Our Vision</h2>
          <p>
            Our vision is to raise a generation of Spirit-filled believers who impact
            their communities and the world with God’s truth and love. We envision
            a church where every member is grounded in faith, living victoriously,
            and fulfilling their God-given destiny.
          </p>

          <h2>Our Core Values</h2>
          <ul>
            <li><strong>Faith:</strong> Trusting God in all things and living by His Word.</li>
            <li><strong>Love:</strong> Showing unconditional love and compassion to others.</li>
            <li><strong>Integrity:</strong> Living a life that reflects honesty, humility, and righteousness.</li>
            <li><strong>Service:</strong> Using our gifts to serve God and humanity selflessly.</li>
            <li><strong>Unity:</strong> Standing together as one body, strengthened by the Holy Spirit.</li>
          </ul>

          <h2>Our Story</h2>
          <p>
            Founded on faith and obedience to God’s call, Touchlife Deliverance Ministry began as
            a small fellowship and has grown into a thriving community of believers passionate
            about God’s presence and power. Over the years, countless lives have been restored,
            families have been healed, and many have discovered their true identity in Christ.
          </p>

          {/* ✅ Meet Our Pastors Section */}
          <div className="pastors-section">
            <h2>Meet Our Pastors</h2>
            <p>
              Our pastors are dedicated servants of God with a heart for teaching, healing,
              and leading God’s people in truth and grace. They have devoted their lives
              to ensuring that every member grows spiritually and experiences the
              transforming love of Christ.
            </p>

            <div className="pastor-cards">
              <div className="pastor-card">
                <img src="/assets/pastor1.jpg" alt="Lead Pastor" />
                <h3>Rev. Comfort Ankomah</h3>
                <p>Lead Pastor & Founder</p>
              </div>
              <div className="pastor-card">
                <img src="/assets/pastor2.jpg" alt="Co-Pastor" />
                <h3>Pastor Ralph Anane</h3>
                <p>Tema Branch Lead Pastor</p>
              </div>
              <div className="pastor-card">
                <img src="/assets/pastor2.jpg" alt="Co-Pastor" />
                <h3>Pastor Isaac Bentum</h3>
                <p>Co-Pastor & Women's Ministry Leader</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
