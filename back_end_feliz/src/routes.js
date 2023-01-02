const express = require('express')
const cors = require('cors')
const completeGame = require('./completeGame')

const app = express()

app.use(express.json())

app.use(cors())

app.post('/', (req, res) => {
	try {
		// res.header("Access-Control-Allow-Origin", "*")
		// res.header("Access-Control-Allow-Private-Network", true)
		res.status(200).send(completeGame(req.body))
	}
	catch {
		res.sendStatus(400)
	}
})

module.exports = app
