import React from "react";

function Footer() {
    return (
        <div className="main-footer" >
            <div style={footerMiddle} >
                <div className="container" style={{ width: 1200 }}>
                    <div className="row">
                        <div className="center">
                            <h4>text here</h4>
                            <ul className="list-unstyled">
                                <li> tex text</li>
                                <li> tex text</li>
                                <li> tex text</li>
                                <li> tex text</li>
                            </ul>
                        </div>

                    </div>
                    <div class="container" style={footerBottom}>
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} eduxrn
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Footer;

const footerMiddle = {
    background: 'black',
    paddingTop: '2em',
    color:  '#fff',
    textAlign: 'center',
    width:'100%'
};

const footerBottom ={
    paddingTop: '2rem',
    paddingBottom: '2rem',
};


