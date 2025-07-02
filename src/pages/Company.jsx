import Navbar from "../components/Navbar";
import CompanyHero from "../components/Company/CompanyHero";
import Welcome from "../components/Company/Welcome";
import About from "../components/Company/About";
import Clients from "../components/Company/Clients";


const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <CompanyHero />
      <Welcome />
      <About />
      <Clients />
    
    </div>
  );
};

export default Home;
