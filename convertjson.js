// convertJSON.js

const fs = require('fs');

// Read JSON data from file
const rawData = fs.readFileSync('./aperson.json');
const jsonData = JSON.parse(rawData);

// Convert JavaScript object to JSON string
const jsonString = JSON.stringify(jsonData, null, 2);

// Write the converted JSON string to a new file
fs.writeFileSync('./convertedData.json', jsonString);

console.log('Data converted and saved successfully.');
