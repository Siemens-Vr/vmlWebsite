import HeroSection from "../src/components/hero/heroSection";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../src/components/navbar/navbar";
import Footer from "./components/Footer/footer";
import HomePage from "./pages/home/home";

export default function Home() {
  return (
    <div>
       <Router>
      <Navbar />
      <HeroSection />
      </Router>
      <HomePage />
      <Footer />
    </div>
  );
}
