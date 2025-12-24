import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header';
import Hero from './Pages/Hero';
import Cards from './Pages/Cards';
import Footer from './Pages/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Cards
        data={[
          {
            image: "https://rickandmortyapi.com/api/character/avatar/181.jpeg",
            name: "Jessica's Friend",
            species: "Human",
            status: "Alive",
            location: "Earth (Replacement Dimension)",
            first_seen: "Pilot",

          },
          {
            image: "https://rickandmortyapi.com/api/character/avatar/220.jpeg",
            name: "Mega Fruit Farmer Rick",
            species: "Human",
            status: "Alive",
            location: "Citadel of Ricks",
            first_seen: "The Ricklantis Mixup",
          },
          {
            image: "https://rickandmortyapi.com/api/character/avatar/409.jpeg",
            name: "Accountant dog",
            species: "Alien",
            status: "Alive",
            location: "Snuffles' Dream",
            first_seen: "Lawnmower Dog",
          },
          {
            image: "https://rickandmortyapi.com/api/character/avatar/446.jpeg",
            name: " Corn detective",
            species: "Alien",
            status: "Dead",
            location: "Interdimensional Customs",
            first_seen: "Pilot",
          },
          {
            image: "https://rickandmortyapi.com/api/character/avatar/507.jpeg",
            name: "Monogatron Queen",
            species: "Alien",
            status: "Alive",
            location: "Monogatron Mothership",
            first_seen: "The Old Man and the Seat",
          },
          {
            image: "https://rickandmortyapi.com/api/character/avatar/798.jpeg",
            name: "Cenobite",
            species: "Mythological Creature",
            status: "unknown",
            location: "Hell",
            first_seen: "Amortycan Grickfitti",
          },
        ]}
      />
      <Footer />
    </div>
  );
}

export default App;
