const { countWords, findLongestWord, countLines } = require('../src/textAnalyzer');

describe('countWords', () => {
    test('counts words in text', () => {
        expect(countWords('Hello world')).toBe(2);
    });
    test('handles empty text', () => {
        expect(countWords('')).toBe(0);
    });
});

describe('findLongestWord', () => {
    test('finds the longest word in text', () => {
        expect(findLongestWord('The quick brown fox')).toBe('quick');
    });
    test('handles text with punctuation', () => {
        expect(findLongestWord('Hello, world!')).toBe('Hello');
    });
});

describe('countLines', () => {
    test('counts lines in text', () => {
        expect(countLines('Hello\nworld')).toBe(2);
    });
    test('counts multiple lines in text', () => {
        expect(countLines('one\ntwo\nthree')).toBe(3);
    });
    test('handles empty text', () => {
        expect(countLines('')).toBe(0);
    });
});