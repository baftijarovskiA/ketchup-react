import React, {useState} from "react";
import './styles.css';

const Chat = ({room, user, chatMessages,  socket}) => {

    const [message, setMessage] = useState('')

    const onSendMessage = (e) => {
        e.preventDefault();
        setMessage('')
        if (message === "") return
        const m = {
            user: user,
            room: room,
            message: message
        }
        socket.emit('message', m)
    }

    return(
        <div className="chat-area" >
            <div id="chat-messages" className="chat-messages" >
                {
                    chatMessages.filter(m => m.room === room).map( (message, i) => (
                        <div key={i} className={`chat-messages-item ${message.user === user ? 'chat-message-sent' : 'chat-message-received'}`} >
                            <small>{message.user}:</small>
                            <p>{message.message}</p>
                        </div>
                    ))
                }
            </div>
            <div className="chat-input" >
                <form onSubmit={onSendMessage} >
                    <div className="form-group p-2" >
                        <input type="text" className="form-control w-100" value={message} name="new_message" onChange={(e) => setMessage(e.target.value)} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Chat;