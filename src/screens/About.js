import React, { Component } from 'react';
import Cover from './components/Cover';
import CardAbout from './components/CardAbout';
import Form from './components/Form';
import './css/About.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCouch,
    faBuilding,
    faTruck,
    faGavel
} from '@fortawesome/free-solid-svg-icons';

class About extends Component {
    render() {
        return (
            <div className="container FixedStyle" >

                <Cover className="FixedStyle" />

                <div className="container avenir-reg" >
                    <br />
                    <h1>About Us</h1>
                    <hr />

                </div>
                <div className="container avenir-reg">

                    <br />
                    <h1>Services</h1>
                    <FontAwesomeIcon className="ListIconStyle" icon={faGavel}  />
                    <h5 className="card-title">Auction Pick Up and Deliveries</h5><br />
                    <p className="card-text avenir-reg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                </div>
                <div className="container avenir-reg">
                    <FontAwesomeIcon icon={faTruck} className="ListIconStyle" />
                    <h5 className="card-title">Local and Interstate Removals</h5>
                    <p className="card-text avenir-reg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faBuilding} className="ListIconStyle"/>

                    <h5 className="card-title">Office Removal</h5><br />
                    <p className="card-text avenir-reg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faCouch} className="ListIconStyle" />
                    <h5 className="card-title">Clean Up and Disposal Furniture</h5>
                    <p className="card-text avenir-reg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>

                <br /><br />
                <CardAbout />
                <br/>
                <br/>
                <Form />

            </div>
        )
    }
}

export default About;

