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
                                <p className="card-text avenir-reg">
                                    Our business is fully insured and our removalists are experienced.
                                </p>
                                <br />
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="card CardStyle border-white" >
                            <FontAwesomeIcon icon={faPeopleCarryBox} className="card-img-top CardIconStyle" />
                            <div className="card-body CardBodyStyle"><br />
                                <h5 className="card-title avenir-bold">Reliable and Friendy Service</h5>
                                <p className="card-text avenir-reg">
                                    Quick service with all the care you can expect from our professionals.
                                </p>
                                <br />
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="card CardStyle border-white" >
                            <FontAwesomeIcon icon={faLocationPin} className="card-img-top CardIconStyle" />
                            <div className="card-body CardBodyStyle"><br />
                                <h5 className="card-title avenir-bold">All Areas</h5><br />
                                <p className="card-text avenir-reg">
                                    We work on all areas in Sydney including regional NSW.
                                </p>
                                <br />
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="card CardStyle border-white">
                            <FontAwesomeIcon icon={faCalendarWeek} className="card-img-top CardIconStyle" />
                            <div className="card-bod CardBodyStyle"><br />
                                <h5 className="card-title avenir-bold" style={{paddingTop:14}}>7 Days</h5><br />
                                <p className="card-text avenir-reg">
                                    Available to do your job all days of the week.
                                </p>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default CardAbout;

