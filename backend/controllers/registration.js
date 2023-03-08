
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
    if (!id || !Fname || !Lname || !gender || !dob || !classId || !isActive || !joinDate || !createdAt || !updatedAt || !createdBy) {
        res.status(400);
        throw new Error('All fields are required');
    }

    const validateStudent = await Student.findOne({ id });
    if (validateStudent) {
        res.status(400);
        throw new Error('Student already exists');
    }
    const student = await Student.create({
        id,
        Fname,
        Lname,
        gender,
        dob,
        classId,
        isActive,
        joinDate,
        createdAt,
        updatedAt,
        createdBy,
    });
    if (student) {
        res.status(201).json({
            _id: student.id,
            firstName: student.Fname,
            lastName: student.Lname,
            gender: student.gender,
            dob: student.dob,
            classId: student.classId,
            isActive: student.isActive,
            joinDate: student.joinDate,
            createdAt: student.createdAt,
            updatedAt: student.updatedAt,
            createdBy: student.createdBy,
        });

    } else {
        res.status(400);
        throw new Error('invalid user data')
    }
});


//@desc   Register a new parent
//@route  POST /api/registration/parent
//@access Public


const registerParent = asyncHandler(async (req, res) => {
    /**@extends Parent */
    const { Fname, Lname, id, phone, createdAt, updatedAt, students } = req.body;


    const registerParent = asyncHandler(async (req, res) => {
        const validateParent = await Parent.findById({ id });

        switch (validateParent) {
            case true:
                res.status(400);
                throw new error(`Parent of Id: ${id} already exists`);
                break;
            case false:
                const parent = await Parent.create({
                    id,
                    Fname,
                    Lname,
                    phone,
                    createdAt,
                    updatedAt,
                    students,
                });
                break;
                if (parent) {
                    res.status(201).json({
                        _id: parent.id,
                        Fname: parent.Fname,
                        Lname: parent.Lname,
                        phone: parent.phone,
                        createdAt: parent.createdAt,
                        updatedAt: parent.updatedAt,
                        students: parent.students
                    });
                } else {
                    res.status(400);
                    throw new Error("Bad or Invalid Request");
                }
        }
    });
});
