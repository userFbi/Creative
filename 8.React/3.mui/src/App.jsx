
import AboutUs from "./Pages/AboutUs";
import Header from "./Pages/Header";
import Hero from "./Pages/Hero";
import "./App.css";
import BookTable from "./Pages/Booktable";
import EventIntro from "./Pages/Event";
import ChoosePackage from "./Pages/ChoosePackage";
import MenuPage from "./Menu";
import ContactPage from "./Pages/Contact";
import Footer from "./Pages/Fotter";
import Home from "./Home";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import OurChefs from "./Pages/OurChefs";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/menu">
            <MenuPage />
          </Route>
          <Route path="/chefs">
            <OurChefs />
          </Route>
          <Route path="/event">
            <EventIntro />
            <ChoosePackage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
