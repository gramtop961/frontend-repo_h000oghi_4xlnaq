import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import ContactFooter from "./components/ContactFooter";

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <ContactFooter />
      </main>
    </div>
  );
}

export default App;
