import React, { useState } from 'react';
import './navbar.css';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [activeMenu, setActiveMenu] = useState("shop");
    
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt=""/>
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => {setActiveMenu("shop")}}><Link style={{ textDecoration: 'none' }} to='/shop'>Shop</Link>{activeMenu==="shop"?<hr/>:<></>}</li>
                <li onClick={() => {setActiveMenu("men")}}><Link style={{ textDecoration: 'none' }} to='/men'>Men</Link>{activeMenu==="men"?<hr/>:<></>}</li>
                <li onClick={() => {setActiveMenu("women")}}><Link style={{ textDecoration: 'none' }} to='/women'>Women</Link>{activeMenu==="women"?<hr/>:<></>}</li>
                <li onClick={() => {setActiveMenu("kids")}}><Link style={{ textDecoration: 'none' }} to='/kids'>kids</Link>{activeMenu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt=""/></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
}; 

export default Navbar;
