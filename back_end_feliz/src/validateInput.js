const validateInput = (input) => {
	// caso queiramos especificar o erro alteramos essas variáveis
	const notAnEquation = "Invalid"
	const invalidEquation = "Invalid equation"

	if (typeof input != "string")
		return notAnEquation
	if (!input || input.length != 6)
		return invalidEquation

	// const validCharactersRegex = /0-9/

	return "Valid"
}

module.exports = validateInput
