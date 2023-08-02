import React, {useEffect, useState} from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";


const Home = () => {
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
        window.scrollTo(0, 0);
    }, [])
    // https://630b496bed18e8251650f470.mockapi.io/items

    return (
        <div className="container">
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading ? [...new Array(6)].map((_, index) => <Skeleton
                        key={index}/>) : items.map(pizza =>
                        <PizzaBlock
                            key={pizza.id} title={pizza.name}
                            price={pizza.price}
                            imageUrl={pizza.imageUrl}
                            sizes={pizza.sizes}
                            types={pizza.types}/>)
                }
            </div>
        </div>
    );
}

export default Home;