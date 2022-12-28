const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())

app.use(cors())

app.post('/', (req, res) => {
	if (req.body.field1 == 4)
		res.send({ message: `POST worked` })
	else
		res.send({ message: `You got it wrong!!` })
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

	res.statusCode(200).send(mockBody)
})

module.exports = app
