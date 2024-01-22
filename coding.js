const fs = require('fs');

function decode(messageFile) {
    const pyramidLines = [];

    // Read the pyramid structure from the file
    const content = fs.readFileSync(messageFile, 'utf-8');
    const lines = content.split('\n');
    
    for (const line of lines) {
        const words = line.trim().split(' ');
        pyramidLines.push(words[1]);
    }
    console.log(pyramidLines);

    // Extract the message words based on the pyramid structure
    const messageWords = pyramidLines.filter((_, index) => index % 2 === 0);

    // Join the message words to form the decoded message
    const decodedMessage = messageWords.join(' ');

    return decodedMessage;
}

// Example usage:
const filePath = 'coding_qual_input.txt';  // Replace with the actual file path
const result = decode(filePath);
console.log(result);
