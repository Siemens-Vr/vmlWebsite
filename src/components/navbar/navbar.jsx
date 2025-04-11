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
              <li><a href="/about-vml">About VML</a></li>
              <li><a href="/about-teams">About Teams</a></li>
            </ul>
          )}
        </li>

        <li><a href="/worldskill">WorldSkill</a></li>
        <li><a href="/sifa">SIFA(AUDA-NEPAD)</a></li>

         {/* Projects Dropdown */}
         <li className={styles.dropdown} 
            onMouseEnter={() => setDropdownOpen(true)} 
            onMouseLeave={() => setDropdownOpen(false)}>
          <a href="" className={styles.navItem}>Research Projects <ChevronDown size={14} /></a>
          
          {dropdownOpen && (
            <ul className={styles.dropdownMenu}>
              <li><a href="/AR/AR">Augmented Reality</a></li>
              <li><a href="/VR/VR">Virtual Reality</a></li>
              <li><a href="/AI/AI">Artificial Intelligence</a></li>
              <li><a href="/Prosthetics/Prosthetics">Prosthetics</a></li>
            </ul>
          )}
        </li>

         {/* Media Dropdown */}
         <li className={styles.dropdown} 
            onMouseEnter={() => setDropdownOpen(true)} 
            onMouseLeave={() => setDropdownOpen(false)}>
          <a href="" className={styles.navItem}>Media <ChevronDown size={14} /></a>
          
          {dropdownOpen && (
            <ul className={styles.dropdownMenu}>
              <li><a href="/Blogs">Blogs</a></li>
              <li><a href="/Newsletter/news">Newsletters</a></li>
              <li><a href="/Confrence">Confrences</a></li>
            </ul>
          )}
        </li>
  
      </ul>

      {/* Notification Icon */}
      <div className={styles.notification}>
        <Bell size={24} />
      </div>
    </nav>
  );
};

export default Navbar;
