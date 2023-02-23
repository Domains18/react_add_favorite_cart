const Schema = require('mongoose').Schema;


const departmentSchema = new Schema({
    departmentName: {
        type: String,
        required: true
    },
    departmentCode: {
        type: String,
        required: true
    },
});



const Department = mongoose.model('Department', departmentSchema);
module.exports = Department;
