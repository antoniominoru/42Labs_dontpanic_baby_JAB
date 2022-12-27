async function submitToBeEvaluated() {

	let formInput = document.getElementById("current_attempt")
	console.log(formInput.value)

	try {
		let response = await fetch('http://localhost:3000/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json' // IMPORTANTE!! sempre q for POST
			},
			body: JSON.stringify({
				field1: "12",
				c2: "input2",
				c3: "2",
				c4: "2",
				c5: "2"
			})
		})
		let responseBody = await response.json()

		alert(responseBody.message)
	} catch (error) {
		console.log('Error')
	}

	formInput.value = ""
}

function moveToNext(current, next) {
	if (current.value.length >= current.maxLength)
		document.getElementById(next).focus();
}
