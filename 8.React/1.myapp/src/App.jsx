import logo from "./logo.svg";
import "./App.css";
import Props from "./2.props/Props";
import StateExample from "./3.useState/StateExample";
import ReactBootstrap from "./ReactBootstrap";

function App() {
  return (
    <div className="App">
      {/* 
      <Props
        data={[
          {
            image: "https://rickandmortyapi.com/api/character/avatar/144.jpeg",
            name: "Glenn",
            species: "Alien",
            status: "Dead",
            location: "Interdimensional Customs",
            first_seen: "Pilot",
          },
          {
            image: "https://rickandmortyapi.com/api/character/avatar/268.jpeg",
            name: "Poncho",
            species: "Human",
            status: "Dead",
            location: "Anatomy Park",
            first_seen: "Anatomy Park",
          },
          {
            image: "https://rickandmortyapi.com/api/character/avatar/398.jpeg",
            name: "Accountant dog",
            species: "Alien",
            status: "Alive",
            location: "Snuffles' Dream",
            first_seen: "Lawnmower Dog",
          },
          {
            image: "https://rickandmortyapi.com/api/character/avatar/403.jpeg",
            name: " Corn detective",
            species: "Alien",
            status: "Dead",
            location: "Interdimensional Customs",
            first_seen: "Pilot",
          },
          {
            image: "https://rickandmortyapi.com/api/character/avatar/533.jpeg",
            name: "Monogatron Queen",
            species: "Alien",
            status: "Alive",
            location: "Monogatron Mothership",
            first_seen: "The Old Man and the Seat",
          },
          {
            image: "https://rickandmortyapi.com/api/character/avatar/744.jpeg",
            name: "Cenobite",
            species: "Mythological Creature",
            status: "unknown",
            location: "Hell",
            first_seen: "Amortycan Grickfitti",
          },
        ]}
      /> */}
      {/* <StateExample /> */}
      <ReactBootstrap />
    </div>
  );
}

export default App;
