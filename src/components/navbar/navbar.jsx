import React, { useState } from "react";
import styles from "../navbar/navbar.module.css";
import { Bell, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import Image from "../../assets/images/logos/Virtual Mechatronics Lab Logo V2-01.png";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleDropdown = (menu) => {
    setDropdownOpen(menu);
  };

  const closeDropdown = () => {
    setDropdownOpen(null);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={Image} alt="Logo" className={styles.img} />
      </div>

      <ul className={styles.navLinks}>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            Home
          </NavLink>
        </li>

        <li
          className={styles.dropdown}
          onMouseEnter={() => handleDropdown("about")}
          onMouseLeave={closeDropdown}
        >
          <span className={styles.navLinkd}>
            About <ChevronDown size={14} />
          </span>
          {dropdownOpen === "about" && (
            <ul className={styles.dropdownMenu}>
              <li>
                <NavLink 
                  to="/about-vml" 
                  className={({ isActive }) => 
                    isActive ? styles.activeNavLink : styles.navLink
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about-teams" 
                  className={({ isActive }) => 
                    isActive ? styles.activeNavLink : styles.navLink
                  }
                >
                  Team
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        <li>
          <NavLink 
            to="/worldskill" 
            className={({ isActive }) => 
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            WorldSkill
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/sifa" 
            className={({ isActive }) => 
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            SIFA (AUDA-NEPAD)
          </NavLink>
        </li>

        <li
          className={styles.dropdown}
          onMouseEnter={() => handleDropdown("projects")}
          onMouseLeave={closeDropdown}
        >
          <span className={styles.navItem}>
            Research Projects <ChevronDown size={14} />
          </span>
          {dropdownOpen === "projects" && (
            <ul className={styles.dropdownMenu}>
              <li>
                <NavLink 
                  to="/AR/AR" 
                  className={({ isActive }) => 
                    isActive ? styles.activeNavLink : styles.navLink
                  }
                >
                  Augmented Reality
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/VR/VR" 
                  className={({ isActive }) => 
                    isActive ? styles.activeNavLink : styles.navLink
                  }
                >
                  Virtual Reality
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/AI/AI" 
                  className={({ isActive }) => 
                    isActive ? styles.activeNavLink : styles.navLink
                  }
                >
                  Artificial Intelligence
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/Prosthetics/Prosthetics" 
                  className={({ isActive }) => 
                    isActive ? styles.activeNavLink : styles.navLink
                  }
                >
                  Prosthetics
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        <li
          className={styles.dropdown}
          onMouseEnter={() => handleDropdown("media")}
          onMouseLeave={closeDropdown}
        >
          <span className={styles.navItem}>
            Media <ChevronDown size={14} />
          </span>
          {dropdownOpen === "media" && (
            <ul className={styles.dropdownMenu}>
              <li>
                <NavLink 
                  to="/Blogs/blogs" 
                  className={({ isActive }) => 
                    isActive ? styles.activeNavLink : styles.navLink
                  }
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/Newsletter/news" 
                  className={({ isActive }) => 
                    isActive ? styles.activeNavLink : styles.navLink
                  }
                >
                  Newsletters
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/Conference/conference" 
                  className={({ isActive }) => 
                    isActive ? styles.activeNavLink : styles.navLink
                  }
                >
                  Conferences
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        <li>
          <NavLink 
            to="https://siemens.dkut.ac.ke/"
            target="_blank"
            rel="noopener noreferrer"
            className={({ isActive }) => 
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            Siemens Centre
          </NavLink>
        </li>
      </ul>

      <div className={styles.notification}>
        <Bell size={24} />
      </div>
    </nav>
  );
};

export default Navbar;