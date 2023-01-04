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
		inputs[0].focus()
	} catch {
		return null
	}
}

function inputHandler(current, next, event) {
	if (event.key == 'ArrowLeft' && current.previousElementSibling)
		return current.previousElementSibling.focus()
	if (event.key == 'ArrowRight' || event.key == 'Tab')
		return next.focus()
	if (event.key == 'Backspace' || event.key == 'Delete')
		return current.value = ""
	if (!isValidKey(event.key))
		return
	current.value = event.key
	if (current.value.length >= current.maxLength)
		return next.focus()
}

function moveToNext(current, event) {
	event.preventDefault()

	const next = current.nextElementSibling

	if (next)
		inputHandler(current, next, event)
	else
		inputHandler(current, document.getElementById("button"), event)
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

function printValidationText(textType) {
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
function isValidKey(key) {
	const validKey = /^[0-9*\/+-]$/
	return validKey.test(key)
}
async function requestTips(inputs) {
	try {
		const response = await fetch('http://backendfeliz/', {
			// const response = await fetch('http://localhost:3000/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
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
		if (response.status === 200)
			return response.json()
		else
			throw null
	}
	catch {
		return null
	}
}
