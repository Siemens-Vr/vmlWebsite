
import React,  { useState, useEffect }  from 'react'
import styles from './about.module.css';
import { Plus, Minus } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What is Virtual Mechatronics?",
    answer:
      "Virtual Mechatronics is an online platform that offers interactive simulations and educational resources. It integrates mechanical engineering, electrical engineering, computer science, and control engineering to provide a hands-on learning experience.",
  },
  {
    id: 2,
    question: "What kind of simulations does Virtual Mechatronics offer?",
    answer:
      "The platform provides robotics control simulations, automation processes, and digital twin modeling for engineering applications.",
  },
  {
    id: 3,
    question: "Can I use Virtual Mechatronics for educational purposes?",
    answer:
      "Yes! It is designed for both students and professionals who want to learn and apply mechatronic concepts through simulations.",
  },
];

const testimonials = [
  {
    id: 1,
    company: "ISUZU",
    location: "ISUZU East Africa",
    message:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    image: "/images/isuzu-car.jpg",
    logo: "/images/isuzu-logo.png",
  },
  {
    id: 2,
    company: "Toyota",
    location: "Toyota Kenya",
    message:
      "We had an amazing experience working with the Virtual Mechatronics Lab. The technology and innovation they bring are exceptional.",
    image: "/images/toyota-car.jpg",
    logo: "/images/toyota-logo.png",
  },
  {
    id: 3,
    company: "Tesla",
    location: "Tesla Motors",
    message:
      "Virtual Mechatronics Lab has transformed the way we approach mechatronics simulations. The team is highly skilled and professional.",
    image: "/images/tesla-car.jpg",
    logo: "/images/tesla-logo.png",
  },
];
const AboutPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };
return (
    <div>
        <section className={styles.aboutSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.imageContainer}>
          {/* <Image src="/images/mechatronics-lab.jpg" alt="Mechatronics Lab" width={400} height={400} className={styles.image} /> */}
        </div>
        <div className={styles.textContainer}>
          <h2>About Virtual Mechatronics Lab</h2>
          <p>
            We are a pioneering Virtual Mechatronics Lab at Dedan Kimathi, specializing in 
            merging virtual reality with mechatronics engineering. By bridging the gap between 
            physical limitations and mechatronics facilities, we make advanced engineering 
            accessible through immersive virtual experiences.
          </p>
          <p>
            Our lab embodies cutting-edge technological integration, pushing the boundaries of 
            mechatronic system design, innovation, and VR-driven automation.
          </p>
          <button className={styles.readMore}>Read More</button>
        </div>
      </div>
        </section>
{/* {VRAbout} */}
        <section className={styles.vrSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.textContainer}>
          <h2>Virtual Reality</h2>
          <p>
            We revolutionize mechatronics education through virtual reality, simulating real-world
            environments and machinery for an interactive, hands-on experience. Our advanced VR
            technology lets users explore, design, and test mechatronic systems in a fully immersive
            digital space, enhancing creativity and technical skills.
          </p>
          <p>
            Join us in bridging theoretical knowledge and practical application, shaping the future
            of engineering education.
          </p>
        </div>
        <div className={styles.imageContainer}>
          {/* <Image src="/images/vr-experience.jpg" alt="VR Experience" width={500} height={300} className={styles.image} /> */}
        </div>
      </div>
    </section>

{/* {Know us more} */}
    <section className={styles.knowUsSection}>
      <h2 className={styles.heading}>Know us more</h2>
      <div className={styles.container}>
        <div className={styles.card}>
          <h3>Missions</h3>
          <p>
            To provide innovative, accessible, and immersive learning experiences in mechatronics
            engineering through advanced virtual technologies, empowering students to develop
            practical skills, foster creativity, and prepare for the challenges of Industry 4.0.
          </p>
        </div>
        <div className={`${styles.card} ${styles.centerCard}`}>
          <h3>Motto</h3>
          <p><strong>Empowering Minds Through Virtual Engineering</strong></p>
        </div>
        <div className={styles.card}>
          <h3>Vision</h3>
          <p>
            To be a leading center of excellence in virtual mechatronics education, recognized for
            cultivating skilled engineers who drive technological advancements and contribute to the
            sustainable development of the global engineering industry.
          </p>
        </div>
      </div>
    </section>

    {/* {FAQs} */}
    <section className={styles.faqSection}>
      <h2 className={styles.heading}>Popular FAQs</h2>
      <p className={styles.subHeading}>Get to know more about Virtual Mechatronics</p>
      <div className={styles.faqContainer}>
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className={`${styles.faqItem} ${openFAQ === faq.id ? styles.active : ""}`}
            onClick={() => toggleFAQ(faq.id)}
          >
            <div className={styles.question}>
              <span className={styles.number}>{String(faq.id).padStart(2, "0")}</span>
              <span className={styles.text}>{faq.question}</span>
              {openFAQ === faq.id ? (
                <Minus className={styles.icon} />
              ) : (
                <Plus className={styles.icon} />
              )}
            </div>
            {openFAQ === faq.id && <div className={styles.answer}>{faq.answer}</div>}
          </div>
        ))}
      </div>
    </section>

    {/* {company testimonial} */}
    <section className={styles.testimonialSection}>
      <h2 className={styles.Testtitle}>Testimonial</h2>
      <h3 className={styles.Tstsubtitle}>What Our Clients Say</h3>
      <p className={styles.Testdescription}>
        The virtual mechatronics lab has had the great pleasure of working with
        organizations and individuals around the world. Here are the words they
        have to say.
      </p>

      <div className={styles.Testcarousel}>
        <button className={styles.TestprevButton} onClick={prevSlide}>
          <ChevronLeft size={32} />
        </button>

        <div className={styles.ComptestimonialCard}>
          <img
            src={testimonials[currentIndex].logo}
            alt={`${testimonials[currentIndex].company} Logo`}
            className={styles.logo}
          />
          <div className={styles.testimageContainer}>
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].company}
              className={styles.carImage}
            />
          </div>
          <div className={styles.Testcontent}>
            <h4>{testimonials[currentIndex].company}</h4>
            <p className={styles.location}>
              {testimonials[currentIndex].location}
            </p>
            <p className={styles.Testmessage}>
              {testimonials[currentIndex].message}
            </p>
          </div>
        </div>

        <button className={styles.TestnextButton} onClick={nextSlide}>
          <ChevronRight size={32} />
        </button>
      </div>

      <div className={styles.Testdots}>
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`${styles.Testdot} ${
              currentIndex === index ? styles.active : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
    </div>
    
  )
}

export default AboutPage;