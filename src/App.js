import React, { useState, useEffect } from "react";
import "./App.css";

import axios from "axios";
import Header from "./components/Header";
import Title from "./components/Title";
import Category from "./components/Category";
import EmptyCard from "./components/EmptyCard";
import FullCard from "./components/FullCard";
import Footer from "./components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [basket, setBasket] = useState([]);

  let total = 0;
  for (let i = 0; i < basket.length; i++) {
    total += Number(basket[i].price) * basket[i].quantity;
  }

  const fetchData = async () => {
    const response = await axios.get(
      "https://back-end-deliveroo.herokuapp.com/"
    );
    // console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    // console.log("Use Effect");
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div className="App">
      <Header />
      <Title data={data.restaurant} />
      {basket.length === 0 ? (
        <EmptyCard />
      ) : (
        <FullCard basket={basket} setBasket={setBasket} total={total} />
      )}

      {data.categories.map((category, index) => {
        return (
          <Category
            key={index}
            category={category}
            basket={basket}
            setBasket={setBasket}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
