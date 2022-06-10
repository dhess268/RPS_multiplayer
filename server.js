const express = require('express')
const app = new express()
const cors = require('cors')
const path = require('path')
const http = require('http');
const server = http.createServer(app);  
const { Server } = require("socket.io");
const io = new Server(server);



app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

io.on('connection', () => {
    console.log('connected to the chat')
})



const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
