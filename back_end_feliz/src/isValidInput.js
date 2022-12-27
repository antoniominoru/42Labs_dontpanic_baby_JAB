function isValidInput(reqBody) {
    try {
        if (isValidInput.length == 6)
            return true
        return false
    }
    catch (error) {
        return false
    }
}
// testaro Json
module.exports = isValidInput;
