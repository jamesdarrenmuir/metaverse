// main entry point for app

const path = require("node:path")
const express = require('express')


const app = express()
const PORT = 3000 | process.env.PORT

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