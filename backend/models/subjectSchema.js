


//Path: backend/models/subjectSchema.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const subjectSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    classId: {
        type: String,
        required: true

    },
    teacherId: {
        type: String,
    },
    description: {
        type: String,
    },

});

const Subject = mongoose.model('Subject', subjectSchema);
module.exports = Subject;
