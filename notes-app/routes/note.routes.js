
module.exports = (app) => {

    const notes = require('../controllers/note.controller.js');
// create new router

    app.post('/notes/', notes.create);

    app.get('/',notes.login);

    // Retrieve all Notes for the user
    app.get('/notes/:username', notes.findAllNotesUser);

    // Retrieve all Notes
    app.get('/notes', notes.findAll);

    // Retrieve a single Note with noteId
    app.get('/notes/:noteId', notes.findOne);

    // Update a Note with noteId
    app.put('/notes/:noteId', notes.update);
    
    // Delete a Note with noteId
    app.delete('/notes/:noteId', notes.delete);

}