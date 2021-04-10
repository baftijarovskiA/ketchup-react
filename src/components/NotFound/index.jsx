import React, {Component} from 'react';
import './styles.css';
import Logo from '../../assets/logo_default.png';
import {Link} from "react-router-dom";

class NotFound extends Component{
    render() {
        return(
            <div className='not-found-component' >
                <div>
                    <img src={Logo} alt="Ketch Up Logo" />
                    <h1>Not found</h1>
                    <h5>The page you are looking for is not found, <br/>or you are not authorized.</h5>
                    <Link to='/'>Back to home</Link>
                </div>
            </div>
        )
    }
}

export default NotFound;