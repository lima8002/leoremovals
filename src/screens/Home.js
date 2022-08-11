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
import Form from './components/Form';
import * as Constants from './css/card.js';

import {
    NavLink,
  } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="container" >

                {/* title image div */}

                <div className="container" style={{backgroundImage: `url(${sydney2})`, backgroundPosition: 'center', backgroundSize: '1200px',
                    backgroundRepeat: 'no-repeat',  borderRadius: '0 0 5px 5px'
                }}>
                    <br /><br /><br />
                    <div className="container" style={{ position: 'relative'}}>
                        <div className="container" style={{ width: '65%', padding: 10, backgroundColor: 'white', boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.19)', borderRadius: 5 }}>

                            <h1 className="navbar-title" style={{ color: '#be353d' }}><img src={titlelogo} width="20%" height="20%" alt="" style={{ float: 'left', borderRadius: 5 , }} /><br />Leo Removals</h1>
                            <h3 className="avenir-reg">Removalist Service in Sydney&nbsp;&nbsp;&nbsp;<br /><br /></h3>
                        </div>
                        <br /><br /><br /><br /><br />
                    </div>
                </div>

                {/* card container services */}

                <div className='container avenir-reg' >
                    <div className="container">
                        <br /><br />
                        <h1>Services</h1>
                        <hr className="center" />
                    </div>
                    <div className="row align-items-start avenir-bold" style={{ paddingTop: 10, paddingLeft: 0, paddingRight: 0 }}>

                        <div className="col-md">
                            <div className="card " style={Constants.cardStyle}>
                                <FontAwesomeIcon icon={faGavel} className="card-img-top" style={Constants.cardIconStyle} />
                                <div className="card-body" style={Constants.cardBodyStyle}>
                                    <h5 className="card-title">Auction Pick Up and Deliveries</h5>
                                    <p className="card-text avenir-reg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <NavLink activeClassName="active" className="btn btn-primary" to={'/about'}>Find out more</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="card" style={Constants.cardStyle}>
                                <FontAwesomeIcon icon={faTruck} className="card-img-top" style={Constants.cardIconStyle} />
                                <div className="card-body" style={Constants.cardBodyStyle}>
                                    <h5 className="card-title">Local and Interstate Removals</h5>
                                    <p className="card-text avenir-reg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="removals" className="btn btn-primary" style={Constants.cardButtomStyle} >Find out more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">

                            <div className="card" style={Constants.cardStyle}>
                                <FontAwesomeIcon icon={faBuilding} className="card-img-top" style={Constants.cardIconStyle} />
                                <div className="card-body" style={Constants.cardBodyStyle}>
                                    <h5 className="card-title">Office Removal</h5><br />
                                    <p className="card-text avenir-reg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="office" className="btn btn-primary" style={Constants.cardButtomStyle} >Find out more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">

                            <div className="card" style={Constants.cardStyle}>
                                <FontAwesomeIcon icon={faCouch} className="card-img-top" style={Constants.cardIconStyle} />
                                <div className="card-body" style={Constants.cardBodyStyle}>
                                    <h5 className="card-title">Clean Up and Disposal Furniture</h5>
                                    <p className="card-text avenir-reg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="disposal" className="btn btn-primary" style={Constants.cardButtomStyle} >Find out more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* card cotainer company */}

                <div className="container avenir-reg" >
                    <h1 >Company</h1>
                    <hr className="center" />
                </div>
                <CardAbout />
                <div className="container avenir-reg" >
                    <hr className="center" />
                </div>
                <br/>
                <br/>
                <Form />

            </div>
        )
    }
}

export default Home;

