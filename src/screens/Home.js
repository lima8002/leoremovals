import React, { Component } from 'react';
import sydney1 from '../screens/images/sydney-1.jpg';
import sydney2 from '../screens/images/sydney-21.jpg';
import sydney3 from '../screens/images/sydney-3.jpg';
import transp from '../screens/images/leoremovalstransp2.png';
import './css/custom.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGavel,
    faCouch,
    faBuilding,
    faTruck,
} from '@fortawesome/free-solid-svg-icons';

import titlelogo from './images/titlelogo.png';
import CardAbout from './components/CardAbout';
import * as Constants from './css/card.js';

class Home extends Component {
    render() {
        return (
            <div class="container" style={{ width: 1200 }}>

                {/* title image div */}

                <div class="container" style={{
                    width: 1180, height: 500, backgroundImage: `url(${sydney2})`, backgroundPosition: 'center', backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat', boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.19)', borderRadius: '0 0 5px 5px'
                }}>
                    <br /><br /><br />
                    <div class="container" style={{ width: 950, position: 'relative', alignItems: 'center', textAlign: 'center' }}>
                        <div class="container" style={{ width: '65%', padding: 10, backgroundColor: 'white', boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.19)', borderRadius: 5 }}>

                            <h1 class="navbar-title" style={{ color: '#be353d' }}><img src={titlelogo} width="135" height="135" alt="" style={{ float: 'left', borderRadius: 5 }} /><br />Leo Removals</h1>
                            <h3 class="avenir-reg">Removalist Service in Sydney&nbsp;&nbsp;&nbsp;</h3>
                        </div>

                    </div>
                </div>

                {/* card container services */}

                <div class='container avenir-reg' style={{ width: 1200 }}>
                    <div class="container">
                        <br /><br />
                        <h1>Services</h1>
                        <hr class="center" />
                    </div>
                    <div class="row align-items-start avenir-bold" style={{ paddingTop: 10, paddingLeft: 0, paddingRight: 0 }}>

                        <div class="col-md">
                            <div class="card " style={Constants.cardStyle}>
                                <FontAwesomeIcon icon={faGavel} class="card-img-top" style={Constants.cardIconStyle} />
                                <div class="card-body" style={Constants.cardBodyStyle}>
                                    <h5 class="card-title">Auction Pick Up and Deliveries</h5>
                                    <p class="card-text avenir-reg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href='auction' class="btn btn-primary" style={Constants.cardButtomStyle} >Find out more</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="card" style={Constants.cardStyle}>
                                <FontAwesomeIcon icon={faTruck} class="card-img-top" style={Constants.cardIconStyle} />
                                <div class="card-body" style={Constants.cardBodyStyle}>
                                    <h5 class="card-title">Local and Interstate Removals</h5>
                                    <p class="card-text avenir-reg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="removals" class="btn btn-primary" style={Constants.cardButtomStyle} >Find out more</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md">

                            <div class="card" style={Constants.cardStyle}>
                                <FontAwesomeIcon icon={faBuilding} class="card-img-top" style={Constants.cardIconStyle} />
                                <div class="card-body" style={Constants.cardBodyStyle}>
                                    <h5 class="card-title">Office Removal</h5><br />
                                    <p class="card-text avenir-reg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="office" class="btn btn-primary" style={Constants.cardButtomStyle} >Find out more</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md">

                            <div class="card" style={Constants.cardStyle}>
                                <FontAwesomeIcon icon={faCouch} class="card-img-top" style={Constants.cardIconStyle} />
                                <div class="card-body" style={Constants.cardBodyStyle}>
                                    <h5 class="card-title">Clean Up and Disposal Furniture</h5>
                                    <p class="card-text avenir-reg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="disposal" class="btn btn-primary" style={Constants.cardButtomStyle} >Find out more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* card cotainer company */}

                <div class="container avenir-reg" >
                    <h1 >Company</h1>
                    <hr class="center" />
                </div>
                <CardAbout />
                <div class="container avenir-reg" >
                    <hr class="center" />
                </div>

            </div>
        )
    }
}

export default Home;

