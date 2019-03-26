const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    //Project_ID:{
      //  type: mongoose.Schema.ObjectId, ref: 'Project',
        //required: false,
        //dropDups: true
    //},
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
    ManagerName:{
        type: String,
        required: false
    },
    Task_IDS:[{
        //ref: 'TaskTable',
        type: mongoose.Schema.ObjectId, ref: 'TaskTable',
        //type: String
        
    }]
    
});
false
const Project = module.exports = mongoose.model('Projecttable',ProjectSchema);