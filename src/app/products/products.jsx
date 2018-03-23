import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addProduct } from "./action";
import { addToCart, removeFromCart } from "../cart/action";
import { checkItem } from "./util/checkItemInCart";
import "./products.css";

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
 
let itemsAdded=0, imgsSrc=undefined, itemRendered= undefined;


class ConnectedProducts extends Component {
    
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                {
                   
                    this.props.products.map((product, i) => 
                            <div  key = {i} className='product'>
                                <img src={"/app/assets/images/" + product.image} />
                                <div>{product.brand}</div>
                                <div>{product.name}</div>
                                <div className='weight'>{product.weight}</div>
                                <div className='price'>Rs. {product.price}</div>

                                <button value={product.id} className='productBtn' 
                                onClick={ () => this.props.addToCart(product.id) } hidden={ checkItem(this.props.cartItems, product) }>Add To Cart</button>
                                <div hidden={ !checkItem(this.props.cartItems, product) }>
                                    <button value={product.id} onClick={ () => this.props.removeFromCart(product.id) }>-</button>
                                    <button> { checkItem(this.props.cartItems, product) } in Cart</button>
                                    <button value={product.id} onClick={ () => this.props.addToCart(product.id) }>+</button>
                                </div>
                            </div>

                    )
                }
            </div>
        )
    }
};

const Products = connect(mapStateToProps, mapDispatchToProps)(ConnectedProducts);

export default Products;