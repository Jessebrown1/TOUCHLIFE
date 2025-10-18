import "./Header.css";

const Header = ({ title, subtitle, background }) => {
  return (
    <header
      className="header"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="header-overlay">
        <div className="header-content">
          <h1 className="header-title">{title}</h1>
          {subtitle && <p className="header-subtitle">{subtitle}</p>}
          
        </div>
      </div>
    </header>
  );
};

export default Header;