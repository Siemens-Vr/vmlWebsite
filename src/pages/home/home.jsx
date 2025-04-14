'use client';

import React, { useState, useEffect, useRef } from "react";
import styles from './home.module.css';
import Hero from "../../components/hero/heroSection"; // Ensure correct file name

const testimonials = [
  {
    text: "Virtual Mechatronics Lab has transformed how we teach automation and robotics.",
    name: "John Doe",
    position: "Professor of Engineering",
    avatar: "/images/avatar1.jpg",
  },
  {
    text: "The immersive simulations make learning incredibly engaging!",
    name: "Jane Smith",
    position: "Mechatronics Student",
    avatar: "/images/avatar2.jpg",
  },
  {
    text: "A game-changer for industrial training in Africa.",
    name: "Dr. Williams",
    position: "Industry Expert",
    avatar: "/images/avatar3.jpg",
  },
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newIndex = testimonials.findIndex(
              (t) => t.text === entry.target.dataset.text
            );
            if (newIndex !== -1) {
              setActiveIndex(newIndex);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    const elements = document.querySelectorAll(`.${styles.testimonialCard}`);
    elements.forEach((el) => observerRef.current.observe(el));

    return () => observerRef.current.disconnect();
  }, []);

  return (
    <section className={styles.testimonialSection}>
      <h1 className={styles.testimonialTitle}>Testimonial</h1>
      <h2 className={styles.testimonialHeading}>What Our Clients Say</h2>
      <p className={styles.testimonialDescription}>
        The virtual mechatronics lab has had the great pleasure of working with 
        organisations and individuals around the world. Here are the words they have to say.
      </p>

      <div className={styles.testimonialWrapper}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`${styles.testimonialCard} ${
              index === activeIndex ? styles.active : styles.small
            }`}
            data-text={testimonial.text}
          >
            <span className={styles.quoteIcon}>❝</span>
            <p className={styles.testimonialText}>{testimonial.text}</p>
            <div className={styles.clientInfo}>
              <img src={testimonial.avatar} alt={testimonial.name} className={styles.clientAvatar} />
              <div>
                <h3 className={styles.clientName}>{testimonial.name}</h3>
                <p className={styles.clientPosition}>{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className={styles.pagination}>
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={index === activeIndex ? styles.dotActive : styles.dot}
          ></span>
        ))}
      </div>
    </section>
  );
};


const Home = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <Hero page="home" />

          {/* About Virtual Mechatronics Lab */}
          <section className={styles.aboutSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.imageContainer}>
            <img src="/images/WhatsApp Image 2025-02-05 at 17.50.03_fc9783af.jpg.jpg" alt="Mechatronics" width={400} height={400} className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <h2>Virtual Mechatronics Lab</h2>
            <p>
              Our lab leverages the latest technologies to create highly detailed and interactive simulations of mechatronic systems. This innovative approach significantly enhabces the design, development and deployment processes
              resulting in more efficient, effective, and groundbreaking solutions in the field of mechatronics innovation.
            </p>
            <p>The lab embodies the cutting edge of technological integration, pushing the boundaries of what is possible in mechatronic system design and Integration of Virtual Reality and Digital Technologies</p>
            <button className={styles.readMore}>Read More</button>
          </div>
        </div>
      </section>

      <div className={styles.sectionDivider}>
  <span className={styles.circle}>
    <img src="/images/dot.jpeg" alt="Divider Icon" />
  </span>
</div>

      {/* About Virtual Reality */}
      <section className={styles.aboutSection}>
        <div className={styles.contentWrapperReverse}>
          <div className={styles.textContainer}>
            <h2>About Virtual Reality</h2>
            <p>
              Virtual Reality immerses you in computer-generated environments, seamlessly blending the physical and digital worlds...
            </p>
            <ul className={styles.list}>
              <li>✅ Accessibility for students</li>
              <li>✅ Enhance STEM Education</li>
              <li>✅ Enhanced Training</li>
              <li>✅ Personalized Learning</li>
            </ul>
            <button className={styles.readMore}>Read More</button>
          </div>
          <div className={styles.imageContainer}>
            <img src="/images/vr.jpg" alt="Virtual Reality"  className={styles.image} />
          </div>
        </div>
      </section>

     
      {/*Why choose us*/}
    <section className={styles.chooseUs}>
        <div >
          <div className={styles.textContainer}>
            <h1>Why Choose Us</h1>
            <h2>Experience Mechatronics Excellence</h2>
            <p className={styles.paraChoose}>We specialize in virtual mechatronics, combining VR, robotics, and automation to deliver seamless experiences and optimized solutions. Partner with us to transform your processes and drive your business into the future.</p>
            <ol className={styles.lists}>
               <li>Unmatched expertise in virtual mechatronics education</li>
               <li>Immersive learning experiences through innovative integration</li>
               <li>Streamlined processes for enhanced educational efficiency</li>
            </ol>
          </div>
          <div className={styles.contentWrapperReversed}>

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
              {/* <div className={styles.imageOverlay} style={{ backgroundImage: url('/images/prosthetics.jpg') }}></div> */}
              <div className={styles.textprojectContainer}>
                <h3>Prosthetics</h3>
                <p>
                  Virtual Reality immerses you in computer-generated environments, seamlessly blending the physical and digital worlds.
                </p>
              </div>
            </div>
            <div className={styles.projectCard}>
              {/* <div className={styles.imageOverlay} style={{ backgroundImage: url('/images/virtual-reality.jpg') }}></div> */}
              <div className={styles.textprojectContainer}>
                <h3>Virtual Reality</h3>
                <p>
                  Virtual Reality immerses you in computer-generated environments, seamlessly blending the physical and digital worlds.
                </p>
              </div>
            </div>
            <div className={styles.projectCard}>
              {/* <div className={styles.imageOverlay} style={{ backgroundImage: url('/images/augmented-reality.jpg') }}></div> */}
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
    </div>
  );
};

export default Home;
