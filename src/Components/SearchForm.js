import React, { useContext, useEffect } from "react";
import { AlContext } from "../Context";

const SearchForm = () => {
  const { setSearchTerm } = useContext(AlContext);
  const searchValue = React.useRef("");

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  useEffect(() => {
    searchValue.current.focus();
  }, []);
  return (
    <div className="search">
      <div className="info">
        <p>Search Your Favorite Cocktail</p>
        <div className="input">
          <input
            type="text"
            ref={searchValue}
            placeholder="Type"
            onChange={searchCocktail}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
