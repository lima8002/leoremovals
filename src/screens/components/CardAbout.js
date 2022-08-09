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
                <div class='container avenir-reg' style={{ width: 1200 }}>
                    <div class="row justify-content-evenly avenir-bold" style={{ paddingTop: 10, paddingLeft: 0, paddingRight: 0 }}>
                        <div class="col-md">
                            <div class="card" style={Constants.cardStyle}>
                                <FontAwesomeIcon icon={faFileCircleCheck} class="card-img-top" style={Constants.cardIconStyle} />
                                <div class="card-body" style={Constants.cardBodyStyle}><br/>
                                    <h5 class="card-title">Fully Insured and Experienced</h5>
                                    <p class="card-text avenir-reg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <br/>
                                </div>
                            </div>
                        </div>
                        <div class="col-md">

                            <div class="card" style={Constants.cardStyle}>
                                <FontAwesomeIcon icon={faPeopleCarryBox} class="card-img-top" style={Constants.cardIconStyle} />
                                <div class="card-body" style={Constants.cardBodyStyle}><br/>
                                    <h5 class="card-title">Reliable and Friendy Service</h5>
                                    <p class="card-text avenir-reg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <br/>
                                </div>
                            </div>
                        </div>

                        <div class="col-md">

                            <div class="card" style={Constants.cardStyle}>
                                <FontAwesomeIcon icon={faLocationPin} class="card-img-top" style={Constants.cardIconStyle} />
                                <div class="card-body" style={Constants.cardBodyStyle}><br/>
                                    <h5 class="card-title">All Areas</h5><br />
                                    <p class="card-text avenir-reg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <br/>
                                </div>
                            </div>
                        </div>
                        <div class="col-md">

                            <div class="card" style={Constants.cardStyle}>
                                <FontAwesomeIcon icon={faCalendarWeek} class="card-img-top" style={Constants.cardIconStyle} />
                                <div class="card-body" style={Constants.cardBodyStyle}><br/>
                                    <h5 class="card-title">7 Days</h5><br />
                                    <p class="card-text avenir-reg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container avenir-bold">
                    <a href="/about" class="btn btn-primary" style={Constants.cardButtomStyle} >Find out more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardAbout;

