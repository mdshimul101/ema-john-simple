import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    let total = 0, shipping = 0, quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + (product.quantity * product.price);
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = (total + shipping + tax).toFixed(2);

    return (
        <div className='cart'>
            <h3 style={{ textAlign: 'center ' }}>Order Summary</h3>
            <hr />
            <p>Selected Item : {quantity}</p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping : ${shipping}</p>
            <p>Tax : ${tax}</p>
            <h5>Grand Total : ${grandTotal}</h5>
        </div >
    );
};

export default Cart;