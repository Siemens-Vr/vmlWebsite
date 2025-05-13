import React, { useState, useEffect, useRef } from "react";
import Hero from "../../../components/hero/heroSection"; 
import styles from './news.module.css';

const magazinesData = [
    {
      week: "Week 1",
      date: "2025-02-01",
      month: "February",
      cover: "/images/covers/week1.png",
      description: "Virtual Mechatronics Labs use simulation, VR, and AR to create interactive environments. These setups allow users to work with sensors, motors, and control systems without physical hardware.",
      link: "/images/newsletters/Vml week 1.pdf",
    },
    {
      week: "Week 2",
      date: "2025-02-08",
      month: "February",
      cover: "/images/covers/week2.png",
      description: "Combining AI, biomechanics, and material science, researchers develop prosthetics with superior comfort and functionality. Healthcare professionals ensure real-world usability.",
      link: "/images/newsletters/vm week 2.pdf",
    },
    {
      week: "Week 3",
      date: "2025-02-15",
      month: "February",
      cover: "/images/covers/week3.png",
      description: "The Siemens Centres ERP system enhances automation, reducing administrative workload and ensuring seamless resource management for optimized workflows.",
      link: "/images/newsletters/vml week 3.pdf",
    },
    {
      week: "Week 4",
      date: "2025-02-22",
      month: "February",
      cover: "/images/covers/week4.png",
      description: "Advanced materials enhance durability while minimizing environmental impact. Smart automation streamlines operations, improving efficiency and sustainability.",
      link: "/images/newsletters/vml week 4.pdf",
    },
    
  ];
  const News = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
  
    const handleSortChange = (order) => {
      setSortOrder(order === sortOrder ? null : order);
      setDropdownOpen(false); 
    };
  
    const toggleDropdown = () => {
      setDropdownOpen((prev) => !prev);
    };
  
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
        mag.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mag.month.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        if (!sortOrder) return 0;
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
      });

    const magazinesByMonth = filteredMagazines.reduce((acc, magazine) => {
      if (!acc[magazine.month]) {
        acc[magazine.month] = [];
      }
      acc[magazine.month].push(magazine);
      return acc;
    }, {});

    const months = Object.keys(magazinesByMonth).sort((a, b) => {
      const monthOrder = {
        "January": 0, "February": 1, "March": 2, "April": 3, "May": 4, "June": 5,
        "July": 6, "August": 7, "September": 8, "October": 9, "November": 10, "December": 11
      };
      return monthOrder[a] - monthOrder[b];
    });

    if (sortOrder) {
      months.sort((a, b) => {
        const monthOrder = {
          "January": 0, "February": 1, "March": 2, "April": 3, "May": 4, "June": 5,
          "July": 6, "August": 7, "September": 8, "October": 9, "November": 10, "December": 11
        };
        return sortOrder === "oldest" 
          ? monthOrder[a] - monthOrder[b] 
          : monthOrder[b] - monthOrder[a];
      });
    }
  
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
  
          {months.map((month) => (
            <div key={month}>
              <h2 className={styles.monthHeading}>{month.toUpperCase()}</h2>
              <div className={styles.grid}>
                {magazinesByMonth[month].map((mag, index) => (
                  <div
                    key={`${month}-${index}`}
                    onClick={() => window.open(mag.link, '_blank', 'noopener,noreferrer,width=1000,height=800')}
                    className={styles.card}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && window.open(mag.link, '_blank', 'noopener,noreferrer,width=1000,height=800')}
                  >
                    <div
                      className={styles.cover}
                      style={{ backgroundImage: `url(${mag.cover})` }}
                    />
                    <h4>{mag.week}</h4>
                    <p>{mag.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    );
  };
export default News;