import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component{

    render(){
        return(
            /*<header>
                <h1>Masalas & Spices ({this.props.totalsItems} items)</h1>
            </header>*/
            <header>
                <nav>
                <ul className="menu">      
                    <li><Link to='/'>Home</Link></li>  
                    <li><Link to='/shop'>Shop</Link></li>            
                    <li><Link to='/createProduct'>Create Product</Link></li>                    
                </ul>
                </nav>
            </header>
        );
    } 

}

export default Header;