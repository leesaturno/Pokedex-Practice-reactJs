import React from "react";
const SearchContext = React.createContext({
  SearchPokemon: [],
  updateSearchPokemons: (id) => null
});
export const FavoriteProvider = SearchContext.Provider;

export default SearchContext;
