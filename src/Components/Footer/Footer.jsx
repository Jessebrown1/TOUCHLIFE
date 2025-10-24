    import "./Footer.css";
    import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
    import { useEffect } from "react";

    function Footer() {
    useEffect(() => {
        const scrollBtn = document.getElementById("scrollToTop");
        const progressRing = document.querySelector(".progress-ring__progress");
        const radius = progressRing?.r?.baseVal?.value;

        if (!radius || !scrollBtn || !progressRing) return;

        const circumference = 2 * Math.PI * radius;

        progressRing.style.strokeDasharray = `${circumference} ${circumference}`;
        progressRing.style.strokeDashoffset = circumference;

        const updateProgress = () => {
        const scrollTop = window.scrollY;
        const docHeight =
            document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = scrollTop / docHeight;
        const offset = circumference - scrollPercent * circumference;
        progressRing.style.strokeDashoffset = offset;

        // Show/hide button
        if (scrollTop > 300) scrollBtn.classList.add("visible");
        else scrollBtn.classList.remove("visible");
        };

        const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

        window.addEventListener("scroll", updateProgress);
        scrollBtn.addEventListener("click", scrollToTop);

        return () => {
        window.removeEventListener("scroll", updateProgress);
        scrollBtn.removeEventListener("click", scrollToTop);
        };
    }, []);

    return (
        <footer className="footer">
        <div className="footer-content">
            {/* ✅ Church Info */}
            <div className="footer-section">
            <h3>Touchlife Deliverance Ministry</h3>
            <p>Community 25, Tema, Accra, Ghana</p>
            <p>Sunday Service: 9:00 AM – 12:00 PM</p>
            <p>Wednesday Prayer: 6:30 PM – 8:00 PM</p>
            </div>

            {/* ✅ Contact Info */}
            <div className="footer-section">
            <h4>Contact</h4>
            <p>📞 +233 55 238 4351</p>
            <p>📞 +233 50 945 7303</p>
            <p>✉️ touchlifedm@gmail.com</p>
            </div>

            {/* ✅ Social Links */}
            <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
                <a
                href="https://facebook.com/touchlifedm"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaFacebookF />
                </a>
                <a
                href="https://youtube.com/@touchlifedm"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaYoutube />
                </a>
                <a
                href="https://instagram.com/touchlifedm"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaInstagram />
                </a>
            </div>
            </div>
        </div>

        {/* ✅ Bottom bar */}
        <div className="footer-bottom">
            <p>
            © {new Date().getFullYear()} Touchlife Deliverance Ministry. All Rights Reserved.
            </p>
        </div>
        </footer>
    );
    }

    export default Footer;