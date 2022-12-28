const returnGameTip = require('./returnGameTip')
const isValidInput = require('./isValidInput')
const isValidFunc42 = require('./isValidFunc42')

const isValidRequest = require('./isValidRequest')

function completeGame(reqBody) {
    try {
        const c1 = Object.values(reqBody)[0]
        const c2 = Object.values(reqBody)[1]
        const c3 = Object.values(reqBody)[2]
        const c4 = Object.values(reqBody)[3]
        const c5 = Object.values(reqBody)[4]
        const c6 = Object.values(reqBody)[5]

        if (isValidInput(reqBody))
            if (isValidFunc42(c1, c2, c3, c4, c5, c6))
                return returnGameTip(reqBody)
        return 'error'
        
    }
    catch (error) {
        return 'catchError'
    }
}

module.exports = completeGame;