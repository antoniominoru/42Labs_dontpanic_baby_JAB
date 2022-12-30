async function submitToBeEvaluated() {
	try {
		const inputs = getCurrentAttemptInputs()
		const responseBody = await requestClues(inputs)
		if (responseBody) {
			if (responseBody.message == "Certo") {
				printLastAttempt()
				printTips(responseBody.clues)
			}
			else {
				printLastAttempt()
				// clearInputs('last')
				clearInputs('lastCrypt')
			}
		}

		// clearCurrentAttemptInputs()
		clearInputs('current')

	} catch (error) {
		console.log(error)
	}
}

function moveToNextCurrentInput(current, nextIndex) {
	const inputs = getCurrentAttemptInputs()

	if (current.value.length >= current.maxLength)
		inputs[nextIndex].focus()
}

function moveToNext(current, next) {
	if (current.value.length >= current.maxLength)
		document.getElementById(next).focus();
}

function printLastAttempt() {
	let inputs = getCurrentAttemptInputs()
	let outputs = document.getElementsByClassName("last")

	for (let i = 0; i < 6; i++) {
		outputs[i].value = inputs[i].value
	}
}

function getCurrentAttemptInputs() {
	return document.getElementsByClassName("current")
}

function printTips(resBody) {
	let outputs = document.getElementsByClassName("lastCrypt")

	// for (let i = 0; i < 6; i++) {
	// 	outputs[i].value = resBody.field1
	// }
	outputs[0].value = resBody.field1
	outputs[1].value = resBody.field2
	outputs[2].value = resBody.field3
	outputs[3].value = resBody.field4
	outputs[4].value = resBody.field5
	outputs[5].value = resBody.field6
}

function clearInputs(inputClassName) {
	const inputs = document.getElementsByClassName(inputClassName)

	for (let i = 0; i < 6; i++) {
		inputs[i].value = ''
	}
}

function clearCurrentAttemptInputs() {
	const inputs = getCurrentAttemptInputs()

	for (let i = 0; i < 6; i++) {
		inputs[i].value = ''
	}
}

async function requestClues(inputs) {
	const response = await fetch('http://localhost:3000/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json' // IMPORTANTE!! sempre q for POST
		},
		body: JSON.stringify({
			field1: inputs[0].value,
			field2: inputs[1].value,
			field3: inputs[2].value,
			field4: inputs[3].value,
			field5: inputs[4].value,
			field6: inputs[5].value
		})
	})
	return response.json()
}