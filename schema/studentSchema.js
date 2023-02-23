const Schema = require('mongoose').Schema;

const studentSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    prevSchool: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    allergies: {
        type: String,
        required: true
    },
    medicalConditions: {
        type: String,
        required: true
    },
    parentName: {
        type: String,
        required: true
    },
    parentEmail: {
        type: String,
        required: true
    },
    parentPhone: {
        type: String,
        required: true
    },
    career: {
        type: String,
        required: true
    },
    parentTeacher: {
        type: String,
        required: true,
        ref: 'Teacher'
    },
    subjects: [{
        type: Array,
        ref: 'Subject'
    }],
    year: {
        type: String,
        required: true
    }
});

const Student = module.exports = require('mongoose').model('Student', studentSchema);
module.exports = Student;
