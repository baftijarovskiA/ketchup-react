import React, {Component} from 'react';
import io from 'socket.io-client';
import './styles.css';
import cam from '../../assets/icons/cam.png'
import camMuted from '../../assets/icons/muted_cam.png'
import endCall from '../../assets/icons/end_call.png'
import mic from '../../assets/icons/mic.png'
import micMuted from '../../assets/icons/muted_mic.png'
import {withRouter} from "react-router-dom";
const socket = io('http://localhost:3001', {transports: ['websocket']});

class Meet extends Component{
    constructor() {
        super();
        this.state = {
            camIcon: camMuted,
            camMuted: true,
            micIcon: micMuted,
            micMuted: true,
            myStream: null
        }
        this.toggleMicIcon = this.toggleMicIcon.bind(this);
        this.toggleCamIcon = this.toggleCamIcon.bind(this);
        this.endCall = this.endCall.bind(this);
    }

    componentDidMount() {
        let roomId = this.props.match.params.id;
        socket.emit('join-room', roomId, 100 );
    }

    getMediaDevices = (video, audio) => {
        navigator.mediaDevices.getUserMedia({
            video: video,
            audio: audio
        }).then( stream => {
            this.setState({
                myStream: stream
            })
            this.addMyVideoStream(stream);
        }).catch( err => console.log('ERROR', err))
    }

    addMyVideoStream = (stream) => {
        let video = document.getElementById('my-video-stream');
        video.srcObject = stream;
        video.addEventListener('loadedmetadata', () => {
            video.play();
        })
    }

    startMedia = (type) => {
        const prevVideo = !this.state.camMuted;
        const prevAudio = !this.state.micMuted;
        if (type === 'video'){
            this.getMediaDevices(true, prevAudio);
        } else {
            this.getMediaDevices(prevVideo, true)
        }
    }

    stopMedia = (type) => {
        let stream = this.state.myStream;
        stream.getTracks().forEach( track => {
            if (track.kind === type){
                track.stop();
                console.log(track)
            }
        })
        if (type === 'video'){
            document.getElementById('my-video-stream').srcObject = null;
        }
    }

    toggleCamIcon = () => {
        if(this.state.camMuted){
            this.setState({
                camIcon: cam,
                camMuted: false,
            })
            this.startMedia('video');
        } else {
            this.setState({
                camIcon: camMuted,
                camMuted: true,
            });
            this.stopMedia('video')
        }
    }

    toggleMicIcon = () => {
        if(this.state.micMuted){
            this.setState({
                micIcon: mic,
                micMuted: false
            })
            this.startMedia('audio')
        } else {
            this.setState({
                micIcon: micMuted,
                micMuted: true
            })
            this.stopMedia('audio')
        }
    }

    endCall = () => {
        let stream = this.state.myStream;
        stream.getTracks().forEach( track => {
            track.stop();
        })
        this.props.history.push('/');
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
                            <video id="my-video-stream" className="my-video-item" style={{borderRadius: '10px'}} muted autoPlay/>
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
                                <img src={endCall} className="w-100 custom-rotate" style={{cursor: 'pointer'}} alt="Icon" onClick={this.endCall} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Meet);