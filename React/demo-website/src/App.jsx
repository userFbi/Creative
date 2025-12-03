
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Testimonials from './Testimonials';
import Gallery from './Gallery';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
