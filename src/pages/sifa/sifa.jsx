import React , {useState}  from "react";
import styles from "./sifa.module.css";
import Hero from "../../components/hero/heroSection";
import sifaImage from "../../assets/sifaimage.jpg";
import vrLabImage from "../../assets/sifaimage.jpg"; 
import { Minus,Plus } from "lucide-react";

const Sifa = () => {

  const milestones = [
    {
      id: 1,
      title: "Milestone 1: Preparatory Phase",
      content: `
        This phase focuses on finalizing the project workplan and budget, ensuring all resources are in place.
        - Activity 1: Preparing Final Project Workplan and Budget
        - Engaging with project partners & SIFA FC - March 2024
        - Writing Final Workplan & Budget - March 2024
        - Process Listing of required inputs for Milestone 1 - March 2024
        - Development of desktop-based Metaverse platform - March 2024
        - Development of a Monitoring and Evaluation strategy - April 2024
        - Writing Inception report, quarterly report, milestone report - April 2024
      `
    },
  
    {
      id: 2,
      title: "Milestone 2: Market Analysis and Market Validation Plan",
      content:`
         This milestone involves conducting market surveys and developing tools to validate findings.
        -Activity 2: Carry out a Market Survey
           -Integrating physical infrastructure with metaverse platform - May 2024
           -Process Listing of inputs for Milestone 2 - May 2024
           -Preparing market analysis tools - July 2024
        -Activity 3: Preparing Market Validation Plan
           -Develop a market validation plan - July 2024
           -Develop a web-based metaverse platform - July 2024
           -Develop a project website - July 2024
           -Prepare Quarterly (1 & 2) report and milestone reports - May & August 2024
           -Process listing inputs for 4IR Automation system - August 2024
           -Development of digital content for the web-based metaverse platform - August 2024
              `
    },
    {
      id: 3,
      title: "Milestone 3: Market Validation on Site",
      content:`
        This milestone focuses on validating the market survey findings through direct engagement with stakeholders.
        Activity 4: Conducting market validation on site
          Selecting 30 trainees comprising of 10 TVET Instructors and 20 TVET Students - September 2024
          Process listing required inputs for Milestone 3 - October 2024
          Develop training manual and digital content harmonized with 4IR skill occupation standards - October 2024
          Provision of physical and blended training to selected TVET trainees - November 2024
          Develop and allocate 10 distinctive projects to TVET trainees - December 2024
        `
    },
    {
      id: 4,
      title: "Milestone 4: Reporting and Recommendations",
      content:`
    This phase entails documenting all findings and providing actionable recommendations based on the survey data.
    Activity 5: Writing/preparing the project completion Report/document
        Preparation of metaverse platform documentation and implementation plan - May 2025
    Activity 6: Writing the Final Business Plan
        Development of a business plan - May 2025
        Prepare Quarterly (5 & 6) report and milestone reports - May 2025 & August 2025
    Activity 7: Conducting Final Project Audit
        Drafting final report (project completion report) - August 2025
        Facilitating Project auditing process - August 2025
        Submitting Final report (Project completion report) - August 2025
    `
    }
  ];
  const [active, setActive] = useState(null);
  const ProjectMilestones = () => {
   
  };
    const handleToggle = (id) => {
      setActive((prevActive) => (prevActive === id ? null : id));
    };

  const roles = [
      {
        title: 'Certification Programs',
        description:
          'Provides Siemens-certified mechatronics training, ensuring students meet international industry standards.',
      },
      {
        title: 'Technical Expertise',
        description:
          'Offers hands-on training in mechatronics, integrating mechanical engineering, electronics, and computer science.',
      },
      {
        title: 'Industry Alignment',
        description:
          'Ensures training aligns with latest technological advancements and industry needs, enhancing graduate employability.',
      },
      {
        title: 'Advanced VR Lab',
        description:
          'Enhances training by integrating virtual reality technology into the curriculum.',
      },
    ];
 
    const accordionData = [
      {
        title: "Comprehensive Skills Development",
        content: (
          <>
            <strong>SIFA Framework:</strong> <br />
            Provides the overarching structure and support for vocational and technical training across Africa. <br />
            <strong>Siemens Centre:</strong> <br />
            Delivers high-quality mechatronics training and certification, ensuring that students gain relevant, industry-standard skills.
          </>
        ),
        initiallyOpen: true
      },
      {
        title: "Industry-Relevant Training",
        content: "Content about industry-relevant training goes here.",
        initiallyOpen: false
      },
      {
        title: "Enhanced Learning Experience",
        content: "Details on enhanced learning experiences go here.",
        initiallyOpen: false
      },
      {
        title: "Economic and Regional Development",
        content: "Explanation of economic and regional development benefits.",
        initiallyOpen: false
      }
    ];
  
    // const [active, setActive] = useState(null);
    const [openIndices, setOpenIndices] = useState(
      accordionData.map((item) => item.initiallyOpen)
    );
  
    // const handleToggle = (id) => {
    //   setActive((prevActive) => (prevActive === id ? null : id));
    // };
  
    const toggleItem = (index) => {
      setOpenIndices((prev) =>
        prev.map((open, i) => (i === index ? !open : open))
      );
    };
    

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
  <div className={styles.purposecontainer}>
      <h2 className={styles.purposetitle}>Purpose</h2>
      <div className={styles.purposecontent}>
        <div className={styles.purposeimagewrapper}>

          <img
            
            src={sifaImage}
            alt="SIFA Presentation"
            className={styles.purposeimage}
          />
        </div>
        <div className={styles.purposetext}>
          <h3 className={styles.purposeheading}>Skills Initiative For Africa (SIFA)</h3>
          <p className={styles.purposedescription}>
            SIFA is designed to address the skills gap in Africa by strengthening
            Technical and Vocational Education and Training. The initiative aims to
            enhance the employability of young Africans and align educational outcomes
            with the demands of the job market.
          </p>
          <p className={styles.purposesubheading}>Key Stakeholders:</p>
          <ul className={styles.purposestakeholders}>
            <li><span className={styles.purposecircle}></span>African Union Commission (AUC)</li>
            <li><span className={styles.purposecircle}></span>African Union Development Agency (AUDA-NEPAD)</li>
            <li><span className={styles.purposecircle}></span>German Government</li>
            <li><span className={styles.purposecircle}></span>European Union</li>
          </ul>
        </div>
      </div>
    </div>

{/* {MIlestone section} */}
    <section className={styles.milestonesSection}>
        <h2 className={styles.title}>Project Milestones</h2>
        <div className={styles.grid}>
          {milestones.map((milestone) => {
            const isActive = active === milestone.id;
            const preview = milestone.content.split(" ").slice(0, 15).join(" ") + "...";

            return (
              <div
                key={milestone.id}
                className={`${styles.card} ${isActive ? styles.activeCard : ""}`}
                onClick={() => handleToggle(milestone.id)}
              >
                <div className={styles.puzzleIcon}>{`0${milestone.id}`}</div>
                <h3 className={styles.milestoneTitle}>{milestone.title}</h3>
                <p className={styles.milestoneContent}>
                  {isActive ? milestone.content : preview}
                </p>
                <button
                  className={`${styles.readMore} ${isActive ? styles.readMoreActive : ""}`}
                >
                  {isActive ? "Show Less" : "Read More"}
                </button>
              </div>
            );
          })}
        </div>
      </section>


     {/* {role section} */}
  <section className={styles.roleSection}>
  <h2 className={styles.sectionLabel}>Role</h2>
  <h3 className={styles.sectionTitle}>Siemens Mechatronics Certification Centre</h3>
  <p className={styles.sectionDescription}>
    The Siemens Mechatronics Certification Centre at Dedan Kimathi University of Technology is a crucial component of SIFA, offering specialized training in mechatronics.
  </p>

  <a
  href="https://siemens.dkut.ac.ke/"
  className={styles.readMoreBtn}
  target="_blank"
  rel="noopener noreferrer"
>
  Read More
</a>

  <div className={styles.roleGrid}>
    {roles.map((role, index) => (
      <div className={styles.roleCard} key={index}>
        <div className={styles.iconPlaceholder}></div>
        <h4 className={styles.cardTitle}>{role.title}</h4>
        <p className={styles.cardText}>{role.description}</p>
      </div>
    ))}
  </div>
</section>

<section className={styles.vrSection}>
      <h2 className={styles.vrHeading}>Features</h2>

      <div className={styles.vrContentContainer}>
        {/* Text Section */}
        <div className={styles.vrTextSection}>
          <h3 className={styles.vrSubheading}>Advanced Virtual Reality Lab</h3>
          <p className={styles.vrParagraph}>
            The Advanced Virtual Reality Lab at Dedan Kimathi University of Technology enhances training by integrating virtual reality technology into the curriculum.
          </p>

          <div className={styles.options}>
            {[
              "Immersive Simulations: Uses VR to create interactive simulations of mechatronic systems.",
              "Hands-On Training: Provides practical learning opportunities without physical equipment.",
              "Innovative Learning: Prepares students for future roles by incorporating advanced VR technology.",
            ].map((option, index) => (
              <label key={index} className={styles.optionLabel}>
                <input type="radio" name="vr-feature" className={styles.radioButton} />
                {option}
              </label>
            ))}
          </div>

          {/* Placeholder boxes */}
          <div className={styles.placeholders}>
            <div className={styles.placeholderBox}></div>
            <div className={styles.placeholderBox}></div>
          </div>
        </div>

        {/* Image Section */}
        <div className={styles.vrImageContainer}>
          <img
            src={vrLabImage}
            alt="Virtual Reality Lab"
            className={styles.vrImage}
          />
        </div>
      </div>
    </section>

    {/* {Intergration section} */}
    <section className={styles.accordionSection}>
        <h2 className={styles.interheading}>Integration and Impact</h2>

        {accordionData.map((item, index) => (
          <div key={index} className={styles.accordionItem}>
            <div
              className={`${styles.accordionHeader} ${
                openIndices[index] ? styles.openHeader : ""
              }`}
            >
              <span className={styles.title}>{item.title}</span>
              <button
                className={`${styles.toggleButton} ${
                  openIndices[index] ? styles.minus : styles.plus
                }`}
                onClick={() => toggleItem(index)}
              >
                {openIndices[index] ? <Minus size={16} /> : <Plus size={16} />}
              </button>
            </div>

            {openIndices[index] && (
              <div className={styles.accordionContent}>
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </section>


  </section>

  </>
  );
};

export default Sifa;
