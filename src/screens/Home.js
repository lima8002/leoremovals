import React, { Component } from 'react';
import './css/custom.css';

import CardAbout from './components/CardAbout';
import Form from './components/Form';
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
                        <br />
                    </div>
                    <CardServices />
                </div>
                <div className="container avenir-reg" >
                    <h1 >Company</h1>
                    <hr className="center" />
                </div>
                <CardAbout />
                <div className="container avenir-reg" >
                    <hr className="center" />
                </div>
                <br />
                <br />
                <Form />
            </div>
        )
    }
}

export default Home;

