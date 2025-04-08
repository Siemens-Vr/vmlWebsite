import React from "react";
import styles from "./sifa.module.css";
import Hero from "../../components/hero/heroSection";
import sifaImage from "../../assets/sifaimage.jpg"; 

const Sifa = () => {
  return (
    <>
  <section>
    <div className={styles.sifaContainer}>
      {/* Hero Section */}
      <Hero page="sifa" />
      </div>
  </section>


      <section>
      <div className={styles.sifaSection}>
        {/* Left Section */}
        <div className={styles.sifaText}>
          <h2 className={styles.sifaHeading}>Skill Africa For Initiative</h2>
          <p className={styles.sifaDescription}>
            The Skills Initiative for Africa (SIFA) is a strategic effort led by the African 
            Union Commission (AUC) and the African Union Development Agency (AUDA-NEPAD), 
            with support from the German Government and the European Union.
          </p>
          <p className={styles.sifaDescription}>
            This initiative aims to enhance the occupational prospects of young people in Africa 
            by improving vocational and technical training.
          </p>

          {/* Bullet Points */}
          <div className={styles.sifaBulletPoints}>
            <div className={styles.sifaBullet}><span>○</span> Strategic Leadership</div>
            <div className={styles.sifaBullet}><span>○</span> Focus on Technical Training</div>
            <div className={styles.sifaBullet}><span>○</span> International Support</div>
            <div className={styles.sifaBullet}><span>○</span> Key Facilities</div>
          </div>

          {/* Button & Social Icons */}
          <div className={styles.sifaActions}>
            <button className={styles.sifaButton}>Read More</button>
            <div className={styles.sifaIcons}>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className={styles.sifaImageContainer}>
          <img src="/images/placeholder.jpg" alt="SIFA Training" className={styles.sifaImage} />
        </div>
      </div>

      </section>


     <section>
      {/* Footer Banner */}
      <div className={styles.sifaFooter}>
        <p>
          How the <span className={styles.sifaHighlight}>Siemens Mechatronics Certification</span> Centre and 
          the <span className={styles.sifaHighlight}>Advanced Virtual Reality Lab</span> at Dedan Kimathi University 
          of Technology fit into this initiative
        </p>
      </div>
     </section>

  <section>
  <div className="purpose-container">
      <h2 className="purpose-title">Purpose</h2>
      <div className="purpose-content">
        <div className="purpose-image-wrapper">

          <img
            
            src={sifaImage}
            alt="SIFA Presentation"
            className={styles.purposeimage}
          />
        </div>
        <div className="purpose-text">
          <h3 className="purpose-heading">Skills Initiative For Africa (SIFA)</h3>
          <p className="purpose-description">
            SIFA is designed to address the skills gap in Africa by strengthening
            Technical and Vocational Education and Training. The initiative aims to
            enhance the employability of young Africans and align educational outcomes
            with the demands of the job market.
          </p>
          <p className="purpose-subheading">Key Stakeholders:</p>
          <ul className="purpose-stakeholders">
            <li><span className="purpose-circle"></span>African Union Commission (AUC)</li>
            <li><span className="purpose-circle"></span>African Union Development Agency (AUDA-NEPAD)</li>
            <li><span className="purpose-circle"></span>German Government</li>
            <li><span className="purpose-circle"></span>European Union</li>
          </ul>
        </div>
      </div>
    </div>

  </section>

  </>
  );
};

export default Sifa;
