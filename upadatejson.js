// updateJSON.js

const fs = require('fs');

// Read JSON data from file
let jsonData = require('./aperson.json');

// Update a property
jsonData.age = 33;

// Update a nested property
jsonData.address.city = "New Delhi";

// Add a new property
jsonData.email = "john.doe@example.com";

// Update an element in an array
jsonData.hobbies[2] = "programming";

// Write updated JSON data back to file
fs.writeFileSync('./aperson.json', JSON.stringify(jsonData, null, 2));

console.log('Data updated successfully.');
