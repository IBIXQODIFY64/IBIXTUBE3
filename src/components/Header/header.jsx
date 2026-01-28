import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { useState } from "react";
import "./header.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    //write code here!
    Cookies.remove("jwtToken");
    navigate("/login");
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="header-container">
      {/* Logo */}
      <Link to="/" onClick={() => setMobileMenuOpen(false)}>
        <img
          src="https://res.cloudinary.com/dkkzdkikd/image/upload/v1767169020/Gemini_Generated_Image_b9obivb9obivb9ob_kcwgdw.png"
          alt="Ibix Logo"
          className="header-site-logo"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="header-opt">
        <ul>
          <li>
            <Link to="/" className="opt-item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/my-favorites" className="opt-item">
              My Favorites
            </Link>
          </li>

          <li>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>

      {/* Hamburger Menu Icon (Mobile) */}
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {mobileMenuOpen ? (
          <button className="toggle-menu-btn">Close</button>
        ) : (
          <button className="toggle-menu-btn">Menu</button>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="mobile-nav">
          <ul className="mobile-nav-options">
            <li>
              <Link to="/" className="opt-item" onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/my-favorites"
                className="opt-item"
                onClick={toggleMobileMenu}
              >
                My Favorites
              </Link>
            </li>

            <li>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
