import React, { Component } from 'react';
import Cover from './components/Cover';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFileCircleCheck,
    faPeopleCarryBox,
    faLocationPin,
    faCalendarWeek

} from '@fortawesome/free-solid-svg-icons';

class About extends Component {
    render() {
        return (
            <div class="container" style={{ width: 1200 }}>

                <Cover />

                <div class="container">
                    <p>About here</p>
                </div>

                <div class='container avenir-reg' style={{ width: 1200 }}>
                    <h1>Company</h1>
                    <hr />

                    <div class="row justify-content-evenly avenir-bold" style={{ paddingTop: 10, paddingLeft: 0, paddingRight: 0 }}>
                        <div class="col-md">
                            <div class="card" style={cardStyle}>
                                <FontAwesomeIcon icon={faFileCircleCheck} class="card-img-top" style={cardIconStyle} />
                                <div class="card-body" style={cardBodyStyle}>
                                    <h5 class="card-title">Fully Insured and Experienced</h5>
                                    <p class="card-text avenir-reg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary" style={cardButtomStyle} >Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md">

                            <div class="card" style={cardStyle}>
                                <FontAwesomeIcon icon={faPeopleCarryBox} class="card-img-top" style={cardIconStyle} />
                                <div class="card-body" style={cardBodyStyle}>
                                    <h5 class="card-title">Reliable and Friendy Service</h5>
                                    <p class="card-text avenir-reg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary" style={cardButtomStyle} >Go somewhere</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-md">

                            <div class="card" style={cardStyle}>
                                <FontAwesomeIcon icon={faLocationPin} class="card-img-top" style={cardIconStyle} />
                                <div class="card-body" style={cardBodyStyle}>
                                    <h5 class="card-title">All Areas</h5><br />
                                    <p class="card-text avenir-reg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary" style={cardButtomStyle} >Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md">

                            <div class="card" style={cardStyle}>
                                <FontAwesomeIcon icon={faCalendarWeek} class="card-img-top" style={cardIconStyle} />
                                <div class="card-body" style={cardBodyStyle}>
                                    <h5 class="card-title">7 Days</h5><br />
                                    <p class="card-text avenir-reg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary" style={cardButtomStyle} >Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;

const cardStyle = {
    width: '17.25rem',
    alignItems: 'center',
    backgroundColor: '#be353d',
    marginBottom: 20,
};

const cardIconStyle = {
    width: 100,
    height: 100,
    padding: 20,
    color: 'white'
};

const cardBodyStyle = {
    backgroundColor: 'white',
    borderRadius: 5
}

const cardButtomStyle = {
    color: '#be353d',
    backgroundColor: 'white',
    borderColor: '#be353d',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.19)',
}