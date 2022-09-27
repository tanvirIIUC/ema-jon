import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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
        addToDb(product.id);
        
    }
    
    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart=[];
        for(const id in storedCart){
           const addedProduct = products.find(product =>product.id===id);
           if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity=quantity;
            savedCart.push(addedProduct);
           } 
        }
        setcart(savedCart);
    },[products])
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
                <Cart cart={cart}></Cart>
                 {/* <h2>total : {cart.length}</h2> */}
            </div>
            
        </div>
        
    );
};

export default Product;