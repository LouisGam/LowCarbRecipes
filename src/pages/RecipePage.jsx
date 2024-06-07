import { Link } from "react-router-dom";
import { RecipeCard } from "../components/RecipeCard";

export function RecipePage({ recipes }) { // Assuming you have recipes data passed as props
  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe) => {
            return <RecipeCard recipe={recipe} />
})}
      </ul>
    </div>
  );
}


  
