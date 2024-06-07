import { useParams } from "react-router-dom";

function SingleRecipe({ recipes }) {
  const { id } = useParams();
  const recipe = recipes.find((recipe) => {
    return recipe.id === Number(id)});
  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  return (
    <div>
      <h1>{recipe.recipe}</h1>
      <img src={recipe.image} alt={recipe.recipe} />
      <p>{recipe.directions_step_1 ? (
        <p>
        Step 1: {recipe.directions_step_1}
        </p>) : ''}
      </p>
      <p>{recipe.directions_step_2 ? (
        <p>
        Step 2: {recipe.directions_step_2}
        </p>) : ''}
      </p>
      <p>{recipe.directions_step_3 ? (
        <p>
        Step 3: {recipe.directions_step_3}
        </p>) : ''}
      </p>
      <p>{recipe.directions_step_4 ? (
        <p>
        Step 4: {recipe.directions_step_4}
        </p>) : ''}
      </p>
      <p>{recipe.directions_step_5 ? (
        <p>
        Step 5: {recipe.directions_step_5}
        </p>) : ''}
      </p>
      <p>{recipe.directions_step_6 ? (
        <p>
        Step 6: {recipe.directions_step_6}
        </p>) : ''}
      </p>
      <p>{recipe.directions_step_7 ? (
        <p>
        Step 7: {recipe.directions_step_7}
        </p>) : ''}
      </p>
      <p>{recipe.directions_step_8 ? (
        <p>
        Step 8: {recipe.directions_step_8}
        </p>) : ''}
      </p>
      <p>{recipe.directions_step_9 ? (
        <p>
        Step 9: {recipe.directions_step_9}
        </p>) : ''}
      </p>
      <p>{recipe.directions_step_10 ? (
        <p>
        Step 10: {recipe.directions_step_10}
        </p>) : ''}
      </p>
      {/* Add instructions, ingredients, etc. */}
    </div>
  );
}

export default SingleRecipe;
