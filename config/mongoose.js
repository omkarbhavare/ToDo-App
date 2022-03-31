const mongoose = require('mongoose');

//connnecting to the DataBase
mongoose.connect('mongodb://localhost/todos');  //27017

//checking connection if Successfull
const db =mongoose.connection;

//if any error found
db.on('error',console.error.bind(console,"Error while connecting to MongoDB"));

//if successfull in connecting
db.once('open',function(){
    console.log("Connected to DataBase");
})

// Exporting The DataBase
module.exports = db;



/*  ---Notes-----

db.once()-->once function is used in conditions where we want a particular function to be executed only 
a single time.Even though we execute or call this function multiple times then also it will return original 
value without any changes

db.on()-->on function--used to attach one or more event handlers for the selected elements in DOM

*/