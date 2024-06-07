import { useState, useEffect } from 'react';
import './App.css';
import Home from "./pages/Home";
import { RecipePage }  from "./pages/RecipePage";
import Footer from "./components/Footer";
import SingleRecipe from './pages/SingleRecipe';
import AboutUs from './pages/AboutUs';
import Header from './components/Header';
import { Route, Routes, Link } from 'react-router-dom';


function App() {

      const [recipes, setRecipes] = useState([]);
      const [pokemon, setPokemon] = useState(false); // Stores all Pokemon data
      const [filteredPokemon, setFilteredPokemon] = useState([]); // Stores currently displayed Pokemon
      const [searchTerm, setSearchTerm] = useState(''); // Stores search term
      const [selectedType, setSelectedType] = useState(''); // Stores selected type filter
      const [selectedWeakness, setSelectedWeakness] = useState(''); // Stores selected weakness filter
      //Fetches Pokemon data on component mount


      useEffect(() => {
   fetch('https://keto-diet.p.rapidapi.com/?protein_in_grams__lt=15&protein_in_grams__gt=5',
   {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'f270fc3fc9msh587ccd344441474p14b207jsn6491ad15bbaa',
      'x-rapidapi-host': 'keto-diet.p.rapidapi.com'
    }
  }
 )
.then((response) => response.json()) 
.then((data) => {
          setRecipes(data);
        })
      }, []);
console.log(recipes);
 // Updates displayed Pokemon based on filters and search term
 useEffect(() => {
  if (pokemon.length > 0){
    const filteredPokemon = pokemon.filter((poke) => {
      let shouldShow = true;
  
      // Filter by search term
      if (searchTerm && !poke.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        shouldShow = false;
      }
  
      // Filter by type
      if (selectedType && !poke.type.includes (selectedType)) {
        shouldShow = false;
      }
  
      // Filter by weakness
      if (selectedWeakness && !poke.weaknesses.includes(selectedWeakness)) {
        shouldShow = false;
      }
  
      return shouldShow;
    });
    
  setFilteredPokemon(filteredPokemon);
  }
}, [pokemon, searchTerm, selectedType, selectedWeakness]);

const handleSearchChange = (event) => {
  setSearchTerm(event.target.value);
};

const handleTypeChange = (event) => {
  setSelectedType(event.target.value);
};

const handleWeaknessChange = (event) => {
  setSelectedWeakness(event.target.value);
};

return (
  <div className="App">
    <Header />
    <Routes>
    <Route path="/about" element={<AboutUs />} />
    <Route path="/" element={<Home />} />
    <Route path="/recipes" element={<RecipePage recipes={recipes} />} />
    <Route path="/recipes/recipe/:id" element={<SingleRecipe recipes={recipes} />} />
    </Routes>
    <Footer />
  </div>
);
};

export default App;