import React from 'react';
import { Link } from 'react-router-dom';

export function RecipeCard({ recipe }) {
    return (
      <div className="recipe-card">
        <h3>{recipe.recipe}</h3>
        <img src={recipe.image} alt={recipe.recipe} />
        <Link to={`/recipes/recipe/${recipe.id}`}>See Recipe</Link>
      </div>
    );
  }