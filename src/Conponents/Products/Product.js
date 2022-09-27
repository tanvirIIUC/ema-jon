import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Product.css'

const Product = () => {
    const [products,setproduct] = useState([]);
    const [cart,setcart]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data =>setproduct(data))
    },[]);
    const handleAddToCArd =(product)=>{
        // console.log(product);
        const newcart = [...cart,product]
        setcart(newcart);
        
    }
    
    return (
        <div className='main'>
            <div className="Products">
                 {/* <h2>this is all : {product.length}  </h2> */}
                 {
                    products.map(product=><Item 
                        key={product.id}
                        product={product}
                        handleAddToCArd ={handleAddToCArd}
                    ></Item>)
                 }
            </div>
            <div className='product-contain'>
                 <h2>total : {cart.length}</h2>
            </div>
            
        </div>
        
    );
};

export default Product;