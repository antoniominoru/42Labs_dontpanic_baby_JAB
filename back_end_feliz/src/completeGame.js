const returnGameTip = require('./returnGameTip')
const isValidInput = require('./isValidInput')
const isValidFunc42 = require('./isValidFunc42')
const isValidRequest = require('./isValidRequest')

function completeGame(reqBody) {
    try {
        const errorReturn = { field1: '', field2: '', field3: '', field4: '', field5: '', field6: '' }
        console.log(reqBody)
        // if (!isValidRequest(reqBody))
        //     return ({ message: 'Error', clues: errorReturn })
        if (!isValidInput(reqBody))
            return ({ message: 'Error', clues: errorReturn })
        if (!isValidFunc42(reqBody))
            return ({ message: 'Error', clues: errorReturn })
        return ({ message: 'Certo', clues: returnGameTip(reqBody) })

    }
    catch (error) {
        return 'Error'
    }
}

module.exports = completeGame;