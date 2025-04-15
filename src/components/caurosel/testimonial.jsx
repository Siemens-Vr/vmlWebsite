import React, { useState, useRef, useEffect } from "react";
import styles from "../../pages/home/home.module.css";

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
  const handleSelect = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 items-center justify-center px-6 py-12">
      {/* Left: Big active testimonial */}
      <div className="w-full md:w-2/3 p-6 rounded-2xl shadow-lg bg-white">
        <p className="text-xl italic text-gray-700 mb-4">"{testimonials[activeIndex].text}"</p>
        <div className="flex items-center gap-4">
          <img
            src={testimonials[activeIndex].avatar}
            alt={testimonials[activeIndex].name}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <p className="font-bold">{testimonials[activeIndex].name}</p>
            <p className="text-sm text-gray-500">{testimonials[activeIndex].position}</p>
          </div>
        </div>
      </div>

      {/* Right: Small testimonials */}
      <div className="flex md:flex-col gap-4 w-full md:w-1/3">
        {testimonials.map((testimonial, index) => (
          index !== activeIndex && (
            <div
              key={index}
              onClick={() => handleSelect(index)}
              className="cursor-pointer bg-gray-100 p-4 rounded-xl shadow-md hover:bg-gray-200 transition duration-300"
            >
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-2 truncate">"{testimonial.text}"</p>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
