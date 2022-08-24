import React,  { Component } from 'react';
import '../css/NavBar.css';
import icon from '../images/icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

import {
  NavLink,
} from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar NavBarTopStyle navbar-expand-lg sticky-top ">
        <div className="container-fluid NavBarContainerStyle">

          <a className="navbar-brand NavBarTitleStyle navbar-title text-white" href="/" ><img src={icon} width="35" height="35" alt="" /> Leo Removals</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse TogglerStyle " id="navbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ fontSize: 18 }}>
              <li className="nav-item">
                <NavLink exact activeClassName="active" className="nav-link lead-font-size" to={'/'}>Home </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link lead-font-size" to={'/about'}>About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link lead-font-size" to={'/contact'}>Contact </NavLink>
              </li>
            </ul>
            <div>
              <ul>
                <li className="list-unstyled">
                  <li className="nav-item">
                    <p className="navbar-text navbar-title text-white mr-auto" style={{ fontSize: 20, paddingTop: 25 }} ><FontAwesomeIcon icon={faPhone} /> 0412 493 447</p>
                  </li>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </nav>
    )
  }
}

export default NavBar;

