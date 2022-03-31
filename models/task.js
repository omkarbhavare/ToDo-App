const { text } = require('express');
const mongoose = require('mongoose');

//Creating Schema
const taskSchema =new mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type:  Date,
        required: true
    }
    
});

const Task = mongoose.model('Task',taskSchema);

//Exporting the Schema
module.exports = Task;

/*----Notes-------

Schema-->It is a structure that represents the logical view of the entire database

mongoose.Schema-->Introducing Schema
*/