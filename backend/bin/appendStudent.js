//we will use token in the frontend provided by the login function to authenticate user
const Parent = require('../models/parentSchema.js');
const Student = require('../models/studentSchema.js');
const asyncHandler = require('express-async-handler');

const appendStudent = asyncHandler(async (req, res) => {
    const { phone } = req.body;
    if (!phone) {
        res.status(400);
        throw new Error('Phone number is required');
    }
    const findParent = await Parent.findOne({ phone });
    if (!findParent) {
        res.status(400);
        throw new Error('Parent not found');
    }
    const { studentId } = req.params;
    if (!studentId) {
        res.status(400);
        throw new Error('Student ID is required');
    }
    const findStudent = await Student.findOne({ admNo });
    if (!findStudent) {
        res.status(400);
        throw new Error('Student not found');
    }
    //check if student is already appended to parent
    const checkStudent = findParent.students.find(student => student.admNo === findStudent.admNo);
    if (checkStudent) {
        res.status(400);
        throw new Error('Student already has a parent');
    }
    findParent.students.push(findStudent);
});

module.exports = { appendStudent }
