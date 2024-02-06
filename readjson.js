
// readJSON.js
const fs = require('fs');

// Read JSON data from file
const rawData = fs.readFileSync('./aperson.json');
const jsonData = JSON.parse(rawData);

console.log(jsonData.name);  
console.log(jsonData.address.city);  
console.log(jsonData.hobbies[0]);  
