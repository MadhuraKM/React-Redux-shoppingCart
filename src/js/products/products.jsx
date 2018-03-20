import React from 'react';
import Product from './product.jsx';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addProduct } from "./action";
import { addToCart, removeFromCart } from "../cart/action";


const mapStateToProps = state => {
    return { products: state.products, cartItems: state.cartItems };
};

const mapDispatchToProps = dispatch => {
    return {
        addProduct: product => dispatch(addProduct(product)),
        addToCart: product => dispatch(addToCart(product)),
        removeFromCart: product => dispatch(removeFromCart(product))
    };
};

const ConnectedProducts = ({ products, cartItems, addToCart }) => (
    <div>
        {
            products.map((product, i) => <Product key = {i} productDetails = {product} 
            products = {products}
            cartItems = {cartItems}
            addToCartProp = {addToCart}
            removeFromCartProp = {removeFromCart}
            />)
        }
    </div>
  );

const Products = connect(mapStateToProps, mapDispatchToProps)(ConnectedProducts);

/*ConnectedProducts.propTypes = {
    products: PropTypes.array.isRequired
};*/

export default Products;