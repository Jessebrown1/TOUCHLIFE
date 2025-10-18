import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About";
import Ministries from "./Pages/Ministries/Ministries";
import Events from "./Pages/Events/Events";
import Sermons from "./Pages/Sermons/Sermons";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-16"> {/* to avoid overlap from fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;