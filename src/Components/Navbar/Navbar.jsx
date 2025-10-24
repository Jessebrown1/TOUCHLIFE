import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { PiChurch } from "react-icons/pi";
import { RiCloseFill } from "react-icons/ri";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logoRef = useRef(null);
  const linksRef = useRef([]);

  // 🎬 Animate logo + links on load
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.8, y: -20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power3.out" }
    ).fromTo(
      linksRef.current,
      { opacity: 0, y: -15 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.4, ease: "power2.out" },
      "-=0.4"
    );
  }, []);

  useEffect(() => {
    let lastScrollY = 0;
  
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const isScrollingDown = currentScroll > lastScrollY;
  
      if (isScrollingDown && currentScroll > 50) {
        // 🌀 Scrolling Down → hide links in stagger
        gsap.to(".nav-link", {
          opacity: 0,
          y: -20,
          stagger: 0.05,
          duration: 0.4,
          ease: "power2.out",
        });
  
        // Navbar fades slightly to a darker solid color (no blur)
        gsap.to(".navbar", {

          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        // 🌀 Scrolling Up → show links again
        gsap.to(".nav-link", {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          delay: 0.1,
        });
  
        gsap.to(".navbar", {
          backgroundColor:
            currentScroll > 50 ? 
          duration: 0.4,
          ease: "power2.out",
        });
      }
  
      lastScrollY = currentScroll;
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* ✅ Animated Logo */}
        <Link to="/" className="logo">
          <img ref={logoRef} src={logo} alt="Logo" className="logo-img" />
        </Link>

        {/* ✅ Nav Links */}
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          {["Home", "About", "Ministries", "Events", "Sermons", "Contact"].map(
            (item, i) => (
              <Link
                key={item}
                ref={(el) => (linksRef.current[i] = el)}
                to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            )
          )}
        </div>

        {/* ✅ Mobile Menu Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <RiCloseFill size={28} /> : <PiChurch size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
