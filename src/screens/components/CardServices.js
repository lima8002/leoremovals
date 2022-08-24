import React, { Component } from 'react';
import '../css/Card.css';
import '../css/custom.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGavel,
    faCouch,
    faBuilding,
    faTruck,
} from '@fortawesome/free-solid-svg-icons';

import { NavLink } from 'react-router-dom';

class CardServices extends Component {
    render() {
        return (
            <div className="container avenir-reg DivStyle ">
                <div className="row RowStyle">
                    <div className="col-md">
                        <div className="card CardStyle border-white">
                            <FontAwesomeIcon icon={faGavel} className="card-img-top CardIconStyle" />
                            <div className="card-body CardBodyStyle">
                                <h5 className="card-title avenir-bold">Auction Pick Up and Deliveries</h5>
                                <p className="card-text avenir-reg">
                                    We offer pick up and delivery for your auction items, either collecting or putting to sell.
                                </p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="card CardStyle border-white">
                            <FontAwesomeIcon icon={faTruck} className="card-img-top CardIconStyle" />
                            <div className="card-body CardBodyStyle">
                                <h5 className="card-title avenir-bold">Local and Interstate Removals</h5>
                                <p className="card-text avenir-reg">
                                    Quality service for your removal. Done quickly and safely. No time wasted and no damaged items.
                                </p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="card CardStyle border-white">
                            <FontAwesomeIcon icon={faBuilding} className="card-img-top CardIconStyle" />
                            <div className="card-body CardBodyStyle">
                                <h5 className="card-title avenir-bold">Office Removal</h5><br />
                                <p className="card-text avenir-reg">
                                    The best service when moving your office. No matter the distance, the job will be done by professionals.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="card CardStyle border-white">
                            <FontAwesomeIcon icon={faCouch} className="card-img-top CardIconStyle" />
                            <div className="card-body CardBodyStyle">
                                <h5 className="card-title avenir-bold">Clean Up and Disposal Furniture</h5>
                                <p className="card-text avenir-reg">
                                    We can remove your furniture and other items to the disposal facility.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                   
                </div>
                <NavLink activeClassName="active" className="btn btn-outline-danger CardButtomStyle" to={'/about'}>Find out more</NavLink>
            </div>
        )
    }
}

export default CardServices;