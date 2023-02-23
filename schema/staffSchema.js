const Schema = require('mongoose').Schema;

const staffSchema = new Schema({
    firstName: {
        type: String,
        required: true

    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true,
        ref: 'Department'
    },
},{collection: 'staffs'});

const Staff = mongoose.model('Staff', staffSchema);
module.exports = Staff;
