const { calculateSum, findHighest, findLowest, calculateAverage } = require('../src/numberProcessor');

describe('calculateSum', () => {
    test('calculates the sum of numbers', () => {
        expect(calculateSum([1, 2, 3, 4, 5])).toBe(15);
    });
    test('handles empty array', () => {
        expect(calculateSum([])).toBe(0);
    });
});

describe('findHighest', () => {
    test('finds the highest number', () => {
        expect(findHighest([1, 2, 3, 4, 5])).toBe(5);
    });
    test('handles empty array', () => {
        expect(findHighest([])).toBe(null);
    });
});

describe('findLowest', () => {
    test('finds the lowest number', () => {
        expect(findLowest([1, 2, 3, 4, 5])).toBe(1);
    });
    test('handles empty array', () => {
        expect(findLowest([])).toBe(null);
    });
});

describe('calculateAverage', () => {
    test('calculates the average of numbers', () => {
        expect(calculateAverage([1, 2, 3, 4, 5])).toBe(3);
    });
    test('handles empty array', () => {
        expect(calculateAverage([])).toBe(0);
    });
});