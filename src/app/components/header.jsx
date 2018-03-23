import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";

const Header = () => (
    <header>
        <h1>React-Redux Application</h1>
        <nav>
        <ul className="menu">      
            <li><Link to='/'>Home</Link></li>  
            <li><Link to='/shop'>Shop</Link></li>            
            <li><Link to='/createProduct'>Create Product</Link></li>                    
        </ul>
        </nav>
    </header>
)

export default Header;