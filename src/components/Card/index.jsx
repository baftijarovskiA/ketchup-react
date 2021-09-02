import React, { Component } from 'react';
import './styles.css';
import Join from "../Join";

class Card extends Component {
    render() {
        return (
            <div className='kup-card' >
                <div className="w-100 pt-3 pb-4" >
                    <Join />
                </div>
            </div>
        )
    }
}

export default Card;