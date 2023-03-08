

//Path: backend/schema/adminSchema.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const adminSchema = new Schema({
    names: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
