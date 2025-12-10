
import AboutUs from "./AboutUs";
import Header from "./Header";
import Hero from "./Hero";
import ChefSection from "./Chef";
import "./App.css";
import BookTable from "./Booktable";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ChefSection />
      <AboutUs />
      <BookTable/>
    </div>
  );
}

export default App;
