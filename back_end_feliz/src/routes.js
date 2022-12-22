const express = require('express')

const cors = require('cors')

const app = express()

app.use(express.json())

app.use(cors())

app.post('/', (req, res) => {
	if (req.body.value * req.body.mux == 84)
		res.send({ message: `POST worked` })
	else
		res.send({ message: `You got it wrong!!` })
})

module.exports = app
