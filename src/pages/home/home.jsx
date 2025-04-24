'use client';

import React, { useState, useEffect, useRef } from "react";
import styles from './home.module.css';
import Hero from "../../components/hero/heroSection"; 
import CountUp from 'react-countup';
import { FaUsers, FaProjectDiagram } from 'react-icons/fa'; 
import TestimonialSection from "../../components/caurosel/testimonial";

const testimonials = [
  {
    text: "The virtual mechatronics lab transformed how our students interact with practical content. Brilliant innovation!",
    name: "John Doe",
    position: "Engineering Professor",
    avatar: "/images/dot.jpeg"
  },
  {
    text: "An excellent platform. The hands-on simulations are top-notch! We’ve been able to reach more learners remotely than ever before.",
    name: "Jane Smith",
    position: "STEM Program Coordinator",
    avatar: "/images/vr.png"
  },
  {
    text: "We’ve been able to reach more learners remotely than ever before. Amazing tool!",
    name: "Ahmed Ali",
    position: "Technical Lead, EduTech",
    avatar:  "/images/dot.jpeg"
  },
  {
    text: "An excellent platform. The hands-on simulations are top-notch! We’ve been able to reach more learners remotely than ever before.",
    name: "Jane Smith",
    position: "STEM Program Coordinator",
    avatar: "/images/vr.png"
  }
];
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

      <div className={styles.sectionDivider}>
</div>

        {/* Testimonial Section */}
        <TestimonialSection 
         data={testimonials}
         title="Testimonials"
         heading="What Our Clients Say"
         description="The virtual mechatronics lab has had the great pleasure of working with organisations and individuals around the world. Here are the words they have to say."/>

    </div>
  );
};

export default Home;
