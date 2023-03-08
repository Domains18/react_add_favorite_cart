

//Path: backend/schema/teacherSchema.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const teacherSchema = new Schema({
    Fname: {
        type: String,
        required: true
    },
    Lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    },
    joinDate: {
        type: Date,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    workingDays: {
        type: Array,
        required: true
    },
});


const Teacher = mongoose.model('Teacher', teacherSchema);
module.exports = Teacher;
