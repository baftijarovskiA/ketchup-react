import React, {Component} from 'react';
import './styles.css';
import cam from '../../assets/icons/cam.png'
import camMuted from '../../assets/icons/muted_cam.png'
import endCall from '../../assets/icons/end_call.png'
import mic from '../../assets/icons/mic.png'
import micMuted from '../../assets/icons/muted_mic.png'

class Meet extends Component{
    constructor() {
        super();
        this.state = {
            camIcon: cam,
            camMuted: false,
            micIcon: mic,
            micMuted: false
        }
        this.toggleMicIcon = this.toggleMicIcon.bind(this);
        this.toggleCamIcon = this.toggleCamIcon.bind(this);
    }

    toggleCamIcon = () => {
        if(this.state.camMuted){
            this.setState({
                camIcon: cam,
                camMuted: false,
            })
        } else {
            this.setState({
                camIcon: camMuted,
                camMuted: true,
            })
        }
    }

    toggleMicIcon = () => {
        if(this.state.micMuted){
            this.setState({
                micIcon: mic,
                micMuted: false
            })
        } else {
            this.setState({
                micIcon: micMuted,
                micMuted: true
            })
        }
    }

    render() {
        const { camIcon, micIcon } = this.state;

        return(
            <div className='meet-component' >
                <div className="video-container" >
                    <div className="video-data">
                        <video className="my-video-item" muted src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" autoPlay loop />
                    </div>
                    <div className="video-chat" >
                        <div className="my-video" >
                            <video className="my-video-item" style={{borderRadius: '10px'}} muted src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" autoPlay/>
                        </div>
                    </div>
                    <div className="video-controls" >
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <div className="video-controls-item" >
                                <img src={camIcon} className="w-100" style={{cursor: 'pointer'}} alt="Icon" onClick={this.toggleCamIcon} />
                            </div>
                            <div className="video-controls-item" >
                                <img src={micIcon} className="w-100" style={{cursor: 'pointer'}} alt="Icon" onClick={this.toggleMicIcon} />
                            </div>
                            <div className="video-controls-item" >
                                <img src={endCall} className="w-100 custom-rotate" style={{cursor: 'pointer'}} alt="Icon" onClick={() => console.log('End call')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Meet;