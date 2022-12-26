function validFunc42(c1, c2, c3, c4, c5, c6) {
    var str = (c1 + c2 + c3 + c4 + c5 + c6)
    str = str.replace('+++++', '+');
    console.log(str)
    if (eval(str) == 42)
        return 'True'
	return 'False'
}

module.exports = validFunc42;