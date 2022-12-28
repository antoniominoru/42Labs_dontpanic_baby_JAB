function isValidFunc42(c1, c2 , c3 , c4 , c5 , c6) {
    try {
        if (eval(c1 + c2 + c3 + c4 + c5 + c6) == 42)
            return true
        return false
    }
    catch (error) {
        return false
    }
}

module.exports = isValidFunc42;
