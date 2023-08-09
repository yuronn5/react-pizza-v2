import React, {useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";


const FullPizza = () => {
    const [ pizza, setPizza ] = React.useState();

    //get params (params will get the pizzaId from App.js)
    const { pizzaId } = useParams();



    React.useEffect(() => {
        async function fetchPizza() {
            try {
                const {data} = await axios.get('https://64cabcd0700d50e3c7053f8d.mockapi.io/items/' + pizzaId);
                console.log(pizza)
                setPizza(data);
            } catch (e) {
                alert("error with getting data");
                console.log(e)
            }
        }

        fetchPizza();
    }, []);

    if (!pizza) {
        return (
            'Loading...'
        )
    }

    return (
        <div className='container'>
            <img src={pizza.imageUrl}/>
            <h2>{pizza.title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, iste!</p>
            <h2>{pizza.price} $</h2>
        </div>
    );
}

export default FullPizza;