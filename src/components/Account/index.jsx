import React, {Component} from 'react';
import './styles.css';
import Footer from "../Footer";

class Account extends Component{
    render() {
        return(
            <div className='account-component' >
                <h4>Account component</h4>
                <Footer />
            </div>
        )
    }
}

export default Account;