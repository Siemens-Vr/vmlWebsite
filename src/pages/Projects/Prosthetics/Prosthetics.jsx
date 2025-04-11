import React from "react";
import styles from "./Prosthetics.module.css";
import Hero from "../../../components/hero/heroSection"; // Ensure the Hero component exists

const Prosthetics = () => {
  return (
    <div className={styles.prostheticsPage}>
      {/* Hero Section */}
      <Hero page="prosthetics" />

      <section className={styles.prostheticsSection}>
        <div className={styles.imageContainer}>
          <img
            src="/path/to/your/image.jpg"
            alt="Prosthetics Project"
            className={styles.mainImage}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Prosthetics</h2>
          <p className={styles.description}>
            By using cutting-edge technologies such as artificial intelligence (AI),
            advanced manufacturing, and photogrammetry, the project aims to revolutionize
            the manufacture of prosthetics in Africa. The project is a collaboration
            between three universities: Dedan Kimathi University in Kenya and Carnegie Mellon
            University in Rwanda. The project brings together researchers, developers,
            and scholars to help Africa produce affordable prosthetics.
          </p>
          <p className={styles.description}>
            The project’s concept is to create a system where amputees can take photos of
            their stump using a mobile phone and a socket will be generated from the images.
            Patients can also upload photos of their remaining limbs and a prosthetic will be
            generated to match their existing limb. The project will also research ways to
            improve the reliability of photogrammetry in 3D image reconstruction and the
            manufacturing of prosthetic sockets to ensure patient comfort and durability.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Prosthetics;