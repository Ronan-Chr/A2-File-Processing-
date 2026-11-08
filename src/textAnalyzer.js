const fs = require('fs');

function countWords(text) {
    return text.split(/\s+/).filter((word) => word !== '').length;
}

function findLongestWord(text) {
    const words = text.split(/\s+/);
    let longestWord = '';
    for (const word of words) {
        const cleanWord = word.replace(/[.,!?:;'"(){}[\]]/g, '');
        if (cleanWord.length > longestWord.length) {
            longestWord = cleanWord;
        }
    }
    return longestWord;
}

function countLines(text) {
    if (text === '') {
        return 0;
    }
    return text.trimEnd().split('\n').length;
}

const quotes = fs.readFileSync('data/quotes.txt', 'utf-8');
console.log('Word count:', countWords(quotes));
console.log('Longest word:', findLongestWord(quotes));
console.log('Line count:', countLines(quotes));

const sampleText = fs.readFileSync('data/sample-text.txt', 'utf-8');
console.log('Sample Word count:', countWords(sampleText));
console.log('Sample Longest word:', findLongestWord(sampleText));
console.log('Sample Line count:', countLines(sampleText));

module.exports = {
    countWords,
    findLongestWord,
    countLines
};