
import AboutUs from "./AboutUs";
import Header from "./Header";
import Hero from "./Hero";
import ChefSection from "./Chef";
import "./App.css";
// import BookTable from "./Booktable";
import EventIntro from "./Event";
import ChoosePackage from "./ChoosePackage";




function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ChefSection />
      <AboutUs />
      {/* <BookTable/> */}
      <EventIntro />
      <ChoosePackage />
    </div>
  );
}

export default App;
