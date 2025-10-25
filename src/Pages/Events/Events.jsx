// Events.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Events.css";
import churchBg from "../../assets/churchBge.jpeg";

function Events() {
  const rootRef = useRef(null);

  useEffect(() => {
    // scope selectors to this component and auto-cleanup on unmount
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(rootRef); // scoped selector helper

      // DEBUG: list found elements
      const monthCards = q(".month-card");
      console.log("Events — month cards found:", monthCards.length, monthCards);

      // Ensure baseline controlled by GSAP (avoid CSS opacity hiding)
      gsap.set(monthCards, { opacity: 0, y: 30 });

      // Simple mount animation (runs immediately)
      gsap.to(monthCards, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
        // if you want a small delay for the whole sequence, add delay: 0.2
      });

      // If you later want scroll-based animation, replace the gsap.to above with a timeline + ScrollTrigger.
    }, rootRef);

    return () => {
      ctx.revert(); // clean up
      // extra safety: kill any stray tween
      try { gsap.killTweensOf("*"); } catch {}
    };
  }, []);

  const eventsByMonth = {
    January: ["New Year Thanksgiving Service", "21 Days Fasting & Prayer Start"],
    February: ["Youth Empowerment Night", "Couples Fellowship"],
    March: ["Community Outreach", "Easter Preparation Service"],
    April: ["Good Friday Service", "Resurrection Sunday Celebration"],
    May: ["Women's Conference", "Mid-Year Prayer Retreat"],
    June: ["Youth Hangout", "Evangelism Outreach"],
    July: ["Family & Friends Sunday", "Leadership Training Seminar"],
    August: ["Men’s Convention", "Youth Revival"],
    September: ["Back to School Sunday", "Worship Experience Night"],
    October: ["Pastor’s Appreciation Day", "Prayer Marathon"],
    November: ["Harvest & Thanksgiving", "Couples Retreat"],
    December: ["Crossover Night", "Christmas Carol Service"],
  };

  return (
    <>
      {/* HERO */}
      <div className="events-hero">
        <img src={churchBg} alt="Events Background" className="event-bg" />
        <div className="overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">2025 Events Calendar</h1>
          <p className="hero-subtitle">
            Stay connected with all our church programs throughout the year.
          </p>
        </div>
      </div>

      {/* CALENDAR GRID */}
      <section className="calendar-section" ref={rootRef}>
        <div className="calendar-container">
          {Object.keys(eventsByMonth).map((month) => (
            <div key={month} className="month-card">
              <h2>{month}</h2>
              <ul>
                {eventsByMonth[month].map((ev, i) => (
                  <li key={i}>{ev}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Events;
