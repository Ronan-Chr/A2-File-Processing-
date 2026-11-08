const fs = require('fs');

// Function to count the number of words
function countWords(text) {
    return text.split(/\s+/).filter((word) => word !== '').length;
}

// Function to find the longest word
function findLongestWord(text) {
    const words = text.split(/\s+/);
    let longestWord = '';
    for (const word of words) {
        // Remove punctuation from the word
        const cleanWord = word.replace(/[.,!?:;'"(){}[\]]/g, '');
        if (cleanWord.length > longestWord.length) {
            longestWord = cleanWord;
        }
    }
    return longestWord;
}

// Function to count the number of lines
function countLines(text) {
    if (text === '') {
        return 0;
    }
    return text.trimEnd().split('\n').length;
}

// Read text from the quotes file and display the results
const quotes = fs.readFileSync('data/quotes.txt', 'utf-8');
console.log('Word count:', countWords(quotes));
console.log('Longest word:', findLongestWord(quotes));
console.log('Line count:', countLines(quotes));

// Read text from the sample file and display the results
const sampleText = fs.readFileSync('data/sample-text.txt', 'utf-8');
console.log('Sample Word count:', countWords(sampleText));
console.log('Sample Longest word:', findLongestWord(sampleText));
console.log('Sample Line count:', countLines(sampleText));

// Export the functions for use in other modules
module.exports = {
    countWords,
    findLongestWord,
    countLines
};