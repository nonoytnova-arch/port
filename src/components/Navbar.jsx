import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [desktopDropdown, setDesktopDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  
  const handleNavClick = (sectionId, path) => {
    setMobileMenu(false);
    setMobileDropdown(false);
    setDesktopDropdown(false);

    if (location.pathname === "/" && sectionId) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(path);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="navbar-logo">🚀 My Portfolio</h2>

        
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        
        <div className="hamburger" onClick={() => setMobileMenu(!mobileMenu)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        
        <ul className={`nav-list ${mobileMenu ? "mobile-active" : ""}`}>
          <li className="nav-item" onClick={() => handleNavClick("home", "/")}>
            Home
          </li>

          <li className="nav-item" onClick={() => handleNavClick("about", "/about")}>
            About
          </li>

          
          <li
            className={`nav-item dropdown ${mobileDropdown ? "open" : ""}`}
            onMouseEnter={() => window.innerWidth > 768 && setDesktopDropdown(true)}
            onMouseLeave={() => window.innerWidth > 768 && setDesktopDropdown(false)}
            onClick={() =>
              window.innerWidth <= 768 && setMobileDropdown(!mobileDropdown)
            }
          >
            Projects ▾
            <ul
              className="dropdown-menu"
              style={{
                display:
                  (window.innerWidth > 768 && desktopDropdown) ||
                  (window.innerWidth <= 768 && mobileDropdown)
                    ? "flex"
                    : "none",
              }}
            >
              <li onClick={() => handleNavClick(null, "/todo")}>Todo App</li>
              <li onClick={() => handleNavClick(null, "/calculator")}>Calculator</li>
              <li onClick={() => handleNavClick(null, "/coin-flip")}>Coin Flipper</li>
              <li onClick={() => handleNavClick(null, "/dice")}>Dice Roller</li>
              <li onClick={() => handleNavClick(null, "/quiz")}>Quiz App</li>
              <li onClick={() => handleNavClick(null, "/form")}>Form Validation</li>
            </ul>
          </li>

          <li
            className="nav-item"
            onClick={() => handleNavClick("contact", "/contact")}
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;