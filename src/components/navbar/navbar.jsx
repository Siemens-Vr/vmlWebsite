import React from "react";
// import { Link } from "react-router-dom"; // If using React Router
import styles from "../../styles/navbar/navbar.module.css"; // CSS Modules
import { Bell } from "lucide-react"; // Using Lucide Icons

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* Left Section - Logo */}
      <div className={styles.logo}>
        <img src="/images/WhatsApp Image 2025-02-05 at 17.50.03_fc9783af.jpg" alt="Logo" />
      </div>

      {/* Middle Section - Navigation Links */}
      <ul className={styles.navLinks}>
        <li><a  href="/" className={styles.active}>Home</a></li>
        <li><a  href="/about">About</a></li>
        <li><a  href="/worldskill">WorldSkill</a></li>
        <li><a  href="/sifa">SIFA</a></li>
        <li><a  href="/projects">Projects</a></li>
        <li><a  href="/contacts">Contacts</a></li>
      </ul>

      {/* Right Section - Notification Icon */}
      <div className={styles.notification}>
        <Bell size={24} />
      </div>
    </nav>
  );
};

export default Navbar;
