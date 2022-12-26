const validateInput = require('../src/validateInput')

describe('validateInput', () => {
	// caso queiramos especificar o erro alteramos essas variáveis
	const expectedIsValidReturn = "Valid"
	const expectedNotAnEquationReturn = "Invalid"
	const expectedInvalidEquationReturn = "Invalid equation"

	describe('received an input of the type', () => {

		test(`null and returned '${expectedNotAnEquationReturn}'`, () => {
			expect(validateInput(null)).toBe(expectedNotAnEquationReturn)
		})
		test(`undefined and returned '${expectedNotAnEquationReturn}'`, () => {
			expect(validateInput(undefined)).toBe(expectedNotAnEquationReturn)
		})
		test(`object and returned '${expectedNotAnEquationReturn}'`, () => {
			expect(validateInput({ input: "123456" })).toBe(expectedNotAnEquationReturn)
		})
		test(`array and returned '${expectedNotAnEquationReturn}'`, () => {
			expect(validateInput(["123456", "456789"])).toBe(expectedNotAnEquationReturn)
		})
	})

	describe('received an string of length', () => {
		test(`0 and returned '${expectedInvalidEquationReturn}'`, () => {
			expect(validateInput("")).toBe(expectedInvalidEquationReturn)
		})
		test(`3 and returned '${expectedInvalidEquationReturn}'`, () => {
			expect(validateInput("123")).toBe(expectedInvalidEquationReturn)
		})
		test(`5 and returned '${expectedInvalidEquationReturn}'`, () => {
			expect(validateInput("12345")).toBe(expectedInvalidEquationReturn)
		})
		test(`6 and returned '${expectedIsValidReturn}'`, () => {
			expect(validateInput("123456")).toBe(expectedIsValidReturn)
		})
		test(`7 and returned '${expectedInvalidEquationReturn}'`, () => {
			expect(validateInput("1234567")).toBe(expectedInvalidEquationReturn)
		})
		test(`8 and returned '${expectedInvalidEquationReturn}'`, () => {
			expect(validateInput("12345678")).toBe(expectedInvalidEquationReturn)
		})
	})

	describe('received an string of length 6 containing', () => {
		test()
	})
})