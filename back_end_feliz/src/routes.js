const express = require('express')
const cors = require('cors')
const completeGame = require('./completeGame')

const app = express()

app.use(express.json())

app.use(cors())


// cors(corsOptions)
// const corsOptions = {
// 	"origin": "*",
// 	"methods": "GET,HEAD,PUT,PATCH,POST,DELETE"
//   }

// app.post('/', cors(corsOptions), (req, res) => {
app.post('/', (req, res) => {
	try {
		res.status(200).send(completeGame(req.body))
	}
	catch {
		res.sendStatus(400)
	}
})

module.exports = app
