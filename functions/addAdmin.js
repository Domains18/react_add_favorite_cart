const Teacher = require('../schema/teacherSchema');
const adminSchema = require('../schema/admin/adminSchema');
const expressAsyncHandler = require('express-async-handler');

const addTeacherAdmin = expressAsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if(!name, !email, !password) {
        res.status(400);
        throw new Error('Please fill all the fields');
    }

    //admin must be a teacher
    const checkTeacher = await Teacher.findOne({ email });
    switch (checkTeacher) {
        case false:
            res.status(400);
            throw new Error('Teacher not found');
        case true:
            const admin = await adminSchema.create({
                name,
                email,
                password
            });
            if (admin) {
                res.status(201).json({
                    _id: admin._id,
                    name: admin.name,
                    email: admin.email,
                    password: admin.password
                });
            }
            else {
                res.status(400);
                throw new Error('Invalid admin data');
            }
            break;
        
    }
});

const removeTeacherAdmin = expressAsyncHandler(async (req, res) => {
    const { email } = req.body;
    if (!email) {
        res.status(400);
        throw new Error('Please fill all the fields');
    }

    else {
        await Teacher.findByIdAndDelete(email);
        res.status(200).json({
            message: "Admin removed successfully"
        });
    }
});

module.exports = { addTeacherAdmin, removeTeacherAdmin };
