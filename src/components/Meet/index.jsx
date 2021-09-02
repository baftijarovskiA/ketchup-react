import React, { useEffect, useRef, useState } from "react"
import './styles.css'
import { useParams } from "react-router-dom";
import cam from '../../assets/icons/cam.png'
import camIconMuted from '../../assets/icons/muted_cam.png'
import endCall from '../../assets/icons/end_call.png'
import mic from '../../assets/icons/mic.png'
import micIconMuted from '../../assets/icons/muted_mic.png'
import Chat from "../Chat";
import io from "socket.io-client";
import Peer from 'simple-peer';
import { v4 } from "uuid";
import Members from "../Members";

const socket = io('http://localhost:3005', { transports: ['websocket'] });

const Meet = (props) => {

    const [peers, setPeers] = useState([]);
    const userVideo = useRef(null);
    const peersRef = useRef([]);
    const { id } = useParams()

    const [user, setUser] = useState(null)
    const [chatMessages, setChatMessages] = useState([])

    const [camMuted, setCamMuted] = useState(false)
    const [camIcon, setCamIcon] = useState(cam)
    const [micMuted, setMicMuted] = useState(false)
    const [micIcon, setMicIcon] = useState(mic)

    useEffect(() => {
        setUser(v4())
    }, [])

    useEffect(() => {
        socket.on('message', (m) => {
            if (m.room === id) {
                setChatMessages([...chatMessages, m])
            }
        })

    }, [id, chatMessages])

    const [videoConstraints] = useState({
        height: window.innerHeight / 3,
        width: window.innerWidth / 2
    });

    useEffect(() => {

        const getMedia = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: videoConstraints, audio: true });
                userVideo.current.srcObject = stream;
                socket.emit("join room", id);

                socket.on("all users", (users) => {
                    const peers = [];
                    users.forEach(userID => {
                        const peer = createPeer(userID, socket.id, stream);
                        peersRef.current.push({
                            peerID: userID,
                            peer,
                        })
                        peers.push(peer);
                    })
                    setPeers(peers);
                })

                socket.on("user joined", payload => {
                    const peer = addPeer(payload.signal, payload.callerID, stream);
                    peersRef.current.push({
                        peerID: payload.callerID,
                        peer,
                    })

                    setPeers(users => [...users, peer]);
                });

                socket.on("receiving returned signal", payload => {
                    const item = peersRef.current.find(p => p.peerID === payload.id);
                    item.peer.signal(payload.signal);
                });
            } catch (e) {
                console.log(e)
            }
        }

        getMedia()

    }, [id, videoConstraints])

    function createPeer(userToSignal, callerID, stream) {
        const peer = new Peer({
            initiator: true,
            trickle: false,
            stream,
        });

        peer.on("signal", signal => {
            socket.emit("sending signal", { userToSignal, callerID, signal })
        })

        return peer;
    }

    function addPeer(incomingSignal, callerID, stream) {
        const peer = new Peer({
            initiator: false,
            trickle: false,
            stream,
        })

        peer.on("signal", signal => {
            socket.emit("returning signal", { signal, callerID })
        })

        peer.signal(incomingSignal);

        return peer;
    }

    const muteMic = () => {
        let myStream = userVideo.current.srcObject;
        if (myStream) {
            myStream.getAudioTracks().forEach(track => track.enabled = !track.enabled);
            setMicMuted(!micMuted)
            setMicIcon(!micMuted ? micIconMuted : mic)
        }
    }

    const muteCam = () => {
        let myStream = userVideo.current.srcObject;
        if (myStream) {
            myStream.getVideoTracks().forEach(track => track.enabled = !track.enabled);
            setCamMuted(!camMuted)
            setCamIcon(!camMuted ? camIconMuted : cam)
        }
    }

    return (
        <div className='meet-component' >
            <div className="video-container" >
                <div className="video-data">
                    <Members peers={peers} />
                </div>
                <div className="video-chat" >
                    <div className="my-video" >
                        <video id="my-video-stream" className="my-video-item radius-10" muted ref={userVideo} autoPlay playsInline />
                    </div>
                    <Chat
                        user={user}
                        room={id}
                        socket={socket}
                        chatMessages={chatMessages}
                    />
                </div>
                <div className="video-controls" >
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="video-controls-item" >
                            <img src={camIcon} className="w-100" style={{ cursor: 'pointer' }} alt="Icon" onClick={muteCam} />
                        </div>
                        <div className="video-controls-item" >
                            <img src={micIcon} className="w-100" style={{ cursor: 'pointer' }} alt="Icon" onClick={muteMic} />
                        </div>
                        <div className="video-controls-item" >
                            <img src={endCall} className="w-100 custom-rotate" style={{ cursor: 'pointer' }} alt="Icon" onClick={() => window.location.href = "/"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Meet