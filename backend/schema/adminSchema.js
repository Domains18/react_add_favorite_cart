

//Path: backend/schema/adminSchema.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const adminSchema = new Schema({
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
});

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
