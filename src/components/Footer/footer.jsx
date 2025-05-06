import React from "react";
import styles from "../Footer/footer.module.css";
import { FaFacebookF, FaLinkedinIn,FaInstagram, FaTwitter,FaTiktok, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.left}>
          <h2 className={styles.brand}>Virtual Mechatronics</h2>
          <p className={styles.tagline}>Unlocking the potential virtually</p>
          {/* Social Icons */}
          <div className={styles.socialIcons}>
            <a href="#" className={styles.icon}><FaFacebookF /></a>
            <a href="https://www.linkedin.com/in/virtual-mechatronics-labs-914389337/" target="_blank" rel= "noopener noreferrer" className={styles.icon}><FaLinkedinIn /></a>
            <a href="https://x.com/VRAfrica_Dekut" target="_blank" rel= "noopener noreferrer" className={styles.icon}><FaTwitter /></a>
            <a href="#" target="_blank" rel= "noopener noreferrer"className={styles.icon}><FaInstagram /></a>
            <a href="https://www.tiktok.com/@vrafrica_dekut2" target="_blank" rel= "noopener noreferrer" className={styles.icon}><FaTiktok   /></a>              
          </div>
        </div>

        {/* Middle Columns */}
        
          <div className={styles.column}>
            <h3>Popular Links</h3>
            <ul>
              <li><a href="/about-vml">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">VR Lab Erp</a></li>
              <li><a href="#">Documentations</a></li>
              <li><a href="#">Designs</a></li>
              <li><a href="#">Trainings</a></li>
            </ul>
          </div>

        {/* Contact Section */}
        <div className={styles.contact}>
          <h3>Contact US</h3>
          <ul>
            <li><FaMapMarkerAlt /> Nyeri, Kenya</li>
            <li><FaPhone /> +254 716 150 627</li>
            <li><FaEnvelope /> vr.africa@dkut.ac.ke</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className={styles.divider}></div>

      {/* Bottom Section */}
      <div className={styles.bottom}>
        <p>© <span className={styles.highlight}>Virtual Mechatronics</span> All Rights Reserved</p>
        <div className={styles.links}>
          <a href="#">Home</a>
          <a href="#">Cookies</a>
          <a href="#">Help</a>
          <a href="#">FAQs</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
