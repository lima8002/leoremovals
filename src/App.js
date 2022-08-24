import React from "react";
import './App.css';
import './screens/css/custom.css';
import FooterCustom from './screens/components/FooterCustom.js';
import NavBar from "./screens/components/NavBar";

import {
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import About from './screens/About';
import Contact from './screens/Contact';
import Home from './screens/Home';
import ScrollTop from "./screens/components/ScrollTop";

class App extends React.Component {
  render() {
    return (
      <Router>
        <ScrollTop />
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact="exact" path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <FooterCustom />
        </div>
      </Router>


    );
  }
}


export default App;

