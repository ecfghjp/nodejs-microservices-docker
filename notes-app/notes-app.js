
const express = require("express")
const mongoose = require("mongoose")
const dbConfig = require('./config/database.config.js');
const bodyParser = require("body-parser")

const app = express();
const port = process.env.NOTES_PORT || 3001;

//router configurations
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const router = require('./routes/note.routes.js')(app);

app.set("views", __dirname + "/views"); 
app.set("view engine", "ejs"); 

//mongoose connection
//Connect returns a promise object which can be used to execute then statement
//if an error is returned it will gho to the catch block
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

//start the app
app.listen(port, () => {
    console.log("node-js running on port "+port);
});

