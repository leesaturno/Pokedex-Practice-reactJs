import React from "react";
import FavoriteContext from "../contexts/favoritesContext";

const { useContext } = React;

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);

  let imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav>
      <div />
      <div>
        <img src={imgUrl} alt="pokeapi-logo" className="navbar-image" />
      </div>
      {favoritePokemons.length === 0 ? (
        <div>
          <span role="img" aria-label="">
            💔
          </span>
        </div>
      ) : (
        <div>
          <span role="img" aria-label="">
            💘
          </span>{" "}
          {JSON.parse(localStorage.getItem("favorites")).length}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
