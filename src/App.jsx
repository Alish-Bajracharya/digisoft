import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Maintenance from "./pages/UMaintenance";
import Services from "./pages/Services";
import Company from "./pages/Company";
import News from "./pages/News";
import Team from "./pages/OurTeam";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/services" element={<Services />} />
        <Route path="/company" element={<Company />} />
        <Route path="/our-team" element={<Team />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;
