import React, { useState } from "react";
import styles from "../navbar/navbar.module.css"; 
import { Bell, ChevronDown } from "lucide-react"; 

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <img src="/images/WhatsApp Image 2025-02-05 at 17.50.03_fc9783af.jpg" alt="Logo" />
      </div>

      {/* Navigation Links */}
      <ul className={styles.navLinks}>
        <li><a href="/" className={styles.active}>Home</a></li>
        
        {/* About Dropdown */}
        <li className={styles.dropdown} 
            onMouseEnter={() => setDropdownOpen(true)} 
            onMouseLeave={() => setDropdownOpen(false)}>
          <a href="" className={styles.navItem}>About <ChevronDown size={14} /></a>
          
          {dropdownOpen && (
            <ul className={styles.dropdownMenu}>
              <ol><a href="/about-vml">About VML</a></ol>
              <ol><a href="/about-teams">About Teams</a></ol>
            </ul>
          )}
        </li>

        <li><a href="/worldskill">WorldSkill</a></li>
        <li><a href="/sifa">SIFA(AUDA-NEPAD)</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contacts">Contacts</a></li>
      </ul>

      {/* Notification Icon */}
      <div className={styles.notification}>
        <Bell size={24} />
      </div>
    </nav>
  );
};

export default Navbar;
