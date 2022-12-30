// main entry point for app

const path = require("node:path");
const express = require('express');
const http = require('node:http');
const { Server } = require("socket.io")

const PORT = 3000 | process.env.PORT

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// static files
app.use(express.static(path.join(__dirname, "../frontend")))

// create a new room
app.get('/new', (req, res) => {
    res.send(req)
})

// join an exisiting room
app.get(/room\/.+/, (req, res) => {
    //
    res.send("hello room")
})

// start the app
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})