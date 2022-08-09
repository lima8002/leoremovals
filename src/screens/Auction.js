import React, { Component } from 'react';
import Cover from './components/Cover';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGavel
} from '@fortawesome/free-solid-svg-icons';
import CardAbout from './components/CardAbout';

class Auction extends Component {
    render() {
        return (
            <div class='container' style={{ width: 1200 }}>
                <Cover />

                <div class="col-md">
                    <div class="card " style={cardStyle}>
                        <FontAwesomeIcon icon={faGavel} class="card-img-top" style={cardIconStyle} />
                        <div class="card-body" style={cardBodyStyle}>
                            <h5 class="card-title">Auction Pick Up and Deliveries</h5>
                            <p class="card-text avenir-reg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href='auction' class="btn btn-primary" style={cardButtomStyle} >Find out more</a>
                        </div>
                    </div>
                </div>

                Auction

                <CardAbout />
            </div>
        )
    }
}

export default Auction;

const cardStyle = {
    width: '17.25rem',
    alignItems: 'center',
    backgroundColor: '#be353d',
    marginBottom: 20,
    paddingLeft: 0
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