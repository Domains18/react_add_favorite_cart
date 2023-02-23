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
                    _id: teacher._id,
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
