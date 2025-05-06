
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "../src/components/navbar/navbar";
import Footer from "./components/Footer/footer";
import HomePage from "./pages/home/home";
import AboutPage from "./pages/about_VML/about";
import AboutTeamPage from "./pages/about_teams/AboutTeam";
import Worldskill from "./pages/Worldskills/worldskill";
import Sifa from "./pages/sifa/sifa";
import Blogs from "./pages/Media/Blogs/blogs";
import Confrence from "./pages/Media/Confrence/confrence";
import Newsletter from "./pages/Media/Newsletter/news";
import AI from "./pages/Projects/AI/AI";
import AR from "./pages/Projects/AR/AR";
import VR from "./pages/Projects/VR/VR";
import Prosthetics from "./pages/Projects/Prosthetics/Prosthetics";
import Partners from "./components/partners/partners";
import Contact from "./pages/contact/contact";
import Terms from "./pages/terms/terms";
import Privacy from "./pages/privacy/privacy";

export default function Home() {
  return (
    <div>
       <Router>
      <Navbar />    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-vml" element={<AboutPage />} />
        <Route path="/about-teams" element={<AboutTeamPage />} />
        <Route path="/worldskill" element={<Worldskill />} />
        <Route path="/sifa" element={<Sifa />} />
        <Route path="/Blogs/blogs" element={<Blogs />} />
        <Route path="/Confrence/confrence" element={<Confrence />} />
        <Route path="/Newsletter/news" element={<Newsletter />} />
        <Route path="/AI/AI" element={<AI />} />
        <Route path="/AR/AR" element={<AR />} />
        <Route path="/VR/VR" element={<VR />} />
        <Route path="/Prosthetics/Prosthetics" element={<Prosthetics />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
     <Partners />
      <Footer />
      </Router>
    </div>
  );
}
