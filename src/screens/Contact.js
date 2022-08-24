import React, { Component } from 'react';

import CardAbout from './components/CardAbout';
import Cover from './components/Cover';
import GoogleMaps from './components/GoogleMaps';
import './css/Contact.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'


class Contact extends Component {
    render() {
        return (
            <div className="container FixedStyle" >
                <Cover />
                <div className="container avenir-reg" style={{ maxWidth: '60%' }}>
                    <br />
                    <br />
                    <h1>Contact</h1>
                    <br />
                    <hr />
                    <br />
                    <h5>You can reach Leo Removals over the phone</h5>
                    <p className="navbar-text navbar-title mr-auto" style={{ fontSize: 20, paddingTop: 25, color: '#be353d' }} ><FontAwesomeIcon icon={faPhone} /> 0412 493 447</p>
                    <hr /> <br/>
                    <h1>Our Location</h1><br/>
                    <div className="container-fluid" style={{ marginLeft:'10%' }}>
                        <GoogleMaps />
                    </div> 
                    <div className="container"style={{ marginTop: '50%'}} >
                    <hr/>
                    </div>
                </div>
                <CardAbout />
            </div>
        )
    }
}

export default Contact;