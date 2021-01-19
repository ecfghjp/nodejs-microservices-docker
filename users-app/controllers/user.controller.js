const User = require('../models/user.model.js');
const request = require('request');


const noteService = 'http://localhost:3001';


exports.create = (req, res) => {
    if(!(req.body.username&&req.body.password&&req.body.email)) {
        return res.status(400).send({
            message: "User details having missing data"
        });
    }
    //find user if exists , call notes api and display 
    console.log("calling user with username "+req.body.username);

    if(User.exists(req.body.username)){
        console.log("existing user");
        //call notes api to get notes and display notes in here
        request.get({
            headers: {'content-type': 'application/json'},
            url: `${noteService}/notes/${req.body.username}`
        })
        //res.render("index", {username:req.body.username,message:"Welcome back "});
        
    }
    // Create a user
    user = new User({
        username: req.body.username,
        email: req.body.email,
        password : req.body.password
    });

    // Save user in the database
    user.save()
    .then(data => {
        //res.send(data);
        res.render("index", {username:req.body.username,message:"Welcome "});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    });

};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    User.find()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });

};

exports.login = (req,res) =>{
    res.render('login');
}

// Find a single note with a noteId


exports.findOne = (req, res) => {
    User.findOne(req.params.username)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.username
            });            
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.username
            });                
        }
        return res.status(500).send({
            message: "Error retrieving User with id " + req.params.username
        });
    });

};

exports.getAllNotes = (req, res) => {

};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

};
