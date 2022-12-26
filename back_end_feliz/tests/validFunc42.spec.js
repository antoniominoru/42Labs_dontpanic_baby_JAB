const validFunc42 = require('../src/validFunc42')

describe('Test function validFunc42', () => {
    it('play (+, 12, +, 12, +, 18) return True', () => {
        expect(validFunc42('+', '12', '+', '12', '+', '18')).toMatch(/^True$/);
    })
    it('play (+, 12, +, 12, +, 19) return False', () => {
         expect(validFunc42('+', '12', '+', '12', '+', '19')).toMatch(/^False$/);
    })
    it('play (+, +, +, +, +, 19) return False', () => {
        expect(validFunc42('+', '+', '+', '+', '+', '19')).toMatch(/^False$/);
   })
   it('play (+, +, +, +, +, 42) return True', () => {
    expect(validFunc42('+', '+', '+', '+', '+', '42')).toMatch(/^True$/);
})
})
