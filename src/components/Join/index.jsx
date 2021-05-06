import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import './styles.css';
import copyIcon from '../../assets/icons/copy.svg'

const Join = withRouter((props) => {

    const [selected, setSelected] = useState('join')
    const [joinCode, setJoinCode] = useState('');
    const [startCode, setStartCode] = useState('');
    const [copied, setCopied] = useState(false)

    const makeId = (length) => {
        let result = [];
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result.push(characters.charAt(Math.floor(Math.random() *
                charactersLength)));
        }
        return result.join('');
    }

    const onJoinMeeting = (e) => {
        e.preventDefault();
        props.history.push(`/meet/${joinCode}`);
    }

    const onStartMeeting = (e) => {
        e.preventDefault();
        props.history.push(`/meet/${startCode}`);
    }

    const onScheduleMeeting = () => {
        console.log('Schedule a meeting');
    }

    const copyCode = () => {
        navigator.clipboard.writeText(startCode);
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 1000)
    }

    return(
        <React.Fragment>
            <div className="row mt-2">
                <div className="col-6 col-md-6">
                    <span className={`kup-tab-btn ${selected === 'join' ? 'tab-active' : ''}`} onClick={() => setSelected('join')} >Join a meeting</span>
                </div>
                <div className="col-6 col-md-6">
                    <span className={`kup-tab-btn ${selected === 'start' ? 'tab-active' : ''}`} onClick={() => {setSelected('start'); setStartCode(makeId(10));}} >Start a meeting</span>
                </div>
            </div>
            <div className="mt-5 px-4 text-left">
                {
                    selected === 'join' ? (
                        <React.Fragment>
                            <form onSubmit={onJoinMeeting}>
                                <div className="form-group">
                                    <label htmlFor="code" className="kup-label" >Code</label>
                                    <input type="text" id="code" placeholder="Code" className="form-control" value={joinCode} onChange={(e) => setJoinCode(e.target.value)} />
                                </div>
                                <div className="text-center pt-2">
                                    <input type="submit" className="kup-button-default" value="Join" />
                                </div>
                            </form>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <form onSubmit={onStartMeeting} >
                                <div className="form-group position-relative">
                                    <label htmlFor="code" className="kup-label" >Code</label>
                                    <input type="text" id="code" placeholder="Code" className="form-control" value={startCode} disabled />
                                    <span className="copy-icon" onClick={copyCode} title="Copy code" >
                                        { copied ? (<span className="badge badge-dark mr-2">Copied!</span>) : '' }
                                        <img src={copyIcon} alt="Copy button" width={20} height={20} />
                                    </span>
                                </div>
                                <div className="text-center pt-2">
                                    <input type="submit" className="kup-button-default mr-0 mr-sm-0 mr-md-0 mr-lg-0 mr-xl-2 mb-3 mb-sm-3 mb-md-3 mb-lg-3 mb-xl-0" value="Start Now" />
                                    <input type="button" className="kup-button-outline ml-0 ml-sm-0 ml-md-0 ml-lg-0 ml-xl-2" value="Schedule" onClick={onScheduleMeeting} />
                                </div>
                            </form>
                        </React.Fragment>
                    )
                }
            </div>
        </React.Fragment>
    )
})

export default Join;