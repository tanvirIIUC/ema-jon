import React from 'react';
import './Cart.css'


const Cart = ({cart}) => {

       let Price =0;
       let Shipping =0;

       for(const product of cart){
             Price=Price+product.price;
             Shipping=Shipping+product.shipping;
       }
       let tex= Price*0.1;
    return (
        <div className='cart-contain'>
            <h1>Order Summary</h1>
            <p> Selected Items :{cart.length}</p>
            <p>Total Price : ${Price} </p>
            <p>Total Shipping :${Shipping}</p>
            <p>Tex :${tex.toFixed(2)}</p>

            <h5> Total : ${Price+Shipping+tex}</h5>
             
        </div>
    );
};

export default Cart;