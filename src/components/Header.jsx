import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/recipes"}>Recipes</Link>
        <link to={"/ingredient"}>Ingredient</link>
        <link to={"/measurement"}>Measurement</link>
        <Link to={"/about"}>About Us</Link>
    </div>
  )
}
