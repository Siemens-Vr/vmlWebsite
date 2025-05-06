import React from "react";
import styles from "./contact.module.css";
import Hero from "../../components/hero/heroSection";

import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaTiktok, FaPhone } from "react-icons/fa";
import { MdLocationOn, MdEmail } from "react-icons/md";


const Contact = () => {
  return (
    <div>
    <Hero page="contact" />
    <section className={styles.contactSection}>
      <h2 className={styles.title}>Contact Us</h2>
  
      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <div className={styles.contactCard}>
            <MdEmail className={styles.contactIcon} />
            <h4 className={styles.cardTitle}>Email</h4>
            <p className={styles.cardDesc}>Send us an email anytime</p>
            <a href="mailto:vr.africa@dkut.ac.ke" className={styles.cardLink}>
              vr.africa@dkut.ac.ke
            </a>
          </div>
  
          <div className={styles.contactCard}>
            <MdLocationOn className={styles.contactIcon} />
            <h4 className={styles.cardTitle}>Location</h4>
            <p className={styles.cardDesc}>Visit our innovation lab</p>
            <a
              href="https://www.google.com/maps/place/Nyeri,+Kenya"
              target="_blank"
              rel="noreferrer"
              className={styles.cardLink}
            >
              Nyeri, Kenya
            </a>
          </div>
  
          <div className={styles.contactCard}>
            <FaPhone className={styles.contactIcon} />
            <h4 className={styles.cardTitle}>Phone</h4>
            <p className={styles.cardDesc}>Call us for urgent support</p>
            <a href="tel:+254716150627" className={styles.cardLink}>
              +254 716 150 627
            </a>
          </div>
        </div>
  
        <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={(e) => {
            if (!e.target.terms.checked) {
                e.preventDefault();
                alert("Please agree to the Terms and Conditions before submitting.");
            }
            }}>
            <input
                type="text"
                placeholder="Your Name"
                className={styles.inputField}
                required
            />
            <input
                type="email"
                placeholder="Your Email"
                className={styles.inputField}
                required
            />
            <textarea
                placeholder="Your Message"
                className={styles.textArea}
                required
            />

            <label className={styles.termsLabel}>
                <input type="checkbox" name="terms" className={styles.checkbox} />
                I agree to the <a href="/terms" target="_blank" rel="noreferrer">Terms and Conditions</a>
            </label>

            <button type="submit" className={styles.submitButton}>
                Send Message
            </button>
            </form>
        </div>
      </div>
    </section>
  </div>
  
  );
}
export default Contact;