import { useState, useEffect } from 'react';
import './App.css';
import Home from "./pages/Home";
import { RecipePage }  from "./pages/RecipePage";
import Footer from "./components/Footer";
import SingleRecipe from './pages/SingleRecipe';
import AboutUs from './pages/AboutMe';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';


function App() {

      const [recipes, setRecipes] = useState([]);


      useEffect(() => {
   fetch('https://keto-diet.p.rapidapi.com/?protein_in_grams__lt=15&protein_in_grams__gt=5',
   {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'f270fc3fc9msh587ccd344441474p14b207jsn6491ad15bbaa',
      'x-rapidapi-host': 'keto-diet.p.rapidapi.com'
    }
  }
 )
.then((response) => response.json()) 
.then((data) => {
          setRecipes(data);
        })
      }, []);
console.log(recipes);
 // Updates displayed Pokemon based on filters and search term


return (
  <div className="App">
    <Header />
    <Routes>
    <Route path="/about" element={<AboutUs />} />
    <Route path="/" element={<Home />} />
    <Route path="/recipes" element={<RecipePage recipes={recipes} />} />
    <Route path="/recipes/recipe/:id" element={<SingleRecipe recipes={recipes} />} />
    </Routes>
    <Footer />
  </div>
);
};

export default App;