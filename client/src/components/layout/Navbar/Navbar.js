import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import qrLogo from '../../../utils/imgs/project_logo.png'

const Navbar = props => {
    return (
        <div className="nav-bar">
            <div className="logo">
                <img className="emoji" src={qrLogo} />
            </div>
            <a href="/" style={{marginLeft:'10px'}}>
                <h1 className="name">
			        Project QR
                </h1>
            </a>
            <a href="/" className="button" style={{color:'#fff'}}>
			    Create QR Code
            </a>
        </div>
    )
}

Navbar.propTypes = {

}

export default Navbar
