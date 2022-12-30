const request = require("supertest") // Mesmo papel do server para test - listen
const app = require('../src/routes')

describe('Test My app server', () => {
	it('should post / route - return certo with tip CCCCCC', async () => {
		// expect X assertions (pra dar erro se cair no catch)
		try {
			const answer = { field1: '8', field2: '*', field3: '9', field4: '-', field5: '3', field6: '0' }
			const answerCrypt = { message: 'Certo', clues: { field1: 'C', field2: 'C', field3: 'C', field4: 'C', field5: 'C', field6: 'C' } }

			const res = await request(app).post('/').send(answer)
			expect(JSON.stringify(res.body)).toBe(JSON.stringify(answerCrypt))
		}
		catch {
			console.log('error')
		}
	})
})

describe('Test My app server', () => {
	it('should post / route - return certo with tip TCCCCT', async () => {
		const answer = { field1: '9', field2: '*', field3: '9', field4: '-', field5: '3', field6: '9' }
		const answerCrypt = { message: 'Certo', clues:{ field1: 'T', field2: 'C', field3: 'C', field4: 'C', field5: 'C', field6: 'T' }}

		const res = await request(app).post('/').send(answer)

		expect(JSON.stringify(res.body)).toBe(JSON.stringify(answerCrypt))
	})
})

describe('Test My app server', () => {
	it('should post / route - return Error', async () => {
		const answer = { field1: '7', field2: '*', field3: '9', field4: '-', field5: '3', field6: '9' }
		const answerCrypt = { message: 'Error', clues:{ field1: '', field2: '', field3: '', field4: '', field5: '', field6: '' }}

		const res = await request(app).post('/').send(answer)

		expect(JSON.stringify(res.body)).toBe(JSON.stringify(answerCrypt))
	})
})
