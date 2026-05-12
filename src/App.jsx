import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import TopSelling from "./components/TopSelling";
import FinalSection from "./components/FinalSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="hero-bg min-h-screen px-8 py-6">
        <Navbar />
        <Hero />
        <div className="mt-20 space-y-10">
          <ProductCard />
        </div>
      </div>
      <TopSelling />
      <FinalSection />
      <Footer />
    </div>
  );
}

export default App;
