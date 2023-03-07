
// Path: backend/controllers/registration.js
const asyncHandler = require('express-async-handler');
const Student = require('../schema/studentSchema');
const Parent = require('../schema/parentSchema');
const Admin = require('../schema/adminSchema');
const Class = require('../schema/classSchema');
const Subject = require('../schema/subjectSchema');
const Teacher = require('../schema/teacherSchema');


// @desc    Register a new student
// @route   POST /api/registration/student
// @access  Public
const registerStudent = asyncHandler(async (req, res) => {
    const { id, Fname, Lname, gender, dob, classId, isActive, joinDate, createdAt, updatedAt, createdBy } = req.body;
    if(!id || !Fname || !Lname || !gender || !dob || !classId || !isActive || !joinDate || !createdAt || !updatedAt || !createdBy) {
        res.status(400);
        throw new Error('All fields are required');
    }
});
