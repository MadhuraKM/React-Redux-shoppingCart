import React from 'react';
import Products from './Products.jsx';
import Cart from './Cart.jsx';
import '../styles.css'; 
import style from  '../form.scss';
import styles from '../style-new.css';

class Shop extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="shop">
                <h2>Shop Items:</h2>                
                <section className='productsContainer'>
                    <Products />                
                </section>
                <aside className='cartContainer'>
                    <Cart />
                </aside>
            </div>
        );
    }

}

export default Shop;