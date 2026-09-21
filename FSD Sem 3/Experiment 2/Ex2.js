const fs = require('fs');

// CREATE
fs.writeFileSync(
    'student.txt',
    'Name: Ankit Raj\nCourse: CSE-DS\n'
);

console.log("File created successfully.");

// READ
const data = fs.readFileSync('student.txt', 'utf8');

console.log("\nFile Content:");
console.log(data);

// UPDATE
fs.appendFileSync(
    'student.txt',
    'College: ABES Engineering College\n'
);

console.log("File updated successfully.");

// READ UPDATED FILE
const updatedData = fs.readFileSync('student.txt', 'utf8');

console.log("\nUpdated File Content:");
console.log(updatedData);

// DELETE
fs.unlinkSync('student.txt');

console.log("File deleted successfully.");