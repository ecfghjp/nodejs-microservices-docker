const User = require('../models/user.model.js');
const request = require('request');




exports.create = (req, res) => {
    if(!(req.body.username&&req.body.password&&req.body.email)) {
        return res.status(400).send({
            message: "User details having missing data"
        });
    }
    //find user if exists , call notes api and display 
    console.log("calling user with username "+req.body.username);
    //find user
    User.find({username:req.body.username},function(err,user){
        if(user.length){
            console.log("user exists :: "+user);
            res.send(user);
        }else{
        // Create a user
        user = new User({
            username: req.body.username,
            email: req.body.email,
            password : req.body.password
        });
    // Save user in the database
    user.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
            });
        });
        }
    });
    

};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    User.find()
    .then(users => {
        if(users && users.length){
            res.send(users);
        }else{
            res.status(404).send({
                message: "No Users in database"
            });
        }
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

    User.find({username:req.params.username})
    .then(user => {
        if(user.length){
            res.send(user);
        }
        else {
            return res.status(404).send({
                message: "User not found with id " + req.params.username
            });            
        }
    }).catch(err => {
        return res.status(500).send({
            message: "Error retrieving User with id " + req.params.username
        });
    });

};

exports.getAllNotesForUser = (req, res) => {
  const noteService = 'http://notes-app:3001/notes/'+req.params.username;
  request(noteService,(err, response) => {
    if (err) { 
        return res.status(500).send({
            message: err.message || "Some error occurred while retrieving users"
        }); 
    }

    else if(response.body && response.body.length){
        return res.status(200).send(response.body);
    }else{
        return res.status(404).send({
        message: `No Notes found for ${req.params.username}`
    }); 
    }
        
    });

};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

};

exports.allnotes = async (username) => {

    const options = {

        uri: noteService+username,
        json: true,
        resolveWithFullResponse: true,
        method: 'GET'
    };

    comnsole.debug("calling response api with "+options);


    return request(options).then((response) => {
        comnsole.debug("response is "+response.body);
        return response.body

    }).catch((err) => {
        console.log(err);
        console.log('errorstatuscode:' + err.statusCode)
    })
};
