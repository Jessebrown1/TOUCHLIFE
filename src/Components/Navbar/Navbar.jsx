import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { PiChurch } from "react-icons/pi";
import { RiCloseFill } from "react-icons/ri"; // ✅ Correct import

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* ✅ Logo */}
        <Link to="/" className="logo">
          <img src={logo} alt="Grace Chapel" className="logo-img" />
        </Link>

        {/* ✅ Desktop & Mobile Links */}
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/ministries" className="nav-link" onClick={() => setIsOpen(false)}>Ministries</Link>
          <Link to="/events" className="nav-link" onClick={() => setIsOpen(false)}>Events</Link>
          <Link to="/sermons" className="nav-link" onClick={() => setIsOpen(false)}>Sermons</Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>

        {/* ✅ Mobile Menu Toggle Button */}
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