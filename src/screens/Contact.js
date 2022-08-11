import React, { Component } from 'react';
import CardAbout from './components/CardAbout';
import Cover from './components/Cover';
import Form from './components/Form';
import './css/Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="container FixedStyle">
                    
                <Cover  /> 
                <Form />
                <CardAbout />
            </div>
        )
    }
}

export default Contact;