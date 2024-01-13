const router = require('express').Router();
const { notes } = require('../../db/db');
const { createNewNote, deleteNote } = require('../../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid')

router.get('/notes', (req, res) => {
    let saved = notes;
    res.json(saved);
});

router.post('/notes', (req, res) => {
    console.log(req.body);
    req.body.id = uuidv4();
    let newNote = createNewNote(req.body, notes);
    res.json(newNote)
});

router.delete('/notes/id:', (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
    console.log(notes);
});

module.exports = router;