import React from "react";

const FullCard = ({ basket, setBasket, total }) => {
  return (
    <div className="aside">
      <div className="ligne1">
        <h1>Valider mon panier</h1>
      </div>
      {basket.map((element, index) => {
        return (
          <div className="ligne2">
            <div className="ligne2-div">
              <button
                className="buttonBasket"
                onClick={() => {
                  const newBasket = [...basket];
                  // supprimer élement tableau
                  if (element.quantity === 1) {
                    newBasket.splice(index, 1);
                  } else {
                    newBasket[index].quantity--;
                  }
                  setBasket(newBasket);
                }}
              >
                -
              </button>
              <span>{element.quantity}</span>
              <button
                className="buttonBasket2"
                onClick={() => {
                  const newBasket = [...basket];
                  newBasket[index].quantity++;
                  setBasket(newBasket);
                }}
              >
                +
              </button>
              <span>{element.title}</span>
            </div>
            <div>
              <span>{element.price}</span>
            </div>
          </div>
        );
      })}
      <div className="ligne3">
        <div className="a">
          <p>Sous-total</p>
          <p>{total.toFixed(2)}</p>
        </div>
        <div className="a">
          <p>Frais de livraison</p>
          <p>2,50 €</p>
        </div>
      </div>
      <div className="ligne4">
        <p>Total</p>
        <p>{total + 2.5} €</p>
      </div>
    </div>
  );
};
export default FullCard;
