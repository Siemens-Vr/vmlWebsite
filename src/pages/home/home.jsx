'use client';

// import Image from 'next/image';
import React from "react";
import styles from './home.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.title}>About</h1>
      </section>

      {/* About Virtual Mechatronics Lab */}
      <section className={styles.aboutSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.imageContainer}>
            {/* <Image src="/images/mechatronics.jpg" alt="Mechatronics" width={400} height={400} className={styles.image} /> */}
          </div>
          <div className={styles.textContainer}>
            <h2>About Virtual Mechatronics Lab</h2>
            <p>
              Our lab leverages the latest technologies to create highly detailed and interactive simulations of mechatronic systems. This innovative approach significantly enhabces the design, development and deployment processes
              resulting in more efficient, effective, and groundbreaking solutions in the field of mechatronics innovation.
            </p>
            <p>The lab embodies the cutting edge of technological integration, pushing the boundaries of what is possible in mechatronic system design and Integration of Virtual Reality and Digital Technologies</p>
            <button className={styles.readMore}>Read More</button>
          </div>
        </div>
      </section>

      {/* About Virtual Reality */}
      <section className={styles.aboutSection}>
        <div className={styles.contentWrapperReverse}>
          <div className={styles.textContainer}>
            <h2>About Virtual Reality</h2>
            <p>
              Virtual Reality immerses you in computer-generated environments, seamlessly blending the physical and digital worlds...
            </p>
            <ul className={styles.list}>
              <li>✅ Accessibility for students</li>
              <li>✅ Enhance STEM Education</li>
              <li>✅ Enhanced Training</li>
              <li>✅ Personalized Learning</li>
            </ul>
            <button className={styles.readMore}>Read More</button>
          </div>
          <div className={styles.imageContainer}>
            {/* <Image src="/images/vr.jpg" alt="Virtual Reality" width={400} height={400} className={styles.image} /> */}
          </div>
        </div>
      </section>
    </div>
  );
}
