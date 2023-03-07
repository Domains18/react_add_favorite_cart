

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
    id: {
        type: Object,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});
