const express = require('express')
const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const PORT = process.env.PORT || 3005

app.use( express.static(__dirname + '/../../build') )

const users = {};

const socketToRoom = {};


io.on('connection', socket => {
     socket.on('message', (message) => {
        io.emit('message', message)
    })

    socket.on("join room", roomID => {
        if (users[roomID]) {
            users[roomID].push(socket.id);
        } else {
            users[roomID] = [socket.id];
        }
        socketToRoom[socket.id] = roomID;
        const usersInThisRoom = users[roomID].filter(id => id !== socket.id);

        socket.emit("all users", usersInThisRoom);
    });

    socket.on("sending signal", payload => {
        io.to(payload.userToSignal).emit('user joined', { signal: payload.signal, callerID: payload.callerID });
    });

    socket.on("returning signal", payload => {
        io.to(payload.callerID).emit('receiving returned signal', { signal: payload.signal, id: socket.id });
    });

    socket.on('disconnect', () => {
        const roomID = socketToRoom[socket.id];
        let room = users[roomID];
        if (room) {
            room = room.filter(id => id !== socket.id);
            users[roomID] = room;
        }
        socket.emit("user-disconnected", socket.id);
    });

});

http.listen(PORT)


