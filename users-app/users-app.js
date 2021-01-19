
const express = require("express")
const mongoose = require("mongoose")
const dbConfig = require('./config/database.config.js');
const bodyParser = require("body-parser")


const app = express();
const port = process.env.USERS_PORT || 3000;

//router configurations
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//set directory for views
app.set("views", __dirname + "/views"); 
app.set("view engine", "ejs"); 

//define router
const router = require('./routes/user.routes.js')(app);

//mongoose connection
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
    console.log("users-app running on port "+port);
});

