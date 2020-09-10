import React from "react";
import Meals from "./Meals";

const Category = ({ category, basket, setBasket }) => {
  return (
    category.meals.length > 0 && (
      <div style={{ flex: 1 }}>
        <h3 className="category-header">{category.name}</h3>
        <div className="category-meals">
          {category.meals.map((meal, index) => {
            return (
              <Meals
                meal={meal}
                key={meal.id}
                basket={basket}
                setBasket={setBasket}
              />
            );
          })}
        </div>
      </div>
    )
  );
};
export default Category;
