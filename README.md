# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Keto Diet Recipe App
This React application fetches recipes from an API and displays them on a webpage.  Users can browse all recipes or filter them based on approximate **carbohydrate in grams or protein in grams**.
## How to configure this project to run
* Clone this repository
* Run npm install to downloads the dependencies
* Run 'npm run dev' to initialize the project
* Click the generated link to start the project in the browser
## Code Breakdown
This applicattion uses the following React components:
* **App.js:** The main application component.  It fetches Recipes from an API, manges state, and renders other components.
* **Header.js:** Displays the application header with navigation links.
* **Footer.js:** Displays the appliction footer with additional resoures.
* **Home.js:** Displays the home page with a brief introduction.
* **RecipePage.js:** Displays a list of recipes.
* **SingleRecipe.js:** Displays a single recipe in detail.
* **AboutMe.js:** Displays information about the appliction creator.
## API Key
This application uses an API key to access recipe data. You will need to create your own API key and replace the placeholder value in **App.js** with your key.
## Additional Notes
* This code uses React Router DOM for routing between different appliction pages.
* The CSS styles are defined in **App.css** and **index.css**.
## Contributing
Feel free to clone this repository and make your own contributions!

