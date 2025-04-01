import React, { useState, useEffect } from "react";
import styles from "./heroSection.module.css";

const Hero = ({ page }) => {
  const [timeLeft, setTimeLeft] = useState("00:00:00");

  // Function to calculate the countdown time
  useEffect(() => {
    const targetDate = new Date("2025-04-30T23:59:59"); // Adjust the date as needed
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft("00:00:00");
      } else {
        const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0");
        const minutes = String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0");
        const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, "0");

        setTimeLeft(`${hours}:${minutes}:${seconds}`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.heroSection}>
      {page === "home" && (
        <>
          {/* Left Section */}
          <div className={styles.leftSection}>
            <h1 className={styles.title}>Virtual Mechatronics Lab</h1>
            <p className={styles.subtitle}>Revolutionizing Education In Africa</p>
            <p className={styles.description}>
              Welcome to the{" "}
              <a href="https://siemensdekut.dkut.ac.ke/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                Siemens Mechatronics
              </a>{" "}
              <br />
              <a href="https://siemensdekut.dkut.ac.ke/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                Certification Centre
              </a>{" "}
              in Africa
            </p>

            {/* Countdown */}
            <p className={styles.countdown}>SMCPC intake ongoing. Closes in:</p>
            <div className={styles.countdownBoxes}>
              {timeLeft.split(":").map((unit, index) => (
                <div key={index} className={styles.countdownBox}>
                  {unit}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className={styles.buttons}>
              <button className={styles.applyButton}>Apply</button>
              <button className={styles.detailsButton}>More Details</button>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className={styles.rightSection}>
            <div className={styles.imageContainer}>
              <img src="/images/robotic-lab.png" alt="Robotic Lab" className={styles.heroImage} />
            </div>
          </div>
        </>
      )}

      {page === "about" && (
        <section className={styles.aboutSection}>
        <div className={styles.contentContainer}>
          {/* Left Side - Image */}
          <div className={styles.imageContainer}>
            <img src="/images/vr-lab-setup.jpg" alt="VR Lab Setup" className={styles.image} />
          </div>
  
          {/* Right Side - Text */}
          <div className={styles.textContainer}>
            <p className={styles.tagline}>— Get to know us</p>
            <h2 className={styles.quote}>
              “Study the past <br /> if you would define <br /> the future.”
            </h2>
            <p className={styles.author}>— <em>Confucius</em></p>
            <p className={styles.description}>
              A company’s background is more than history—it’s the foundation of trust, innovation,
              and the promise of what’s to come. It’s a roadmap of experience and success that helps
              clients move confidently into the future.
            </p>
          </div>
        </div>
      </section>
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
