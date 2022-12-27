const isValidFunc42 = require('../src/isValidFunc42')

describe('Test function isValidFunc42', () => {
    it('play (+, 3, 2, +, 1, 0) return True', () => {
        expect(isValidFunc42('+', '3', '2', '+', '1', '0')).toBe(true);
    })
    it('play (8, 6, /, 2, -, 1) return True', () => {
        expect(isValidFunc42('8', '6', '/', '2', '-', '1')).toBe(true);
    })
    it('play (2, 0, *, 2, +, 2) return True', () => {
        expect(isValidFunc42('2', '0', '*', '2', '+', '2')).toBe(true);
    })
    it('play (+, 3, 2, +, 1, 2) return False', () => {
        expect(isValidFunc42('+', '3', '2', '+', '1', '2')).toBe(false);
    })
    it('play (+, +, +, +, 1, 9) return False', () => {
        expect(isValidFunc42('+', '+', '+', '+', '1', '9')).toBe(false);
    })
    it('play (+, +, +, +, 4, 2) return False', () => {
        expect(isValidFunc42('+', '+', '+', '+', '4', '2')).toBe(false);
    })
    it('play (+, b, 2, +, 1, 0) return false', () => {
        expect(isValidFunc42('+', 'b', '2', '+', '1', '0')).toBe(false);
    })
    it('play (+, z, /, +, 1, 2) return False', () => {
        expect(isValidFunc42('+', 'z', '/', '+', '1', '2')).toBe(false);
    })
})
