import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
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