import React from "react";
import { Link } from "react-router-dom";


const CartEmpty = () => {
    return (
        <>
            <div className="cart cart--empty">
                <h2>Cart is empty</h2>
                <p>your cart is empty. sorry</p>
                <Link to='/' className='button button--black'>
                    <span>Go back</span>
                </Link>
            </div>
        </>
    );
}

export default CartEmpty;