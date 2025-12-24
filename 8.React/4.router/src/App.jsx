import logo from './logo.svg';
import './App.css';

// import Header from './Header';
// import Apicalling from './reactlevel2/Apicalling';
// import ReactMUI from './ReactMUI';
// import ApiNode from './reactlevel2/ApiNode';
// import ApiCalling1012 from './reactlevel2/ApiCalling1012';
// import ButtonUI from './Hooks/ButtonUI';
// import Process from './Hooks/Process';
// import Layout from './RouterExample/Layout';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from './RouterExample/Contact';
import Home from './RouterExample/Home';
import About from './RouterExample/About';
// import ReactIcon from './RouterExample/ReactIcon';
function App() {
  return (
    <div className="App">
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
            <Home />
          </Route>

        </Switch>
      </Router>


      {/* <ReactIcon></ReactIcon> */}

    </div>
  );
}

export default App;
