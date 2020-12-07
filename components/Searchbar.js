import React from "react";
import { searchPokemon } from "../data/api";
import PokemonSearch from "../components/pokemonSearch";
const { useState } = React;

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onClick = async (e) => {
    const data = await searchPokemon(search);
    setPokemon(data);
    setLoading(false);
    console.log(pokemon.name);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar pokemon..." onChange={onChange} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onClick}>Buscar</button>
      </div>
      <div className="pokedex-grid">
        {Object.entries(pokemon).length === 0 && loading === false ? (
          ""
        ) : (
          <PokemonSearch
            pokemon={pokemon}
            loading={loading}
            setLoading={setLoading}
          />
        )}
      </div>
    </div>
  );
};

export default Searchbar;
