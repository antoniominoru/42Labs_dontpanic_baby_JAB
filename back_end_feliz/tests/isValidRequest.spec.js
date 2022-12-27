const { isObject, isValidRequest } = require('../src/isValidRequest')

const mockFunction = jest.fn(() => true)

const solution = {
	field1: "8",
	field2: "*",
	field3: "9",
	field4: "-",
	field5: "3",
	field6: "0"
}

describe('function isObject', () => {
	describe('received an input of the type', () => {
		test(`null and returned ${false}`, () => {
			expect(isObject(null)).toBe(false)
		})
		test(`undefined and returned ${false}`, () => {
			expect(isObject(undefined)).toBe(false)
		})
		test(`string and returned ${false}`, () => {
			expect(isObject("string")).toBe(false)
		})
		test(`array and returned ${false}`, () => {
			expect(isObject(["123456", "456789"])).toBe(false)
		})
		test(`function and returned ${false}`, () => {
			expect(isObject(mockFunction)).toBe(false)
		})
		test(`object and returned ${true}`, () => {
			expect(isObject({ is_object: true })).toBe(true)
		})
	})
})

describe('function isValidRequest', () => {
	describe('received an input of the type', () => {

		test(`null and returned ${false}`, () => {
			expect(isValidRequest(null)).toBe(false)
		})
		test(`undefined and returned ${false}`, () => {
			expect(isValidRequest(undefined)).toBe(false)
		})
		test(`string and returned ${false}`, () => {
			expect(isValidRequest("string")).toBe(false)
		})
		test(`array and returned ${false}`, () => {
			expect(isValidRequest(["123456", "456789"])).toBe(false)
		})
		test(`object and returned ${true}`, () => {
			expect(isValidRequest(solution)).toBe(true)
		})
	})

	describe('received invalid object', () => {
		let invalidObject

		invalidObject = {name: "bob"}
		test(`${invalidObject} returned ${false}`, () => {
			expect(isValidRequest(invalidObject)).toBe(false)
		})
	})
		// describe.each([
		// 	{reqBody: {name: "bob"}},
		// 	{reqBody: {field1: "bob", field2: "marley"}}
		// ])('received $reqBody', ({reqBody}) => {
		// 	test(`returned ${false}`, () => {
		// 		expect(isValidRequest(reqBody)).toBe(false)
		// 	})
		// })

		// describe('received an string of length', () => {
		// 	test(`0 and returned '${expectedInvalidEquationReturn}'`, () => {
		// 		expect(isValidRequest("")).toBe(expectedInvalidEquationReturn)
		// 	})
		// 	test(`3 and returned '${expectedInvalidEquationReturn}'`, () => {
		// 		expect(isValidRequest("123")).toBe(expectedInvalidEquationReturn)
		// 	})
		// 	test(`5 and returned '${expectedInvalidEquationReturn}'`, () => {
		// 		expect(isValidRequest("12345")).toBe(expectedInvalidEquationReturn)
		// 	})
		// 	test(`6 and returned '${validRequest}'`, () => {
		// 		expect(isValidRequest("123456")).toBe(validRequest)
		// 	})
		// 	test(`7 and returned '${expectedInvalidEquationReturn}'`, () => {
		// 		expect(isValidRequest("1234567")).toBe(expectedInvalidEquationReturn)
		// 	})
		// 	test(`8 and returned '${expectedInvalidEquationReturn}'`, () => {
		// 		expect(isValidRequest("12345678")).toBe(expectedInvalidEquationReturn)
		// 	})
		// })

		// describe('received an string of length 6 containing', () => {
		// 	test()
		// })
	})
