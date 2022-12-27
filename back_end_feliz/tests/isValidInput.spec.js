const isValidInput = require('../src/isValidInput')

describe('Test function isValidInput', () => {
    it('play (+, 3, 2, +, 1, 0) return True', () => {
        expect(isValidInput('+', '3', '2', '+', '1', '0')).toBe(true);
    })
    it('play (+, 3, 2, +, 1) return False', () => {
        expect(isValidInput('+', '3', '2', '+', '1')).toBe(false);
    })
    // it('play (+, 3, 23, +, 1) return False', () => {
    //     expect(isValidInput('+', '3', '2', '+', '1')).toBe(False);
    // })
})
