
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "../src/components/navbar/navbar";
import Footer from "./components/Footer/footer";
import HomePage from "./pages/home/home";
import AboutPage from "./pages/about_VML/about"
import AboutTeamPage from "./pages/about_teams/about_teams"

export default function Home() {
  return (
    <div>
       <Router>
      <Navbar />
      {/* <HeroSection /> */}
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about_teams" element={<AboutPage />} />
      </Routes>

     
      <Footer />
      </Router>
    </div>
  );
}
