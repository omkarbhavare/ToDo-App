// setting up the express server
const express = require('express');
const path = require('path');
const port = 8000;
const db = require('./config/mongoose');
const  Task  = require('./models/task');
const app = express();

app.use(express.static("./views"));

// to use encrypted data
app.use(express.urlencoded({ extended: true }));

// setting up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');



app.get('/', function(req, res){
    Task.find({}, function(err, task){
        if(err){
            console.log('Error in fetching tasks from db');
            return;
        }

        return res.render('home', {
            
            title: "TODO APP | Home",
            
            task: task
        });
    }
)});


// creating Tasks
app.post('/create-task', function(req, res){

    
    Task.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
        }, function(err, newtask){
        if(err){console.log('error in creating task', err); return;}
        

        
        return res.redirect('back');

    });
});


// deleting Tasks
app.get('/delete-task', function(req, res){
    // get the id from query
    var id = req.query;

    // checking the number of tasks selected to delete
    var count = Object.keys(id).length;
    
    for(let i=0; i < count ; i++){
        
        // finding and deleting tasks from the DB one by one using id
        Task.findByIdAndDelete(Object.keys(id)[i], function(err){
        if(err){
            console.log('error in deleting task');
            }
        })
    }
    return res.redirect('back'); 
});



//Running Server on Specific Port
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
    }

    console.log(`Server is running on port : ${port}`);
});


