import React, {Component} from 'react';
import './styles.css';
import Footer from "../Footer";

class Home extends Component{
    render() {
        return(
            <div className='home-component' >
                <h5>Home component</h5>
                <Footer />
            </div>
        )
    }
}

export default Home;