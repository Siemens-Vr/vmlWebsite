import React, { useState, useEffect, useRef } from "react";
import Hero from "../../../components/hero/heroSection"; 
import styles from './news.module.css';

const magazinesData = [
    {
      week: "Week 1",
      date: "2025-02-01",
      cover: "/covers/feb-week1.jpg",
      description: "Getting started with our innovations",
      link: "/pdfs/feb-week1.pdf",
    },
    {
      week: "Week 2",
      date: "2025-02-08",
      cover: "/covers/feb-week2.jpg",
      description: "Deeper into automation",
      link: "/pdfs/feb-week2.pdf",
    },
    {
      week: "Week 3",
      date: "2025-02-15",
      cover: "/covers/feb-week3.jpg",
      description: "Advanced mechatronic systems",
      link: "/pdfs/feb-week3.pdf",
    },
    {
      week: "Week 4",
      date: "2025-02-22",
      cover: "/covers/feb-week4.jpg",
      description: "Summing up February with VR insights",
      link: "/pdfs/feb-week4.pdf",
    },
  ];
  

  const News = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
  
    const handleSortChange = (order) => {
      setSortOrder(order === sortOrder ? null : order);
      setDropdownOpen(false); // close dropdown after selection
    };
  
    const toggleDropdown = () => {
      setDropdownOpen((prev) => !prev);
    };
  
    // Close dropdown on outside click
    useEffect(() => {
      const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
          setDropdownOpen(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
  
    const filteredMagazines = magazinesData
      .filter((mag) =>
        mag.week.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mag.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        if (!sortOrder) return 0;
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
      });
  
    return (
      <div className={styles.container}>
        <Hero page="newsletters" />
  
        <section>
          <div className={styles.topBar}>
            <input
              type="text"
              placeholder="🔍 Search"
              className={styles.search}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
  
            <div className={styles.sort} ref={dropdownRef}>
              <label onClick={toggleDropdown} className={styles.sortToggle}>
                Sort by ▾
              </label>
              {dropdownOpen && (
                <div className={styles.dropdown}>
                  <label>
                    <input
                      type="checkbox"
                      checked={sortOrder === "newest"}
                      onChange={() => handleSortChange("newest")}
                    />
                    Newest first
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={sortOrder === "oldest"}
                      onChange={() => handleSortChange("oldest")}
                    />
                    Oldest first
                  </label>
                </div>
              )}
            </div>
          </div>
  
          <h2 className={styles.monthHeading}>FEBRUARY</h2>
  
          <div className={styles.grid}>
            {filteredMagazines.map((mag, index) => (
              <a
                key={index}
                href={mag.link}
                target="_blank"
                rel="noreferrer"
                className={styles.card}
              >
                <div
                  className={styles.cover}
                  style={{ backgroundImage: `url(${mag.cover})` }}
                />
                <h4>{mag.week}</h4>
                <p>{mag.description}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    );
  };
export default News;  