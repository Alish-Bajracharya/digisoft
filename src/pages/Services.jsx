import Navbar from "../components/Navbar";
import ServiceHero from "../components/Service/ServiceHero";
import AdditionalService from "../components/Service/AdditionalS"
import Idea from "../components/Service/Idea";
import TeamFeatures from "../components/Service/TeamFeatures";
import ContactSection from "../components/Service/ContactSection";

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <ServiceHero />
      <AdditionalService/>
      <Idea/>
      <TeamFeatures />
      <ContactSection />
     
    </div>
  );
};

export default Home;
