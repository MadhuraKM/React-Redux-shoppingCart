import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addToCart, removeFromCart } from "../cart/middleware";
import { itemsFetchData } from "./middleware";
import { checkItem } from "./util/checkItemInCart";
import "./products.css";

const mapStateToProps = state => {
    return { 
        products: state.products, 
        cartItems: state.cartItems,
        //items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addToCart: itemId => dispatch(addToCart(itemId)),
        removeFromCart: itemId => dispatch(removeFromCart(itemId)),
        fetchProducts: (url) => dispatch(itemsFetchData(url))
    };
};
 
let itemsAdded=0, imgsSrc=undefined, itemRendered= undefined;


const BASE_URL = "http://localhost:8282";

const url = `${BASE_URL}/app/data/products.json`;

class ConnectedProducts extends Component {


    componentDidMount() {
        //this.props.fetchProducts(url);
    }

    render(){

        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

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