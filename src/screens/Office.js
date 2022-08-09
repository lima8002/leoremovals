import React, { Component } from 'react';
import CardAbout from './components/CardAbout';
import Cover from './components/Cover';

class Office extends Component {
    render() {
        return (
            <div>
                <Cover />

                Office

                <CardAbout />
            </div>
        )
    }
}

export default Office;
