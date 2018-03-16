import React, { Component } from 'react';

class Product extends Component{

    constructor(props) {
        super(props);

        this.addProduct = this.addProduct.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
    }

    addProduct(prID) {
        
        let itemtoAdd = this.props.products.find((product) => { 
            return product.id == prID; });
        let cartItem = this.props.cartItems.find((cartItem) => { 
            return cartItem.id == prID;                
        });

        if(cartItem){
            cartItem.quantity = Number(cartItem.quantity) + 1;
            cartItem.amount = Number(cartItem.quantity) * Number(cartItem.price);
            //this.setState({ cartItems: [...this.props.cartItems] });

            this.props.addToCartProp(cartItem);

            //this.props.totalAmount = Number(this.props.totalAmount) + Number(cartItem.price);            
        }else{
           let newobj={};
           newobj.id = itemtoAdd.id;
           newobj.name = itemtoAdd.name;
           newobj.price = itemtoAdd.price;
           newobj.brand = itemtoAdd.brand;
           newobj.weight = itemtoAdd.weight;
           newobj.quantity = 1;
           newobj.amount = Number(newobj.quantity) * Number(newobj.price);
           //this.setState({ cartItems: [...this.state.cartItems, newobj] });

           this.props.addToCartProp(newobj);

           //this.props.totalAmount = Number(this.props.totalAmount) + Number(newobj.price);
        }    

        //this.setState({ totalAmount: this.state.totalAmount});        
    }

    removeProduct(prID) {      
        
        let cartItem = this.props.cartItems.find((cartItem) => { 
            return cartItem.id == prID;                
        });

        this.props.removeFromCartProp(cartItem);
    }
  
    render(){
        var itemsAdded = 0;
        this.props.cartItems.map((item, i) => {
            if(item.name === this.props.productDetails.name){
                itemsAdded = item.quantity;
            }
        });

        return(
            <div className='product'>
                <img src={this.props.productDetails.image} />
                <div>{this.props.productDetails.brand}</div>
                <div>{this.props.productDetails.name}</div>
                <div className='weight'>{this.props.productDetails.weight}</div>
                <div className='price'>Rs. {this.props.productDetails.price}</div>

                <button value={this.props.productDetails.id} className='productBtn' 
                onClick={ () => this.addProduct(this.props.productDetails.id) } hidden={itemsAdded}>Add To Cart</button>
                <div hidden={!itemsAdded}>
                    <button value={this.props.productDetails.id} onClick={ () => this.removeProduct(this.props.productDetails.id) }>-</button>
                    <button> {itemsAdded} in Cart</button>
                    <button value={this.props.productDetails.id} onClick={ () => this.addProduct(this.props.productDetails.id) }>+</button>
                </div>
            </div>
        );
    }
}

export default Product;