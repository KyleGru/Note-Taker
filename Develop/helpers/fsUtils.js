const fs = require('fs');
const path = require('path');

const createNewNote = (body, notesArr) => {
  const note = body;
  notesArr.push(note);

  fs.writeFileSync(
    path.join(__dirname, '.Develop/db/db.json'),
    JSON.stringify({
      notes: notesArr
    }, null, 2)
  )
    return notes;
};

module.exports = createNewNote;