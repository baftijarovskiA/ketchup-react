import React, {useEffect, useState} from 'react';
import './styles.css';

const Join = (props) => {

    const [selected, setSelected] = useState('join')
    const [joinCode, setJoinCode] = useState('');
    const [startCode, setStartCode] = useState('');

    useEffect(() => {
        let responseRoom = 'abcd123';
        setStartCode(responseRoom);
    }, [])

    const onJoinMeeting = (e) => {
        e.preventDefault();
        console.log('Join a meeting, code: ' + joinCode);
    }

    const onStartMeeting = (e) => {
        e.preventDefault();
        console.log('Start a meeting, code: ' + startCode);
    }

    const onScheduleMeeting = () => {
        console.log('Schedule a meeting');
    }

    return(
        <React.Fragment>
            <div className="row mt-2">
                <div className="col-6 col-md-6">
                    <span className={`kup-tab-btn ${selected === 'join' ? 'tab-active' : ''}`} onClick={() => setSelected('join')} >Join a meeting</span>
                </div>
                <div className="col-6 col-md-6">
                    <span className={`kup-tab-btn ${selected === 'start' ? 'tab-active' : ''}`} onClick={() => setSelected('start')} >Start a meeting</span>
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
                                <div className="form-group">
                                    <label htmlFor="code" className="kup-label" >Code</label>
                                    <input type="text" id="code" placeholder="Code" className="form-control" value={startCode} disabled />
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
}

export default Join;