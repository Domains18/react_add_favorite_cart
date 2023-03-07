const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParentSchema = new Schema({
    Fname: {
        type: String,
        required: true
    },
    Lname: {
        type: String,
        required: true
    },
    id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

const Parent = mongoose.model('Parent', ParentSchema);
module.exports = Parent;