
const fs = require('fs');

// Read JSON data from file
let jsonData = require('./aperson.json');

// Delete a property
delete jsonData.isStudent;

// Delete a nested property
delete jsonData.address.country;

// Remove an element from an array
jsonData.hobbies.splice(0, 1);  

// Write updated JSON data back to file
fs.writeFileSync('./aperson.json', JSON.stringify(jsonData, null, 2));

console.log('Data deleted successfully.');
