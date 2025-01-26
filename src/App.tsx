import "./App.css";
import Alert from "./components/Alert";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import PracticeAreas from "./components/PracticeAreas";
import Teams from "./components/Teams";
import "./fonts/Century Gothic.otf";

function App() {
  return (
    <div className="w-screen flex flex-col gap-5">
      <Alert/>
      <Nav />
      <Hero />
      {/* <About /> */}
      <Teams/>
      <Faq />
      <PracticeAreas />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
