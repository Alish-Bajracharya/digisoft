import Navbar from "./components/Navbar";
import Hero from "./components/Home/Hero";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <main className="pt-20">
      <Hero />
      </main>
    </div>
  );
}

export default App;
