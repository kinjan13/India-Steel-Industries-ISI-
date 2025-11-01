import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [materialsOpen, setMaterialsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img src="/logo192.png" alt="DSS Steel Logo" />
          <span className="logo-text">Indian Steel Industries</span>

          {/* Hamburger Icon */}
          <div
            className="menu-icon"
            onClick={() => setMenuOpen(true)}
            title="Menu"
          >
            <FaBars size={26} color="#ffffff" />
          </div>
        </div>
      </div>

      {/* Right Side Menu */}
      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <div
          className="close-icon"
          onClick={() => {
            setMenuOpen(false);
            setMaterialsOpen(false);
            setProductsOpen(false);
          }}
        >
          <FaTimes size={24} color="#fff" />
        </div>

        <nav className="menu-links">
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          {/* Materials Dropdown */}
          <div className="dropdown">
            <div
              className="dropdown-title"
              onClick={() => {
                setMaterialsOpen(!materialsOpen);
                setProductsOpen(false); // close the other one
              }}
            >
              Materials <FaChevronDown size={14} />
            </div>
            {materialsOpen && (
              <div className="dropdown-content">
                <a href="#mild-steel" onClick={() => setMenuOpen(false)}>
                  Mild Steel
                </a>
                <a href="#stainless-steel" onClick={() => setMenuOpen(false)}>
                  Stainless Steel
                </a>
                <a href="#aluminum" onClick={() => setMenuOpen(false)}>
                  Aluminum
                </a>
                <a href="#gi" onClick={() => setMenuOpen(false)}>
                  Galvanized Iron
                </a>
              </div>
            )}
          </div>

          {/* Products Dropdown */}
          <div className="dropdown">
            <div
              className="dropdown-title"
              onClick={() => {
                setProductsOpen(!productsOpen);
                setMaterialsOpen(false); // close the other one
              }}
            >
              Products <FaChevronDown size={14} />
            </div>
            {productsOpen && (
              <div className="dropdown-content">
                <a href="#ms-hollow" onClick={() => setMenuOpen(false)}>
                  MS Hollow Sections
                </a>
                <a href="#ms-beams" onClick={() => setMenuOpen(false)}>
                  MS Beams
                </a>
                <a href="#ms-channels" onClick={() => setMenuOpen(false)}>
                  MS Channels
                </a>
                <a href="#ms-bars" onClick={() => setMenuOpen(false)}>
                  MS Bars
                </a>
                <a href="#ms-angles" onClick={() => setMenuOpen(false)}>
                  MS Angles
                </a>
                <a href="#ms-coils" onClick={() => setMenuOpen(false)}>
                  MS Coils, Sheets & Plates
                </a>
                <a href="#aluminium-coils" onClick={() => setMenuOpen(false)}>
                  Aluminium Coils & Sheets
                </a>
                <a href="#ss-products" onClick={() => setMenuOpen(false)}>
                  Stainless Steel Products
                </a>
                <a href="#ss-bars" onClick={() => setMenuOpen(false)}>
                  Stainless Steel Bright Bars
                </a>
                <a href="#ss-wires" onClick={() => setMenuOpen(false)}>
                  Stainless Steel Bright Wires
                </a>
                <a href="#gi-products" onClick={() => setMenuOpen(false)}>
                  GI Products
                </a>
                <a href="#ms-gratings" onClick={() => setMenuOpen(false)}>
                  Mild Steel Gratings
                </a>
              </div>
            )}
          </div>

          {/* Regular Links */}
          <a
            href="#about"
            onClick={() => {
              setMenuOpen(false);
              setMaterialsOpen(false);
              setProductsOpen(false);
            }}
          >
            About Us
          </a>

          <a
            href="#contact"
            onClick={() => {
              setMenuOpen(false);
              setMaterialsOpen(false);
              setProductsOpen(false);
            }}
          >
            Contact Us
          </a>
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="overlay"
          onClick={() => {
            setMenuOpen(false);
            setMaterialsOpen(false);
            setProductsOpen(false);
          }}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
