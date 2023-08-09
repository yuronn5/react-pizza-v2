import React from "react";
import {useParams} from "react-router-dom";


const FullPizza = () => {
    //get params (params will get the pizzaId from App.js)
    const { pizzaId } = useParams();

    return (
        <div className='container'>
            <img src=''/>
            <h2>{pizzaId}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, iste!</p>
            <h2>250 $</h2>
        </div>
    );
}

export default FullPizza