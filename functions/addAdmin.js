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
});
