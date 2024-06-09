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

      <h2>{recipe.ingredient}</h2>
      <img src={recipe.image} alt={recipe.recipe} />
      <p>{recipe.ingredient_step_1 ? (
        <p>
        Step 1: {recipe.ingredient_step_1}
        </p>) : ''}
      </p>
      <p>{recipe.ingredient_step_2 ? (
        <p>
        Step 2: {recipe.ingredient_step_2}
        </p>) : ''}
      </p>
      <p>{recipe.ingredient_step_3 ? (
        <p>
        Step 3: {recipe.ingredient_step_3}
        </p>) : ''}
      </p>
      <p>{recipe.ingredient_step_4 ? (
        <p>
        Step 4: {recipe.ingredient_step_4}
        </p>) : ''}
      </p>
      <p>{recipe.ingredient_step_5 ? (
        <p>
        Step 5: {recipe.ingredient_step_5}
        </p>) : ''}
      </p>
      <p>{recipe.ingredient_step_6 ? (
        <p>
        Step 6: {recipe.ingredient_step_6}
        </p>) : ''}
      </p>
      <p>{recipe.ingredient_step_7 ? (
        <p>
        Step 7: {recipe.ingredient_step_7}
        </p>) : ''}
      </p>
      <p>{recipe.ingredient_step_8 ? (
        <p>
        Step 8: {recipe.ingredient_step_8}
        </p>) : ''}
      </p>
      <p>{recipe.ingredient_step_9 ? (
        <p>
        Step 9: {recipe.ingredient_step_9}
        </p>) : ''}
      </p>
      <p>{recipe.ingredient_step_10 ? (
        <p>
        Step 10: {recipe.ingredient_step_10}
        </p>) : ''}
      </p>

      <h3>{recipe.measurement}</h3>
      <img src={recipe.image} alt={recipe.recipe} />
      <p>{recipe.measurement_step_1 ? (
        <p>
        Step 1: {recipe.measurement_step_1}
        </p>) : ''}
      </p>
      <p>{recipe.measurement_step_2 ? (
        <p>
        Step 2: {recipe.measurement_step_2}
        </p>) : ''}
      </p>
      <p>{recipe.measurement_step_3 ? (
        <p>
        Step 3: {recipe.measurement_step_3}
        </p>) : ''}
      </p>
      <p>{recipe.measurement_step_4 ? (
        <p>
        Step 4: {recipe.measurement_step_4}
        </p>) : ''}
      </p>
      <p>{recipe.measurement_step_5 ? (
        <p>
        Step 5: {recipe.measurement_step_5}
        </p>) : ''}
      </p>
      <p>{recipe.measurement_step_6 ? (
        <p>
        Step 6: {recipe.measurement_step_6}
        </p>) : ''}
      </p>
      <p>{recipe.measurement_step_7 ? (
        <p>
        Step 7: {recipe.measurement_step_7}
        </p>) : ''}
      </p>
      <p>{recipe.measurement_step_8 ? (
        <p>
        Step 8: {recipe.measurement_step_8}
        </p>) : ''}
      </p>
      <p>{recipe.measurement_step_9 ? (
        <p>
        Step 9: {recipe.measurement_step_9}
        </p>) : ''}
      </p>
      <p>{recipe.measurement_step_10 ? (
        <p>
        Step 10: {recipe.measurement_step_10}
        </p>) : ''}
      </p>

    </div>
  );
}

export default SingleRecipe;
