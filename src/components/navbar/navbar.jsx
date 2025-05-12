import React, { useState } from "react";
import styles from "../navbar/navbar.module.css";
import { Bell, ChevronDown, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import Image from "../../assets/images/logos/Virtual Mechatronics Lab Logo V2-01.png";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDropdownEnter = (menu) => {
    setDropdownOpen(menu);
  };

  const handleDropdownClick = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  const closeDropdown = () => {
    setDropdownOpen(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setDropdownOpen(null);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(null);
  };

  const NavDropdown = ({ title, children, menuKey }) => {
    return (
      <li 
        className={styles.dropdown}
        onClick={() => handleDropdownClick(menuKey)}
        onMouseEnter={() => handleDropdownEnter(menuKey)}
        onMouseLeave={closeDropdown}
      >
        <div 
          className={styles.dropdownTitle}
        >
          {title} <ChevronDown size={14} />
        </div>
        {dropdownOpen === menuKey && (
          <ul className={styles.dropdownMenu}>
            {children}
          </ul>
        )}
      </li>
    );
  };

  const NavItemLink = ({ to, children, className, ...props }) => (
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        isActive ? styles.activeNavLink : className || styles.navLink
      }
      onClick={closeMobileMenu}
      {...props}
    >
      {children}
    </NavLink>
  );

  // Define menu items as arrays for easier rendering
  const homeItems = [
    { to: "/", label: "Home" }
  ];

  const aboutItems = [
    { to: "/about-vml", label: "VML" },
    { to: "/about-teams", label: "Team" }
  ];

  const researchProjectsItems = [
    { to: "/AI/AI", label: "Artificial Intelligence" },
    { to: "/AR/AR", label: "Augmented Reality" },
    { to: "/VR/VR", label: "Virtual Reality" },
    { to: "/Prosthetics/Prosthetics", label: "Prosthetics" }
  ];

  const mediaItems = [
    { to: "/Blogs/blogs", label: "Blogs" },
    { to: "/Newsletter/news", label: "Newsletters" },
    { to: "/Conference/conference", label: "Conferences" }
  ];

  // Rendering function for dropdown menu items
  const renderDropdownItems = (items) => 
    items.map((item, index) => (
      <li key={index}>
        <NavItemLink to={item.to}>{item.label}</NavItemLink>
      </li>
    ));

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <img src={Image} alt="Logo" className={styles.img} />
          </div>
          
          <div className={styles.mobileIcons}>
            <div className={styles.notification}>
              <Bell size={24} />
            </div>
            <button 
              className={styles.hamburgerMenu} 
              onClick={toggleMobileMenu}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <ul 
          className={`${styles.navLinks} ${mobileMenuOpen ? styles.mobileNavLinksOpen : styles.mobileNavLinksClosed}`}
        >
          {/* Desktop Dropdown */}
          <li>
            <NavItemLink to="/">Home</NavItemLink>
          </li>

          <NavDropdown title="About" menuKey="about">
            {renderDropdownItems(aboutItems)}
          </NavDropdown>

          {/* Direct nav items for desktop */}
          <li>
            <NavItemLink to="/worldskill">WorldSkill</NavItemLink>
          </li>
          <li>
            <NavItemLink to="/sifa">SIFA (AUDA-NEPAD)</NavItemLink>
          </li>

          <NavDropdown title="Research Projects" menuKey="research">
            {renderDropdownItems(researchProjectsItems)}
          </NavDropdown>

          <NavDropdown title="Media" menuKey="media">
            {renderDropdownItems(mediaItems)}
          </NavDropdown>

          <li>
            <NavItemLink 
             to="https://siemens.dkut.ac.ke/"
             target="_blank"
             rel="noopener noreferrer"
             className={styles.externalLink}
            >
              Siemens Centre
            </NavItemLink>
          </li>
        </ul>

        {/* Mobile Menu (Separate Rendering) */}
        {mobileMenuOpen && (
          <ul className={styles.mobileMenu}>
            {/* Flattened Mobile Menu Items */}
            {[
              ...homeItems,
              ...aboutItems,
              { to: "/worldskill", label: "WorldSkill" },
              { to: "/sifa", label: "SIFA (AUDA-NEPAD)" },
              ...researchProjectsItems,
              ...mediaItems,
              { to: "https://siemens.dkut.ac.ke/", label: "Siemens Centre", external: true }
            ].map((item, index) => (
              <li key={index}>
                <NavItemLink 
                  to={item.to}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={styles.mobileSectionTitle}
                >
                  {item.label}
                </NavItemLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;