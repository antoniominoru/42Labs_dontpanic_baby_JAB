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


let formInput = document.getElementById(`last_attempt${i}`)
formInput.value = resposta.string[i]
let formInput = document.getElementById(`last_attempt_crypt${i}`)
formInput.value = resposta.crypt[i]
