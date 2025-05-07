import React from 'react';
import styles from './partners.module.css';
import Sifa from '../../assets/images/logos/SIFA FC.png';
import Au from '../../assets/images/logos/AU_LOGO_ENGLISH_CMYK.png';
import Audanepad from '../../assets/images/logos/AU+NEPAD Logo.png';
import German from '../../assets/images/logos/BMZ Logo.png';
import Eu from '../../assets/images/logos/EN Co-Funded by the EU_POS.png';
import Kfw from '../../assets/images/logos/KfW_LOGO.png';
import Vml from '../../assets/images/logos/Virtual Mechatronics Lab Logo V2-01.png';
import FESTO from '../../assets/images/logos/FESTO.png';
import SIEMENS from '../../assets/images/logos/SIEMENS.png';

const Partners = () => {
  const logos = [
    { src: Sifa, alt: 'Sponsor 1' },
    { src: Au, alt: 'Sponsor 2' },
    { src: Audanepad, alt: 'Sponsor 3' },
    { src: German, alt: 'Sponsor 4' },
    { src: Eu, alt: 'Sponsor 5' },
    { src: Kfw, alt: 'Sponsor 6' },
    { src: Vml, alt: 'Sponsor 7' },
    { src: FESTO, alt: 'Sponsor 5' },
    { src: SIEMENS, alt: 'Sponsor 6' },
  ];

  return (
    <div className={styles.partnersSection}>
      <h2 className={styles.partnersTitle}>Partners</h2>
      <div className={styles.marquee}>
        <div className={styles.marqueeContent}>
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className={styles.logoWrapper}>
              <img src={logo.src} alt={logo.alt} className={styles.img} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
