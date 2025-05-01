import React, { useState } from "react";
import styles from "../navbar/navbar.module.css"; 
import { Bell, ChevronDown } from "lucide-react"; 
import { NavLink } from "react-router-dom";
import Image from "../../assets/images/logos/Virtual Mechatronics Lab Logo V2-01.png"


const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className={styles.navbar}>

      <div className={styles.logo}>
        <img src={Image} alt="Logo" className={styles.img}/>
      </div>

      <ul className={styles.navLinks}>
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? "active" : ""}
      >
        Home
      </NavLink>

        <li className={styles.dropdown} 
            onMouseEnter={() => setDropdownOpen(true)} 
            onMouseLeave={() => setDropdownOpen(false)}>
          <a href="" className={styles.navLinkd}>About <ChevronDown size={14} /></a>
          
          {dropdownOpen && (
            <ul className={styles.dropdownMenu}>
               <NavLink 
          to="/about-vml" 
          className={({ isActive }) => isActive ? "active" : ""}
        >
         About VML
        </NavLink>
        <NavLink 
          to="/about-teams" 
          className={({ isActive }) => isActive ? "active" : ""}
        >
         About Teams
        </NavLink>
            </ul>
          )}
        </li>

        <NavLink 
          to="/worldskill" 
          className={({ isActive }) => isActive ? "active" : ""}
        >
          WorldSkill
        </NavLink>
        <NavLink 
          to="/sifa" 
          className={({ isActive }) => isActive ? "active" : ""}
        >
          SIFA(AUDA-NEPAD)
        </NavLink>

         <li className={styles.dropdown} 
            onMouseEnter={() => setDropdownOpen(true)} 
            onMouseLeave={() => setDropdownOpen(false)}>
          <a href="" className={styles.navItem}>Research Projects <ChevronDown size={14} /></a>
          
          {dropdownOpen && (
            <ul className={styles.dropdownMenu}>
              <NavLink 
                to="/AR/AR" 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                Augmented Reality
              </NavLink>
              <NavLink 
                to="/VR/VR" 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                Virtual Reality
              </NavLink>
              <NavLink 
                to="/AI/AI" 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                Artificial Intelligence
              </NavLink>
              <NavLink 
                to="/Prosthetics/Prosthetics"
                className={({ isActive }) => isActive ? "active" : ""}
              >
                Prosthetics
              </NavLink>
            </ul>
          )}
        </li>

         <li className={styles.dropdown} 
            onMouseEnter={() => setDropdownOpen(true)} 
            onMouseLeave={() => setDropdownOpen(false)}>
          <a href="" className={styles.navItem}>Media <ChevronDown size={14} /></a>
          
          {dropdownOpen && (
            <ul className={styles.dropdownMenu}>
               <NavLink 
                to="/Blogs/blogs"
                className={({ isActive }) => isActive ? "active" : ""}
              >
                Blogs
              </NavLink>
              <NavLink 
                to="/Newsletter/news"
                className={({ isActive }) => isActive ? "active" : ""}
              >
                Newsletters
              </NavLink>
              <NavLink 
                to="/Conference/conference"
                className={({ isActive }) => isActive ? "active" : ""}
              >
                Conferences
              </NavLink>
            </ul>
          )}
        </li>
        <NavLink 
          to="https://siemensdekut.dkut.ac.ke/" 
          className={({ isActive }) => isActive ? "active" : ""}
           target="_blank" rel="noopener noreferrer"
        >
          Siemens Centre
        </NavLink>
  
      </ul>

      <div className={styles.notification}>
        <Bell size={24} />
      </div>
    </nav>
  );
};

export default Navbar;
