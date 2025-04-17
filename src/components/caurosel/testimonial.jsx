import React, { useState } from 'react';
import styles from './testimonial.module.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

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

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (index) => {
    setActiveIndex(index);
  };

  const goPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  return (
    <section className={styles.testimonialsSection}>
    <h1 className={styles.testimonialTitle}>Testimonials</h1>
    <h2 className={styles.testimonialHeading}>What Our Clients Say</h2>
    <p className={styles.testimonialDescription}>
      The virtual mechatronics lab has had the great pleasure of working with
      organisations and individuals around the world. Here are the words they have to say.
    </p>

    <div className={styles.testimonialWrapper}>
      {/* Left: Active Testimonial */}
      <div className={styles.activeSection}>
        <button className={styles.navButton} onClick={goPrevious}>
          {/* <FaArrowLeft /> */}
        </button>
        <div className={styles.activeTestimonial}>
          <p className={styles.testimonialText}>
            "{testimonials[activeIndex].text}"
          </p>
          <div className={styles.testimonialInfo}>
            <img
              src={testimonials[activeIndex].avatar}
              alt={testimonials[activeIndex].name}
              className={styles.avatar}
            />
            <div>
              <p className={styles.testimonialName}>{testimonials[activeIndex].name}</p>
              <p className={styles.testimonialPosition}>{testimonials[activeIndex].position}</p>
            </div>
          </div>
        </div>
        <button className={styles.navButton} onClick={goNext}>
          {/* <FaArrowRight /> */}
        </button>
      </div>

      {/* Divider */}
      <div className={styles.divider}></div>

      {/* Right: Other Testimonials */}
      <div className={styles.sideTestimonials}>
        {testimonials.map((testimonial, index) => (
          index !== activeIndex && (
            <div
              key={index}
              onClick={() => handleSelect(index)}
              className={styles.sideCard}
            >
              <div className={styles.sideInfo}>
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className={styles.sideAvatar}
                />
                <div>
                  <p className={styles.sideName}>{testimonial.name}</p>
                  <p className={styles.sidePosition}>{testimonial.position}</p>
                </div>
              </div>
              <p className={styles.sideText}>"{testimonial.text}"</p>
            </div>
          )
        ))}
      </div>
    </div>
  </section>
);
};

export default Testimonials;
