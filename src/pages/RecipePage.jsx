import { Link } from "react-router-dom";
import { RecipeCard } from "../components/RecipeCard";
import { useState } from "react";

export function RecipePage({ recipes }) {
  // State variables for filter values (initially empty)
  const [proteinFilter, setProteinFilter] = useState("");
  const [carbFilter, setCarbFilter] = useState("");

  // Function to handle protein filter input change
  const handleProteinChange = (event) => {
    setProteinFilter(event.target.value);
  };

  // Function to handle carb filter input change
  const handleCarbChange = (event) => {
    setCarbFilter(event.target.value);
  };

  // Filter recipes based on protein and carb values
  const filteredRecipes = recipes.filter((recipe) => { console.log(typeof recipe.protein_in_grams)
    const proteinMatch =
      proteinFilter === "" ||
      recipe.protein_in_grams >= parseInt(proteinFilter);
    const carbMatch =
      carbFilter === "" || recipe.carbohydrates_in_grams <= parseInt(carbFilter);
    return proteinMatch && carbMatch;
  });

  return (
    <div>
      <h1>Recipes</h1>
      <div>
        <label htmlFor="proteinFilter">Filter by Protein (grams):</label>
        <input
          type="number"
          id="proteinFilter"
          value={proteinFilter}
          onChange={handleProteinChange}
        />
      </div>
      <div>
        <label htmlFor="carbFilter">Filter by Carbs (grams):</label>
        <input
          type="number"
          id="carbFilter"
          value={carbFilter}
          onChange={handleCarbChange}
        />
      </div>
      <ul>
        {filteredRecipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </ul>
    </div>
  );
}


  
