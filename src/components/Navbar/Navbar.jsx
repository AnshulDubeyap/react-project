import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  //! State for Menu Button
  const [open, setOpen] = useState(false);

  //! Function for Menu Button
  const handleMenuClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/" className="link logo-container">
          <img
            src="/public/assets/icons/list.png"
            alt="Logo"
            className="logo"
          />
          <h1 className="logo-text">EventSphere</h1>
        </Link>
      </div>
      <ul className="nav-list">
        <li>
          <Link to="/" className="link">
            <p className="link-text">Home</p>
          </Link>
        </li>
        <li>
          <Link to="/event" className="link">
            <p className="link-text">Event</p>
          </Link>
        </li>
      </ul>
      <div className="user-container">
        <img
          className="user-icon"
          src="/public/assets/images/user_icon.png"
          alt="User Profile"
        />
      </div>
      <div className="menu-button" onClick={handleMenuClick}>
        <img
          className="menu-icon"
          src="/public/assets/icons/hamburger.svg"
          alt="Menu"
        />
      </div>

      {/* Mobile Navigation */}

      {open && (
        <div className={`mobile-menu ${open ? "open" : ""}`}>
          <ul className="mobile-nav-list">
            <li className="mobile-link">
              <Link to="/" className="link">
                <p className="link-text" onClick={handleMenuClick}>
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link to="/event" className="link">
                <p className="link-text" onClick={handleMenuClick}>
                  Event
                </p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
