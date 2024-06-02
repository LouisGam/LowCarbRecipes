import { useState, useEffect } from 'react';
import './App.css';




function Pokedex() {
      const [pokemon, setPokemon] = useState(false); // Stores all Pokemon data
      const [filteredPokemon, setFilteredPokemon] = useState([]); // Stores currently displayed Pokemon
      const [searchTerm, setSearchTerm] = useState(''); // Stores search term
      const [selectedType, setSelectedType] = useState(''); // Stores selected type filter
      const [selectedWeakness, setSelectedWeakness] = useState(''); // Stores selected weakness filter
      //Fetches Pokemon data on component mount
      useEffect(() => {
   fetch(
        "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
        .then((response) => response.json()) 
        .then((data) => {
          let { pokemon } = data;
          setPokemon(pokemon);
        })
      }, []);
console.log(pokemon);
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
    <h1>Pokedex</h1>
    <div>
      <input
        type="text"
        placeholder="Search Pokemon"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select value={selectedType} onChange={handleTypeChange}>
        <option value="">
          All Types
        </option>
        {pokemon.length && pokemon
         .reduce((acc, poke) => [...acc, ...poke.type], [])
         .filter((type, index, arr) => arr.indexOf(type) === index)
         .map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <select value={selectedWeakness} onChange={handleWeaknessChange}>
        <option value="">All Weaknesses</option>
        {pokemon.length && pokemon
          .reduce((acc, poke) => [...acc, ...poke.weaknesses], [])
          .filter((weakness, index, arr) => arr.indexOf(weakness) === index) // Get unique weaknesses
          .map((weakness) => (
            <option key={weakness} value={weakness}>
              {weakness}
            </option>
          ))}
      </select>
    </div>
    {filteredPokemon.length > 0 ? (
      <div>
      {filteredPokemon.map((poke) => (
        <>
        <p key={poke.num}>
          <b>{poke.name}</b> (#{poke.num}) - {poke.type.join(', ')} - Weaknesses: {poke.weaknesses.join(', ')}
        </p>
        <img src={poke.img.toString()} alt={poke.name} className="pokemon-image pulsing-poke"/>
        </>
      ))}
    </div>
    )
    :
    (
        <p>
        API is currently down try again later
        </p>
      )}
  </div>
);
};

export default Pokedex;