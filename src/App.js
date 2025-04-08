
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "../src/components/navbar/navbar";
import Footer from "./components/Footer/footer";
import HomePage from "./pages/home/home";
import AboutPage from "./pages/about_VML/about";
import HeroSection from "../src/components/hero/heroSection";
import AboutTeamPage from "./pages/about_teams/about_teams"
import Worldskill from "./pages/Worldskills/worldskill"
import Sifa from "./pages/sifa/sifa"


export default function Home() {
  return (
    <div>
       <Router>
      <Navbar />
      {/* <HeroSection /> */}
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-vml" element={<AboutPage />} />
        <Route path="/about-teams" element={<AboutTeamPage />} />
        <Route path="/worldskill" element={<Worldskill />} />
        <Route path="/sifa" element={<Sifa />} />
      </Routes>

     
      <Footer />
      </Router>
    </div>
  );
}
