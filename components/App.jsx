import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom'
import data from '../products.json';
import Header from './Header.jsx';
import Home from './Home.jsx';
import CreateProduct from './CreateProduct.jsx';
import Shop from './Shop.jsx'


class App extends React.Component {

    constructor() {
        super();        
    }

    render() {
        return (
            <div>
                <Header />

                <main>
                    <Switch>
                        <Route exact path='/' render={(props) => (
                            <Home {...props} />
                            )}/>
                        <Route path='/shop' render={(props) => (
                            <Shop  />
                            )}/>
                        <Route path='/createProduct' render={(props) => (
                            <CreateProduct {...props} />
                            )}/>                        
                    </Switch>
                </main>

            </div>
        );
    }
    componentDidUpdate(prevProps, prevState) {
        /*console.log('Component DID UPDATE!');
        console.log("componentWillUnmount cartItemss : ", JSON.stringify( this.state.cartItems));
        localStorage.setItem('cartItems', JSON.stringify( this.state.cartItems));
        localStorage.setItem('totalAmount', this.state.totalAmount);*/
     }

 }

export default App;