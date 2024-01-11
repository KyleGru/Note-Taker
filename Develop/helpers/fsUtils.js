const fs = require('fs');
const path = require('path');

createNewNote ((body, notesArr) => {
  const note = body;
  notesArr.push(note);

  fs.writeFileSync(
    path.join(__dirname, '../../db/db.json'),
    JSON.stringify({
      notes: notesArr
    }, null, 2)
  )
    return notes;
});

module.exports = createNewNote;