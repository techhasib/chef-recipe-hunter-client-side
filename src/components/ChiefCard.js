import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function ChiefCard({ chief }) {
  const navigate = useNavigate();
  const goRecipes = () => {
    navigate("/recipes");
  };
  return (
    <div className="chief-card">
      <img src={chief.img} alt="" />
      <div className="chief-card-info">
        <h3 className="chief-card-name">{chief.name}</h3>
        <p className="chief-recipe-count">
          Experience: <b>{chief.yearsOfExperience}</b>
        </p>
        <p className="chief-recipe-count">
          Recipes: <b>{chief.recipesCount}</b>
        </p>
        <p className="chief-cuisine">
          Cuisine: <b>{chief.cuisine}</b>
        </p>
        <p className="chief-cuisine">
          Likes: <b>{chief.likeCount}</b>
        </p>
        <p className="cheif-icons">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
        </p>
        <button
          onClick={() => goRecipes()}
          type="button"
          className="btn btn-primary"
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
