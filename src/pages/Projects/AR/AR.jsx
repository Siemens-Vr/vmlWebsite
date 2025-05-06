import React, { useState, useEffect, useRef } from "react";
import Hero from "../../../components/hero/heroSection"; 
import styles from './AR.module.css';

const AR = () => {
return (
    <div className={styles.container}>
      {/* Hero Section */}
      <Hero page="ar" />
    
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
    </div>
   );
};

export default AR;
