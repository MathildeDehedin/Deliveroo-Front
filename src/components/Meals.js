import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Meals = ({ meal, basket, setBasket }) => {
  const addItem = () => {
    //console.log(meal)
    const newBasket = [...basket];
    let exist = false;
    for (let i = 0; i < basket.length; i++) {
      if (basket[i].id === meal.id) {
        newBasket[i].quantity++;
        exist = true;
        // sortir de la condition
        break;
      }
    }
    if (!exist) {
      newBasket.push({
        title: meal.title,
        price: meal.price,
        quantity: 1,
        id: meal.id,
      });
    }
    setBasket(newBasket);
  };

  return (
    <div className="box">
      <div className="meals" onClick={addItem}>
        <div className="meals-col1">
          <h3 className="meals-title">{meal.title}</h3>

          <h4 className="description">
            {meal.description.length > 60
              ? meal.description.substring(0, 60) + " ..."
              : meal.description}
          </h4>

          <div className="baseline">
            <h4 className="price">{meal.price.replace(".", ",")} €</h4>
            {meal.popular === true && (
              <>
                <FontAwesomeIcon className="star" icon="star" />
                <h4 className="popular">Populaire</h4>{" "}
              </>
            )}
          </div>
        </div>
        <div className="meals-col2">
          {meal.picture && (
            <img
              className="meals-picture"
              src={meal.picture}
              alt={meal.picture}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Meals;
