import React from "react";
import styles from "./heroSection.module.css";

const Hero = ({ page }) => {
  return (
    <section className={styles.heroSection}>
      {page === "home" && (
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Virtual Mechatronics Lab</h1>
          <p className={styles.subtitle}>Revolutionizing Education In Africa</p>
          <p className={styles.description}>
            Welcome to the{" "}
            <a href="https://siemensdekut.dkut.ac.ke/" target="_blank" rel="noopener noreferrer" className={styles.link}>
              Siemens Mechatronics
            </a>{" "}
            Certification Centre in Africa
          </p>
        </div>
      )}

      {page === "about" && (
        <div className={styles.heroContent}>
          <h1 className={styles.title}>About Virtual Mechatronics Lab</h1>
          <p className={styles.subtitle}>Empowering Innovation in Africa</p>
          <p className={styles.description}>
            Learn about our journey, our mission, and our impact in the education and automation sector.
          </p>
        </div>
      )}

      {page === "aboutTeams" && (
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Meet Our Teams</h1>
          <p className={styles.subtitle}>The Brains Behind Virtual Mechatronics Lab</p>
          <p className={styles.description}>
            Discover the talented individuals who make our lab a success.
          </p>
        </div>
      )}
    </section>
  );
};

export default Hero;
