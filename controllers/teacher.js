const expressAsyncHandler = require('express-async-handler');
const Teacher = require('../schema/teacherSchema');


const addTeacher = expressAsyncHandler(async (req, res) => {
    const { firstName, lastName, email, phone, password, TSC, Roles } = req.body;
    if (!firstName || !lastName || !email || !phone || !password || !TSC || !Roles) {
        res.status(400);
        throw new Error('Please fill all fields');
    }

    const validTeacher = await Teacher.findOne({ email });
    switch (validTeacher) {
        case null:
            const teacher = await Teacher.create({
                firstName,
                lastName,
                email,
                phone,
                TSC,
                Roles,
                classAssigned: [],
                students: [],
            });
            if (teacher) {
                res.status(201).json({
                    _id: teacher.id,
                    firstName: teacher.firstName,
                    lastName: teacher.lastName,
                    email: teacher.email,
                    phone: teacher.phone,
                    TSC: teacher.TSC,
                    Roles: teacher.Roles,
                    classAssigned: teacher.classAssigned,
                    students: teacher.students,
                });
            }
            break;
    }
});

const getTeachers = expressAsyncHandler(async (req, res) => {
    const teachers = await Teacher.find({});
    res.json(teachers);
});

const getTeacherById = expressAsyncHandler(async (req, res) => {
    const teacher = await Teacher.findById(req.params.id);
    if (teacher) {
        res.json(teacher);
    } else {
        res.status(404);
        throw new Error('Teacher not found');
    }
});



module.exports = { addTeacher, getTeachers, getTeacherById };
