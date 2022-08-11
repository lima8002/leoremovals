import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFileCircleCheck,
    faPeopleCarryBox,
    faLocationPin,
    faCalendarWeek

} from '@fortawesome/free-solid-svg-icons';

import * as Constants from '../css/card.js';

class CardAbout extends Component {
    render() {
        return (
            <div>
                <div className='container avenir-reg' style={{ width: 1200 }}>
                    <div className="row justify-content-evenly avenir-bold" style={{ paddingTop: 10, paddingLeft: 0, paddingRight: 0 }}>
                        <div className="col-md">
                            <div className="card" style={Constants.cardStyle}>
                                <FontAwesomeIcon icon={faFileCircleCheck} className="card-img-top" style={Constants.cardIconStyle} />
                                <div className="card-body" style={Constants.cardBodyStyle}><br/>
                                    <h5 className="card-title">Fully Insured and Experienced</h5>
                                    <p className="card-text avenir-reg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <br/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">

                            <div className="card" style={Constants.cardStyle}>
                                <FontAwesomeIcon icon={faPeopleCarryBox} className="card-img-top" style={Constants.cardIconStyle} />
                                <div className="card-body" style={Constants.cardBodyStyle}><br/>
                                    <h5 className="card-title">Reliable and Friendy Service</h5>
                                    <p className="card-text avenir-reg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <br/>
                                </div>
                            </div>
                        </div>

                        <div className="col-md">

                            <div className="card" style={Constants.cardStyle}>
                                <FontAwesomeIcon icon={faLocationPin} className="card-img-top" style={Constants.cardIconStyle} />
                                <div className="card-body" style={Constants.cardBodyStyle}><br/>
                                    <h5 className="card-title">All Areas</h5><br />
                                    <p className="card-text avenir-reg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <br/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">

                            <div className="card" style={Constants.cardStyle}>
                                <FontAwesomeIcon icon={faCalendarWeek} className="card-img-top" style={Constants.cardIconStyle} />
                                <div className="card-body" style={Constants.cardBodyStyle}><br/>
                                    <h5 className="card-title">7 Days</h5><br />
                                    <p className="card-text avenir-reg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container avenir-bold">
                    <a href="/about" className="btn btn-primary" style={Constants.cardButtomStyle} >Find out more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardAbout;

