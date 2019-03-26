const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    User_ID:{
        type: mongoose.Schema.ObjectId, ref: 'UserTable',
        required: false 
    },
    First_name:{
        type: String,
        required: true
    },
    Last_name:{
        type: String,
        required: true
    },
    Employee_ID:{
        type: Number,
        required: true
    },
    Project_ID:{
        type: mongoose.Schema.ObjectId, ref: 'ProjectTable',
        required: false
    },
    Task_ID:{
        type: mongoose.Schema.ObjectId, ref: 'TaskTable',
        required: false
    }
   
});

const User = module.exports = mongoose.model('UserTable',UserSchema);