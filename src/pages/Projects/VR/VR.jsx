import React, { useState, useEffect, useRef } from "react";
import Hero from "../../../components/hero/heroSection"; 
import styles from './VR.module.css';

const VR = () => {
return (
    <div className={styles.container}>
      {/* Hero Section */}
      <Hero page="vr" />

    {/* [wwd section] */}
    <section className={styles.wwdSection}>
      <h2 className={styles.heading}>WHAT WE DO</h2>
      <div className={styles.contentWrapper}>
        <div className={styles.textContainer}>
          <h3 className={styles.subheading}>Virtual Reality</h3>
          <p className={styles.paragraph}>
            We revolutionize mechatronics education through virtual reality, simulating real-world environments and machinery for an interactive, hands-on experience. Our advanced VR technology lets users explore, design, and test mechatronic systems in a fully immersive digital space, enhancing creativity and technical skills. Join us in bridging theoretical knowledge and practical application, shaping the future of engineering education.
          </p>
        </div>
        <div className={styles.videoPlaceholder}></div>
      </div>
    </section>

    {/* Car assembly Section */}
    <section className={styles["car-assembly-section"]}>
      <div className={styles["car-assembly-wrapper"]}>
        <div className={styles["car-assembly-image"]}></div>
        <div className={styles["car-assembly-text"]}>
          <h3 className={styles["car-assembly-title"]}>VR Car Assembly</h3>
          <p className={styles["car-assembly-description"]}>
            The Virtual Car Assembly Training project is a VR experience that simulates the manufacturing process of electric vehicles, providing an immersive environment where users can explore each stage of assembly. Currently focused on body manufacturing, it covers sheet metal work and body parts assembly, helping trainees understand critical production stages. The simulation also educates users on automotive components and their functions, enhancing their knowledge of vehicle mechanics. Designed for educational institutions, training centers, and industry professionals, this interactive tool offers a hands-on approach to learning modern car manufacturing.
          </p>
          <a
            href="/docs/car-assembly-manual.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles["car-assembly-button"]}
          >
            Read More
          </a>
        </div>
      </div>
    </section>
    </div>
  );
};

export default VR;