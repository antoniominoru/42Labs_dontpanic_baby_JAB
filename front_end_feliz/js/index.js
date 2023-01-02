async function submitToBeEvaluated(event) {
	try {
		event.preventDefault()
		const inputs = document.getElementsByClassName("current")
		const responseBody = await requestTips(inputs)
		if (responseBody) {
			printLastAttempt()
			printValidationText(responseBody.message)
			if (responseBody.message == "Tip") {
				printTips(responseBody.clues)
			}
			else if (responseBody.message == "Win") {
				printTips(responseBody.clues)
			}
			else {
				clearInputs('lastCrypt')
			}
		}
		clearInputs('current')

	} catch {
		return null
	}
}

function isValidKey(key) {
	const validKey = /^[0-9*\/+-]$/
	return validKey.test(key)
}

function moveToNextCurrentInput(current, nextIndex, event) {
	event.preventDefault()

	const inputs = document.getElementsByClassName("current")

	if (event.key == 'Backspace' || event.key == 'Delete')
		return current.value = ""
	if (!isValidKey(event.key))
		return
	current.value = event.key
	if (current.value.length >= current.maxLength)
		inputs[nextIndex].focus()
}

function moveToNext(current, next, event) {
	event.preventDefault()

	if (event.key == 'Backspace' || event.key == 'Delete')
		return current.value = ""
	if (!isValidKey(event.key))
		return
	current.value = event.key
	if (current.value.length >= current.maxLength)
		document.getElementById(next).focus();
}

function printLastAttempt() {
	let inputs = document.getElementsByClassName("current")
	let outputs = document.getElementsByClassName("last")

	for (let i = 0; i < 6; i++) {
		outputs[i].value = inputs[i].value
	}
}

function printTips(resBody) {
	let outputs = document.getElementsByClassName("lastCrypt")

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
	const inputs = document.getElementsByClassName("current")

	for (let i = 0; i < 6; i++) {
		inputs[i].value = ''
	}
}

async function requestTips(inputs) {
	try {
		const response = await fetch('http://localhost:3000/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				// 'Access-Control-Allow-Origin': 'http://labs-mills-nps.42sp.org.br:5012/',
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
		// console.log(response.headers)
		if (response.status === 200)
			return response.json()
		else
			throw null
	}
	catch {
		return null
	}
}

function printValidationText(textType)
{
	const p = document.getElementById("validation_text")

	switch (textType) {
		case 'Win':
			p.innerHTML = "<b>Congratulations! You won!!</b>"
			p.style.color = "green"
			break;
		case 'Error':
			p.innerHTML = "<b>Invalid equation</b>"
			p.style.color = "red"
			break;
		default:
			p.innerHTML = ""
			p.style.color = "black"
			break;
	}
}
