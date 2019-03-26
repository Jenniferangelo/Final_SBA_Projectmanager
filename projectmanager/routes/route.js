const express = require('express');
const router = express.Router();

var bodyparser= require('body-parser');

const Task = require('../models/task'); 
const User = require('../models/user');
const Project = require('../models/project');
var mongoose = require('mongoose');


router.use(bodyparser.json( {type: "*/*"}));
router.use(bodyparser.urlencoded());
var app = express();

router.get('/projects',(req, res, next)=>{
    console.log("Retrieving projects");
    Project.find(function(err, project){
        res.json(project);
    });
});

router.get('/projects/:_id', function(req,res,next){
    console.log("into find")
    Project.findById(req.params._id)
    .then(doc=>{
        if(!doc){ return res.status(404).end();}
    return res.status(200).json(doc);
    })
    .catch(err => next(err));
});

router.get('/tasks',(req, res, next)=>{
    console.log("Retrieving tasks");
    Task.find(function(err, task){
        res.json(task);
    });
});

router.get('/user',(req, res, next)=>{
    console.log("Retrieving user");
    User.find(function(err, user){
        res.json(user);
    });
});


router.get('/user/:_id', function(req,res,next){
    console.log("into find user")
    User.findById(req.params._id)
    .then(doc=>{
        if(!doc){ return res.status(404).end();}
    return res.status(200).json(doc);
    })
    .catch(err => next(err));
});


router.post('/projects',(req, res, next)=>{
    
    console.log("inside adding project");
    let project = req.body;

    console.log(project);
    var model = new Project(project);
    console.log("testing project")
    model.save(function(err){
        if(err){
            res.send("error"+err);
            return next(err);
        }
        res.send("project created");
    });
});

//Update 
router.put('/projects/:id', function(req,res,next){
    console.log("updating projects value"+req.params.id);
    Project.findByIdAndUpdate(req.params.id, req.body, function(err,post){
        if(err) return next(err);
        res.json(post);
    });
});

router.get('/tasks/:_id', function(req,res,next){
    console.log("into find task")
    Task.findById(req.params._id)
    .then(doc=>{
        if(!doc){ return res.status(404).end();}
    return res.status(200).json(doc);
    })
    .catch(err => next(err));
});

router.post('/tasks',(req, res, next)=>{
    
    console.log("inside adding task");
    let task = req.body;

    console.log(task);
    var model = new Task(task);
    //let project = req.body;
    
       // console.log(project);
        
    //var model2 = new Project(project);
    console.log("testing -- "+ req.body.Project_Name);
    model.save(function(err){
        console.log('task _id' + model._id);
        Project.find({}).
        populate(Task_IDS)
        .exec(function(err, doc){
             //Task.populate(doc.Task_ID, {path: '_id'}, function (err, doc) {
    
             //})
         })
        
       
         if(err){
            res.send("error"+err);
            return next(err);
        }
        res.send("task created");
    });
});

router.post('/user',(req, res, next)=>{
    
    console.log("inside adding user");
    let user = req.body;

    console.log(user);
    var model = new User(user);
    console.log("testing user")
    model.save(function(err){
        if(err){
            res.send("error"+err);
            return next(err);
        }
        res.send("user created");
    });
});

router.put('/tasks/:id', function(req,res,next){
    console.log("updating task value"+req.params.id);
    Task.findByIdAndUpdate(req.params.id, req.body, function(err,post){
        if(err) return next(err);
        res.json(post);
    });
});

router.post('/projects/:id',(req, res, next)=>{
    console.log("Deleting projects");
    Project.remove({_id: req.params.id}, function(err, result){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);
            console.log("Project deleted");
        }
    });
});

router.post('/tasks/:id',(req, res, next)=>{
    console.log("Deleting tasks");
    Task.remove({_id: req.params.id}, function(err, result){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);
            console.log("Task deleted");
        }
    });
});

router.post('/user/:id',(req, res, next)=>{
    console.log("Deleting user");
    User.remove({_id: req.params.id}, function(err, result){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);
            console.log("User deleted");
        }
    });
});
//Update user
router.put('/user/:id', function(req,res,next){
    console.log("updating user value"+req.params.id);
    User.findByIdAndUpdate(req.params.id, req.body, function(err,post){
        if(err) return next(err);
        res.json(post);
    });
});

//Delete Project

router.delete('/projects/:id',(req,res,next)=>{
    //logic to delete tasks
    console.log("deleting project ");
    Project.remove({_id: req.params.id}, function(err,result){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    });
});

router.delete('/tasks/:id',(req,res,next)=>{
    //logic to delete user
    console.log("deleting task ");
    Task.remove({_id: req.params.id}, function(err,result){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    });
});

module.exports = router;