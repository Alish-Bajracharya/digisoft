import Navbar from "../components/Navbar";
import CompanyHero from "../components/Company/CompanyHero";
import Welcome from "../components/Company/Welcome";
import About from "../components/Company/About";
import Clients from "../components/Company/Clients";
import Contact from "../components/Company/Talk";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <CompanyHero />
      <Welcome />
      <About />
      <Clients />
      <Contact />
      <Footer/>
    
    </div>
  );
};

export default Home;
