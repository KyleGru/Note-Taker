const fs = require('fs');
const path = require('path');

const createNewNote = (body, notesArr) => {
  const note = body;
  notesArr.push(note);

  fs.writeFile(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({
      notes: notesArr
    }, null, 2),
    (err) => {
      err ? console.error(err) : console.info(`\nData written`)
    }
  )
    return note;
    
};

const deleteNote = (id) => {
  return "Delete function"
}

module.exports = {createNewNote, deleteNote}