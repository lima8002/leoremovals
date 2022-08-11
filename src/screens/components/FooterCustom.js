import React from "react";

function Footer() {
    return (
        <footer className="bg-dark" style={{ width: '100%' }} >
            <div style={footerMiddle} >
                <div className="container" >
                    <h4>(icon) Leo Removals</h4>
                    <p>Home  |</p>
                    <p>About Us  |</p>
                    <p>Contact</p>
                    <div className="container" style={footerBottom}>
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} eduxrn
                        </p>
                    </div>
                </div>
            </div>
        </footer>

    )
};

export default Footer;

const footerMiddle = {
    background: 'black',
    paddingTop: '2em',
    color: '#fff',
    textAlign: 'center',
};

const footerBottom = {
    paddingTop: '2rem',
    paddingBottom: '2rem',
};


