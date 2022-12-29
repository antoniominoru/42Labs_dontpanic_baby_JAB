const request = require("supertest") // Mesmo papel do server para test - listen
const app = require('../src/routes')

describe('Test My app server', () => {
	it('should post / route', async () => {
		const answer = { field1: '8', field2: '*', field3: '9', field4: '-', field5: '3', field6: '0' }
		const answerCrypt = { message: 'Certo', clues:{ field1: 'C', field2: 'C', field3: 'C', field4: 'C', field5: 'C', field6: 'C' }}

		const res = await request(app).post('/').send(answer)

		expect(JSON.stringify(res.body)).toBe(JSON.stringify(answerCrypt))
	})
})
