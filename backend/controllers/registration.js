
// Path: backend/controllers/registration.js
const asyncHandler = require('express-async-handler');
const Student = require('../models/studentSchema');
const Parent = require('../models/parentSchema');
const Admin = require('../models/adminSchema');
const Class = require('../models/classSchema');
const Subject = require('../models/subjectSchema');
const Teacher = require('../models/teacherSchema');


// @desc    Register a new student
// @route   POST /api/registration/student
// @access  Public
//**@Domains18 */
const registerStudent = asyncHandler(async (req, res) => {
    const { id, Fname, Lname, gender, dob, classId, isActive, joinDate, createdAt, updatedAt, createdBy } = req.body;
    if(!id || !Fname || !Lname || !gender || !dob || !classId || !isActive || !joinDate || !createdAt || !updatedAt || !createdBy) {
        res.status(400);
        throw new Error('All fields are required');
    }
    
});
