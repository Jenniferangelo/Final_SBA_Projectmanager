const mongoose = require('mongoose');

const TaskParentSchema = mongoose.Schema({
    Task_ID:{
        type: String,
        required: false,
        dropDups: true
    },
    TaskName:{
        type: String,
        required: true
    },
    Project_Name:{
        type: String,
        required: true
    },
    Start_date:{
        type: Date,
        default: Date.now
    },
    End_date:{
        type: Date,
        default: Date.now
    },
    Priority:{
        type:Number,
        min: 0,
        max: 30
    },
    Finished:{
        type: Boolean,
        default: false
    },
    User_ID:{
        type: mongoose.Schema.ObjectId, ref: 'UserTable',
        required: false
    },
    User:{
        type: String,
        required: true
    },
    Parent_Task:{
        type: mongoose.Schema.ObjectId, ref: 'TaskTable' , 
        required: false
    },
    Status:{
        type: String,
        required: false
    },
    IsParent:{
        type: Boolean,
        required: false
    }
});

const Task = module.exports = mongoose.model('Tasktable',TaskParentSchema);

