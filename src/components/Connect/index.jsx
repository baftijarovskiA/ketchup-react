import React, {useState} from 'react';
import './styles.css';

const Connect = (props) => {

    const [selected, setSelected] = useState('in');
    const [inEmail, setInEmail] = useState('');
    const [inPassword, setInPassword] = useState('');

    const [upName, setUpName] = useState('');
    const [upEmail, setUpEmail] = useState('');
    const [upPassword, setUpPassword] = useState('');
    const [upConfirm, setUpConfirm] = useState('');

    const onSignIn = (e) => {
        e.preventDefault();

        const user = {
            email: inEmail,
            password: inPassword
        }

        console.log({user})
    }

    const onSignUp = (e) => {
        e.preventDefault();

        const user = {
            full_name: upName,
            email: upEmail,
            password: upPassword,
            confirm_password: upConfirm
        }

        console.log({user})
    }

    return(
        <React.Fragment>
            <div className="row mt-2">
                <div className="col-6 col-md-6">
                    <span className={`kup-tab-btn ${selected === 'in' ? 'tab-active' : ''}`} onClick={() => setSelected('in')} >Sign In</span>
                </div>
                <div className="col-6 col-md-6">
                    <span className={`kup-tab-btn ${selected === 'up' ? 'tab-active' : ''}`} onClick={() => setSelected('up')} >Sign Up</span>
                </div>
            </div>
            <div className="mt-5 px-4 text-left">
                {
                    selected === 'in' ? (
                        <React.Fragment>
                            <form onSubmit={onSignIn}>
                                <div className="form-group">
                                    <label htmlFor="email" className="kup-label" >Email</label>
                                    <input type="email" id="email" placeholder="Email" className="form-control" value={inEmail} onChange={(e) => setInEmail(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="kup-label" >Password</label>
                                    <input type="password" id="password" placeholder="Password" className="form-control" value={inPassword} onChange={(e) => setInPassword(e.target.value)} />
                                </div>
                                <div className="text-center pt-2">
                                    <input type="submit" className="kup-button-default" value="Sign In" />
                                </div>
                            </form>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <form onSubmit={onSignUp} >
                                <div className="form-group">
                                    <label htmlFor="name" className="kup-label" >Full name</label>
                                    <input type="text" id="name" placeholder="Full name" className="form-control" value={upName} onChange={(e) => setUpName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="kup-label" >Email</label>
                                    <input type="email" id="email" placeholder="Email" className="form-control" value={upEmail} onChange={(e) => setUpEmail(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="kup-label" >Password</label>
                                    <input type="password" id="password" placeholder="Password" className="form-control" value={upPassword} onChange={(e) => setUpPassword(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirm_password" className="kup-label" >Confirm password</label>
                                    <input type="password" id="confirm_password" placeholder="Confirm password" className="form-control" value={upConfirm} onChange={(e) => setUpConfirm(e.target.value)} />
                                </div>
                                <div className="text-center pt-2">
                                    <input type="submit" className="kup-button-default" value="Sign Up" />
                                </div>
                            </form>
                        </React.Fragment>
                    )
                }
            </div>
        </React.Fragment>
    )
}

export default Connect;