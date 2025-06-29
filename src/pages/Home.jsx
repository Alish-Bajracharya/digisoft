import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";
import Banner from "../components/Home/Banner";
import Services from "../components/Home/Services";
import Careers from "../components/Home/Careers";
import Products from "../components/Home/Products";
import Awards from "../components/Home/Award";
import Image from "../components/Home/Image";

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Banner />
      <Services />
      <Careers />
      <Products />
      <Awards />
      <Image />
    </div>
  );
};

export default Home;
