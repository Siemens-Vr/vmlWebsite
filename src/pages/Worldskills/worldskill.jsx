import React from "react";
import styles from "./worldskill.module.css";
import image1 from "../../assets/WhatsApp Image 2025-02-05 at 17.50.03_fc9783af.jpg";
// import image2 from "../../assets/image2.jpg";
// import image3 from "../../assets/image3.jpg";


const WorldSkills = () => {
  return (
    <>
      {/* Main World Skills Section */}
      <section className={styles.worldSkillsSection}>
        <h2 className={styles.title}>WORLD SKILLS</h2>
        <div className={styles.content}>
          {/* Main Image with rounded corners */}
          <div className={styles.imageContainer}>
            <img
              src="https://via.placeholder.com/800x400"
              alt="Group photo"
              className={styles.mainImage}
            />
            {/* Overlay Image */}
            <img
              src="https://via.placeholder.com/250x200"
              alt="Training session"
              className={styles.overlayImage}
            />
          </div>

          {/* Text Section */}
          <div className={styles.textContent}>
            <h3 className={styles.subtitle}>WorldSkill Competitions</h3>
            <p>
              The WorldSkills International competition is the peak vocational
              skills competition for young people across the world. It was started
              in Spain in 1950 and is currently in 85 countries all over the world.
            </p>
            <p>
              On 13th October 2020, WorldSkills Kenya (WSK) was ratified as the
              84th state to host skills competitions. Kenya is preparing to
              participate in the upcoming competition organized by WorldSkills
              International (WSI).
            </p>

            {/* Radio Button Options */}
            <div className={styles.options}>
              {[
                "Global Vocational Competition",
                "Tvet Training",
                "WorldSkills Kenya",
                "Competent Instructors",
              ].map((option, index) => (
                <label key={index} className={styles.optionLabel}>
                  <input type="radio" name="skill-category" className={styles.radioButton} />
                  {option}
                </label>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2024 Selection */}
      <section className={styles.nextSection}>
        <h2 className={styles.year}>2024</h2>
        <div className={styles.nextContent}>
          <div className={styles.textSection}>
            <h3 className={styles.subtitle}>WorldSkill Competitions</h3>
            <p>
              The WorldSkills National Competition 2024 was successfully hosted at Dedan Kimathi University of Technology (DeKUT), bringing together the brightest minds in Mechatronics and Mechanical Engineering Computer-Aided Design (CAD). This prestigious event highlighted the importance of fostering critical skills among the youth, industries, government, and educational institutions.
            </p>
            <p>
              The competition created a unique platform to unite stakeholders in a collaborative effort to nurture the talent that will shape the future of our nation.
            </p>

            {/* Radio Button Options */}
            <div className={styles.options}>
              {[
                "WorldSkills Kenya",
                "Competent Instructors",
                "Global Vocational Competition",
                "Tvet Training",
              ].map((option, index) => (
                <label key={index} className={styles.optionLabel}>
                  <input type="radio" name="next-skill-category" className={styles.radioButton} />
                  {option}
                </label>
              ))}
            </div>

            {/* Buttons */}
            <div className={styles.buttons}>
              <button className={styles.readMore}>Read More</button>
              <button className={styles.visit}>Visit WorldSkill</button>
            </div>
          </div>
          <div className={styles.imageSection}>
            <div className={styles.imagePlaceholder}>Image Placeholder</div>
          </div>
        </div>
      </section>

      {/* {2023 section} */}
      <section className={styles.twentytwentythree}>
      <div className={styles.imagecontainer}>
      <img src="https://via.placeholder.com/800x400" alt="WorldSkill Competition" className={styles.competitionimage}/>

      </div>
      <div className={styles.contentcontainer}>
        <h2 className={styles.year}>2023</h2>
        <h3 className={styles.title}>WorldSkill Competitions</h3>
        <p className={styles.description}>
          To organize successful Mechatronics skills competitions, World Skills Kenya has selected
          Prof. Eng. Jean Bosco Byiringiro (Ph.D, Reg. Eng.) to champion mechatronics skills both
          locally and internationally through preparing excellent competitors at Siemens
          Mechatronics Centre. Cash-for-houses.org utilizes advanced technologies to expedite sales
          and ensure customer satisfaction.
        </p>
        <button className={styles.readmore}>Read More</button>
      </div>
     {/* </div> */}
    </section>

    {/* {2022Section} */}
    <section className={styles.worldSkills2022Section}>
      <h2 className={styles.year2022}>2022</h2>
      
      <div className={styles.container2022}>
        {/* Text Content */}
        <div className={styles.textBox2022}>
          <h3 className={styles.subtitle2022}>WorldSkill Competitions</h3>
          <p>
            To organize successful Mechatronics skills competitions, World Skills Kenya has selected 
            <strong> Prof. Eng. Jean Bosco Byiringiro (Ph.D, Reg. Eng.)</strong> to champion mechatronics skills both locally and internationally. 
            The goal is to prepare excellent competitors at Siemens Mechatronics Centre.
          </p>
          <p>
            Cash-for-houses.org utilizes advanced technologies to expedite sales and ensure customer satisfaction:
          </p>
          
          {/* Radio Button Options */}
          <div className={styles.options2022}>
            {[
              "Advanced tech: Cutting-edge, industry-leading tools.",
              "Guaranteed sale: Profit or full refund.",
              "Experienced staff: Handle every inquiry stage.",
              "Simplified selling: Customer satisfaction assured.",
            ].map((option, index) => (
              <label key={index} className={styles.optionLabel2022}>
                <input type="radio" name="skills-2022" className={styles.radioButton2022} />
                {option}
              </label>
            ))}
          </div>

          {/* Read More Button */}
          <button className={styles.readMore2022}>Read More</button>
        </div>

        {/* Image Section */}
        <div className={styles.imageContainer2022}>
          <div className={styles.gradientOverlay}></div>
          <img
            src={image1} 
            alt="Mechatronics students working on a project"
            className={styles.mainImage2022}
          />
        </div>
      </div>
    </section>

    
    {/* Patners */}
    <section className={styles.partnersSection}>
      <h1 className={styles.partnersTitle}>Partners</h1>
      <p className={styles.partnersDescription}>
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it.
      </p>
    
      {/* Partners Logos Carousel */}
      <div className={styles.partnersCarousel}>
        <button className={styles.carouselButtonLeft}>&lt;</button>
        
        <div className={styles.partnerLogo}></div>
        <div className={styles.partnerLogo}></div>
        <div className={styles.partnerLogo}></div>
        <div className={styles.partnerLogo}></div>
        <div className={styles.partnerLogo}></div>
        <div className={styles.partnerLogo}></div>
    
        <button className={styles.carouselButtonRight}>&gt;</button>
      </div>
    </section>
    </>)
};

export default WorldSkills;
