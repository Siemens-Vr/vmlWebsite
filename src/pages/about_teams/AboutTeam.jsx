import React, { useEffect ,useState } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../../components/hero/heroSection";
import data from "../../assets/data";
import styles from './aboutteams.module.css';

const AboutTeams = () => {
  const location = useLocation();

    const name = location.state?.departmentName || "Administration";
  
  const department = data.find(
    (d) => d.department.toLowerCase() === name.toLowerCase()
  );

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <Hero page="about_teams" />
      <div className={styles.aboutTeams}>
      {department ? (
        <div className={styles.departmentSection}>
          <h2 className={styles.departmentTitle}>{department.department}</h2>
          <div className={styles.membersGrid}>
            {department.members.map((member, index) => (
              <div
                key={index}
                className={`${styles.memberCard} ${
                  expandedIndex === index ? styles.expanded : ""
                }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className={styles.memberImage}
                />
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberPosition}>{member.position}</p>

                {member.description && (
                  <>
                    <p className={styles.memberDescription}>
                      {expandedIndex === index
                        ? member.description
                        : `${member.description.slice(0, 120)}...`}
                    </p>
                    <button
                      onClick={() => toggleReadMore(index)}
                      className={`${styles.readMoreBtn} ${
                        expandedIndex === index ? styles.active : ""
                      }`}
                    >
                      {expandedIndex === index ? "Show Less" : "Read More"}
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.notFoundMessage}>
          Department "{name}" not found.
        </div>
      )}
    </div>
    </>
  );
};

export default AboutTeams;
