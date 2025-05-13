import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../../../components/hero/heroSection";
import blogData from "../../../assets/blogs";
import styles from "./blogs.module.css";

const Blogs = () => {
  const location = useLocation();
  const group = location.state?.departmentName || "Virtual Reality";
  
  const filteredBlogs = blogData.find(
    (item) => item.group.toLowerCase() === group.toLowerCase()
  );
  
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <Hero page="blogs" />
      <div className={styles.blogsPage}>
        {filteredBlogs ? (
          <div className={styles.blogSection}>
            <h1 className={styles.heading}>{filteredBlogs.group}</h1>
            <div className={styles.blogsGrid}>
              {filteredBlogs.list.map((blog, index) => (
                <div 
                  key={index} 
                  className={`${styles.blogCard} ${
                    expandedIndex === index ? styles.expanded : ""
                  }`}
                >
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className={styles.blogImage} 
                  />
                  <h2 className={styles.blogTitle}>{blog.title}</h2>
                  <p className={styles.blogAuthor}>{blog.author}</p>
                  <p className={styles.blogDate}>{blog.date}</p>
                  
                  <p className={styles.blogContent}>
                    {expandedIndex === index
                      ? blog.content
                      : `${blog.content.slice(0, 200)}...`}
                  </p>
                  
                  <button
                    onClick={() => toggleReadMore(index)}
                    className={`${styles.readMoreBtn} ${
                      expandedIndex === index ? styles.active : ""
                    }`}
                  >
                    {expandedIndex === index ? "Show Less" : "Read More"}
                  </button>
                  
                  {blog.link && (
                    <div className={styles.readMoreLink}>
                      <a href={blog.link} target="_blank" rel="noopener noreferrer">
                        Visit Source
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.notFoundMessage}>
            Blog category "{group}" not found.
          </div>
        )}
      </div>
    </>
  );
};

export default Blogs;