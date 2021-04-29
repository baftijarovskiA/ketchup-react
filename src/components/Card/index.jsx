import React, {Component} from 'react';
import './styles.css';
import Connect from "../Connect";
import Join from "../Join";

class Card extends Component{
    constructor() {
        super();
        this.state = {
            logged: true
        }
    }

    render() {
        const { logged } = this.state;

        return(
            <div className='kup-card' >
                <div className="w-100 pt-3 pb-4" >
                    {
                        logged ? <Join /> : <Connect />
                    }
                </div>
            </div>
        )
    }
}

export default Card;