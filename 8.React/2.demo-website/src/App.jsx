
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Testimonials from './Testimonials';
import Gallery from './Gallery';
import Footer from './Footer';
import Contact from './Contact';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Gallery />
      <Footer />
      {/* <Contact/> */}
    </div>
  );
}

export default App;
