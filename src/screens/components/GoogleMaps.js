import React, { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '40%',
    height: '25%',
    marginBottom: '50%'
};


class GoogleMaps extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={9}
                style={mapStyles}
                initialCenter={
                    {
                        lat: -33.86181056507842,
                        lng: 151.33792452593502

                    }
                }
            />
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCwL_f41Ctq07cNKEmRtPjD_FEtnppO0Zk'
})(GoogleMaps);
