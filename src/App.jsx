import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Ministries from "./Pages/Ministries/Ministries";
import Events from "./Pages/Events/Events";
import Sermons from "./Pages/Sermons/Sermons";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer"; // ✅ import Footer

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      {/* ✅ Back to Top Button */}
<div className="scroll-to-top" id="scrollToTop">
  <svg className="progress-ring" width="60" height="60">
    <circle className="progress-ring__background" cx="30" cy="30" r="26" />
    <circle className="progress-ring__progress" cx="30" cy="30" r="26" />
  </svg>
  <span className="arrow">↑</span>
</div>
      <Footer /> {/* ✅ footer displayed on every page */}
    </Router>
  );
}

export default App;