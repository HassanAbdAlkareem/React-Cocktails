import React from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../Components/Loading";
//

const SingleCocktail = () => {
  const { id } = useParams();

  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  //

  React.useEffect(() => {
    setLoading(true);
    async function getCocktails() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        console.log(data);

        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];

          //
          const ingredienti = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          const newCocktials = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredienti,
          };

          setCocktail(newCocktials);
        } else {
          setCocktail(null);
        }
        setLoading(false);
        //
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktails();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    <h2>no Cocktaill To display</h2>;
  } else {
    const { name, image, info, category, glass, instructions, ingredienti } =
      cocktail;

    return (
      <div className="single-page">
        <div className="container">
          <div className="link">
            {" "}
            <Link className="btn-back-home" to="/">
              BACK HOME
            </Link>
          </div>
          <h2 className="name">{name}</h2>
          <div className="img">
            <img src={image} alt={name} />
          </div>

          <div className="spans">
            <span className="first">Name :</span> <span>{name}</span>
          </div>

          <div className="spans">
            <span>Category :</span> <span>{category}</span>
          </div>

          <div className="spans">
            <span>Info :</span> <span>{info}</span>
          </div>

          <div className="spans">
            <span>Glass :</span> <span>{glass}</span>
          </div>

          <div className="spans">
            <span>Instructons :</span> <span>{instructions}</span>
          </div>

          <div className="spans">
            <span>Ingredients :</span>
            {ingredienti.map((item, index) => {
              return (
                <span className="span-map" key={index}>
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return <div></div>;
};

export default SingleCocktail;
