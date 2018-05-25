// var obj = {
//     name: 'Hrishi'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Hrishi","age": 23}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
    title: "some title",
    body: "some body"
}
var originalNoteString = JSON.stringify(originalNote);
console.log(typeof originalNoteString);
console.log(originalNoteString);
//writes the file to notes.json
fs.writeFileSync('notes.json',originalNoteString);

//reads the file from notes.json
var noteString = fs.readFileSync('notes.json');

//parses the JSON from the notes.json file to and object or array
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
