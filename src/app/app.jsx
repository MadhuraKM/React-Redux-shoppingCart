import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom'
import Header from './core/components/header.jsx';
import Shop from './shop/Shop.jsx'
import CreateProduct from './create-product/create-product.jsx';

const App = () => (
    <div>
        <Header />

        <main>
            <Switch>
                <Route exact path='/' render={(props) => (
                    <Shop {...props} />
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