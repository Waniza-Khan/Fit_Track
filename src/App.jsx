import Navbar      from "./components/Navbar";
import Hero        from "./components/Hero";
import Features    from "./components/Features";
import HowItWorks  from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Pricing     from "./components/Pricing";
import Footer      from "./components/Footer";

function App() {
  return (
    <div className="text-[#1A2E3D] bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
