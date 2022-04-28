import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import FAQ from "./sections/FAQ";
import Home from "./sections/Home";
import Roadmap from "./sections/Roadmap";
import Team from "./sections/Team";
import About from "./sections/About";
import GoToTop from "./components/GoToTop";
import StarryBackground from "./components/StaryBackground";

const App = () => {
  return (
    <div className="gradient-background">
      <Navigation />
      <StarryBackground />
      <Home />
      <About />
      <Team />
      <FAQ />
      <Roadmap />
      <GoToTop />
      <Footer />
    </div>
  );
};

export default App;
