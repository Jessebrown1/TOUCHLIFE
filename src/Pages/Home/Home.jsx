import "./Home.css";
import churchBg from "../../assets/churchBg.jpeg";

function Home() {
  return (
    <div
      className="home"
      style={{ backgroundImage: `url(${churchBg})` }}
    >
      <div className="overlay"></div>

      <div className="home-content">
        <h1 className="home-title">Step Into Touchlife Deliverance Ministry</h1>
<p className="home-subtitle">
  Where lives are transformed, faith is ignited, and God’s presence fills every heart.
</p>
        
        
        <div class="button-group">

        <button className="shake">
    <span>Join Us</span>
</button>

<button id="fold-button">
  <b>Events</b>
</button>
          
        </div>

      </div>
    </div>
  );
}

export default Home;