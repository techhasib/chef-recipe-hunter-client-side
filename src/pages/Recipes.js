import { useState } from "react";
import PreviousSearches from "../components/PreviousSearches";
import RecipeCard from "../components/RecipeCard";
import { useEffect } from "react";

export default function Recipes() {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetch(
      "https://b7a10-chef-recipe-hunter-server-side-coderhasib23-coderhasib23.vercel.app/recipe"
    )
      .then((res) => res.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.error(error));
  }, []);
  // console.log(recipe);
  const recipes = [
    {
      title: "Chicken Pan Pizza",
      image: "/img/gallery/img_1.jpg",
      authorImg: "/img/top-chiefs/img_1.jpg",
    },
    {
      title: "Spaghetti and Meatballs",
      image: "/img/gallery/img_4.jpg",
      authorImg: "/img/top-chiefs/img_2.jpg",
    },
    {
      title: "American Cheese Burger",
      image: "/img/gallery/img_5.jpg",
      authorImg: "/img/top-chiefs/img_3.jpg",
    },
    {
      title: "Mutton Biriyani",
      image: "/img/gallery/img_6.jpg",
      authorImg: "/img/top-chiefs/img_5.jpg",
    },
    {
      title: "Japanese Sushi",
      image: "/img/gallery/img_10.jpg",
      authorImg: "/img/top-chiefs/img_6.jpg",
    },
    {
      title: "Chicken Pan Pizza",
      image: "/img/gallery/img_1.jpg",
      authorImg: "/img/top-chiefs/img_1.jpg",
    },
    {
      title: "Spaghetti and Meatballs",
      image: "/img/gallery/img_4.jpg",
      authorImg: "/img/top-chiefs/img_2.jpg",
    },
    {
      title: "American Cheese Burger",
      image: "/img/gallery/img_5.jpg",
      authorImg: "/img/top-chiefs/img_3.jpg",
    },
    {
      title: "Mutton Biriyani",
      image: "/img/gallery/img_6.jpg",
      authorImg: "/img/top-chiefs/img_5.jpg",
    },
    {
      title: "Japanese Sushi",
      image: "/img/gallery/img_10.jpg",
      authorImg: "/img/top-chiefs/img_6.jpg",
    },
    {
      title: "American Cheese Burger",
      image: "/img/gallery/img_5.jpg",
      authorImg: "/img/top-chiefs/img_3.jpg",
    },
    {
      title: "Mutton Biriyani",
      image: "/img/gallery/img_6.jpg",
      authorImg: "/img/top-chiefs/img_5.jpg",
    },
  ].sort(() => Math.random() - 0.5);

  return (
    <div>
      <PreviousSearches />
      {
        <div className="recipes-container">
          {/* <RecipeCard /> */}
          {recipe.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
        </div>
      }
    </div>
  );
}
