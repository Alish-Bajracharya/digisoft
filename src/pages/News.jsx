import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsGrid from "../components/News/NewsGrid";
import NewsHero from "../components/News/NewsHero";

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <NewsHero/>
      <NewsGrid/>
      <Footer/>
      
    
    </div>
  );
};

export default Home;
