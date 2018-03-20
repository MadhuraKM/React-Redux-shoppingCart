import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom'
import data from '../products.json';
import Header from './header.jsx';
import Home from './home.jsx';
import Shop from './Shop.jsx'
import CreateProduct from '../../products/create-product.jsx';

const App = () => (
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
)

export default App;