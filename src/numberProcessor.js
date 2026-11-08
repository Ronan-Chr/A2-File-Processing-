const fs = require('fs');

// Function to read numbers from a file
function readNumbers(filePath) {
    const text = fs.readFileSync(filePath, 'utf-8');
    const lines = text.split('\n');
    const numbers = [];
    for (const line of lines) {
        if (line.trim() !== '') {
            numbers.push(parseFloat(line));
        }
    }
    return numbers;
}

// Function to calculate the sum of numbers
function calculateSum(numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    return sum;
}

// Function to find the highest number
function findHighest(numbers) {
    let highest = numbers[0];
    for (const number of numbers) {
        if (number > highest) {
            highest = number;
        }
    }
    return highest;
}

// Function to find the lowest number
function findLowest(numbers) {
    let lowest = numbers[0];
    for (const number of numbers) {
        if (number < lowest) {
            lowest = number;
        }
    }
    return lowest;
}

// Function to calculate the average number
function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    const sum = calculateSum(numbers);
    return sum / numbers.length;
}

// Read numbers from the sample file and display the results
const numbers = readNumbers('data/sample-numbers.txt');
console.log('Numbers:', numbers);
console.log('Sum:', calculateSum(numbers));
console.log('Highest:', findHighest(numbers));
console.log('Lowest:', findLowest(numbers));
console.log('Average:', calculateAverage(numbers));

// Export the functions for use in other modules
module.exports = {
    readNumbers,
    calculateSum,
    findHighest,
    findLowest,
    calculateAverage
};