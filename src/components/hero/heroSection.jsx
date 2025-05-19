import React, { useState, useEffect } from "react";
import styles from "./heroSection.module.css";
import { useNavigate } from "react-router-dom";



const teamMembers = [
  { name: "Administration", image: "/images/team/prof.JPG", link: "/administration" },
  { name: "Virtual Mechatronics", image: "/images/team/edwin.png", link: "/virtual-mechatronics" },
  { name: "Software Developers", image: "/images/team/cheldean.jpg", link: "/software-developers" },
  { name: "CAD Modelling", image: "/images/team/jere.jpg", link: "/cad-modelling" },
  { name: "Research", image: "/images/team/elsie.jpg", link: "/research" },
];

const TeamCarousel = () => {
  const navigate = useNavigate()

  const handleClick = (name) => {
    navigate("/about-teams", { state: { departmentName: name } });
  };
  

  return (
    <>
    <div className={styles.carouselContainers}>
      <h2>
        Meet our <span className={styles.highlight}>Talented</span> team members
      </h2>
      <p className={styles.subtitle}>The Brains Behind Virtual Mechatronics Labs</p>
      <p>Our diverse team of skilled professionals is dedicated to driving innovation and excellence in our projects</p>
      <div className={styles.blogcarousel}>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={styles.blogcards}
            onClick={() => handleClick(member.name)}
          >
            <img src={member.image} alt={member.name} className={styles.image}/>
            <p className={styles.blogcardTitle} >{member.name}</p>
          </div>
        ))}
      </div>


    </div>

    </>
  );
};
const BlogDetails = [
  {
    name: "Virtual Reality",
    image: "/images/team/prof.JPG",
    link: "/virtual-reality",
  },
  {
    name: "Software Blogs",
    image: "/images/team/edwin.png",
    link: "/software-blogs",
  },
  
];

const BlogCarousel = () => {
  const navigate = useNavigate();

  const handleClick = (name) => {
    navigate("/Blogs/blogs", { state: { departmentName: name } });
  };

  return (
    <div className={styles.blogContainers}>
      <h2 className={styles.blogheading}>
        Virtual Mechatronics Labs <span className={styles.highlight}>Blogs</span>
      </h2>
      <p className={styles.blogsubtitle}>
        Beyond Reality: <span className={styles.highlight}> Exploring the future of <strong>Tech</strong>,{" "}
          <br />
          One <strong>Post</strong> at a Time
        </span>
      </p>
      <p className={styles.blogdescription}>
        Our diverse team of skilled professionals is dedicated to driving
        innovation and excellence in our projects.
      </p>

      <div className={styles.blogcarousel}>
        {BlogDetails.map((member, index) => (
          <div
            key={index}
            className={styles.blogcard}
            onClick={() => handleClick(member.name)}
          >
            <img src={member.image} alt={member.name} className={styles.image} />
            <p className={styles.blogcardTitle}>{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Hero = ({ page }) => {
  const [timeLeft, setTimeLeft] = useState("00:00:00");
  const navigate = useNavigate();

  const handleApplication = () => {
    window.open("https://siemensdekut.dkut.ac.ke", "_blank");
  };

  useEffect(() => {
    const targetDate = new Date("2025-04-30T23:59:59");
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
          <div className={styles.leftSection}>
            <h1 className={styles.title}>Virtual Mechatronics Labs</h1>
            <p className={styles.subtitle}>Revolutionizing Education In Africa</p>
            <p className={styles.description}>
              Welcome to the{" "}
              <a
                href="https://siemensdekut.dkut.ac.ke/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Siemens Mechatronics
              </a>{" "}
              <br />
              <a
                href="https://siemensdekut.dkut.ac.ke/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Certification Centre
              </a>{" "}
              in Africa
            </p>
            <p className={styles.countdown}>SMCPC intake ongoing. Closes in:</p>
            <div className={styles.countdownBoxes}>
              {timeLeft.split(":").map((unit, index) => (
                <div key={index} className={styles.countdownBox}>
                  {unit}
                </div>
              ))}
            </div>
            <div className={styles.buttons}>
              <button className={styles.applyButton} onClick={handleApplication}>
                Apply
              </button>
              <button className={styles.detailsButton}>More Details</button>
            </div>
          </div>

          <div className={styles.rightSection}>
            <div className={styles.overlapContainer}>
              <div className={styles.circleBottom}></div>
              <div className={styles.circleTop}>
                <video
                  src="/images/background2.mp4"
                  autoPlay
                  loop
                  muted
                  alt="Robotic Lab"
                  className={styles.heroImage}
                />
              </div>
            </div>
          </div>
        </>
      )}
      {page === "about" && (
        <section className={styles.aboutSection}>
          <div className={styles.aboutSections}></div>
          <div className={styles.aboutCircle}></div>
          <div className={styles.aboutCircle2}></div>
        <div className={styles.contentContainer}>
          
          {/* Left Side - Image */}
          <div className={styles.imageContainers}>
            <img  src="/images/about/12.jpg" alt="VR Lab Setup" className={styles.image} />
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
          {/* <h1 className={styles.title}>Meet Our Teams</h1>
          <p className={styles.subtitle}>The Brains Behind Virtual Mechatronics Lab</p>
          <p className={styles.description}>
            Discover the talented individuals who make our lab a success.
          </p> */}
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
    {page === "worldSkills" && (
      <div className={styles.worldcontainer}>
        <div className={styles.square1}></div>
        <div className={styles.square2}></div>
        <div className={styles.square3}></div>
        <div className={styles.square4}></div>
        <div className={styles.square5}></div>
        <div className={styles.square6}></div>
        <h2 className={styles.worldSkillsTitle}>World<span className={styles.highlight}>Skills </span>
          <br />
          <span className={styles.highlight}>Competitions</span></h2>
        </div>
    )}

{page === "ai" && (
  <div className={styles.aiHeroContainer}>
    {/* Left Text Section */}
    <div className={styles.aiText}>
      <h1>
        <span className={styles.aiPurple}>Artificial</span> <br />
        <span className={styles.aiBlack}>Intelligence</span>
      </h1>
      <p className={styles.aiDescription}>
        Bridging the gap between physical limitations and mechatronics facilities, we make advanced engineering accessible through immersive virtual experiences
      </p>
    </div>

    {/* Right White Box Placeholder */}
    <div className={styles.aiImagePlaceholder}></div>
  </div>
)}

{page === "ar" && (
  <div className={styles.aiHeroContainer}>
    {/* Left Text Section */}
    <div className={styles.aiText}>
      <h1>
        <span className={styles.aiPurple}>Augmented</span> <br />
        <span className={styles.aiBlack}>Reality</span>
      </h1>
      <p className={styles.aiDescription}>
        Bridging the gap between physical limitations and mechatronics facilities, we make advanced engineering accessible through immersive virtual experiences
      </p>
    </div>

    {/* Right White Box Placeholder */}
    <div className={styles.aiImagePlaceholder}></div>
  </div>
)}

{page === "vr" && (
  <div className={styles.aiHeroContainer}>
    {/* Left Text Section */}
    <div className={styles.aiText}>
      <h1>
        <span className={styles.aiPurple}>Virtual</span> <br />
        <span className={styles.aiBlack}>Reality</span>
      </h1>
      <p className={styles.aiDescription}>
        Bridging the gap between physical limitations and mechatronics facilities, we make advanced engineering accessible through immersive virtual experiences
      </p>
    </div>

    {/* Right White Box Placeholder */}
    <div className={styles.aiImagePlaceholder}></div>
  </div>
)}

{page === "prosthetics" && (
  <div className={styles.aiHeroContainer}>
    {/* Left Text Section */}
    <div className={styles.aiText}>
      <h1>
        <span className={styles.aiPurple}>Prosthetics</span> <br />
        <span className={styles.aiBlack}>And Orthotics</span>
      </h1>
      <p className={styles.aiDescription}>
        Bridging the gap between physical limitations and mechatronics facilities, we make advanced engineering accessible through immersive virtual experiences
      </p>
    </div>

    {/* Right White Box Placeholder */}
    <div className={styles.aiImagePlaceholder}></div>
  </div>
)}

{page === "newsletters" && (
  <div className={styles.newsletterHero}>
    <h1 className={styles.newsletterTitle}>
      Virtual Mechatronics Labs <br />
      <span className={styles.newsletterSubtitle}>Newsletters</span>
    </h1>
  </div>
)}
{page === "blogs" && (
        <div className={styles.heroContent}>
          {/* <h1 className={styles.title}>Meet Our Teams</h1>
          <p className={styles.subtitle}>The Brains Behind Virtual Mechatronics Lab</p>
          <p className={styles.description}>
            Discover the talented individuals who make our lab a success.
          </p> */}
          <BlogCarousel />
        </div>
      )}
{page === "contact" && (
  <div className={styles.newsletterHero}>
    <h1 className={styles.newsletterTitle}>
      We Value your<span className={styles.highlight}> FeedBacks</span> <br />
      <span className={styles.newsletterSubtitle}>Reach Us Today!!</span>
    </h1>
  </div>
)}
{page === "terms" && (
  <div className={styles.newsletterHero}>
    <h1 className={styles.newsletterTitle}>
      Please Read Our<span className={styles.highlight}> Terms & Conditions</span> <br />
      <span className={styles.newsletterSubtitle}>Understand Your Rights and Responsibilities</span>
    </h1>
  </div>
)}
{page === "privacy" && (
  <div className={styles.newsletterHero}>
    <h1 className={styles.newsletterTitle}>
      Our Commitment to Your<span className={styles.highlight}> Privacy</span> <br />
      <span className={styles.newsletterSubtitle}>Learn How We Protect Your Information</span>
    </h1>
  </div>
)}


    </section>
  );
};

export default Hero;
