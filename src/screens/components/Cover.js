import React, { Component } from 'react';
import '../css/Cover.css';

export default class Cover extends Component {
    render() {
        return (
            <div className="container FixedStyle GridStyle">

                <div className="container ">
                    <div className="row ">
                        <div className="col-md-3 DivLogoStyle">
                            <div className="container ">
                            </div>
                        </div>
                        <div className="col w-60">
                            <div className="container DivTitleStyle">
                                <p style={{ paddingTop: 180, paddingRight: 280 }}>
                                    <h1 className="navbar-title" style={{ color: '#be353d' }}><br />Leo Removals</h1>
                                    <h3 className="avenir-reg">Removalist Service in Sydney</h3>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
