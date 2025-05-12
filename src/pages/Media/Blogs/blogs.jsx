import React from "react";
import Hero from "../../../components/hero/heroSection";
import { useLocation } from "react-router-dom";
import blogData from "../../../assets/blogs";
import styles from "./blogs.module.css"; // Make sure this matches the actual path

const Blogs = () => {
  const location = useLocation();
  const group = location.state?.departmentName;

  const groupData = blogData.find((item) => item.group === group);
  const blogs = groupData ? groupData.list : [];

  return (
    <>
      <Hero page="blogs" />
      <div className={styles.blogsPage}>
        <h1 className={styles.heading}>{group} </h1>
        {blogs.length === 0 ? (
          <p>No blogs available for this category.</p>
        ) : (
          <div className={styles.blogsGrid}>
            {blogs.map((blog, index) => (
              <div key={index} className={styles.blogCard}>
                <img src={blog.image} alt={blog.title} className={styles.blogImage} />
                <h2 className={styles.blogTitle}>{blog.title}</h2>
                <p className={styles.blogAuthor}>{blog.author}</p>
                <p className={styles.blogDate}>{blog.date}</p>
                <p className={styles.blogContent}>{blog.content.slice(0, 200)}...</p>
                <div className={styles.readMoreLink}>
                  <a href={blog.link} target="_blank" rel="noopener noreferrer">
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Blogs;
