
// Path: backend/controllers/registration.js
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const Student = require('../models/studentSchema');
const Parent = require('../models/parentSchema');
const Class = require('../models/classSchema');
const Teacher = require('../models/teacherSchema');
const Admin = require('../models/adminSchema');
const Subject = require('../models/subjectSchema');
const Community = require('../models/communitySchema');

// @desc    Register a new student
// @route   POST /api/registration/student
// @access  Private
const registerStudent = asyncHandler(async (req, res) => {
    const { Fname, Lname, admNo, gender, dob, classId, isActive, joinDate, createdAt, updatedAt, createdBy } = req.body;
    if (!Fname || !Lname || !gender || !dob || !classId || !isActive || !joinDate || !createdAt || !updatedAt || !createdBy || !admNo) {
        res.status(400);
        throw new Error('All fields are required');
    }

    const validateStudent = await Student.findOne({ id });
    if (validateStudent) {
        res.status(400);
        throw new Error('Student already exists');
    }
    const student = await Student.create({
        Fname,
        Lname,
        gender,
        dob,
        admNo,
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
            admNo: student.admNo,
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
//@access Private
const registerParent = asyncHandler(async (req, res) => {
    const { Fname, Lname, phone, createdAt, updatedAt, students } = req.body;
    if (!Fname, !Lname, !phone, !createdAt, !updatedAt, !students) {
        res.status(400);
        throw new Error("All fields are required");
    }
    const validateParent = await Parent.findById({ id });
    switch (validateParent) {
        case true:
            res.status(400);
            throw new error(`Parent of Id: ${id} already exists`);
            break;
        case false:
            const parent = await Parent.create({
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

//@desc   add a new class
//@route  POST /api/registration/class
//@access Private

const addClass = asyncHandler(async (req, res) => {
    const { classCode, name, classId, teacherId, description } = req.body
    if (!classCode, !name, !classId, !teacherId, !description) {
        res.status(400);
        throw new Error("All fields are required");
    }

    const validateClass = await Class.findById({ id });
    if (validateClass) {
        res.status(400)
        throw new Error("Bad request, Class already exists");
    }
    const clas = await Class.create({
        classCode,
        name,
        classId,
        teacherId,
        description
    })
    if (clas) {
        res.json({
            _id: clas.id,
            name: clas.name,
            teacherId: clas.teacherId,
            description: clas.description
        });
    } else {
        res.status(400);
        throw new Error("Invalid or Bad Request");
    }
});

const registerTeacher = asyncHandler(async (req, res) => {
    const { Fname, Lname, email, gender, phone, isActive, joinDate, createdAt, workingDays } = req.body;
    if (!Fname, !Lname, !email, !gender, !phone, !isActive, !joinDate, !createdAt, !workingDays) {
        res.status(400);
        throw new Error("All fields are required");
    }
    const checkTeacher = await Teacher.findById({ id });
    if (checkTeacher) {
        res.status(400);
        throw new Error("Teacher already exists");
    }
    const teacher = await Teacher.create({
        Fname,
        Lname,
        email,
        gender,
        phone,
        isActive,
        joinDate,
        createdAt,
        workingDays
    });
    if (teacher) {
        res.json({
            _id: teacher.id,
            Fname: teacher.Fname,
            Lname: teacher.Lname,
            email: teacher.email,
            gender: teacher.gender,
            phone: teacher.phone,
            isActive: teacher.isActive,
            joinDate: teacher.joinDate,
            createdAt: teacher.createdAt,
            workingDays: teacher.workingDays
        });
    } else {
        res.status(400);
        throw new Error("Invalid or Bad Request");
    }
});

//@desc   add a new subject
//@route  POST /api/registration/subject
//@access Private

const addSubject = asyncHandler(async (req, res) => {
    const { subjectCode, name, classCode, teacherId, description } = req.body;
    if (!subjectCode, !name, !classCode, !teacherId, !description) {
        res.status(400);
        throw new Error("All fields are required");
    }
    const checkSubject = await Subject.findById({ id });
    if (checkSubject) {
        res.status(400);
        throw new Error("Subject already exists");
    }
    await Subject.create({
        subjectCode,
        name,
        classId,
        teacherId,
        description
    });
});


//@desc   add a new admin
//@route  POST /api/registration/admin
//@access Private

const addAdmin = asyncHandler(async (req, res) => {
    const { names, email, password, role } = req.body;
    if (!names || !email || !password || !role) {
        res.status(400);
        throw new Error("All fields are required");
    }
    const checkAdmin = await Admin.findOne({ email });
    if (checkAdmin) {
        res.status(400);
        throw new Error("Admin already exists");
    }
    //hash password
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const admin = await Admin.create({
        names,
        email,
        password: hashedPassword,
        role
    });
    if (admin) {
        res.json({
            _id: admin.id,
            names: admin.names,
            email: admin.email,
            role: admin.role,
            token: generateToken(admin._id)
        });
    }
    else {
        res.status(400);
        throw new Error("Invalid or Bad Request");
    }
});
//**@Community * /
//@desc   Register a new thirdparty user
//@route  POST /api/registration/community
//@access Public
const registerCommunity = asyncHandler(async (req, res) => {
    const { names, allumni, email, phone, otherAffiliations } = req.body;
    if (!names || !allumni || !email || !phone || !otherAffiliations) {
        res.status(400);
        throw new Error('All fields are required');
    }
    
    const checkUser = await Community.findOne({ email });
    if (checkUser) {
        res.status(400);
        throw new Error('User already exists');
    }
    const community = await Community.create({
        names,
        allumni,
        email,
        phone,
        otherAffiliations
    });
    if (community) {
        res.status(200);
        res.json({
            names: community.names,
            allumni: community.allumni,
            email: community.email,
            phone: community.phone,
            otherAffiliations: community.otherAffiliations
        });
    } else {
        res.status(400);
        throw new Error('Somethig went wrong')
    }
});

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
}

module.exports = {
    registerStudent,
    registerParent,
    addClass,
    registerTeacher,
    addSubject,
    addAdmin,
    registerCommunity
}
