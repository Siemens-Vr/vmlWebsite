import HeroSection from "../src/components/hero/heroSection";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../src/components/navbar/navbar";
import Footer from "./components/Footer/footer";

export default function Home() {
  return (
    <div>
       <Router>
      <Navbar />
    </Router>

      <HeroSection />
      <Footer />
    </div>
  );
}
