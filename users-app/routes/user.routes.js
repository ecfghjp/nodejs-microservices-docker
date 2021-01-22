
module.exports = (app) => {

    const users = require('../controllers/user.controller.js');
// create new router

    app.post('/users/', users.create);

    app.get('/',users.login)

    // Retrieve all users
    app.get('/users/', users.findAll);

    // Retrieve a single Note with noteId
    app.get('/users/:username', users.findOne);

    // Retrieve a single Note with noteId
    app.get('/users/get-notes/:username', users.getAllNotesForUser);

    // Update a Note with noteId
    app.put('/users/:username', users.update);
    
    // Delete a Note with noteId
    app.delete('/users/:username', users.delete);


}