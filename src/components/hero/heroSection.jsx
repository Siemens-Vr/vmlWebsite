import React, { useState, useEffect } from "react";
import styles from "./heroSection.module.css";
import image1 from "../../assets/WhatsApp Image 2025-02-05 at 17.50.03_fc9783af.jpg";
import Team from "../team/team";
// import team from "../team/team";



const teamMembers = [
  { name: "Administration", image: {image1}, link: "/administration" },
  { name: "Virtual Reality", image: "vr.jpg", link: "/virtual-reality" },
  { name: "Software Developers", image: "software.jpg", link: "/software-developers" },
  { name: "Virtual Mechatronics", image: "mechatronics.jpg", link: "/virtual-mechatronics" }
];

const TeamCarousel = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);


  const handleclick= (name) =>{
    console.log(name)
    setSelectedDepartment(name); // ✅ Set department to pass as prop
  }

  return (
    <div className="carousel-container">
      <h2>
        Meet our <span className="highlight">Talented</span> team members
      </h2>
      <p>Our diverse team of skilled professionals is dedicated to driving innovation and excellence in our projects</p>
      <div className="carousel">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="team-card"
            onClick={() => handleclick(member.name)}
          >
            <img src={member.image} alt={member.name} />
            <p>{member.name}</p>
          </div>
        ))}
      </div>


{selectedDepartment && <Team name={selectedDepartment} />}
    </div>
  );
};


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

      {page === "about_teams" && (
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Meet Our Teams</h1>
          <p className={styles.subtitle}>The Brains Behind Virtual Mechatronics Lab</p>
          <p className={styles.description}>
            Discover the talented individuals who make our lab a success.
          </p>
          <TeamCarousel />
        </div>
      )}
     
     {page === "sifa" &&(
     <div className={styles.sifaHeroContainer}>
      <div className={styles.sifaHeroCard}>
        {/* Left Side - Image */}
        <div className={styles.sifaImageContainer}>
          <img src="/images/placeholder.jpg" alt="SIFA Initiative" className={styles.sifaHeroImage} />
        </div>

        {/* Right Side - Text Content */}
        <div className={styles.sifaTextContainer}>
          <h2 className={styles.sifaTitle}>
            <span className={styles.sifaHighlight}>SKILLS</span> <br />
            INITIATIVE <br />
            FOR <br />
            <span className={styles.sifaHighlight}>AFRICA</span>
          </h2>
          <p className={styles.sifaDescription}>
            SIFA is designed to address the skills gap in Africa by strengthening technical and 
            vocational education and training.
          </p>
        </div>
      </div>
    </div>
    )}
    </section>
  );
};

export default Hero;
