import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Item.css';

const Item = (props) => {
    const {name,price,img,seller,ratings}=props.product;
    
    return (
        <div className='item'>
          <img src={img} alt="" />
          <div className='item-info'>
          <h2>{name}</h2>
          <p>Price : {price}</p>
          <p><small>Manufacture : {seller}</small></p>
          <p><small>Rating : {ratings}</small></p>
          <div>
          <button  onClick={()=>props.handleAddToCArd(props.product)} className='button'>
            <p>Add to Card</p>
           <p><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p> 
            </button>
          </div>
          </div>
         
        </div>
    );
};

export default Item;