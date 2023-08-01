import logo from './logo.svg';
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import './scss/app.scss';
import React, {useEffect, useState} from "react";

import pizzas from './assets/pizzas.json'

function App() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://630b496bed18e8251650f470.mockapi.io/items")
            .then((res) => {
                return res.json();
            })
            .then((arr) => {
                setItems(arr);
                setIsLoading(false);
            });
    }, [])
    // https://630b496bed18e8251650f470.mockapi.io/items

  return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {
                pizzas.map((obj) => (
                    // <PizzaBlock title={obj.title} price={obj.price} imageUrl={obj.imageUrl} sizes={obj.sizes} types={obj.types} />
                    <PizzaBlock key={obj.id} {...obj} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
