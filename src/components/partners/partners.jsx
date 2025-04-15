import React from 'react';
// import SIFA from "../../../public/images/dot.jpeg";
// import AU from "../../../public/images/dot.jpeg";
// import AUDA from "../../../public/images/dot.jpeg";
// import GERMANY from "src/assets/sifaimage.jpg";
// import EU from "src/assets/sifaimage.jpg";
// import KFW from "src/assets/sifaimage.jpg";
// import SWS from "src/assets/sifaimage.jpg";
// import TVETA from "src/assets/sifaimage.jpg";
// import ARSO from "src/assets/sifaimage.jpg";
import FESTO from "../../assets/sifaimage.jpg";
import SIEMENS from "../../assets/sifaimage.jpg";


const Partners = () => {
    const logos = [
        // { src : SIFA, alt: 'Sponsor 1' },
        // { src : AU, alt: 'Sponsor 4' },
        // { src : AUDA, alt: 'Sponsor 5' },
        // { src : GERMANY, alt: 'Sponsor 2' },
        // { src : EU, alt: 'Sponsor 4' },
        // { src : KFW, alt: 'Sponsor 3' },
        // { src : SWS, alt: 'Sponsor 3' },
        // { src : TVETA, alt: 'Sponsor 3' },
        // { src : ARSO, alt: 'Sponsor 3' },
        { src : FESTO, alt: 'Sponsor 3' },
        { src : SIEMENS, alt: 'Sponsor 3' },

    ]
  return (
    <div className="bg-light py-5">
      <div className="container" sx={{backgroundColor:'rgba(244,247,254,255)'}}>
        <p variant="h4" sx={{ color: '#1363C6', textAlign: 'center', fontWeight:'bold' }}>

          Partners
        </p>
        <div container spacing={5} justifyContent="center" alignItems="center" className="sponsor-logos mt-5">
            
          {logos.map((logo, index) => (
            <div item key={index} className="col-auto">
              <img
                src={logo.src}
                alt={logo.alt}
                className="sponsor-logo"
                style={{
                  width: '150px',
                  margin: '20px 30px',
                  padding: '50px 0',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;