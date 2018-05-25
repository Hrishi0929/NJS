console.log('Starting notes.js');
const fs = require('fs');

var fetchNotes = () => {
  //here we use the try catch block
//to try and read the if notes-data.json is there
  try {
    var notesString = fs.readFileSync('notes-data.json');
    //returning notesString here so that when we call fetchNotes
    //down below the function will return the notesString    
    return JSON.parse(notesString);  
    } catch (error) {
      return [];
    }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote = (title, body) => {
 var notes = fetchNotes();
 var note = {
   title,
   body
 };
//We check if the title of the notes are unique as we dont want any duplication

 //option one (option two is the simplified version of option one)
// var duplicateNotes = notes.filter((note)=>{
//    return note.title === title;
// });

//option two
var duplicateNotes = notes.filter(note => note.title === title);

if (duplicateNotes.length === 0) {
//push method let's us add an 
//item which gets added to the end of the array
  notes.push(note);
  saveNotes(notes);
  return note;
} 


};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting note', title);
};

var removeNote = (title) => {
  console.log('Removing note', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
