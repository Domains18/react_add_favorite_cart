const schema = require('mongoose').Schema;

const teacherSchema = new schema({
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
    students: [{
        type: schema.Types.ObjectId,
        ref: 'Student'
    }],
    subjects: [{
        type: Array,
        ref: 'Subject'
    }],
    TSC: {
        type: String,
        required: true,
        default: 'Not Verified'
    },
    classesAssigned: [{
        type: schema.Types.ObjectId,
        ref: 'Class'
    }],
    Roles: {
        type: String,
        required: true,
        default: 'Teacher'
    }
});

const Teacher = module.exports = require('mongoose').model('Teacher', teacherSchema);
module.exports = Teacher;
