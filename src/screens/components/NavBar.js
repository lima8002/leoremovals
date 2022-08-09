import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

import {
  NavLink,
} from "react-router-dom";

import icon from '../images/icon.png';

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg sticky-top" style={{ background: "#be353d" }}>
      <div class="container-fluid" style={{ width: 1200 }}>

        <a class="navbar-brand navbar-title text-white" href="/"><img src={icon} width="35" height="35" alt="" /> Leo Removals</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NavLink exact activeClassName="active" className="nav-link lead-font-size" to={'/'}>Home </NavLink>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <ul class="dropdown-menu">
                <li><NavLink activeClassName="active" className="dropdown-item" to={'/auction'}>Auction Pick Up and Deliveries</NavLink></li>
                <li><NavLink activeClassName="active" className="dropdown-item" to={'/removals'}>Local and Interstate Removals</NavLink></li>
                <li><NavLink activeClassName="active" className="dropdown-item" to={'/office'}>Office Removal</NavLink></li>
                <li><NavLink activeClassName="active" className="dropdown-item" to={'/disposal'}>Clean Up and Disposal Furniture</NavLink></li>
              </ul>
            </li>
            <li class="nav-item">
              <NavLink activeClassName="active" className="nav-link lead-font-size" to={'/about'}>About </NavLink>
            </li>
            <li class="nav-item">
              <NavLink activeClassName="active" className="nav-link lead-font-size" to={'/contact'}>Contact </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <li class="nav-item">
            <p class="navbar-text navbar-title text-white mr-auto" ><FontAwesomeIcon icon={faPhone} /> 0412 493 447</p>
          </li>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;

