// main entry point for app

const path = require("node:path");
const express = require('express');
const http = require('node:http');
const { Server } = require("socket.io")

const PORT = 3000 | process.env.PORT

const app = express();
const server = http.createServer(app);
const io = new Server(server);


app.use(express.static(path.join(__dirname, "../frontend")))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/start', (req, res) => {
    res.send(req)
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})