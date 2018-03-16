import React from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { removeFromCart } from "../actions/index";

const mapStateToProps = state => {
    return { cartItems: state.cartItems };
};

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: product => dispatch(removeFromCart(product))
    };
};

class connectedCart extends React.Component{
    constructor(props) {
        super(props);

        this.removeFromCart = this.removeFromCart.bind(this);
    }

    removeFromCart(cartItemID) {

         let cartItem = this.props.cartItems.find((cartItem) => { 
             return cartItem.id == cartItemID;                
         });

         this.props.removeFromCart(cartItem);
 
        /* this.props.totalAmount = Number(this.props.totalAmount) - Number(cartItem.amount);
         this.setState({ totalAmount: this.state.totalAmount});  */      

         console.log("Main productRemoveAlert : ", cartItem);
    }

    render(){
        return(
            <div className='cart'>
                <h2>Cart Summary</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Items in Cart</th>
                            <th>Total Rs.</th>
                        </tr>            
                        <tr>
                            <td>{this.props.cartItems.length}</td>
                            <td>{this.props.totalAmount}</td>
                        </tr>    
                    </tbody>
                </table>

                <hr/>
                <table>
                    <tbody>
                        <tr>
                            <th>Item</th>
                            <th>Qty</th>
                            <th>Total Rs</th>
                            <th></th>
                        </tr>            
                        {
                            this.props.cartItems.map((cartItem, i) => <CustomRow key={i} item={cartItem} 
                            removeFromCartProp={this.removeFromCart}/> )
                        }
                    </tbody>
                </table>
            </div>
        );
    }

}

class CustomRow extends React.Component{
    render() {
        return (
            <tr>
                <td>{this.props.item.name}</td>
                <td>{this.props.item.quantity}</td>
                <td>{Number(this.props.item.quantity) * Number(this.props.item.price)}</td>
                <td><button className='remove' title='Remove' value={this.props.item.id}
                onClick={ () => this.props.removeFromCartProp(this.props.item.id) }>X</button></td>
            </tr>
        );
    }
}


const Cart = connect(mapStateToProps, mapDispatchToProps)(connectedCart);

export default Cart;