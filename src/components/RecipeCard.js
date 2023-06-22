import CustomImage from "./CustomImage";

export default function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <CustomImage imgSrc={recipe.image_url} pt="65%" />
      <div className="recipe-card-info">
        <img className="auther-img" src={recipe.chef_img} alt="" />
        <p className="recipe-title">{recipe.recipe_name}</p>
        <h4 className="recipe-subtitle">Ingredients:</h4>
        <p className="recipe-subtitle">{recipe.ingredients}</p>
        <br /> <hr />
        <p className="recipe-title">Cooking Method:</p>
        <p className="recipe-desc">{recipe.cooking_method}</p>
        <a className="view-btn" href="#!">
          Add to Favorite
        </a>
      </div>
    </div>
  );
}
