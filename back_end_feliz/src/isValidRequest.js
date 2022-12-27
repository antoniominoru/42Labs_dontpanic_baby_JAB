function isObject(arg) {
	if (typeof arg === 'object'
		&& !Array.isArray(arg)
		&& arg !== null)
		return true
	return false
}

function isSameArray(a, b){
	
}

function isValidRequest(reqBody) {
	const validKeysArray = ['field1', 'field2', 'field3', 'field4', 'field5', 'field6']
	// console.log('input:', reqBody, ', typeof input:', typeof reqBody)
	if (!isObject(reqBody))
		return false

	if (JSON.stringify(Object.keys(reqBody)) != JSON.stringify(validKeysArray))
		return false
	return true
}

module.exports = { isObject, isValidRequest }
