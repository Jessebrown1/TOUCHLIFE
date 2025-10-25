import { useEffect, useRef } from "react";
import "./Ministries.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import churchBg from "../../assets/churchBg.jpeg";

gsap.registerPlugin(ScrollTrigger);

function Ministries() {
  const rootRef = useRef(null);

  useEffect(() => {
    const q = gsap.utils.selector(rootRef); // scoped selector
    const ctx = gsap.context(() => {
      // DEBUG: show how many cards we found
      const cards = q(".ministry-card");
      console.log("Ministries — cards found:", cards.length, cards);

      // Ensure GSAP has full control baseline (so CSS won't block animation)
      gsap.set(cards, { opacity: 0, y: 40 });

      // Hero animation
      gsap.from(q(".ministries-hero-content"), {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
      });

      // Timeline to animate cards with a stagger when the grid hits the viewport
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: q(".ministries-grid")[0] || q(".ministries-grid"),
          start: "top 80%",
          end: "bottom top",
          scrub: false,
          // set markers: true while debugging to see trigger positions
          markers: false,
          toggleActions: "play none none none",
        },
      });

      tl.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.20,
      });
    }, rootRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill && t.kill());
    };
  }, []);

  return (
    <>
      {/* HERO */}
      <div className="ministries-hero">
        <img src={churchBg} alt="Ministries Background" className="hero-bg" />
        <div className="overlay"></div>

        <div className="ministries-hero-content">
          <h1>Our Ministries</h1>
          <p>
            Discover the many ways we serve God, build faith, and impact lives
            through our dedicated ministries.
          </p>
        </div>
      </div>

      {/* MINISTRIES */}
      <section className="ministries-section" ref={rootRef}>
        <div className="ministries-container">
          <h2>Ministries at Touchlife Deliverance Ministry</h2>
          <p className="intro-text">
            Each ministry is designed to help believers grow spiritually,
            develop their gifts, and serve others in love and unity.
          </p>

          <div className="ministries-grid">
            <div className="ministry-card">
              <img src="/assets/worship.jpg" alt="Worship Ministry" />
              <h3>Worship Ministry</h3>
              <p>
                Leading the congregation into the presence of God through heartfelt
                praise and worship.
              </p>
            </div>

            <div className="ministry-card">
              <img src="/assets/youth.jpg" alt="Youth Ministry" />
              <h3>Youth Ministry</h3>
              <p>
                Empowering young people to live boldly for Christ and fulfill their
                divine purpose.
              </p>
            </div>

            <div className="ministry-card">
              <img src="/assets/children.jpg" alt="Children's Ministry" />
              <h3>Children’s Ministry</h3>
              <p>
                Teaching kids about God’s love in fun, creative, and engaging ways.
              </p>
            </div>

            <div className="ministry-card">
              <img src="/assets/prayer.jpg" alt="Prayer Ministry" />
              <h3>Prayer Ministry</h3>
              <p>
                Standing in the gap through powerful intercession for the church,
                families, and nations.
              </p>
            </div>

            <div className="ministry-card">
              <img src="/assets/outreach.jpg" alt="Outreach Ministry" />
              <h3>Outreach Ministry</h3>
              <p>
                Taking the gospel beyond the walls — reaching the lost and serving
                communities in need.
              </p>
            </div>

            <div className="ministry-card">
              <img src="/assets/media.jpg" alt="Media Ministry" />
              <h3>Media Ministry</h3>
              <p>
                Using technology and creativity to share God’s Word through visuals,
                sound, and digital outreach.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ministries;
