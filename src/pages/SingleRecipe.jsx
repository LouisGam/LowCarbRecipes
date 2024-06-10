import { useParams } from "react-router-dom";

function SingleRecipe({ recipes }) {
  const { id } = useParams();
  const recipe = recipes.find((recipe) => {
    return recipe.id === Number(id)});
  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  let instructionsArray = Object.keys(recipe).filter(key =>  key.startsWith('directions_step')).map(key => recipe[key]);
  let measurementsArray = Object.keys(recipe).filter(key =>  key.startsWith('measurement_')).map(key => recipe[key]);
  let ingredientsArray = Object.keys(recipe).filter(key =>  key.startsWith('ingredient_')).map(key => recipe[key]);


  const {
    calories,
    fat_in_grams, // Use camelCase for consistency
    carbohydrates_in_grams, // Use camelCase for consistency
    protein_in_grams,
    servings, // Assuming servings data is available
    prep_time_in_minutes, // Assuming prepTimeInMinutes data is available
  } = recipe; // Destructure recipe data for better readability

  return (
    <div>
    <h1>{recipe.recipe}</h1>
      <img src={recipe.image} alt={recipe.recipe} />

      <h2>Ingredients</h2>
      <p>
        {ingredientsArray.map((ingredient, index) => {
          if(ingredient){
                return (
                    <p>
                     <strong>{index+1}</strong> :  {measurementsArray[index]} {ingredient}
                    </p>
                )
            } else {
                return;
            }
        })}
      </p>
      <h2>Instructions</h2>
      <p>
        {instructionsArray.map((instruction, index) => {
            if(instruction){
                return (
                    <p>
                         <strong>{index+1}</strong> : {instruction}
                    </p>
                )
            } else {
                return;
            }
        })}
      </p>

      <h4>Nutrition Facts:</h4>
      <ul>
        <li>Calories: {calories}</li>
        <li>Fat: {fat_in_grams} grams</li>
        <li>Carbohydrates: {carbohydrates_in_grams} grams</li>
        <li>Protein: {protein_in_grams} grams</li>
      </ul>

      {prep_time_in_minutes && ( // Only display prep time if data exists
        <p>Prep Time: {prep_time_in_minutes} minutes</p>
      )}

      {servings && ( // Only display servings if data exists
        <p>Servings: {servings}</p>
      )}

    </div>
  );
}

export default SingleRecipe;
