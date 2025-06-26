import Navbar from "./components/Navbar";
import Hero from "./components/Home/Hero";
import Banner from "./components/Home/Banner";
import Maintenance from "./pages/UMaintenance.jsx";
import Services from "./components/Home/Services.jsx";
import Careers from "./components/Home/Careers.jsx";
import Products from "./components/Home/Products.jsx";
import Awards from "./components/Home/awards.jsx";
import Image from "./components/Home/Image.jsx";

function App() {
  return (
    
    <div className="relative">
      <Maintenance />
      <Navbar />
      <Hero />
      <Banner />
      <Services/>
      <Careers/>
      <Products/>
      <Awards />
      <Image />
    </div>
  );
}

export default App;
