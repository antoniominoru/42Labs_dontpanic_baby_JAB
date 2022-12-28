async function submitToBeEvaluated() {

	let formInput = document.getElementById("current_att1")
	console.log(formInput.value)
	let body = {}
	for (let i = 1; i<= 6; i++){
		body[`field${i}`] =  document.getElementById(`current_att${i}`).value// body.field1/2/3
	}
	try {
		let response = await fetch('http://localhost:3000/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json' // IMPORTANTE!! sempre q for POST
			},
			body: JSON.stringify({
				field1: document.getElementById("current_att1").value,
				field2: document.getElementById("current_att2").value,
				field3: document.getElementById("current_att3").value,
				field4: document.getElementById("current_att4").value,
				field5: document.getElementById("current_att5").value,
				field6: document.getElementById("current_att6").value
			})
		})
		let responseBody = await response.json()

		printLastAttemp (responseBody);
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

function printLastAttemp(resBody) {

}
