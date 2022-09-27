import React from 'react';
import './Item.css';

const Item = (props) => {
    const {name,price,img,seller,ratings}=props.product
    return (
        <div className='item'>
          <img src={img} alt="" />
          <div className='item-info'>
          <h2>{name}</h2>
          <p>Price : {price}</p>
          <p><small>Manufacture : {seller}</small></p>
          <p><small>Rating : {ratings}</small></p>
          <div>
          <button className='button'>Add to Card</button>
          </div>
          </div>
         
        </div>
    );
};

export default Item;