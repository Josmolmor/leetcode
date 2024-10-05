import fibonacci from "../fibonacci-sequence.ts";

describe('fibonacci sequence recursive', () => {
    test('fib(5)', () => {
        expect(fibonacci(5)).toBe(5);
    })
    test('fib(10)', () => {
        expect(fibonacci(11)).toBe(89);
    })
})