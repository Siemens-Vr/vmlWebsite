
import React,  { useState, useEffect }  from 'react'
import styles from './about.module.css';
import { Plus, Minus } from "lucide-react";
import Hero from "../../components/hero/heroSection";
import TestimonialSection from "../../components/caurosel/testimonial";

const faqs = [
  {
    id: 1,
    question: "What is Virtual Mechatronics?",
    answer: "Virtual Mechatronics is an online platform that offers interactive simulations and educational resources. It integrates mechanical engineering, electrical engineering, computer science, and control engineering to provide a hands-on learning experience.",
  },
  {
    id: 2,
    question: "What kind of simulations does Virtual Mechatronics offer?",
    answer:"The platform provides robotics control simulations, automation processes, and digital twin modeling for engineering applications.",
  },
  {
    id: 3,
    question: "Can I use Virtual Mechatronics for educational purposes?",
    answer:"Yes! It is designed for both students and professionals who want to learn and apply mechatronic concepts through simulations.",
  },
];

const testimonials = [
  {
    id: 1,
    name: "ISUZU",
    position: "ISUZU East Africa",
    text:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    avatar: "/images/dot.jpeg",
    logo: "/images/dot.jpeg",
  },
  {
    id: 2,
    name: "Toyota",
    position: "Toyota Kenya",
    text:"We had an amazing experience working with the Virtual Mechatronics Lab. The technology and innovation they bring are exceptional.",
avatar: "/images/vr.png",
    logo: "/images/toyota-logo.png",
  },
  {
    id: 3,
    name: "Tesla",
    position: "Tesla Motors",
    text:"Virtual Mechatronics Lab has transformed the way we approach mechatronics simulations. The team is highly skilled and professional.",
    avatar:"/images/dot.jpeg",
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
         <Hero page="about" />
         <section className={styles.aboutSection}>
          <h1 className={styles.headings}>About Us</h1>
  <div className={styles.contentWrapper}>
    {/* Left: Image */}
    <div className={styles.imageContainer}>
      <img
        src="/images/VR-Machine-assembling.jpeg"
        alt="Mechatronics Lab"
        className={styles.image}
      />
    </div>

    {/* Right: Text */}
    <div className={styles.textContainer}>

      <p>
      We are a pioneering Virtual Mechatronics Lab at Dedan Kimathi, specializing in merging virtual reality with mechatronics engineering. By bridging the gap between physical limitations and mechatronics facilities, we make advanced engineering accessible through immersive virtual experiences. 
      Discover a new realm of innovation and hands-on learning with us.
      </p>
      <ol className={styles.lists}>
  <div className={styles.listColumn}>
    <li>Immersive Learning</li>
    <li>Collaborative Environment</li>
  </div>
  <div className={styles.listColumn}>
    <li>Innovative Tools</li>
    <li>Comprehensive Education</li>
  </div>
</ol>

      <button className={styles.readMore}>Read More</button>
    </div>
  </div>
</section>
<div className={styles.sectionDivider}>
</div>
{/* {VRAbout} */}
        <section className={styles.vrSection}>
      <div className={styles.contentWrappers}>
        <div className={styles.textContainer}>
          <h2>Virtual Reality</h2>
          <p>
          We revolutionize mechatronics education through virtual reality, simulating real-world environments and machinery for an interactive, 
          hands-on experience. Our advanced VR technology lets users explore, design, and test mechatronic systems in a fully immersive digital space, 
          enhancing creativity and technical skills.
          </p>
          <p>
            Join us in bridging theoretical knowledge and practical application, shaping the future
            of engineering education.
          </p>
        </div>
        <div className={styles.imageContainers}>
        <img
        src="/images/VR-Machine-assembling.jpeg"
        alt="Mechatronics Lab"
        className={styles.image}
      />
        </div>
      </div>
    </section>

{/* {Know us more} */}
    <section className={styles.knowUsSection}>
      <h1 className={styles.heading}>Know us more</h1>
      <div className={styles.logo}>
      <img
        src="/images/VR-Machine-assembling.jpeg"
        alt="Mechatronics Lab"
        className={styles.logo}
      />
      </div>
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
     {/* <section className={styles.testimonialSection}>
      <h2 className={styles.heading}>Testimonial</h2>
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
    </section>  */}
    <TestimonialSection 
         data={testimonials}
         title="Testimonials"
         heading="What Our Clients Say"
         description="The virtual mechatronics lab has had the great pleasure of working with organisations and individuals around the world. Here are the words they have to say."/>


    {/* Partners Logos Carousel */}

      </div>
   );
  };

export default AboutPage;