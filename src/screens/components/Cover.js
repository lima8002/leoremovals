import React, { Component } from 'react';

import titlelogo from '../images/titlelogo.png';
import movingFurniture from '../images/movingfurniture.jpg';

export default class Cover extends Component {
  render() {
    return (
        <div class="container app-logo" style={{
            display: 'grid',
            gridTemplateColumns: '0.7fr 1.3fr',
            gridTemplateRows: '1fr',
            gap: '0px 0px',
            gridTemplateAreas: '. .',
            width: 1200,
            paddingLeft: 0,
            paddingRight: 0,
            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.19)',
        }}>
            <div class="container" style={{ backgroundColor: 'white', borderRadius: 5 }}>

                <img src={titlelogo} width="350" height="350" alt="" style={{ borderRadius: 5 }} />

            </div>
            <div class="container" style={{backgroundImage: `url(${movingFurniture})`, backgroundSize:'cover' , borderRadius: '5px 0 5px 5px ', }}>
                <p style={{paddingTop:180, paddingRight:280}}>
                <h1 class="navbar-title" style={{ color: '#be353d' }}><br />Leo Removals</h1>
                <h3 class="avenir-reg">Removalist Service in Sydney&nbsp;&nbsp;&nbsp;</h3>
                </p>
            </div>
        </div>
    )
  }
}
