
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from "./core/configureStore";
import App from './app.jsx';
import "./styles.css";

const store = configureStore();

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
),document.getElementById('app'));
