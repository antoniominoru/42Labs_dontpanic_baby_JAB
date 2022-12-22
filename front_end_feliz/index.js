/* Reload*/
// setInterval(() => {
// 	window.location.reload(true)
// }, 10000);

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
				value: formInput.value,
				mux: '2'
			})
		})
		let responseBody = await response.json()

		alert(responseBody.message)
	} catch (error) {
		console.log('Error')
	}

	formInput.value = ""
}
