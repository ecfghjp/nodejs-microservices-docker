const Note = require('../models/note.model.js');

// parse requests of content-type - application/json
// Create and Save a new Note
exports.create = (req, res) => {
    console.log(req.body)
    if(!req.body.content) {
        //add validations here if we need to 
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Create a Note
    const note = new Note({
        title: req.body.title || "Untitled Note", 
        content: req.body.content,
        status: req.body.status,
        username: req.body.username
    });

    // Save Note in the database
    note.save()
    .then(data => {
        res.render('index',{username:req.body.username});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });

};

//rediorecting file to Login page
exports.login = (req,res) =>{
    res.render('create-note');
}

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    console.log("Inside find all users");
    Note.find()
    .then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });

};
// Retrieve and return all notes from the database for a user
exports.findAllNotesUser = (req, res) => {
    console.log("Inside find all users with username and username is "+req.params.username);
    Note.find({username:req.params.username})
    .then(notes => {
        if(!notes) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.username
            });            
        }
        //res.render('list-all-notes',{notes:notes});
        res.send(notes);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.username
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.username
        });
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    console.debug("Calling with ID")
    Note.findById(req.params.noteId)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });            
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.noteId
        });
    });

};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

};