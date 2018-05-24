console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');
//calling the property argv[2] from the process object
var command = process.argv[2];
console.log(`Command: ${command}`);
if (command === 'add') {
    console.log(`Adding new note`);
} else if (command === 'list') {
    console.log(`Listing all notes`);
} else if (command === 'read') {
    console.log(`Fetching the note`);
} else if (command === 'remove') {
    console.log(`Removing the following note`);
} else {
    console.log(`COmmand not recognised`);
}
//argv shortform for argument vector or argument array
console.log(process.argv);
