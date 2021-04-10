import React from 'react';
import './styles.css';
import Logo from '../../assets/logo_white.png';

const Footer = () => {
    return(
        <div className='footer-component' >
            <div className='footer-logo' >
                <img src={Logo} alt='Ketch Up Logo' />
            </div>
            <div className='container-fluid' >
                <div className='row' >
                    <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4 mb-md-3 mb-lg-0 p-0' >
                        <h4 className='mb-2 mb-md-2 mb-lg-4' >ABOUT</h4>
                        <p className='mb-0 kup-link'>Mission</p>
                        <p className='mb-0 kup-link'>Vision</p>
                        <p className='mb-0 kup-link'>Story</p>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4 mb-md-3 mb-lg-0 p-0' >
                        <h4 className='mb-2 mb-md-2 mb-lg-4' >PRICING</h4>
                        <p className='mb-0 kup-link'>Team</p>
                        <p className='mb-0 kup-link'>Startup</p>
                        <p className='mb-0 kup-link'>Enterprise</p>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4 mb-md-3 mb-lg-0 p-0' >
                        <h4 className='mb-2 mb-md-2 mb-lg-4' >CONTACT</h4>
                        <p className='mb-0 kup-link'>Email</p>
                        <p className='mb-0 kup-link'>Phone</p>
                        <p className='mb-0 kup-link'>Social Media</p>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4 mb-md-3 mb-lg-0 p-0' >
                        <h4 className='mb-2 mb-md-2 mb-lg-4' >SERVICES</h4>
                        <p className='mb-0 kup-link'>Conference calls</p>
                        <p className='mb-0 kup-link'>Calendar</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;