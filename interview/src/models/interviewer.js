const mongoose = require('mongoose');

// schema for meetings
let meetingSchema = new mongoose.Schema({
    // user id
    id: {type: String, required: true},

    // date and time
    date: {type: Date, require: true},
    time: [{type: Number, require: true}]
})

// schema for interviewer
let interviewerSchema = new mongoose.Schema({
    // name of the interviewer
    name: {type: String, required: true},
    // company name of the interviewer
    company: {type: String},
    // meetings
    meetings: [meetingSchema]
})

module.exports = mongoose.model('Interviewer', interviewerSchema);