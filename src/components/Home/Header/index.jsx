import React from 'react';
import '../styles.css';
import Logo from "../../../assets/logo_default.png";
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <div className='home-header' >
            <div className="d-flex justify-content-between align-items-center">
                <div className="header-logo">
                    <img src={Logo} alt="Ketch Up Logo" />
                </div>
                <div className="header-links" >
                    <ul>
                        <li><Link to='/about' className='header-links-item' >ABOUT</Link></li>
                        <li><Link to='/account' className='header-links-item' >PRICING</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;