// Home.jsx
import "./Home.css";
import tlife from "../../assets/tlife.mp4";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🎬 HERO SECTION - animate on load
      gsap.timeline()
        .from(".home-title", {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: "power3.out",
        })
        .from(".home-subtitle", {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power3.out",
        }, "-=0.5")
        .from(".button-group", {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
        }, "-=0.4");

      // 🪶 INTRO SECTION - fade up on scroll
      gsap.from(".intro-section .intro-content", {
        scrollTrigger: {
          trigger: ".intro-section",
          start: "top 85%", // when top of section hits 85% of viewport
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 100,
        duration: 1.2,
        delay: 1.2,
        ease: "power3.out",
      });

      // ✨ MINISTRIES SECTION - stagger each card
      gsap.from(".ministries-section .ministry-card", {
        scrollTrigger: {
          trigger: ".ministries-section",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.3,
        ease: "power1.inOut",
      });
      

      // 🙏 WORSHIP SECTION - fade up
      gsap.from(".worship-section", {
        scrollTrigger: {
          trigger: ".worship-section",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 80,
        duration: 1.0,
        ease: "power3.out",
      });

      // 🌫 Optional parallax effect for video
      gsap.to(".vid-bg", {
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: ".vid",
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef}>
      {/* ✅ HERO SECTION */}
      <div className="vid">
        <video
          className="vid-bg"
          src={tlife}
          autoPlay
          loop
          muted
          playsInline
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

            <button id="fold-button"><b>Events</b></button>
          </div>
        </div>
      </div>

      {/* ✅ INTRO */}
      <section className="intro-section">
        <div className="intro-content">
          <h2>Welcome to Touchlife Deliverance Ministry</h2>
          <p>
            At Touchlife Deliverance Ministry, we believe in the transforming power of God’s Word and Spirit.
            Our mission is to reach the lost, heal the broken, and raise a people of purpose.
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

      {/* ✅ MINISTRIES */}
      <section className="ministries-section">
        <div className="ministries-content">
          <h2>Our Ministries</h2>
          <div className="ministries-grid">
            <div className="ministry-card">
              <span className="ministry-icon">🧒</span>
              <h3>Youth Ministry</h3>
              <p>Empowering the next generation to live boldly for Christ.</p>
            </div>
            <div className="ministry-card">
              <span className="ministry-icon">🎵</span>
              <h3>Music Ministry</h3>
              <p>Leading hearts into worship and creating an atmosphere of God’s presence.</p>
            </div>
            <div className="ministry-card">
              <span className="ministry-icon">🤝</span>
              <h3>Outreach</h3>
              <p>Sharing God’s love through compassion, service, and community care.</p>
            </div>
          </div>

          <a href="/ministries" className="view-all-btn">View All Ministries</a>
        </div>
      </section>

      {/* ✅ WORSHIP SECTION */}
      <section className="worship-section">
        <h2 className="section-title">Worship Times & Location</h2>
        <div className="worship-content">
          <div className="worship-times">
            <ul>
              <li><strong>Sunday Service:</strong> 9:00 AM – 12:00 PM</li>
              <li><strong>Wednesday Prayer Meeting:</strong> 6:30 PM – 8:00 PM</li>
              <li><strong>Youth Fellowship:</strong> Saturday – 4:00 PM</li>
            </ul>
            <a
              href="https://www.google.com/maps/place/Touchlife+Deliverance+Ministry"
              className="direction-btn"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
            </a>
          </div>

          <div className="map-container">
            <iframe
              title="Touchlife"
              src="https://www.google.com/maps/embed?pb=!1m18..."
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
