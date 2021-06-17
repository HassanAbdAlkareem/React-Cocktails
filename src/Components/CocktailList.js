import React, { useContext } from "react";
import { AlContext } from "../Context";
import Cocktail from "./Cocktail";
import Loading from "./Loading";

const CocktailList = () => {
  const { cocktails, loading } = useContext(AlContext);

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="search-failed">
        No Cocktails Matched Your Search Criteria
      </h2>
    );
  }
  return (
    <div className="parent-cocktails">
      <div className="container">
        <div className="title-cocktials">
          Cocktails
          <div className="underline"></div>
        </div>
        <div className="row">
          {cocktails.map((item) => {
            return <Cocktail key={item.id} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CocktailList;
