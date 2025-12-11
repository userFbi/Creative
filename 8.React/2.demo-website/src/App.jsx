
import './App.css';
import Navbar from './Pages/Navbar';
import Hero from './Pages/Hero';
import About from './Pages/About';
import Testimonials from './Pages/Testimonials';
import Gallery from './Pages/Gallery';
import Footer from './Pages/Footer';
import Contact from './Pages/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppLayout from './AppLayout';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Gallery />
      <Footer /> */}




      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/testimonials">
            <Testimonials />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
