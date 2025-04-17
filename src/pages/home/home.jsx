'use client';

import React, { useState, useEffect, useRef } from "react";
import styles from './home.module.css';
import Hero from "../../components/hero/heroSection"; 
import CountUp from 'react-countup';
import { FaUsers, FaProjectDiagram } from 'react-icons/fa'; 
import TestimonialSection from "../../components/caurosel/testimonial";


// const testimonials = [
//   {
//     text: "Virtual Mechatronics Lab has transformed how we teach automation and robotics.",
//     name: "John Doe",
//     position: "Professor of Engineering",
//     avatar: "/images/avatar1.jpg",
//   },
//   {
//     text: "The immersive simulations make learning incredibly engaging!",
//     name: "Jane Smith",
//     position: "Mechatronics Student",
//     avatar: "/images/avatar2.jpg",
//   },
//   {
//     text: "The immersive simulations make learning incredibly engaging!",
//     name: "Jane Smith",
//     position: "Mechatronics Student",
//     avatar: "/images/avatar2.jpg",
//   },
//   {
//     text: "A game-changer for industrial training in Africa.",
//     name: "Dr. Williams",
//     position: "Industry Expert",
//     avatar: "/images/avatar3.jpg",
//   },
// ];

// const TestimonialSection = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const observerRef = useRef(null);

//   useEffect(() => {
//     observerRef.current = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const newIndex = testimonials.findIndex(
//               (t) => t.text === entry.target.dataset.text
//             );
//             if (newIndex !== -1) {
//               setActiveIndex(newIndex);
//             }
//           }
//         });
//       },
//       { threshold: 0.6 }
//     );

//     const elements = document.querySelectorAll(`.${styles.testimonialCard}`);
//     elements.forEach((el) => observerRef.current.observe(el));

//     return () => observerRef.current.disconnect();
//   }, []);

//   return (
//     <section className={styles.testimonialSection}>
//       <h1 className={styles.testimonialTitle}>Testimonial</h1>
//       <h2 className={styles.testimonialHeading}>What Our Clients Say</h2>
//       <p className={styles.testimonialDescription}>
//         The virtual mechatronics lab has had the great pleasure of working with 
//         organisations and individuals around the world. Here are the words they have to say.
//       </p>

//       <div className={styles.testimonialWrapper}>
//         {testimonials.map((testimonial, index) => (
//           <div
//             key={index}
//             className={`${styles.testimonialCard} ${
//               index === activeIndex ? styles.active : styles.small
//             }`}
//             data-text={testimonial.text}
//           >
//             <span className={styles.quoteIcon}>❝</span>
//             <p className={styles.testimonialText}>{testimonial.text}</p>
//             <div className={styles.clientInfo}>
//               <img src={testimonial.avatar} alt={testimonial.name} className={styles.clientAvatar} />
//               <div>
//                 <h3 className={styles.clientName}>{testimonial.name}</h3>
//                 <p className={styles.clientPosition}>{testimonial.position}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination Dots */}
//       <div className={styles.pagination}>
//         {testimonials.map((_, index) => (
//           <span
//             key={index}
//             className={index === activeIndex ? styles.dotActive : styles.dot}
//           ></span>
//         ))}
//       </div>
//     </section>
//   );
// };


const Home = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <Hero page="home" />

   

          {/* About Virtual Mechatronics Lab */}
          <section className={styles.aboutSection}>
        <div className={styles.contentWrapper}>
        <div className={styles.overlapContainer}>
        <div className={styles.circleBottom}></div>
        <div className={styles.circleTop}>
        <img
          src="/images/WhatsApp Image 2025-02-05 at 17.50.03_fc9783af.jpg"
          alt="Mechatronics"
          className={styles.image}
        />
        <div className={styles.smallCircle}></div> 
      </div>
          </div>
          <>
          <div className={styles.textContainer}>
            <h2>Virtual Mechatronics Labs</h2>
            <p>
              Our labs leverages the latest technologies to create highly detailed and interactive simulations of mechatronic systems. This innovative approach significantly enhabces the design, development and deployment processes
              resulting in more efficient, effective, and groundbreaking solutions in the field of mechatronics innovation.
            </p>
            <p>The lab embodies the cutting edge of technological integration, pushing the boundaries of what is possible in mechatronic system design and Integration of Virtual Reality and Digital Technologies</p>
            <button className={styles.readMore}>Read More</button>
          </div>
          </>
        </div>
        
      </section>
      <div className={styles.rightSemiCircle}>
        <div className={styles.semiCircle}></div>
      </div>
      <div className={styles.sectionDivider}>
  <span className={styles.circle}>
    <img src="/images/dot.jpeg" alt="Divider Icon" />
  </span>
</div>

      {/* About Virtual Reality */}
      <section className={styles.aboutSection}>
      <div className={styles.rightSemiCircle1}>
        <div className={styles.semiCircle1}></div>
      </div>
        <div className={styles.contentWrapperReverse}>
          
          <div className={styles.textContainer}>
            <h2>About Virtual Reality</h2>
            <p>
              Virtual Reality immerses you in computer-generated environments, seamlessly blending the physical and digital worlds. 
              Explore and interact with 3D worlds through advanced simulations, 
              opening new possibilities for education, entertainment, and innovation.
            </p>
            <p> In education, VR enhances accessibility by allowing students to participate remotely and interactively. It makes STEM subjects more engaging through virtual experiments, while providing safe, realistic training scenarios for hands-on learning. Additionally, VR supports personalized learning by adapting content to each student's pace and needs, promoting better understanding and retention.</p>
            <button className={styles.readMore}>Read More</button>
          </div>
          <div className={styles.overlapContainer}>
        <div className={styles.circleBottom1}></div>
        <div className={styles.circleTop1}>
        <img
          src="/images/WhatsApp Image 2025-02-05 at 17.50.03_fc9783af.jpg"
          alt="Mechatronics"
          className={styles.image}
        />
        <div className={styles.smallCircle1}></div> 
      </div>
          </div>
        </div>
      </section>

     
      {/*Why choose us*/}
    <section className={styles.chooseUs}>
        <div className="text-center">
      <h1 className={styles.headings}>Why Choose Us</h1>
          <div className={styles.textContainer}>
            
            <h2>Experience Mechatronics Excellence</h2>
            <p className={styles.paraChoose}>We specialize in virtual mechatronics, combining VR, robotics, and automation to deliver seamless experiences and optimized solutions. Partner with us to transform your processes and drive your business into the future.</p>
            <ol className={styles.lists}>
               <li>Unmatched expertise in virtual mechatronics education</li>
               <li>Immersive learning experiences through innovative integration</li>
               <li>Streamlined processes for enhanced educational efficiency</li>
            </ol>
          </div>
          <div className={styles.contentWrapperReversed}>
          <div className={styles.imageWrapper}>
            <img
              src="/images/VR-Machine-assembling.jpeg"
              alt="Mechatronics"
              className={styles.images}
            />
            <div className={styles.statsContainer}>
      <div className={styles.rectangleOne}>
        <FaUsers className={styles.icon} />
        <h2 className={styles.h2}>
          <CountUp start={1} end={9999} duration={10} delay={1.0} suffix=" +"/>
        </h2>
        <p className={styles.p}>Happy Students</p>
      </div>

      <div className={styles.rectangleTwo}>
        <FaProjectDiagram className={styles.icon} />
        <h2 className={styles.h2}>
        <CountUp start={1} end={9999} duration={10} delay={1.0} suffix=" +"/>
        </h2>
        <p className={styles.p} >Projects Completed</p>
      </div>
    </div>
          </div>
        </div>

        </div>
    </section>


  {/* Ongoing Projects */}
  <section className={styles.projectsSection}>
        <div className={styles.contentprojectWrapper}>
          <h1 className={styles.heading}>Ongoing Projects</h1>
          <h2 className={styles.subHeading}>Explore Our Recent Projects</h2>
          <div className={styles.projectsContainer}>
          <div className={styles.projectCard}>
            <div
              className={styles.imageOverlay}
              style={{
                backgroundImage: `linear-gradient(to left, rgba(38, 34, 98), rgba(30, 30, 110, 0)), url('/images/prosthetics.png')`,
              }}
            ></div>
            <div className={styles.textprojectContainer}>
              <h3>Prosthetics</h3>
              <p>
                Virtual Reality immerses you in computer-generated environments, seamlessly blending the physical and digital worlds.
              </p>
            </div>
          </div>
          <div className={`${styles.projectCard} ${styles.reverse}`}>
            <div className={styles.imageOverlay} style={{
              backgroundImage: `linear-gradient(to right, rgba(38, 34, 98), rgba(30, 30, 110, 0)), url('/images/IMG-20240519-WA0010.jpg')`,
            }}></div>
            <div className={styles.textprojectContainer}>
              <h3>Virtual Reality</h3>
              <p>
                Virtual Reality immerses you in computer-generated environments, seamlessly blending the physical and digital worlds.
              </p>
            </div>
          </div>
            <div className={styles.projectCard}>
            <div className={styles.imageOverlay} style={{
                backgroundImage: `linear-gradient(to left, rgba(38, 34, 98), rgba(30, 30, 110, 0)), url('/images/vr.png')`,
              }}></div>
              <div className={styles.textprojectContainer}>
                <h3>Augmented Reality</h3>
                <p>
                  Virtual Reality immerses you in computer-generated environments, seamlessly blending the physical and digital worlds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className={styles.rightSemiCircle2}>
        <div className={styles.semiCircle2}></div>
      </div> */}

      <div className={styles.sectionDivider}>
</div>

        {/* Testimonial Section */}
        <TestimonialSection />

 {/* Testimonials */}
  {/* <section className={styles.testimonialSection}>
  <h1 className={styles.testimonialTitle}>Testimonial</h1>
  <h2 className={styles.testimonialHeading}>What Our Clients Say</h2>
  <p className={styles.testimonialDescription}>
    The virtual mechatronics lab has had the great pleasure of working with 
    organisations and individuals around the world. Here are the words they have to say.
  </p>

  <div className={styles.testimonialWrapper}> */}
    {/* Large Testimonial Card */}
    {/* <div className={styles.testimonialCard}>
      <span className={styles.quoteIcon}>❝</span>
      <p className={styles.testimonialText}>
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it.
      </p>
      <div className={styles.clientInfo}>
        <div className={styles.clientAvatar}></div>
        <div>
          <h3 className={styles.clientName}>Lorem Ipsum</h3>
          <p className={styles.clientPosition}>Lorem Ipsum</p>
        </div>
      </div>
    </div> */}

    {/* Small Testimonial Card */}
    {/* <div className={styles.smallTestimonialCard}>
      <div className={styles.clientAvatarSmall}></div>
      <div>
        <h3 className={styles.clientNameSmall}>Lorem Ipsum</h3>
        <p className={styles.clientPositionSmall}>Lorem Ipsum</p>
      </div>
    </div>
  </div> */}

  {/* Pagination Dots */}
  {/* <div className={styles.pagination}>
    <span className={styles.dot}></span>
    <span className={styles.dot}></span>
    <span className={styles.dot}></span>
    <span className={styles.dotActive}></span>
    <span className={styles.dot}></span>
  </div>
</section> */}

    </div>
  );
};

export default Home;
