// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Maintenance from "./pages/UMaintenance";
import Services from "./pages/Services";
import Company from "./pages/Company"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/services" element={<Services />} />
        <Route path="/company" element={<Company />} />


      </Routes>
    </Router>
  );
}

export default App;
