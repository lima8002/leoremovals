import React, { Component } from 'react';
import './css/custom.css';

import CardAbout from './components/CardAbout';
import CoverHome from './components/CoverHome';
import CardServices from './components/CardServices';

class Home extends Component {
    render() {
        return (
            
            <div className="container" >
                <CoverHome />
                <div className='container avenir-reg' >
                    <div className="container">
                        <br /><br />
                        <h1 className="text-left">Services</h1>
                        <hr className="center" />
                        <br />
                    </div>
                    <CardServices />
                    <div className="container avenir-reg"  >
                        <h1 >Our Business</h1>
                        <hr />
                        <br />
                    </div>
                    <CardAbout />
                </div>
                <br />
                <br />
            </div>
        )
    }
}

export default Home;

