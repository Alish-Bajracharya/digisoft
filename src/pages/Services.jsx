import Navbar from "../components/Navbar";
import Hero from "../components/Service/Hero";
import AdditionalService from "../components/Service/AdditionalS"
import Idea from "../components/Service/Idea";
import TeamFeatures from "../components/Service/TeamFeatures";
import ContactSection from "../components/Service/ContactSection";

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <AdditionalService/>
      <Idea/>
      <TeamFeatures />
      <ContactSection />
     
    </div>
  );
};

export default Home;
