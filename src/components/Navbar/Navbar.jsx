import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";



const Navbar=()=>{

    const [loginBtn, setLoginBtn]=useState(true);
    
    const loginHandle=()=>{
        setLoginBtn(!loginBtn);
    }
   
    return(
        <div className="navbar">
           
           <img src={logo} alt="logo" className="logo"></img>

           <div className="nav-items-section">
            <div className="nav-items">
            <Link to="/" className="item">Home</Link>
            <Link to="/about" className="item">About</Link>
            <Link to="/contact" className="item">Contact</Link>
            <Link to="/cart" className="item"><FaCartShopping /> </Link>
            </div>

            <button className={`log-btn ${loginBtn ? '' :'toogle'}`} onClick={loginHandle}>{loginBtn ? "Login" : 'Logout'}</button>
           </div>

           <div className="hamburger-menu">
            <div></div>
            <div></div>
            <div></div>
           </div>

        </div>
        
    )
}

export default Navbar;