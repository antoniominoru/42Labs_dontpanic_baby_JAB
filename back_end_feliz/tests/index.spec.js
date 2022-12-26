const request = require("supertest") // Mesmo papel do server para test - listen
const app = require('../src/routes')

describe('Test My app server', () => {
	it('should post / route', async () => {
		const reqBody = {
			value: '42',
			mux: '2'
		}
		const res = await request(app).post('/').send(reqBody)

		expect(res.statusCode).toEqual(200)
		expect(res.body).toHaveProperty('message')
		expect(Object.keys(res.body).length).toEqual(1)
		// expect(res.body.message).toEqual(`T`)
	})
})
