import { useState, useEffect } from "react";
import styles from "../../styles/hero/heroSection.module.css";   
import Navbar from "../navbar/navbar";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState("00:00:00");

  useEffect(() => {
    const targetDate = new Date("2025-04-01T00:00:00"); // Example deadline
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
          <a href="https://siemensdekut.dkut.ac.ke/" target="_blank" rel="noopener noreferrer"  className={styles.link}>
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
      <div className={styles.imageContainer1}> 
        <div className={styles.imageContainer}> 
          </div>
          <img
            src="/images/robotic-lab.png" // Ensure this image is inside the `public/images/` folder
            alt="Robotic Lab"
            className={styles.heroImage}
          />
        </div>
        </div>

    </section>
  );
};

export default HeroSection;
