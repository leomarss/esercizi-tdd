function calculateStandardDeviation(numbers) {
    if (numbers.length === 0) {
        throw new Error("Array must not be empty");
    }

    const mean = numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
    const variance = numbers.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / numbers.length;
    return Math.sqrt(variance);
}

describe('Calculate exercise', () => {
    test('should throw an error when the numbers array is empty', () => {
        const numbers = [];
        expect(() => calculateStandardDeviation(numbers)).toThrow('Array must not be empty');
    });

    test('should return 0 when the numbers array contains a single element', () => {
        const numbers = [5]
        expect(() => calculateStandardDeviation(numbers)).toBe(0);
    });

    test('should return a number close to 2', () => {
        const numbers = [2, 4, 6, 7]
        expect(() => calculateStandardDeviation(numbers)).toBeCloseTo(2);
    });

    test('should return 0 when the numbers array contains the same values', () => {
        const numbers = [1, 1, 1, 1]
        expect(() => calculateStandardDeviation(numbers)).toBe(0);
    });
});