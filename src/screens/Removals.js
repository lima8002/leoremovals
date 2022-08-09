import React, { Component } from 'react';
import CardAbout from './components/CardAbout';
import Cover from './components/Cover';
import './css/custom.css';

class Removals extends Component {
    render() {

        return (
            <div class="container" style={{ width: 1200 }}>
                <Cover />
                <p>Removals</p>

                <CardAbout />

            </div>
        )
    }
}

export default Removals;