import React, { useEffect, useRef } from "react";
import './styles.css'

const Video = ({ peer }) => {
    const ref = useRef();

    useEffect(() => {
        peer.on("stream", stream => {
            ref.current.srcObject = stream;
        })
    }, [peer]);

    return (
        <video autoPlay playsInline className="my-video-item radius-10" ref={ref} />
    )
}

const Members = ({ peers }) => {

    return (
        <div className="members-container" >
            <div className="container-fluid" >
                <div className="row" >
                    {
                        peers.map((peer, index) => (
                            <div key={index} className="col-6 col-md-3 mb-4">
                                <Video key={index} peer={peer} />
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Members;