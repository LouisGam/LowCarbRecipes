import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="Headerlinks">
        <Link to={"/"}>Home</Link>
        <Link to={"/recipes"}>Recipes</Link>
        <Link to={"/about"}>About Me</Link>
    </div>
  )
}
