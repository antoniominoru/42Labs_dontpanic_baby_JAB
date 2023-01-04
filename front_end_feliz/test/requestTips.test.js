import requestTips from "../js/requestTips"

const solutionRequestBody = {
	field1: "8",
	field2: "*",
	field3: "9",
	field4: "-",
	field5: "3",
	field6: "0"
}

describe('function requestTips', () => {
	test('can connect to backend API', async () => {
		expect.assertions(1)
		const responseBody = await requestTips(solutionRequestBody)
		expect(responseBody).not.toBeNull()
	})

	
})
