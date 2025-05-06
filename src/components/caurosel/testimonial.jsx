import React, { useState } from 'react';
import styles from './testimonial.module.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Testimonials = ({ data, title, heading, description }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (index) => setActiveIndex(index);

  const goPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % data.length);
  };

  return (
    <section className={styles.testimonialsSection}>
      <h1 className={styles.testimonialTitle}>{title}</h1>
      <h2 className={styles.testimonialHeading}>{heading}</h2>
      <p className={styles.testimonialDescription}>{description}</p>

      <div className={styles.testimonialWrapper}>
        {/* Left: Active Testimonial */}
        <div className={styles.activeSection}>
          <button className={styles.navButton} onClick={goPrevious}>
            {/* <FaArrowLeft /> */}
          </button>
          <div className={styles.activeTestimonial}>
            <p className={styles.testimonialText}>
              "{data[activeIndex].text}"
            </p>
            <div className={styles.testimonialInfo}>
              <img
                src={data[activeIndex].avatar}
                alt={data[activeIndex].name}
                className={styles.avatar}
              />
              <div>
                <p className={styles.testimonialName}>{data[activeIndex].name}</p>
                <p className={styles.testimonialPosition}>{data[activeIndex].position}</p>
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
          {data.map((testimonial, index) =>
            index !== activeIndex ? (
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
            ) : null
          )}
        </div>
      </div>
    </section>
  );
};


export default Testimonials;
