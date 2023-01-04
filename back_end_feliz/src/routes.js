const express = require('express')
const cors = require('cors')
const completeGame = require('./completeGame')
const swaggerUi = require('../../docs/node_modules/swagger-ui-express')

const app = express()

swaggerDocument = require('../../docs/swagger.json');

app.use(express.json())

app.use(cors())

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.get('/', express.static('/root/labs/dontpanic_baby_JAB/front_end_feliz/'))


app.post('/feliz', (req, res) => {
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
