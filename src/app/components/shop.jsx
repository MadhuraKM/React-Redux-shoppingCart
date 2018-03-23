import React from 'react';
import Products from '../products/products.jsx';
import Cart from '../cart/cart.jsx';
import './shop.css'; 

const Shop = () => (
    <div className="shop">
        <h2>Shop Items:</h2>                
        <section className='productsContainer'>
            <Products />                
        </section>
        <aside className='cartContainer'>
            <Cart />
        </aside>
    </div>
)

export default Shop;