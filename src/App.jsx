import { useState, useEffect } from 'react';
import './App.css';




function Pokedex() {
    const [viewPokemon, setViewPokemon] = useState([]); // Stores the currently displayed Pokemon
   /* fetch(
        "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"  
    )*/
    return(
        <div>Hello Pokedex</div>

    )
}
export default Pokedex;