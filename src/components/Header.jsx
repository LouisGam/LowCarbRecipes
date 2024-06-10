import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/recipes"}>Recipes</Link>
        <Link to={"/ingredient"}>Ingredient</Link>
        <Link to={"/measurement"}>Measurement</Link>
        <Link to={"/about"}>About Us</Link>
    </div>
  )
}
