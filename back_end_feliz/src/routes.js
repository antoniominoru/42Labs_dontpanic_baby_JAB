const express = require('express')
const cors = require('cors')
const completeGame = require('./completeGame')

const app = express()

app.use(express.json())

app.use(cors())

app.post('/', (req, res) => {
	try {
		res.send(completeGame(req.body))
	}
	catch {
		return 'Error'
	}
})

app.post('/mock', (req, res) => {
	const mockBody = {
		message: "POST worked",
		clues: {
			field1: "T",
			field2: "X",
			field3: "C",
			field4: "T",
			field5: "X",
			field6: "C"
		}
	}
	res.status(200).send(mockBody)
	// res.status(400).send({ message: "erro feliz" })
})

module.exports = app
