
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Testimonials from './Testimonials';
import Gallery from './Gallery';
import Footer from './Footer';
import Contact from './Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppLayout from './AppLayout';

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



      <Router>
        <Switch>
          {/* <Route exect path="/">
                  <Home />
                </Route> */}
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <AppLayout />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
