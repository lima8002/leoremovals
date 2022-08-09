import React from "react";
import './App.css';
import './screens/css/custom.css';
import Footer from './screens/components/Footer.js';
import NavBar from "./screens/components/NavBar";

import {
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import About from './screens/About';
import Contact from './screens/Contact';
import Home from './screens/Home';
import Auction from './screens/Auction';
import Removals from './screens/Removals';
import Office from './screens/Office';
import Disposal from './screens/Disposal';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">

          {/* <nav class="navbar navbar-expand-lg sticky-top" style={{ background: "#be353d" }}>
          <div class="container-fluid" style={{ width: 1200 }}>
            <a class="navbar-brand navbar-title text-white" href="/"><img src={icon} width="35" height="35" alt="" /> Leo Removals</a>
            <div class="collapse navbar-collapse" >
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <li class="nav-link">
                    <NavLink exact activeClassName="active" to={'/'}>Home </NavLink>
                  </li>
                </li>
                <li class="nav-item">
                  <li class="nav-link">
                    <NavLink activeClassName="active" to={'/auction'}>Auction Pick Uo and Deliveries</NavLink>
                  </li>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul class="dropdown-menu">
                    <li class="dropdown-item"><NavLink activeClassName="active" to={'/auction'}>Auction </NavLink></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li class="nav-link"><NavLink activeClassName="active" to={'/about'}>About </NavLink></li>
                <li class="nav-link"><NavLink activeClassName="active" to={'/contact'}>Contact </NavLink></li>
                <li class="nav-item">
                  <a class="nav-link disabled">Disabled</a>
                </li>
              </ul>

            </div>
            <li class="navbar-text">
              <p class="navbar-text navbar-title text-white mr-auto" ><FontAwesomeIcon icon={faPhone} /> 0412 493 447</p>
            </li>





          </div>
        </nav> */}


          <NavBar />
          <Routes>
            <Route exact="exact" path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/auction' element={<Auction />} />
            <Route path='/removals' element={<Removals />} />
            <Route path='/office' element={<Office />} />
            <Route path='/disposal' element={<Disposal />} />
          </Routes>
          <Footer />
        </div>
      </Router>


    );
  }
}


export default App;

