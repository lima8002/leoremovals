import React from "react";
import '../css/Footer.css';
import logo from '../images/titlelogo.jpg';
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-dark" style={{ width: '100%' }} >
            <div className="FooterMiddle" >
                <div className="container" >
                    <h4 className="navbar-title"><img className="ImageStyle" src={logo} alt="" /> Leo Removals</h4>
                    <div className="">
                        
                    <NavLink exact activeClassName="active" className="nav-link lead-font-size" to={'/'}>Home</NavLink>
                    <NavLink activeClassName="active" className="nav-link lead-font-size" to={'/about'}>About Us</NavLink>
                    <NavLink activeClassName="active" className="nav-link lead-font-size" to={'/contact'}>Contact </NavLink>

                    </div>
                    <div className="container FooterBottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} Eduardo Lima
                        </p>
                    </div>
                </div>
            </div>
        </footer>

    )
};

export default Footer;



