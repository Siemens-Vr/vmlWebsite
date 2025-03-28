'use client';

import React from "react";
import styles from './home.module.css';
import Hero from "../../components/hero/heroSection"; // Ensure correct file name

const Home = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <Hero page="home" />

      {/* About Virtual Mechatronics Lab */}
      <section className={styles.aboutSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.imageContainer}></div>
          <div className={styles.textContainer}>
            <h2>About Virtual Mechatronics Lab</h2>
            <p>
              Our lab leverages the latest technologies to create highly detailed and interactive simulations of mechatronic systems. This innovative approach significantly enhances the design, development, and deployment processes.
            </p>
            <p>
              The lab embodies the cutting edge of technological integration, pushing the boundaries of what is possible in mechatronic system design.
            </p>
            <button className={styles.readMore}>Read More</button>
          </div>
        </div>
      </section>

      {/* Add other sections as needed */}
    </div>
  );
};

export default Home;
