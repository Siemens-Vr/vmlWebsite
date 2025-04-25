import React from "react";
import data from "../../assets/data";
import styles from "./team.module.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Team = ({ name }) => {
  const department = data.find(
    (d) => d.department.toLowerCase() === name.toLowerCase()
  );

  if (!department) {
    return <div className={styles.notFound}>Department "{name}" not found.</div>;
  }

  return (
    <div className={styles.teamContainer}>
      <h2 className={styles.departmentTitle}>{department.department}</h2>
      <div className={styles.membersGrid}>
        {department.members.map((member, index) => (
          <div key={index} className={styles.card}>
            <img
              src={member.image}
              alt={member.name}
              className={styles.image}
            />
            <h3 className={styles.name}>{member.name}</h3>
            <p className={styles.position}>{member.position}</p>
            <div className={styles.icons}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:someone@example.com">
                <FaEnvelope />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
