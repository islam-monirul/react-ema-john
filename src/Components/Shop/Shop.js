import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
     const [products, setproducts] = useState([]);
     
     useEffect( () => {
          fetch('./products.json')
               .then(res => res.json())
                    .then(data => setproducts(data));
     },[]);
     
     // add to cart event handler function
     const handleAddToCart = (product) => {
          // console.log(...cart);
          // using spread operator
          // console.log(product);
          const newCart = [...cart, product];
          setCart(newCart);
          // console.log(newCart);
     }

     const [cart , setCart]= useState([]);

     return (
          <div className="shop-container">
               <div className="product-container">
                    <h3>Products</h3>
                    {
                         products.map( product => <Product key={product.key} product={product} addToCartFunction={handleAddToCart}></Product>)
                    }
               </div>
               <div className="cart-container">
                    <Cart cart={cart}></Cart>
               </div>
          </div>
     );
};

export default Shop;