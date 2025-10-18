    import { useState } from "react";
    import { Link } from "react-router-dom";
    import "./Navbar.css"; // make sure you import the CSS file
    import logo from "../../assets/logo.png"

    const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
        <div className="navbar-container">
            {/* ✅ Logo section */}
            <Link to="/" className="logo">
            { <img src={logo} alt="Grace Chapel" className="logo-img" /> }
            
            
            {/* Option 2 (optional): Image logo */}
            
            </Link>

            {/* ✅ Desktop links */}
            <div className={`nav-links ${isOpen ? "open" : ""}`}>
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/ministries" className="nav-link" onClick={() => setIsOpen(false)}>Ministries</Link>
            <Link to="/events" className="nav-link" onClick={() => setIsOpen(false)}>Events</Link>
            <Link to="/sermons" className="nav-link" onClick={() => setIsOpen(false)}>Sermons</Link>
            <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
            </div>

            {/* ✅ Mobile menu toggle */}
            <button
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            >
            ☰
            </button>
        </div>
        </nav>
    );
    };

    export default Navbar;