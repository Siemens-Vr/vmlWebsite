import React from "react";
import styles from "../navbar/navbar.module.css"; 
import { Bell } from "lucide-react"; 

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/*Logo */}
      <div className={styles.logo}>
        <img src="/images/WhatsApp Image 2025-02-05 at 17.50.03_fc9783af.jpg" alt="Logo" />
      </div>

      {/* Navigation Links */}
      <ul className={styles.navLinks}>
        <li><a  href="/" className={styles.active}>Home</a></li>
        <li><a  href="/about">About</a></li>
        <li><a  href="/worldskill">WorldSkill</a></li>
        <li><a  href="/sifa">SIFA</a></li>
        <li><a  href="/projects">Projects</a></li>
        <li><a  href="/contacts">Contacts</a></li>
      </ul>

      {/*Notification Icon */}
      <div className={styles.notification}>
        <Bell size={24} />
      </div>
    </nav>
  );
};

export default Navbar;
