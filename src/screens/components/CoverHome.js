import React, { Component } from 'react';
import '../css/CoverHome.css';

class CoverHome extends Component {
    render() {
        return (
            <div className="container CoverHomeStyle" >

                <div className="container DivContStyle">

                    <div className="container DivLogoStyle">
                        <br />
                        <div className="container" style={{width:500}}>
                            <div className="LogoStyle">

                            </div>
                        </div>
                        <div className="container">
                            <h1 className="navbar-title LogoColor"><br />Leo Removals</h1>
                            <h3 className="avenir-reg">Removalist Service in Sydney&nbsp;&nbsp;&nbsp;<br /></h3>
                        </div>

                    </div>

                </div>

            </div>

        )
    }
}
export default CoverHome;
