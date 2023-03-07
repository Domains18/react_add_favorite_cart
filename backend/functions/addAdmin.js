const Teacher = require('../schema/teacherSchema');
const adminSchema = require('../schema/admin/adminSchema');
const expressAsyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



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

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);


            const admin = await adminSchema.create({
                name,
                email,
                password: hashedPassword
            });
            if (admin) {
                res.status(201).json({
                    _id: admin._id,
                    name: admin.name,
                    email: admin.email,
                    token: jwt.sign({ _id: admin._id }, process.env.JWT_SECRET, {
                        expiresIn: '30d'
                    })
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

const loginAdmin = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email, !password) {
        res.status(400);
        throw new Error('Please fill all the fields');
    }
    const teacherAdmin = Teacher.findOne({ email });
    if (teacherAdmin && (await bcrypt.compare(password, teacherAdmin.password))) {
        res.json({
            _id: teacherAdmin._id,
            name: teacherAdmin.name,
            email: teacherAdmin.email,
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }

});

module.exports = { addTeacherAdmin, removeTeacherAdmin, loginAdmin };
