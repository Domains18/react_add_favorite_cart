const Schema = require('express').Schema;

//Path: backend/models/studentSchema.js
const studentSchema = new Schema({
    Fname: {
        type: String,
        required: true
    },
    Lname: {
        type: String,
        required: true
    },
    id: {
        type: Object
    }
});


const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
