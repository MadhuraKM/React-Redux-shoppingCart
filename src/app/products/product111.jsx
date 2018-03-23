import React, { Component } from 'react';

class Product extends Component{

    constructor(props) {
        super(props);
    }    
  
    render(){
        var itemsAdded = 0;
        this.props.cartItems.map((item, i) => {
            if(item.name === this.props.productDetails.name){
                itemsAdded = item.quantity;
            }
        });

        var imgsSrc = "/src/app/assets/images/" + this.props.productDetails.image;

        return(
            <div className='product'>
                <img src={imgsSrc} />
                <div>{this.props.productDetails.brand}</div>
                <div>{this.props.productDetails.name}</div>
                <div className='weight'>{this.props.productDetails.weight}</div>
                <div className='price'>Rs. {this.props.productDetails.price}</div>

                <button value={this.props.productDetails.id} className='productBtn' 
                onClick={ () => this.props.addToCartProp(this.props.productDetails.id) } hidden={itemsAdded}>Add To Cart</button>
                <div hidden={!itemsAdded}>
                    <button value={this.props.productDetails.id} onClick={ () => this.props.removeFromCartProp(this.props.productDetails.id) }>-</button>
                    <button> {itemsAdded} in Cart</button>
                    <button value={this.props.productDetails.id} onClick={ () => this.props.addToCartProp(this.props.productDetails.id) }>+</button>
                </div>
            </div>
        );
    }
}

export default Product;