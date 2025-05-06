
import React, { useState, useEffect, useRef } from "react";
import Hero from "../../../components/hero/heroSection"; 
import styles from './AI.module.css';;


const milestones = [
    {
      title: "End of Year 1: AR-D2D-IoT prototype",
      description: `This milestone involves completion of the AR-D2D-IoT prototype and initial testing.
  
  Create a robust augmented reality (AR) model integrated with device-to-device (D2D) communication and Internet of Things (IoT) technologies to enhance real time data sharing and visualization in geothermal exploration.`,
    },
    {
      title: "End of Year 2: Visualization tools, trials and user feedback",
      description: `This milestone involves completion of the AR-D2D-IoT prototype and initial testing.
  
  Create a robust augmented reality (AR) model integrated with device-to-device (D2D) communication and Internet of Things (IoT) technologies to enhance real time data sharing and visualization in geothermal exploration.
  
  **Output:** Functional AR-D2D-IoT application, 3D visualization toolkit, field trial report.
  
  **Evidences:** Testing reports, user feedback, prototype demonstrations.`,
    },
    {
      title: "End of Year 3: Completion",
      description: `This milestone involves completion of the AR-D2D-IoT prototype and initial testing.
  
  Create a robust augmented reality (AR) model integrated with device-to-device (D2D) communication and Internet of Things (IoT) technologies to enhance real time data sharing and visualization in geothermal exploration.`,
    },
  ];
    

const AI = () => {
    const [selected, setSelected] = useState(1);
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <Hero page="ai" />
    
    {/* LARGER-Africa Section */}
    <section className={styles.container}>
      <div className={styles.videoPlaceholder}></div>

      <div className={styles.content}>
        <h2 className={styles.title}>LARGER-Africa (Eureka Geothermal Energy)</h2>
        <p className={styles.description}>
          This project aims to develop an innovative augmented reality (AR) model integrated with device-to-device (D2D)
          communication and the Internet of Things (IoT) for enhancing geothermal exploration. Key objectives include improving
          data visualization through 3D techniques, reducing analysis time, enhancing field efficiency, enabling real-time data
          capture, fostering collaboration, building capacity, and promoting sustainability. Additionally, the project seeks to
          strengthen international cooperation and secure intellectual property rights.
        </p>

        <p className={styles.impactTitle}>Impact Goals:</p>
        <ul className={styles.impactList}>
          <li>
            Promote the adoption of new technologies in geothermal exploration across Africa.
          </li>
          <li>
            Enhance collaboration between research and industry to foster innovation in the geothermal sector.
          </li>
          <li>
            Advance knowledge and methodologies in geothermal exploration and data analysis.
          </li>
        </ul>
      </div>
    </section>

    {/* Project Milestone Section */}
    <section>
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Project Milestones</h2>
      <div className={styles.cardsContainer}>
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className={`${styles.card} ${
              selected === index ? styles.active : ""
            }`}
            onClick={() => setSelected(index)}
          >
            <h3 className={styles.title}>{milestone.title}</h3>
            <p className={styles.description}>{milestone.description}</p>
          </div>
        ))}
      </div>
    </div>
    </section>


    </div>
  );
}

export default AI;