import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCircleCheck, faPeopleCarryBox, faLocationPin, faCalendarWeek } from '@fortawesome/free-solid-svg-icons';
import '../css/Card.css';

class CardAbout extends Component {
    render() {
        return (
            <div className="container avenir-reg DivStyle ">
                <div className="row RowStyle">
                <div className="col-md">
                    <div className="card CardStyle border-white" >
                        <FontAwesomeIcon icon={faFileCircleCheck} className="card-img-top CardIconStyle" />
                        <div className="card-body CardBodyStyle"><br />
                            <h5 className="card-title avenir-bold">Fully Insured and Experienced</h5>
                            <p className="card-text avenir-reg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <br />
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="card CardStyle border-white" >
                        <FontAwesomeIcon icon={faPeopleCarryBox} className="card-img-top CardIconStyle" />
                        <div className="card-body CardBodyStyle"><br />
                            <h5 className="card-title avenir-bold">Reliable and Friendy Service</h5>
                            <p className="card-text avenir-reg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <br />
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="card CardStyle border-white" >
                        <FontAwesomeIcon icon={faLocationPin} className="card-img-top CardIconStyle" />
                        <div className="card-body CardBodyStyle"><br />
                            <h5 className="card-title avenir-bold">All Areas</h5><br />
                            <p className="card-text avenir-reg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <br />
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="card CardStyle border-white">
                        <FontAwesomeIcon icon={faCalendarWeek} className="card-img-top CardIconStyle" />
                        <div className="card-bod CardBodyStyle"><br />
                            <h5 className="card-title avenir-bold">7 Days</h5><br />
                            <p className="card-text avenir-reg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <br />
                        </div>
                    </div>
                </div>
                </div>
                <div className="container avenir-bold">
                    <a href="/about" className="btn btn-primary CardButtomStyle" >Find out more</a>
                </div>
            </div>

        )
    }
}

export default CardAbout;

