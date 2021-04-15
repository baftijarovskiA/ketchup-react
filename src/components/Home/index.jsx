import React, {Component} from 'react';
import './styles.css';
import Footer from "../Footer";
import Header from "./Header";
import Vector from '../../assets/girl_vector.png';
import Card from "../Card";

class Home extends Component{
    render() {
        return(
            <React.Fragment>
                <div className='home-component' >
                    <Header />
                    <div className='container-fluid' >
                        <div className='row' >
                            <div className='d-none d-sm-none d-md-block d-lg-block d-xl-block col-12 col-sm-12 col-md-6 col-lg-7 col-xl-7' >
                                <div className='w-100 p-5'>
                                    <div style={{width: '90%', margin: 'auto'}}>
                                        <h2>Work. Meet. Repeat.</h2>
                                        <div className='col-12 col-md-10 col-lg-7 col-xl-7 p-0'>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget sed faucibus eget vestibulum amet aliquam tincidunt. Natoque non malesuada venenatis dolor massa pulvinar ipsum, mi, eu.</p>
                                        </div>
                                        <img src={Vector} alt="Girl in meeting" className='w-100 mt-4 home-vector'  />
                                    </div>
                                </div>
                            </div>
                            <div className='d-block col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5' >
                                <div className='w-100 text-center mt-0 mt-md-5'>
                                    <Card />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Home;