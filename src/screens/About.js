import React, { Component } from 'react';
import Cover from './components/Cover';
import CardAbout from './components/CardAbout';
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

                <Cover />
                <div className="container avenir-reg" >
                    <br />

                    <br />
                    <h1>Our Services</h1>
                </div>

                <div className="container avenir-reg" style={{ maxWidth: '60%', padding: '20px' }}>
                    <hr />
                    <FontAwesomeIcon className="ListIconStyle" icon={faGavel} />
                    <h5 className="card-title avenir-bold">Auction Pick Up and Deliveries</h5><br />
                    <p className="card-text avenir-reg">
                        We offer pick up and delivery for your auction items, either collecting or putting to sell.
                        The furniture will be transported safely with all the protection needed to avoid any damages.
                        For the small items, packing is available with the required material for the transport.
                    </p>

                </div>
                <div className="container avenir-reg" style={{ maxWidth: '60%', padding: '20px' }}>
                    <hr />
                    <FontAwesomeIcon icon={faTruck} className="ListIconStyle" />
                    <h5 className="card-title avenir-bold">Local and Interstate Removals</h5><br />
                    <p className="card-text avenir-reg">
                        Quality service for your removal. Done quickly and safely. No time wasted and no damaged items.
                        Our removals services are available for local and interstate anywhere in Australia.
                        With Leo Removals, we garantee the best service available in Sydney.  
                    </p>
                </div>
                <div className="container" style={{ maxWidth: '60%', padding: '20px' }}>
                    <hr />
                    <FontAwesomeIcon icon={faBuilding} className="ListIconStyle" />

                    <h5 className="card-title avenir-bold">Office Removal</h5><br />
                    <p className="card-text avenir-reg">
                    The best service when moving your office. No matter the distance, the job will be done by professionals.
                    We have experience on office removals. Big or small, the job will be done with all the safety from our team and for your office. 
                    </p>
                </div>
                <div className="container" style={{ maxWidth: '60%', padding: '20px' }}>
                    <hr />
                    <FontAwesomeIcon icon={faCouch} className="ListIconStyle" />
                    <h5 className="card-title avenir-bold">Clean Up and Disposal Furniture</h5><br />
                    <p className="card-text avenir-reg" >
                        We can remove your furniture and other items to the disposal facility.
                        Contact us to arrange your disposal. Charges will apply when taking to the facility.
                        </p>
                    <br />
                    <hr />
                </div>

                <br /><br />
                <CardAbout />
                <br />
                <br />


            </div>
        )
    }
}

export default About;

